import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { NavHashLink } from 'react-router-hash-link'; // Biblioteca correta para scroll e rotas
import { useLocation } from 'react-router-dom';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6967d6e79de2ea9b3fe9832e/4ba7a32db_thumbnail-Edited.png";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Início', href: '/#inicio' },
        { label: 'Tratamentos', href: '/#tratamentos' },
        { label: 'Depoimentos', href: '/#depoimentos' },
        { label: 'Contato', href: '/#contato' },
        { label: 'Seja um Franqueado', href: '/seja-um-franqueado' },
    ];

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
                }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <NavHashLink to="/#inicio" className="flex-shrink-0">
                            <img src={LOGO_URL} alt="Esteticall" className="h-12 w-auto object-contain" />
                        </NavHashLink>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <NavHashLink
                                    key={link.label}
                                    smooth
                                    to={link.href}
                                    className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                                        location.pathname + location.hash === link.href ? 'text-amber-700' : 'text-stone-700 hover:text-amber-700'
                                    }`}
                                >
                                    {link.label}
                                </NavHashLink>
                            ))}
                        </nav>

                        <div className="hidden md:block">
                            <NavHashLink smooth to="/#contato">
                                <Button className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-6 rounded-full font-medium shadow-lg hover:shadow-xl transition-all">
                                    Agende Agora
                                </Button>
                            </NavHashLink>
                        </div>

                        <button className="md:hidden p-2 text-stone-700" onClick={() => setMobileMenuOpen(true)}>
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Menu Mobile */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div className="fixed inset-0 z-[60] bg-white flex flex-col p-6" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}>
                        <div className="flex justify-between items-center mb-10">
                            <img src={LOGO_URL} alt="Esteticall" className="h-10" />
                            <button onClick={() => setMobileMenuOpen(false)}><X className="w-8 h-8" /></button>
                        </div>
                        <nav className="flex flex-col gap-6 text-center">
                            {navLinks.map((link) => (
                                <NavHashLink 
                                    key={link.label} 
                                    smooth 
                                    to={link.href} 
                                    className="text-2xl text-stone-800" 
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </NavHashLink>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}