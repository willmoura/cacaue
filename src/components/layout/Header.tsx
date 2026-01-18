import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react'; // <--- Adicionado Instagram aqui
import { cn } from '../../lib/utils';
import { createWhatsappLink } from '../../lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Catálogo', path: '/catalogo' },
  ];

  const instagramUrl = "https://www.instagram.com/ovosdepascoadu";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
       <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <div className="size-8 rounded-sm bg-primary flex items-center justify-center">
             <span className="text-accent font-heading font-bold text-xl">C</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-heading text-2xl font-bold tracking-tight text-primary">
              Cacauê
            </span>
            <span className="font-heading text-xl font-bold tracking-tight text-primary">
               &
            </span>
            <span className="font-heading text-xl font-bold tracking-tight text-purple-700">
               Ovos de Páscoa Du
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                location.pathname === link.path ? "text-primary font-semibold" : "text-foreground/80"
              )}
            >
              {link.name}
            </Link>
          ))}

          {/* Ícone Instagram Desktop */}
          <a 
            href={instagramUrl}
            target="_blank" 
            rel="noreferrer"
            className="text-primary hover:text-purple-700 transition-colors"
            aria-label="Siga-nos no Instagram"
          >
            <Instagram size={20} />
          </a>

          <a
            href={createWhatsappLink("Olá, gostaria de encomendar ovos de Páscoa.")}
            target="_blank"
            rel="noreferrer"
            className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-sm font-heading font-semibold text-sm hover:bg-secondary/90 transition-all"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-primary/10 p-4 shadow-lg animate-in slide-in-from-top-5">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg py-2 border-b border-primary/5",
                  location.pathname === link.path ? "text-primary font-semibold" : "text-foreground/70"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Link Instagram Mobile */}
            <a 
              href={instagramUrl}
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-lg py-2 text-foreground/70 hover:text-purple-700"
            >
              <Instagram size={20} />
              <span>Siga no Instagram</span>
            </a>

            <a
              href={createWhatsappLink("Olá, gostaria de encomendar ovos de Páscoa.")}
              target="_blank"
              rel="noreferrer"
              className="bg-secondary text-secondary-foreground w-full py-3 rounded-sm font-heading font-semibold text-center mt-2"
            >
              Encomendar via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}