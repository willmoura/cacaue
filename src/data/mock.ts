
export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "Intenso" | "Ao Leite" | "Especiais" | "Zero Lactose"; 
  cocoaContent?: number;
  weights: string[];
  shortDescription: string;
  longDescription: string;
  specs: string[];
  nutrition: Record<string, string>;
  tags: string[];
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "ovo-ao-leite-classico",
    name: "Ovo Ao Leite Clássico",
    category: "Ao Leite",
    cocoaContent: 35,
    weights: ["250g", "350g"],
    shortDescription: "O sabor tradicional do chocolate ao leite. Cremoso e derrete na boca.",
    longDescription: "Nosso clássico Ovo de Páscoa ao Leite é produzido com chocolate nobre, garantindo uma textura aveludada e um sabor equilibrado. Ideal para quem não abre mão da tradição e qualidade.",
    specs: ["Cacau: 35%", "Textura: Cremosa", "Temperagem: Perfeita", "Embalagem: Protetora"],
    nutrition: { "Porção": "25g", "Valor Energético": "135kcal", "Carboidratos": "14g" },
    tags: ["Clássico", "Ao Leite", "Best Seller"],
    imageUrl: "https://images.unsplash.com/photo-1616031036579-fc7e68fa7079?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    slug: "ovo-especial-crocante",
    name: "Ovo Especial Crocante",
    category: "Especiais",
    weights: ["400g"],
    shortDescription: "Chocolate ao leite com flocos de arroz crocantes. Uma experiência divertida.",
    longDescription: "A linha Especial traz a combinação favorita dos brasileiros: Chocolate ao leite de alta qualidade misturado com flocos de arroz crocantes. Uma explosão de textura a cada mordida.",
    specs: ["Base: Chocolate Ao Leite", "Inclusão: Flocos de Arroz", "Textura: Crocante"],
    nutrition: { "Porção": "25g", "Valor Energético": "130kcal", "Gorduras Totais": "7g" },
    tags: ["Crocante", "Especial", "Kids"],
    imageUrl: "https://images.unsplash.com/photo-1627289844431-7004f1295325?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    slug: "ovo-zero-lactose",
    name: "Ovo Zero Lactose",
    category: "Zero Lactose",
    cocoaContent: 50,
    weights: ["300g"],
    shortDescription: "Todo o sabor do cacau em uma versão segura para dietas com restrição.",
    longDescription: "Desenvolvido especialmente para intolerantes à lactose, sem abrir mão do sabor. Utilizamos chocolate 50% cacau e tecnologia de enzimas para garantir um produto seguro e delicioso.",
    specs: ["Lactose: 0%", "Cacau: 50%", "Segurança: Testado"],
    nutrition: { "Porção": "25g", "Valor Energético": "125kcal", "Lactose": "0g" },
    tags: ["Zero Lactose", "Inclusivo", "Saudável"],
    imageUrl: "https://images.unsplash.com/photo-1549880181-56a44cf4a9a1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "4",
    slug: "ovo-intenso-70",
    name: "Ovo Intenso 70%",
    category: "Intenso",
    cocoaContent: 70,
    weights: ["350g"],
    shortDescription: "Para os amantes do cacau puro. Notas profundas e intensas.",
    longDescription: "Uma experiência sensorial para puristas. Produzido com cacau selecionado, este ovo apresenta um perfil aromático complexo, com acidez equilibrada e final longo.",
    specs: ["Cacau: 70%", "Origem: Bahia", "Perfil: Intenso"],
    nutrition: { "Porção": "25g", "Valor Energético": "135kcal", "Carboidratos": "11g" },
    tags: ["Vegano", "Intenso", "Premium"],
    imageUrl: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=800"
  }
];

export interface Testimonial {
  id: string;
  source: string;
  location: string;
  year: string;
  role: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    source: "Prefeitura de Osasco",
    location: "Osasco, SP",
    year: "2023",
    role: "Secretaria de Educação",
    text: "A entrega foi pontual e a qualidade dos ovos superou as expectativas. As crianças adoraram."
  },
  {
    id: "2",
    source: "Associação Comercial",
    location: "Campinas, SP",
    year: "2023",
    role: "Diretoria",
    text: "Excelente apresentação e sabor. O kit corporativo foi um sucesso entre nossos associados."
  },
  {
    id: "3",
    source: "Grupo Educacional",
    location: "São Paulo, SP",
    year: "2023",
    role: "Setor de Compras",
    text: "Processo de compra transparente e produto com laudo técnico conforme solicitado. Recomendamos."
  }
];
