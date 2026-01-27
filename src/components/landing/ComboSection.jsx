import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Sparkles, Gift, Heart } from 'lucide-react';

const COMBO_IMAGE = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6967d6e79de2ea9b3fe9832e/91e0ec61a_WhatsAppImage2026-01-16at0842121.jpg";
const SKINCARE_IMAGE = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6967d6e79de2ea9b3fe9832e/0b2bd7d29_WhatsAppImage2026-01-16at0842122.jpg";

export default function ComboSection() {
    return (
        <section className="py-20 lg:py-32 bg-gradient-to-br from-stone-100 via-amber-50/30 to-stone-100 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-100/40 to-stone-200/40 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Combo Card */}
                    <motion.div
                        className="relative group"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute -inset-2 bg-gradient-to-r from-amber-200/50 to-stone-200/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                        
                        <div className="relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl">
                            <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                                <img 
                                    src={COMBO_IMAGE}
                                    alt="Combo Perfeito - Massagem + Limpeza de Pele + Peeling"
                                    className="w-full h-full object-contain bg-gradient-to-b from-stone-50 to-stone-100 transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            
                            {/* Overlay Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent">
                                <div className="flex items-center gap-2 text-amber-700 mb-2">
                                    <Gift className="w-5 h-5" />
                                    <span className="text-sm font-medium uppercase tracking-wide">Combo Especial</span>
                                </div>
                                <h3 className="text-2xl font-semibold text-stone-800 mb-2">O Combo Perfeito Existe</h3>
                                <p className="text-stone-600 mb-4">Massagem + Limpeza de Pele + Peeling</p>
                                <Button 
                                    className="bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white rounded-full shadow-lg"
                                    onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Quero Relaxar
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skincare Card */}
                    <motion.div
                        className="relative group"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="absolute -inset-2 bg-gradient-to-r from-stone-200/50 to-amber-200/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                        
                        <div className="relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl">
                            <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                                <img 
                                    src={SKINCARE_IMAGE}
                                    alt="Sentimos sua falta - Volte aos seus tratamentos"
                                    className="w-full h-full object-contain bg-gradient-to-b from-amber-50 to-amber-100/50 transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            
                            {/* Overlay Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent">
                                <div className="flex items-center gap-2 text-amber-700 mb-2">
                                    <Heart className="w-5 h-5" />
                                    <span className="text-sm font-medium uppercase tracking-wide">Sua Pele Merece</span>
                                </div>
                                <h3 className="text-2xl font-semibold text-stone-800 mb-2">Sentimos sua falta</h3>
                                <p className="text-stone-600 mb-4">Volte aos seus tratamentos com descontos exclusivos</p>
                                <Button 
                                    className="bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white rounded-full shadow-lg"
                                    onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Resgatar Oferta
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}