import React from 'react';
import { testimonials } from '../data/products';
import { Quote } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <PageWrapper className="bg-background min-h-screen py-16">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl font-bold text-primary mb-4">Quem confia na Cacauê</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A satisfação dos nossos parceiros é o melhor indicador da nossa qualidade. Atendemos desde o pequeno chocolatier até grandes prefeituras.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map(t => (
            <motion.div 
              key={t.id} 
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-sm shadow-sm border border-primary/5 relative hover:shadow-md transition-shadow"
            >
              <Quote className="absolute top-8 right-8 text-primary/10 size-12" />
              <p className="font-serif italic text-lg text-foreground/80 mb-8 relative z-10">"{t.text}"</p>
              <div className="border-t border-primary/10 pt-4">
                <p className="font-heading font-bold text-primary">{t.source}</p>
                <p className="text-sm text-foreground/60">{t.role}</p>
                <p className="text-xs text-foreground/40 mt-1">{t.location} • {t.year}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageWrapper>
  );
}