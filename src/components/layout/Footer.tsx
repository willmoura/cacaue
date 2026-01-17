import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-background pt-16 pb-8">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-sm bg-accent flex items-center justify-center">
               <span className="text-primary font-heading font-bold text-xl">C</span>
            </div>
            <span className="font-heading text-2xl font-bold tracking-tight text-background">Cacauê</span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            Indústria brasileira de chocolates. Qualidade superior e capacidade técnica para grandes volumes.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-accent mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
            <li><Link to="/catalogo" className="hover:text-white transition-colors">Catálogo Completo</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-accent mb-4">Categorias</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/catalogo" className="hover:text-white transition-colors">Linha Intensa</Link></li>
            <li><Link to="/catalogo" className="hover:text-white transition-colors">Crocantes & Inclusões</Link></li>
            <li><Link to="/catalogo" className="hover:text-white transition-colors">Recheados</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-accent mb-4">Contato</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Encomendas Exclusivas</li>
            <li>contato@cacaue.com.br</li>
            <li>São Paulo - SP</li>
          </ul>
        </div>
      </div>
      
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <p>© {new Date().getFullYear()} Cacauê. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <span>Política de Privacidade</span>
          <span>Termos de Uso</span>
        </div>
      </div>
    </footer>
  );
}