import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import PageWrapper from '../components/layout/PageWrapper';

export default function Process() {
  const steps = [
    {
      title: "1. Seleção na Origem",
      desc: "Trabalhamos diretamente com produtores no Pará e Bahia. Cada lote é avaliado fisicamente (teste de corte) antes do embarque.",
      image: "https://images.unsplash.com/photo-1552014897-408169994c65?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "2. Fermentação Controlada",
      desc: "Onde o sabor nasce. Protocolos rigorosos de temperatura e revolvimento garantem o desenvolvimento dos precursores de aroma.",
      image: "https://images.unsplash.com/photo-1610452331526-9ce183204dfc?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "3. Torra de Precisão",
      desc: "Curvas de torra específicas para cada perfil de produto (Industrial ou Gourmet), eliminando acidez volátil e potencializando notas de chocolate.",
      image: "https://images.unsplash.com/photo-1615485925763-867862f9eb84?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "4. Refino e Conchagem",
      desc: "Redução de tamanho de partícula para micronagem imperceptível e homogeneização da textura por até 48 horas.",
      image: "https://images.unsplash.com/photo-1605698802093-38098ec9a526?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <PageWrapper className="bg-background min-h-screen pb-20">
      <div className="bg-primary text-background py-20">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Do Grão à Excelência</h1>
          <p className="max-w-2xl mx-auto text-white/70 text-lg">
            A transparência do nosso processo industrial é a garantia da qualidade que entregamos. Tecnologia a serviço da pureza.
          </p>
        </div>
      </div>

      <div className="container mt-16 max-w-5xl">
        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:pl-0 space-y-16">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="relative flex flex-col md:flex-row gap-8 md:items-center"
            >
              <div className="absolute -left-[21px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-auto size-10 rounded-full bg-accent border-4 border-background flex items-center justify-center text-primary font-bold z-10">
                {index + 1}
              </div>

              <div className={cn("flex-1 md:text-right md:pr-12", index % 2 !== 0 && "md:order-last md:text-left md:pl-12 md:pr-0")}>
                <h3 className="font-heading text-2xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{step.desc}</p>
              </div>

              <div className={cn("flex-1 pl-8 md:pl-12", index % 2 !== 0 && "md:pr-12 md:pl-0 md:order-first")}>
                <div className="aspect-video rounded-sm overflow-hidden shadow-lg grayscale hover:grayscale-0 transition-all duration-500">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}