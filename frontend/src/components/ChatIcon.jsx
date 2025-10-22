import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react"; // icons

export default function ChatIcon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform focus:outline-none z-50"
          aria-label="Open Chatbot"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white border rounded-2xl shadow-xl overflow-hidden z-50 transition-all">
          {/* Header */}
          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
            <h3 className="font-semibold">Chat Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-200"
            >
              <X size={22} />
            </button>
          </div>

          {/* Embedded Chatbot */}
          <iframe
            src="https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/10/22/13/20251022132657-9130AIU9.json"
            title="Botpress Chatbot"
            className="w-full h-full border-none"
            allow="microphone; autoplay"
          />
        </div>
      )}
    </>
  );
}
