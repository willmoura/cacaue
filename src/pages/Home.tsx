import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Thermometer, Gem, Clock } from 'lucide-react';
import { products, testimonials } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import PageWrapper from '../components/layout/PageWrapper';
import { createWhatsappLink, trackClick } from '../lib/utils';
import { motion } from 'framer-motion';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

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
      <section className="relative min-h-[90vh] grid grid-cols-1 lg:grid-cols-12 bg-primary overflow-hidden">
        <div className="lg:col-span-7 relative h-[50vh] lg:h-auto overflow-hidden bg-[#2D1B14]">
           <motion.div 
             className="absolute inset-0 w-full h-full"
             initial={{ scale: 1.1 }}
             animate={{ scale: 1 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
           >
             <img 
              src="/img/hero_crianca.png"
              alt="Menino sorrindo segurando um grande ovo de Páscoa de chocolate"
              className="w-full h-full object-cover"
              fetchPriority="high"
             />
           </motion.div>
           <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent lg:bg-gradient-to-l lg:from-primary lg:via-primary/30 lg:to-transparent z-10"></div>
        </div>
        
        <div className="lg:col-span-5 bg-primary text-background flex flex-col justify-center p-8 lg:p-12 xl:p-16 z-20 relative shadow-2xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >            
            <motion.h1 variants={itemVariants} className="font-heading text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight mb-6 text-white">
              Ovos de Páscoa com o melhor chocolate.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-white/80 text-lg mb-0 font-light leading-relaxed border-l-2 border-accent pl-6">
              Confira nosso catálogo de Ovos de Páscoa. Feitos com o melhor chocolate para atender prefeituras com qualidade e compromisso.
            </motion.p>
          </motion.div>
        </div>
      </section>

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

      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary mb-2">Catálogo Páscoa</h2>
            </div>
            <Link 
              to="/catalogo" 
              onClick={() => trackClick('Home: Ver catálogo completo (Desktop)')}
              className="hidden md:flex items-center text-primary font-semibold hover:text-accent transition-colors"
            >
              Ver catálogo completo <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link 
              to="/catalogo" 
              onClick={() => trackClick('Home: Ver catálogo completo (Mobile)')}
              className="btn btn-primary inline-flex items-center font-bold text-primary border border-primary px-6 py-3 rounded-sm"
            >
              Ver catálogo completo
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-background">
        <div className="container">
          <h2 className="font-heading text-2xl font-bold text-center mb-16 text-accent">
            Quem já escolheu
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Prefeitura de Bofete",
              "Prefeitura de Pereiras",
              "Prefeitura de Quadra",
              "Prefeitura de Torre de Pedra",
            ].map((cliente, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 p-6 rounded-sm flex items-center justify-center text-center hover:bg-white/10 transition-colors h-32"
              >
                <p className="font-heading font-bold text-lg text-white/90">{cliente}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
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
              onClick={() => trackClick('Home: Fale Conosco (WhatsApp Bottom)')}
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