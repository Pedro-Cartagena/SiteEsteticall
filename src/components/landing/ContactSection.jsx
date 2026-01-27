import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram } from 'lucide-react';
import { toast } from "sonner";

const CONTACT_IMAGE = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6967d6e79de2ea9b3fe9832e/5a8da4b50_WhatsAppImage2026-01-16at084213.jpg";

const TREATMENT_LABELS = {
    'laser': 'Depilação a Laser',
    'botox': 'Botox',
    'facial': 'Tratamentos Faciais',
    'gordura': 'Gordura Localizada',
    'combo': 'Combos Especiais',
    'outro': 'Outros Assuntos'
};

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        treatment: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const formatPhoneNumber = (value) => {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;

        if (phoneNumberLength < 3) return phoneNumber;
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
        }
        return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
    };

    const handleChange = (field, value) => {
        if (field === 'phone') {
            const maskedValue = formatPhoneNumber(value);
            if (maskedValue.length <= 15) {
                setFormData(prev => ({ ...prev, [field]: maskedValue }));
            }
            return;
        }
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const phoneNumber = "5512991896858"; 
        const selectedTreatment = TREATMENT_LABELS[formData.treatment] || formData.treatment;

        const messageText = 
            `*Novo Agendamento - Esteticall*\n\n` +
            `*Nome:* ${formData.name}\n` +
            `*Tratamento:* ${selectedTreatment}\n` +
            `*WhatsApp:* ${formData.phone}\n` +
            `*E-mail:* ${formData.email}\n\n` +
            `*Mensagem:*\n${formData.message || 'O cliente não enviou uma mensagem adicional.'}\n\n` +
            `---\n` +
            `_Enviado via Site Esteticall_`;

        const encodedMessage = encodeURIComponent(messageText);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        await new Promise(resolve => setTimeout(resolve, 800));
        
        window.open(whatsappUrl, '_blank');
        
        setIsSubmitting(false);
        toast.success('Redirecionando para o WhatsApp...');
    };

    return (
        <section id="contato" className="py-20 lg:py-32 bg-gradient-to-br from-stone-100 via-amber-50/30 to-stone-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-stone-200/40 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.span 
                            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/60 rounded-full text-amber-800 text-sm font-medium mb-6"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Fale Conosco
                        </motion.span>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-800 mb-6">
                            Vimos que você{' '}
                            <span className="font-medium bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
                                passou por aqui
                            </span>
                        </h2>

                        <p className="text-lg text-stone-600 leading-relaxed mb-8">
                            Ficou com alguma dúvida? Fale com uma de nossas especialistas. Estamos prontas para te atender e ajudar a encontrar o tratamento ideal para você.
                        </p>

                        <div className="space-y-4 mb-8">
                            {/* ID gtm-contact-phone adicionado para rastrear cliques no telefone */}
                            <a 
                                id="gtm-contact-phone"
                                href="tel:+5512991896858" 
                                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                                    <Phone className="w-5 h-5 text-amber-700" />
                                </div>
                                <div>
                                    <p className="text-sm text-stone-500">Telefone / WhatsApp</p>
                                    <p className="text-stone-800 font-medium">(12) 99189-6858</p>
                                </div>
                            </a>

                            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                                    <Clock className="w-5 h-5 text-amber-700" />
                                </div>
                                <div>
                                    <p className="text-sm text-stone-500 mb-1">Horário de Atendimento</p>
                                    <div className="text-stone-800 font-medium flex flex-col gap-1">
                                        <span>Seg - Sex: 9h às 22h</span>
                                        <span>Sáb: 8h às 22h</span>
                                        <span>Dom - Feriados: 14h às 16h</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
                            <h3 className="text-2xl font-semibold text-stone-800 mb-2">Agende sua Avaliação</h3>
                            <p className="text-stone-500 mb-8">Preencha o formulário e entraremos em contato</p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <Input
                                    placeholder="Seu nome completo"
                                    value={formData.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                    className="h-12 rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500"
                                    required
                                />

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Input
                                        placeholder="(00) 00000-0000"
                                        value={formData.phone}
                                        onChange={(e) => handleChange('phone', e.target.value)}
                                        className="h-12 rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500"
                                        required
                                        type="tel"
                                    />
                                    <Input
                                        type="email"
                                        placeholder="E-mail"
                                        value={formData.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                        className="h-12 rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500"
                                        required
                                    />
                                </div>

                                <Select 
                                    value={formData.treatment} 
                                    onValueChange={(value) => handleChange('treatment', value)}
                                    required
                                >
                                    <SelectTrigger className="h-12 rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500">
                                        <SelectValue placeholder="Tratamento de interesse" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="laser">Depilação a Laser</SelectItem>
                                        <SelectItem value="botox">Botox</SelectItem>
                                        <SelectItem value="facial">Tratamentos Faciais</SelectItem>
                                        <SelectItem value="gordura">Gordura Localizada</SelectItem>
                                        <SelectItem value="combo">Combos Especiais</SelectItem>
                                        <SelectItem value="outro">Outro</SelectItem>
                                    </SelectContent>
                                </Select>

                                <Textarea
                                    placeholder="Sua mensagem (opcional)"
                                    value={formData.message}
                                    onChange={(e) => handleChange('message', e.target.value)}
                                    className="min-h-[120px] rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500 resize-none"
                                />

                                {/* ID gtm-submit-contact adicionado para rastrear o envio do formulário */}
                                <Button 
                                    id="gtm-submit-contact"
                                    type="submit"
                                    className="w-full h-14 bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white rounded-xl text-lg font-medium shadow-lg shadow-amber-700/25 transition-all duration-300 hover:shadow-xl"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Enviando...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            <Send className="w-5 h-5" />
                                            Enviar Mensagem
                                        </span>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}