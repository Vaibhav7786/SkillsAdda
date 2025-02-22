import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";

export default function ContactButtons() {
  const phoneNumber = "+917898797660";
  const whatsappLink = `https://wa.me/${phoneNumber.replace("+", "")}`;

  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <FaWhatsapp className="w-6 h-6" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:opacity-90 transition-opacity duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Phone className="w-5 h-5" />
        <span className="font-medium">Call Us: {phoneNumber}</span>
      </motion.a>
    </>
  );
}
