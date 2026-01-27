import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS_BG = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6967d6e79de2ea9b3fe9832e/04d91a2e2_WhatsAppImage2026-01-16at0842131.jpg";

const testimonials = [
    {
        id: 1,
        name: "Maria Clara",
        treatment: "Depilação a Laser",
        rating: 5,
        text: "Finalmente me livrei das lâminas! O atendimento é impecável e os resultados são incríveis. O laser é super tranquilo, quase não dói. Super recomendo!",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Ana Paula",
        treatment: "Botox",
        rating: 5,
        text: "Resultado super natural! Eu tinha medo de ficar artificial, mas as meninas são muito atenciosas e me deixaram muito à vontade. Amei a experiência.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&h=256&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Pedro Henrique",
        treatment: "Tratamento Facial",
        rating: 5,
        text: "Excelente experiência! A equipe é super profissional. Fiz uma limpeza profunda e minha pele nunca esteve tão bem. Os resultados superaram minhas expectativas.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop"
    }
];

export default function TestimonialsSection() {
    return (
        <section id="depoimentos" className="py-20 lg:py-32 relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img 
                    src={TESTIMONIALS_BG}
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 via-stone-900/90 to-stone-800/95" />
            </div>

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
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-amber-300 text-sm font-medium mb-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Star className="w-4 h-4 fill-current" />
                        Depoimentos
                    </motion.span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
                        Isso dói? É caro?{' '}
                        <span className="font-medium text-amber-300">
                            Veja o que dizem!
                        </span>
                    </h2>
                    <p className="text-lg text-stone-300 max-w-2xl mx-auto">
                        O que nossas clientes falam sobre a experiência Esteticall
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            className="relative group"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 hover:bg-white/15 transition-all duration-300 h-full flex flex-col">
                                {/* Quote Icon */}
                                <Quote className="w-10 h-10 text-amber-400/40 mb-4" />
                                
                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-white/90 leading-relaxed mb-6 flex-grow italic">
                                    "{testimonial.text}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-stone-200 border-2 border-amber-400/30 shrink-0">
                                        <img 
                                            src={testimonial.image} 
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">{testimonial.name}</p>
                                        <p className="text-amber-300 text-sm">{testimonial.treatment}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}