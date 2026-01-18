
export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "Ao Leite" | "Especiais" | "Dietas"; 
  cocoaContent?: number;
  weights: string[];
  shortDescription: string;
  longDescription: string;
  specs: string[];
  nutrition: Record<string, string>;
  tags: string[];
  imageUrl: string;
  images?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    slug: "ovo-ao-leite-classico",
    name: "Ovo Ao Leite Clássico",
    category: "Ao Leite",
    cocoaContent: 35,
    weights: ["100g","150g","180g","250g","250g", "350g"],
    shortDescription: "O sabor tradicional do chocolate ao leite. Cremoso e derrete na boca.",
    longDescription: "Nosso clássico Ovo de Páscoa ao Leite é produzido com chocolate nobre, garantindo uma textura aveludada e um sabor equilibrado. Ideal para quem não abre mão da tradição e qualidade.",
    specs: ["Textura: Cremosa", "Temperagem: Perfeita", "Embalagem: Protetora"],
    nutrition: { "Porção": "25g", "Valor Energético": "135kcal", "Carboidratos": "14g" },
    tags: ["Clássico", "Ao Leite", "Mais Vendido"],
    imageUrl: "/img/ovo_ao_leite.png"
  },
  {
    id: "2",
    slug: "barra-artesanal-personalizada",
    name: "Barra Personalizada: Identidade & Sabor",
    category: "Especiais",
    weights: ["70g"],
    shortDescription: "Sua marca, brasão ou ponto turístico gravado em chocolate nobre. A tradução do orgulho local em sabor.",
    longDescription: "Unimos a sofisticação do nosso chocolate à identidade da sua cidade. Nossas barras personalizadas permitem a gravação de brasões municipais, monumentos históricos ou logotipos institucionais com alta definição. É a escolha perfeita para um brinde memorável.",
    specs: ["Base: Chocolate Ao Leite, Amargo ou Branco", "Textura: Cremosa", "Personalização: Relevo detalhado sob encomenda"],
    nutrition: { "Porção": "25g", "Valor Energético": "135kcal", "Gorduras Totais": "8g" },
    tags: ["Institucional", "Turismo", "Brinde", "Exclusivo", "Presente"],
    imageUrl: "/img/torre.png",
    images: [
      "/img/torre.png",
      "/img/barrinha.png"
    ]
  },
  {
    id: "3",
    slug: "ovo-zero-lactose",
    name: "Ovo Zero Lactose",
    category: "Dietas",
    weights: ["180g"],
    shortDescription: "Todo o sabor do cacau em uma versão para dietas com restrição.",
    longDescription: "Desenvolvido especialmente para intolerantes à lactose, sem abrir mão do sabor.",
    specs: ["Lactose: 0%"],
    nutrition: { "Porção": "25g", "Valor Energético": "125kcal", "Lactose": "0g" },
    tags: ["Zero Lactose", "Dietas", "Saudável"],
    imageUrl: "/img/zero_lactose.png"
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
