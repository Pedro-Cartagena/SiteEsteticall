import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, Rocket, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import foto1 from "@/components/images/foto-clinica-1.jpg";
import foto2 from "@/components/images/foto-clinica-2.jpg";
import foto3 from "@/components/images/foto-clinica-3.jpg";
import foto4 from "@/components/images/foto-clinica-4.jpg";

export default function Franquia() {
    const googleFormsUrl = "https://forms.gle/MYabYW74QBwU1aVE8";
    
    // Estado para controlar qual imagem está ampliada
    const [selectedImg, setSelectedImg] = useState(null);

    const fotosClinica = [
        foto1, 
        foto2,
        foto3,
        foto4
    ];

    return (
        <div className="min-h-screen bg-stone-50 flex flex-col font-sans">
            <Header />

            <main className="flex-grow pt-28 pb-20">
                <div className="max-w-5xl mx-auto px-6">
                    
                    {/* Cabeçalho de Impacto */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-light text-stone-800 leading-tight">
                            💫 Onde um Sonho se Multiplica, <br />
                            <span className="font-semibold text-amber-700 text-shadow-sm">o Sucesso se Compartilha</span>
                        </h1>
                    </motion.div>

                    {/* Conteúdo da História + Galeria Interativa */}
                    <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-stone-600 text-lg leading-relaxed"
                        >
                            <p className="font-medium text-stone-800 text-xl italic">
                                Sabe aquele frio na barriga de querer algo grande, mas não saber por onde começar?
                            </p>
                            <p>
                                Nós começamos assim. Com um sonho, um aperto de mão e a vontade inabalável de transformar a autoestima e o bem-estar de cada pessoa que cruzasse o nosso caminho. A <strong>Esteticall</strong> nasceu de uma visão: a de que a beleza real vem do cuidado, da técnica e, acima de tudo, da conexão humana.
                            </p>
                            <div className="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-700">
                                <h3 className="text-amber-800 font-bold mb-2 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" /> ✨ O nosso "nós" agora inclui você.
                                </h3>
                                <p className="text-amber-900/80">
                                    Ninguém constrói um império sozinho. O desafio que ontem era só nosso, hoje se tornou uma estrutura sólida, pronta para acolher o seu desejo de empreender.
                                </p>
                            </div>
                        </motion.div>

                        {/* Galeria de Fotos com Clique para Ampliar */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {fotosClinica.map((foto, index) => (
                                <motion.div 
                                    key={index} 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedImg(foto)}
                                    className="aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer border-2 border-white transition-all duration-300"
                                >
                                    <img 
                                        src={foto} 
                                        alt={`Clínica Esteticall ${index + 1}`} 
                                        className="w-full h-full object-cover"
                                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"; }}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Diferenciais */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-stone-100 p-10 rounded-[3rem] mb-20"
                    >
                        <h2 className="text-3xl font-light text-center mb-10 text-stone-800 italic">Por que sonhar com a <span className="font-bold">Esteticall?</span></h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center space-y-3">
                                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-sm text-amber-700 font-bold">1</div>
                                <h4 className="font-bold">Apoio em cada passo</h4>
                                <p className="text-sm text-stone-500">Você nunca estará sozinho. Nossa experiência é o seu mapa.</p>
                            </div>
                            <div className="text-center space-y-3">
                                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-sm text-amber-700 font-bold">2</div>
                                <h4 className="font-bold">Um propósito maior</h4>
                                <p className="text-sm text-stone-500">Não vendemos apenas estética; entregamos confiança e novos começos.</p>
                            </div>
                            <div className="text-center space-y-3">
                                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-sm text-amber-700 font-bold">3</div>
                                <h4 className="font-bold">Crescer em conjunto</h4>
                                <p className="text-sm text-stone-500">Quando uma unidade brilha, toda a nossa rede se ilumina.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Citação Final */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <blockquote className="text-2xl md:text-3xl font-light italic text-stone-400 leading-relaxed">
                            "Todo sonho gera um desafio. Mas quando as mãos se unem, o desafio se torna a ponte para a sua independência."
                        </blockquote>
                    </div>

                    {/* Call to Action Final */}
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-amber-700 rounded-[2.5rem] p-12 text-center text-white shadow-2xl relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                                <Rocket className="w-8 h-8" /> 🚀 O seu próximo capítulo começa aqui.
                            </h2>
                            <p className="text-amber-100 mb-8 max-w-2xl mx-auto text-lg">
                                Se você sempre quis ter o seu próprio negócio, mas buscava uma marca que tivesse alma, você acabou de encontrar. Vamos transformar vidas, começando pela sua.
                            </p>
                            <Button 
                                id="btn-franqueado-esteticall"
                                onClick={() => {
                                    // Disparo para o Tag Manager
                                    window.dataLayer = window.dataLayer || [];
                                    window.dataLayer.push({
                                        'event': 'clique_franqueado',
                                        'gtm_id': 'GTM-5NLMSP72'
                                    });
                                    window.open(googleFormsUrl, '_blank');
                                }}
                                className="bg-white text-amber-700 hover:bg-stone-100 h-16 px-12 rounded-2xl text-xl font-black transition-all shadow-xl uppercase tracking-wider"
                            >
                                Seja um franqueado Esteticall
                            </Button>
                        </div>
                        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
                    </motion.div>
                </div>
            </main>

            {/* Overlay da Imagem Ampliada (Lightbox) */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
                    >
                        <motion.button 
                            className="absolute top-10 right-10 text-white hover:text-amber-500 transition-colors"
                            onClick={() => setSelectedImg(null)}
                        >
                            <X size={40} />
                        </motion.button>

                        <motion.img 
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            src={selectedImg}
                            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
                            onClick={(e) => e.stopPropagation()} 
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}