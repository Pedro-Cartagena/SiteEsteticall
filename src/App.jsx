import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Franquia from './pages/Franqueado';
import WhatsAppButton from './components/landing/WhatsAppButton';
import ScrollToTop from './components/ui/ScrollToTop'; // <-- CAMINHO ATUALIZADO AQUI
import { Toaster } from "sonner";
import './index.css';

export default function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seja-um-franqueado" element={<Franquia />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <WhatsAppButton />
      <Toaster position="top-center" richColors />
    </Router>
  );
}