import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Instagram, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6967d6e79de2ea9b3fe9832e/4ba7a32db_thumbnail-Edited.png";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Início', href: '#inicio' },
        { label: 'Tratamentos', href: '#tratamentos' },
        { label: 'Depoimentos', href: '#depoimentos' },
        { label: 'Contato', href: '#contato' },
    ];

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled 
                        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
                        : 'bg-white/80 backdrop-blur-sm'
                }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.a 
                            href="#inicio"
                            className="flex-shrink-0"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img 
                                src={LOGO_URL} 
                                alt="Esteticall" 
                                className="h-12 w-auto object-contain"
                            />
                        </motion.a>

                        {/* Desktop Navigation - Always Visible */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm font-medium tracking-wide text-stone-700 hover:text-amber-700 transition-colors duration-300"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -2 }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </nav>

                        {/* CTA Button Desktop */}
                        <motion.div 
                            className="hidden md:block"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Button 
                                className="bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white px-6 py-2.5 rounded-full font-medium tracking-wide shadow-lg shadow-amber-700/25 transition-all duration-300 hover:shadow-xl hover:shadow-amber-700/30"
                                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Agende Agora
                            </Button>
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden p-2 rounded-full bg-stone-100 text-stone-700"
                            onClick={() => setMobileMenuOpen(true)}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Menu className="w-6 h-6" />
                        </motion.button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[60] lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop */}
                        <motion.div 
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={() => setMobileMenuOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        
                        {/* Menu Panel */}
                        <motion.div
                            className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-gradient-to-b from-stone-50 to-white shadow-2xl"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            <div className="flex flex-col h-full">
                                {/* Close Button */}
                                <div className="flex justify-between items-center p-6 border-b border-stone-200">
                                    <img src={LOGO_URL} alt="Esteticall" className="h-10 object-contain" />
                                    <button 
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="p-2 rounded-full bg-stone-100 text-stone-700"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Nav Links */}
                                <nav className="flex-1 px-6 py-8">
                                    <div className="space-y-2">
                                        {navLinks.map((link, index) => (
                                            <motion.a
                                                key={link.label}
                                                href={link.href}
                                                className="block px-4 py-3 text-lg font-medium text-stone-700 hover:text-amber-700 hover:bg-amber-50 rounded-xl transition-all"
                                                onClick={() => setMobileMenuOpen(false)}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                {link.label}
                                            </motion.a>
                                        ))}
                                    </div>
                                </nav>

                                {/* Contact Info */}
                                <div className="p-6 bg-stone-100/50 space-y-4">
                                    <a href="tel:+5512991896858" className="flex items-center gap-3 text-stone-600 hover:text-amber-700">
                                        <Phone className="w-5 h-5" />
                                        <span>(12) 99189-6858</span>
                                    </a>
                                    <a href="#" className="flex items-center gap-3 text-stone-600 hover:text-amber-700">
                                        <Instagram className="w-5 h-5" />
                                        <span>@esteticall</span>
                                    </a>
                                    <Button 
                                        className="w-full bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white rounded-full py-3 mt-4"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        Agende Agora
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}