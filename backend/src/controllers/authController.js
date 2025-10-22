import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET;

export const register = async (req, res) => {
    try {
        const { email, password, name } = req.body;

        const existing = await Prisma.user.findUnique({
            where: { email },
        });
        if (existing) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await Prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        const token = jwt.sign(
            { id: user.id, email: user.email },
            JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(201).json({
        message: "User registered & logged in successfully",
        token,
        user: { id: user.id, name: user.name, email: user.email },
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const login = async(req,res) => {
    try{
        const {email,password} = req.body
        const user = await Prisma.user.findUnique({
            where:{
                email
            }
        })
        if (!user) return res.status(400).json({ message: "User not found" });
        const valid = await bcrypt.compare(password,user.password)
        if (!valid) return res.status(400).json({ message: "Invalid password" });

        const header = {
            id : user.id,
            email : user.email
        }

        const token = jwt.sign(header,JWT_SECRET,{ expiresIn: "1d" })
        res.json({
            token,
            user: { id: user.id, name: user.name, email: user.email }
        })
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}