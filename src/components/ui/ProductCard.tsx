import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '../../data/products';
import { trackClick } from '../../lib/utils';

const MotionLink = motion(Link);

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <MotionLink 
      to={`/catalogo/${product.slug}`}
      onClick={() => trackClick(`Product Card: ${product.name}`)}
      className="group block bg-white border border-primary/5 overflow-hidden rounded-sm"
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: { y: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
        hover: { 
          y: -8, 
          boxShadow: "0px 10px 30px rgba(45, 27, 20, 0.1)",
          borderColor: "rgba(184, 134, 11, 0.3)" 
        }
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted relative">
        <motion.img 
          src={product.imageUrl} 
          alt={product.name}
          className="object-cover w-full h-full"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.08 }
          }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          loading="lazy"
        />
        
        <div className="absolute top-3 left-3 z-10">
           <span className="bg-primary/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest rounded-sm shadow-sm">
             {product.category}
           </span>
        </div>
      </div>
      <div className="p-6">
        <motion.h3 
          className="font-heading font-bold text-lg text-primary mb-2 transition-colors"
          variants={{
            rest: { color: "#2D1B14" },
            hover: { color: "#B8860B" }
          }}
        >
          {product.name}
        </motion.h3>
        <p className="text-foreground/70 text-sm line-clamp-2 mb-4">
          {product.shortDescription}
        </p>
        <div className="flex items-center text-primary text-xs font-semibold uppercase tracking-wider">
          Ver detalhes 
          <motion.span
            variants={{
              rest: { x: 0 },
              hover: { x: 5 }
            }}
          >
            <ArrowRight size={14} className="ml-1" />
          </motion.span>
        </div>
      </div>
    </MotionLink>
  );
};

export default ProductCard;