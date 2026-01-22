import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { createWhatsappLink, cn, trackClick } from '../lib/utils';
import { ArrowLeft, Check, Download, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <PageWrapper className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Produto não encontrado</h2>
        <Link 
          to="/catalogo" 
          onClick={() => trackClick('Detail Error: Voltar ao catálogo')}
          className="text-accent underline"
        >
          Voltar ao catálogo
        </Link>
      </PageWrapper>
    );
  }

  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.imageUrl];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  return (
    <PageWrapper className="bg-background min-h-screen">
      <div className="bg-white border-b border-primary/10">
        <div className="container py-8">
          <Link 
            to="/catalogo" 
            onClick={() => trackClick(`Detail: Voltar ao catálogo (${product.name})`)}
            className="inline-flex items-center text-sm text-foreground/50 hover:text-primary mb-6"
          >
            <ArrowLeft size={16} className="mr-1" /> Voltar ao catálogo
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* --- GALERIA INTERATIVA --- */}
            <div className="space-y-4">
              <div className="bg-muted aspect-square rounded-sm overflow-hidden relative group">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    src={productImages[currentImageIndex]} 
                    alt={product.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {productImages.length > 1 && (
                  <>
                    <button 
                      onClick={() => { prevImage(); trackClick(`Detail Gallery: Prev (${product.name})`); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={() => { nextImage(); trackClick(`Detail Gallery: Next (${product.name})`); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {productImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setCurrentImageIndex(idx); trackClick(`Detail Gallery: Thumb ${idx} (${product.name})`); }}
                      className={cn(
                        "relative w-20 h-20 rounded-sm overflow-hidden border-2 transition-all shrink-0",
                        currentImageIndex === idx ? "border-primary opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                      )}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <div className="flex gap-2 mb-4">
                <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 uppercase rounded-sm">
                  {product.category}
                </span>
                {product.tags.map(tag => (
                  <span key={tag} className="border border-primary/20 text-foreground/60 text-xs font-medium px-2 py-1 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                {product.name}
              </h1>

              <p className="text-lg text-foreground/80 leading-relaxed mb-8 border-l-4 border-accent pl-4">
                {product.longDescription}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xs font-bold uppercase text-foreground/40 mb-2 tracking-wider">Apresentação</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.weights.map(w => (
                      <span key={w} className="bg-white border border-primary/10 px-3 py-1 text-sm text-primary font-medium">
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
                {product.cocoaContent && (
                  <div>
                    <h3 className="text-xs font-bold uppercase text-foreground/40 mb-2 tracking-wider">Teor de Cacau</h3>
                    <span className="text-xl font-heading font-bold text-primary">{product.cocoaContent}%</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href={createWhatsappLink(`Olá, gostaria de solicitar um orçamento para o produto: ${product.name}`)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackClick(`Detail CTA: Solicitar Proposta (${product.name})`)}
                  className="flex-1 bg-secondary text-white text-center py-4 rounded-sm font-heading font-bold uppercase tracking-wide hover:bg-secondary/90 transition-all"
                >
                  Solicitar Proposta
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h3 className="font-heading text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <span onClick={() => trackClick(`Detail Info: Specs (${product.name})`)} className="flex items-center gap-2 cursor-default">
                <Info size={24} className="text-accent" /> Especificações Técnicas
              </span>
            </h3>
            <ul className="space-y-3">
              {product.specs.map((spec, i) => (
                <li key={i} className="flex items-start gap-3 p-3 bg-white border border-primary/5 rounded-sm">
                  <Check size={18} className="text-secondary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground/80">{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h3 className="font-heading text-xl font-bold text-primary mb-6">Tabela Nutricional</h3>
             <div className="bg-white border border-primary/10 rounded-sm overflow-hidden">
               {Object.entries(product.nutrition).map(([key, value], i) => (
                 <div key={key} className={cn(
                   "flex justify-between p-3 text-sm",
                   i % 2 === 0 ? "bg-background/50" : "bg-white"
                 )}>
                   <span className="font-medium text-primary">{key}</span>
                   <span className="text-foreground/70">{value}</span>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}