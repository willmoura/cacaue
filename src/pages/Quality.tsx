import React from 'react';
import { ShieldCheck, FileCheck, FlaskConical } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';

export default function Quality() {
  return (
    <PageWrapper className="bg-background min-h-screen">
      <div className="container py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-heading text-4xl font-bold text-primary mb-6">Qualidade & Segurança</h1>
          <p className="text-lg text-foreground/70">
            Nossa operação é desenhada para atender os requisitos mais rigorosos da indústria alimentícia e do setor público.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-secondary text-center">
            <div className="mx-auto bg-secondary/10 size-16 rounded-full flex items-center justify-center mb-6 text-secondary">
              <ShieldCheck size={32} />
            </div>
            <h3 className="font-heading text-xl font-bold text-primary mb-3">Segurança Alimentar</h3>
            <p className="text-sm text-foreground/70">
              Controle rigoroso de perigos físicos, químicos e biológicos (HACCP). Rastreabilidade total de lote.
            </p>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-accent text-center">
            <div className="mx-auto bg-accent/10 size-16 rounded-full flex items-center justify-center mb-6 text-accent">
              <FlaskConical size={32} />
            </div>
            <h3 className="font-heading text-xl font-bold text-primary mb-3">Laboratório Próprio</h3>
            <p className="text-sm text-foreground/70">
              Análises diárias de microbiologia, pH, finura e teor de gordura para garantir a padronização técnica.
            </p>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-primary text-center">
            <div className="mx-auto bg-primary/10 size-16 rounded-full flex items-center justify-center mb-6 text-primary">
              <FileCheck size={32} />
            </div>
            <h3 className="font-heading text-xl font-bold text-primary mb-3">Documentação Técnica</h3>
            <p className="text-sm text-foreground/70">
              Laudos técnicos, fichas de emergência e declarações de alérgenos disponíveis para homologação imediata.
            </p>
          </div>
        </div>

        <div className="bg-primary text-background p-12 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4 text-accent">Compromisso B2G</h2>
              <p className="text-white/70 mb-6">
                Entendemos as especificidades das licitações e da alimentação escolar (PNAE). Nossos produtos atendem aos critérios nutricionais exigidos e nossas embalagens suportam a logística de distribuição pública.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li className="flex items-center gap-2">✔ Laudos bacteriológicos por lote</li>
                <li className="flex items-center gap-2">✔ Embalagens resistentes à umidade</li>
                <li className="flex items-center gap-2">✔ Capacidade para grandes volumes imediatos</li>
              </ul>
            </div>
            <div className="bg-white/5 p-8 border border-white/10 rounded-sm">
              <h3 className="font-heading font-bold mb-4">Certificações (Em Processo)</h3>
              <div className="grid grid-cols-2 gap-4">
                 <div className="h-16 bg-white/10 rounded flex items-center justify-center text-xs text-white/40">ISO 22000</div>
                 <div className="h-16 bg-white/10 rounded flex items-center justify-center text-xs text-white/40">FSSC</div>
                 <div className="h-16 bg-white/10 rounded flex items-center justify-center text-xs text-white/40">Orgânico Brasil</div>
                 <div className="h-16 bg-white/10 rounded flex items-center justify-center text-xs text-white/40">Kosher</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}