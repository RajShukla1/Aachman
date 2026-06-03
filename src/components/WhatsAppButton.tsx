"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "919999999999"; // Replace with actual number
  const message = "Hello! I would like to know more about Aachman Banquet & Restaurant.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-[9999]"
    >
      <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <div className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center justify-center group relative cursor-pointer">
          <MessageCircle className="w-7 h-7" />
          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-white text-gray-900 text-sm font-medium py-1.5 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with us
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
