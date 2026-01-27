import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
    const phoneNumber = "5512991896858";
    const message = encodeURIComponent("Olá! Estava no site da Esteticall e gostaria de tirar algumas dúvidas sobre os tratamentos.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            id="gtm-whatsapp-float" // <--- ID ADICIONADO AQUI PARA O TAG MANAGER
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-10 right-10 z-[999] flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-2xl transition-all"
        >
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium">
                Agendar via WhatsApp
            </span>
            <MessageCircle className="w-6 h-6" />
            
            {/* Efeito de Pulse para chamar atenção */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10"></span>
        </motion.a>
    );
}