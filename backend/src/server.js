import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { register, login } from "./controllers/authController.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post("/register",register)
app.post("/login",login)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
