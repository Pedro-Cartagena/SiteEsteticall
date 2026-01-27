import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Phone, Mail, MapPin, Heart } from 'lucide-react';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6967d6e79de2ea9b3fe9832e/4ba7a32db_thumbnail-Edited.png";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Início', href: '#inicio' },
        { label: 'Tratamentos', href: '#tratamentos' },
        { label: 'Sobre Nós', href: '#sobre' },
        { label: 'Depoimentos', href: '#depoimentos' },
        { label: 'Contato', href: '#contato' },
    ];

    const treatments = [
        'Depilação a Laser',
        'Botox',
        'Tratamentos Faciais',
        'Gordura Localizada',
        'Limpeza de Pele',
        'Peeling',
    ];

    return (
        <footer className="bg-stone-900 text-white relative overflow-hidden">
            {/* Decorative Top Border */}
            <div className="h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                    {/* Brand Column */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <motion.img 
                            src={LOGO_URL} 
                            alt="Esteticall" 
                            className="h-14 w-auto mb-6 brightness-0 invert"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        />
                        <p className="text-stone-400 leading-relaxed mb-6">
                            Um novo conceito em estética. Cuidamos da sua beleza com profissionalismo e carinho.
                        </p>
                        <div className="flex gap-3">
                            <a 
                                href="#" 
                                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-amber-700 hover:text-white transition-all"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a 
                                href="tel:+5512991896858" 
                                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-amber-700 hover:text-white transition-all"
                            >
                                <Phone className="w-5 h-5" />
                            </a>
                            <a 
                                href="mailto:contato@esteticall.com.br" 
                                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-amber-700 hover:text-white transition-all"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Links Rápidos</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a 
                                        href={link.href}
                                        className="text-stone-400 hover:text-amber-400 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Treatments */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Tratamentos</h4>
                        <ul className="space-y-3">
                            {treatments.map((treatment) => (
                                <li key={treatment}>
                                    <a 
                                        href="#tratamentos"
                                        className="text-stone-400 hover:text-amber-400 transition-colors"
                                    >
                                        {treatment}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                <span className="text-stone-400">
                                    Rua Andorra, 500<br />
                                    Shopping Oriente - São José dos Campos/SP
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                <a href="tel:+5512991896858" className="text-stone-400 hover:text-amber-400 transition-colors">
                                    (12) 99189-6858
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                <a href="mailto:contato@esteticall.com.br" className="text-stone-400 hover:text-amber-400 transition-colors">
                                    contato@esteticall.com.br
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-stone-800">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-stone-500 text-sm text-center sm:text-left">
                            © {currentYear} Esteticall. Todos os direitos reservados.
                        </p>
                        <p className="text-stone-500 text-sm flex items-center gap-1">
                            CNPJ: 36.029.195/0001-40
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}