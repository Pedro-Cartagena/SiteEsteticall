import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const HERO_IMAGE = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697110c6b15751e664f352d5/6f3f5192b_IMAGEMPEDRO.png";

export default function HeroSection() {
    return (
        /* Ajustamos a altura para 'aspect-video' (16:9) com um limite de altura para não quebrar em telas verticais */
        <section id="inicio" className="relative w-full aspect-video max-h-[85vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-stone-100">
            
            {/* Background Image Container */}
            <div className="absolute inset-0">
                <img 
                    src={HERO_IMAGE}
                    alt="Esteticall"
                    /* O object-cover garante que a imagem preencha o 16:9 sem distorcer */
                    className="w-full h-full object-cover object-center"
                />
                {/* Overlay um pouco mais escuro para destacar o botão se necessário */}
                <div className="absolute inset-0 bg-black/20" />
            </div>
            
            {/* Conteúdo do Botão - Ajustado para descer mais */}
            <div className="absolute bottom-5 left-0 right-0 z-10"> 
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                    <Button 
                        className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-6 rounded-full text-lg font-medium shadow-2xl shadow-amber-900/40 transition-all duration-300 hover:-translate-y-1"
                        onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                Agende sua Avaliação
            </Button>
        </motion.div>
    </div>
</div>
        </section>
    );
}