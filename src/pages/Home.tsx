import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Thermometer, Gem, Clock } from 'lucide-react';
import { products, testimonials } from '../data/mock';
import ProductCard from '../components/ui/ProductCard';
import PageWrapper from '../components/layout/PageWrapper';
import { createWhatsappLink } from '../lib/utils';
import { motion } from 'framer-motion';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  // Animation variants for staggering text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <PageWrapper className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] grid grid-cols-1 lg:grid-cols-12 bg-primary overflow-hidden">
        {/* Image Container with fallback background */}
        <div className="lg:col-span-7 relative h-[50vh] lg:h-auto overflow-hidden bg-[#2D1B14]">
           <motion.div 
             className="absolute inset-0 w-full h-full"
             initial={{ scale: 1.1 }}
             animate={{ scale: 1 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
           >
             <img 
              src="https://images.unsplash.com/photo-1616031036579-fc7e68fa7079?q=80&w=1920&auto=format&fit=crop"
              alt="Ovo de Páscoa ao Leite sem embalagem"
              className="w-full h-full object-cover"
             />
           </motion.div>
           {/* Reduced Gradient Overlay for better image visibility */}
           <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent lg:bg-gradient-to-l lg:from-primary lg:via-primary/30 lg:to-transparent z-10"></div>
        </div>
        
        {/* Content Container */}
        <div className="lg:col-span-5 bg-primary text-background flex flex-col justify-center p-8 lg:p-12 xl:p-16 z-20 relative shadow-2xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Removed the 'Catálogo Páscoa' subtitle/badge as requested */}
            <motion.h1 variants={itemVariants} className="font-heading text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight mb-6 text-white">
              Ovos de Páscoa com o melhor chocolate.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-white/80 text-lg mb-0 font-light leading-relaxed border-l-2 border-accent pl-6">
              Confira nosso catálogo de Ovos de Páscoa. Feitos com o melhor chocolate para atender prefeituras com qualidade e compromisso.
            </motion.p>
            {/* Buttons removed for cleaner artisan look */}
          </motion.div>
        </div>
      </section>

      {/* Value Props - Technical Focus */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: Gem, 
                title: "Melhor Chocolate", 
                text: "Trabalhamos com o melhor chocolate do mercado. Nossa seleção de ingredientes garante sabor e qualidade superior." 
              },
              { 
                icon: Clock, 
                title: "Agilidade na Entrega", 
                text: "Logística eficiente para garantir que os produtos cheguem com integridade e frescor ao destino." 
              },
              { 
                icon: Thermometer, 
                title: "Processo Rigoroso", 
                text: "Seguimos padrões técnicos rigorosos de temperagem e moldagem para entregar um produto bonito e saboroso." 
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex flex-col items-start space-y-4 group"
              >
                <div className="p-3 bg-secondary/10 rounded-sm text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Easter Collection */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary mb-2">Catálogo Páscoa</h2>
              {/* Removed "Edição limitada e numerada." text */}
            </div>
            <Link to="/catalogo" className="hidden md:flex items-center text-primary font-semibold hover:text-accent transition-colors">
              Ver catálogo completo <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link to="/catalogo" className="btn btn-primary inline-flex items-center font-bold text-primary border border-primary px-6 py-3 rounded-sm">
              Ver catálogo completo
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-primary text-background">
        <div className="container">
          <h2 className="font-heading text-2xl font-bold text-center mb-16 text-accent">Quem escolhe Cacauê</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((t, idx) => (
              <motion.div 
                key={t.id} 
                initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors"
              >
                <p className="font-serif italic text-lg text-white/80 mb-6">"{t.text}"</p>
                <div>
                  <p className="font-heading font-bold text-accent">{t.source}</p>
                  <p className="text-sm text-white/50">{t.role} • {t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Institutional Focus (Replaces Scarcity/Artisan Text) */}
      <section className="py-24 bg-background">
        <div className="container max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              Precisa de mais informações?
            </h2>
            <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para atender sua solicitação.
            </p>
            <motion.a 
              href={createWhatsappLink("Olá, gostaria de mais informações sobre os produtos Cacauê.")}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-secondary text-white px-10 py-4 rounded-sm font-heading font-bold text-lg shadow-xl"
            >
              Fale Conosco
            </motion.a>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}