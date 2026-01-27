import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Clock, Sparkles, CheckCircle } from 'lucide-react';

const RESULTS_IMAGE = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6967d6e79de2ea9b3fe9832e/617ad8ac5_WhatsAppImage2026-01-16at084212.jpg";

const benefits = [
    "Resultados visíveis desde a primeira sessão",
    "Profissionais certificados e experientes",
    "Tecnologia de última geração",
    "Atendimento personalizado",
    "Ambiente acolhedor e sofisticado"
];

export default function ResultsSection() {
    return (
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image */}
                    <motion.div
                        className="relative order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute -inset-4 bg-gradient-to-br from-amber-100 to-stone-100 rounded-3xl blur-2xl opacity-60" />
                        
                        <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                            <img 
                                src={RESULTS_IMAGE}
                                alt="Resultados - Botox e Estimuladores de Colágeno"
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Stats Card */}
                        <motion.div 
                            className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center">
                                    <Clock className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-stone-800">98%</p>
                                    <p className="text-sm text-stone-500">Satisfação</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className="order-1 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.span 
                            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/60 rounded-full text-amber-800 text-sm font-medium mb-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <Sparkles className="w-4 h-4" />
                            Resultados Reais
                        </motion.span>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-800 mb-6">
                            O tempo passa...{' '}
                            <span className="font-medium bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
                                e o efeito também!
                            </span>
                        </h2>

                        <p className="text-lg text-stone-600 leading-relaxed mb-8">
                            Já agendou o seu retorno? Nossos tratamentos de Botox e aplicação de estimuladores de colágeno proporcionam resultados duradouros e naturais. Mantenha sua pele sempre jovem e radiante.
                        </p>

                        {/* Benefits List */}
                        <div className="space-y-4 mb-8">
                            {benefits.map((benefit, index) => (
                                <motion.div 
                                    key={index}
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-4 h-4 text-amber-700" />
                                    </div>
                                    <span className="text-stone-700">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>

                        <Button 
                            size="lg"
                            className="bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white px-8 py-6 rounded-full text-lg font-medium shadow-xl shadow-amber-700/25 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-700/30"
                            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Verificar Disponibilidade
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}