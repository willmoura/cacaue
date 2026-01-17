import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { createWhatsappLink } from '../lib/utils';
import PageWrapper from '../components/layout/PageWrapper';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const company = (form.elements.namedItem('company') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const whatsappMsg = `Olá, me chamo ${name}, da empresa ${company}. ${message}`;
    window.open(createWhatsappLink(whatsappMsg), '_blank');
  };

  return (
    <PageWrapper className="bg-background min-h-screen py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="font-heading text-4xl font-bold text-primary mb-6">Vamos conversar?</h1>
            <p className="text-lg text-foreground/70 mb-12">
              Estamos prontos para atender sua demanda, seja ela um projeto especial de varejo ou um fornecimento industrial de larga escala.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-sm text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary">WhatsApp & Comercial</h3>
                  <p className="text-foreground/70">+55 (11) 99999-9999</p>
                  <p className="text-sm text-foreground/50">Seg à Sex, das 8h às 18h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-sm text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary">E-mail</h3>
                  <p className="text-foreground/70">comercial@cacaue.com.br</p>
                  <p className="text-foreground/70">licitacoes@cacaue.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-sm text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary">Escritório Central</h3>
                  <p className="text-foreground/70">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm border border-primary/5">
            <h2 className="font-heading text-2xl font-bold text-primary mb-6">Envie uma mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1">Nome Completo</label>
                <input required name="name" type="text" className="w-full border border-primary/20 rounded-sm px-4 py-2 focus:outline-none focus:border-accent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1">Empresa / Órgão</label>
                <input required name="company" type="text" className="w-full border border-primary/20 rounded-sm px-4 py-2 focus:outline-none focus:border-accent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1">E-mail Corporativo</label>
                <input required type="email" className="w-full border border-primary/20 rounded-sm px-4 py-2 focus:outline-none focus:border-accent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1">Mensagem</label>
                <textarea required name="message" rows={4} className="w-full border border-primary/20 rounded-sm px-4 py-2 focus:outline-none focus:border-accent"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white font-heading font-bold py-3 rounded-sm hover:bg-primary/90 transition-colors">
                Iniciar Conversa no WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}