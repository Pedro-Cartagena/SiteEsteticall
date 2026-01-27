import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = {
    laser: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6967d6e79de2ea9b3fe9832e/c7d6af9f3_WhatsAppImage2026-01-16at084210.jpg",
    botox: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6967d6e79de2ea9b3fe9832e/1ea9ac6a2_WhatsAppImage2026-01-16at0842111.jpg",
    rosto: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6967d6e79de2ea9b3fe9832e/17b88d1f5_WhatsAppImage2026-01-16at0842112.jpg",
    gordura: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6967d6e79de2ea9b3fe9832e/93c269893_WhatsAppImage2026-01-16at084211.jpg",
};

const treatments = [
    {
        id: 1,
        title: "Depilação a Laser",
        subtitle: "Liberte-se na 1ª sessão",
        description: "Você ainda é refém da lâmina? Experimente a tecnologia laser e sinta a diferença desde a primeira sessão.",
        image: IMAGES.laser,
        cta: "Experimentar Laser"
    },
    {
        id: 2,
        title: "Botox",
        subtitle: "Congele o tempo",
        description: "Tratamento preventivo e rejuvenescedor para uma aparência natural e descansada que desafia o tempo.",
        image: IMAGES.botox,
        cta: "Agendar Botox"
    },
    {
        id: 3,
        title: "Tratamentos Faciais",
        subtitle: "Cuide do seu rosto",
        description: "Você já cuida do corpo, que tal cuidar do seu rosto? Ofertas exclusivas para clientes que amam se cuidar.",
        image: IMAGES.rosto,
        cta: "Conhecer Tratamentos"
    },
    {
        id: 4,
        title: "Gordura Localizada",
        subtitle: "Onde ela mais te incomoda?",
        description: "Tratamentos especializados para resolver as gordurinhas localizadas nos braços, barriga, cintura e pernas.",
        image: IMAGES.gordura,
        cta: "Resolver Gordurinhas"
    }
];

export default function TreatmentsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % treatments.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isPaused]);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % treatments.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + treatments.length) % treatments.length);
    };

    return (
        <section id="tratamentos" className="py-20 lg:py-32 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-60" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-stone-100 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-60" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span 
                        className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/60 rounded-full text-amber-800 text-sm font-medium mb-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Sparkles className="w-4 h-4" />
                        Nossos Tratamentos
                    </motion.span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-800 mb-4">
                        Descubra o{' '}
                        <span className="font-medium bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
                            melhor para você
                        </span>
                    </h2>
                    <p className="text-lg text-stone-500 max-w-2xl mx-auto">
                        Tratamentos personalizados com tecnologia de ponta e profissionais especializados
                    </p>
                </motion.div>

                {/* Carousel */}
                <div 
                    className="relative max-w-5xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="relative h-[600px] md:h-[500px] overflow-hidden rounded-3xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                className="absolute inset-0"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="grid md:grid-cols-2 gap-0 h-full bg-gradient-to-br from-stone-50 to-amber-50/30 rounded-3xl overflow-hidden shadow-2xl">
                                    {/* Image Side */}
                                    <div className="relative h-64 md:h-full">
                                        <img 
                                            src={treatments[currentIndex].image}
                                            alt={treatments[currentIndex].title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-stone-50 via-transparent to-transparent md:from-transparent" />
                                    </div>

                                    {/* Content Side */}
                                    <div className="p-8 md:p-12 flex flex-col justify-center">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-medium rounded-full mb-4">
                                                {treatments[currentIndex].subtitle}
                                            </span>
                                            
                                            <h3 className="text-3xl md:text-4xl font-semibold text-stone-800 mb-4">
                                                {treatments[currentIndex].title}
                                            </h3>
                                            
                                            <p className="text-lg text-stone-600 leading-relaxed mb-8">
                                                {treatments[currentIndex].description}
                                            </p>

                                            <Button 
                                                className="bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg shadow-amber-700/25 transition-all duration-300 hover:shadow-xl hover:shadow-amber-700/30"
                                                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                                            >
                                                {treatments[currentIndex].cta}
                                            </Button>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-stone-700 hover:bg-white hover:text-amber-700 transition-all hover:scale-110"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-stone-700 hover:bg-white hover:text-amber-700 transition-all hover:scale-110"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {treatments.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex 
                                        ? 'w-8 bg-amber-700' 
                                        : 'w-2 bg-stone-300 hover:bg-amber-400'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Treatment Cards Grid - Small Preview */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
                    {treatments.map((treatment, index) => (
                        <motion.button
                            key={treatment.id}
                            onClick={() => setCurrentIndex(index)}
                            className={`relative aspect-square rounded-2xl overflow-hidden group transition-all duration-300 ${
                                index === currentIndex 
                                    ? 'ring-4 ring-amber-500 shadow-xl scale-105' 
                                    : 'hover:scale-105 shadow-md'
                            }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <img 
                                src={treatment.image}
                                alt={treatment.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-3">
                                <p className="text-white text-sm font-medium text-center">
                                    {treatment.title}
                                </p>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
}