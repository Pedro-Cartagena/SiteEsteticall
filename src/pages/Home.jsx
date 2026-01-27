import React from 'react';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import TreatmentsSection from '@/components/landing/TreatmentsSection';
import ComboSection from '@/components/landing/ComboSection';
import ResultsSection from '@/components/landing/ResultsSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';
// Importação correta com ../
import WhatsAppButton from "../components/landing/WhatsAppButton";

export default function Home() {
    return (
        <div className="min-h-screen bg-stone-50 relative"> {/* Adicionei 'relative' aqui por segurança */}
            <Header />
            <main>
                <HeroSection />
                <TreatmentsSection />
                <ComboSection />
                <ResultsSection />
                <TestimonialsSection />
                <ContactSection />
            </main>
            <Footer />

            {/* O BOTÃO PRECISA ESTAR AQUI DENTRO DA FUNÇÃO HOME */}
            <WhatsAppButton />
        </div>
    );
}