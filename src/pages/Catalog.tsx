import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import PageWrapper from '../components/layout/PageWrapper';
import { cn } from '../lib/utils';
import { Filter } from 'lucide-react';

export default function Catalog() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('categoria') || 'Todos';

  const [categoryFilter, setCategoryFilter] = useState(initialCategory);
  
  // Updated categories for Easter Campaign matching mock data
  const categories = ['Todos', 'Ao Leite', 'Especiais', 'Zero Lactose', 'Intenso'];

  const filteredProducts = products.filter(p => 
    categoryFilter === 'Todos' ? true : p.category === categoryFilter
  );

  return (
    <PageWrapper className="bg-background min-h-screen py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-primary/10 pb-6">
          <div>
            <h1 className="font-heading text-4xl font-bold text-primary mb-4">Catálogo de Páscoa</h1>
            <p className="text-foreground/70 max-w-xl">
              Confira nossa seleção de produtos desenvolvidos com rigor técnico e qualidade superior.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-sm border border-primary/5">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <Filter size={20} />
                <h3 className="font-heading font-bold text-lg">Filtros</h3>
              </div>
              
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase text-foreground/50 tracking-wider mb-2">Linha</p>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={cn(
                      "block w-full text-left px-3 py-2 text-sm rounded-sm transition-colors",
                      categoryFilter === cat 
                        ? "bg-primary text-white font-medium" 
                        : "hover:bg-primary/5 text-foreground/80"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-sm">
              <h4 className="font-heading font-bold text-primary mb-2">Atendimento Corporativo</h4>
              <p className="text-sm text-foreground/70 mb-4">
                Condições especiais para grandes volumes. Consulte nossa equipe.
              </p>
              <a href="/contato" className="text-sm font-bold text-accent hover:underline">
                Fale com a Equipe &rarr;
              </a>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="py-20 text-center border border-dashed border-primary/20 rounded-sm">
                <p className="text-foreground/50">Nenhum produto encontrado nesta categoria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}