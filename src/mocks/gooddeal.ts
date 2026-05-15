export type Condition =
  | "Nunca usado"
  | "Seminovo"
  | "Ótimo estado"
  | "Bom estado";

export type ProductBadge = "Destaque" | "Verificado" | "Oferta" | "Novo" | "";

export interface Product {
  id: number;
  code: string;
  name: string;
  category: string;
  badge: ProductBadge;
  condition: Condition;
  price: string;
  location: string;
  seller: string;
  img: string;
  color: string;
}

export type ListingTab = "destaques" | "esportes" | "eletronicos" | "moda";

export const PRODUCTS: Record<ListingTab, Product[]> = {
  destaques: [
    {
      id: 1,
      code: "GD-7821",
      name: "Bike Speed Trek Domane SL5",
      category: "Bikes",
      badge: "Destaque",
      condition: "Ótimo estado",
      price: "R$ 3.800",
      location: "Savassi, BH",
      seller: "João M.",
      img: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=800&q=80",
      color: "#b8cef9",
    },
    {
      id: 2,
      code: "GD-4412",
      name: "iPhone 13 128GB Meia-noite",
      category: "Eletrônicos",
      badge: "Verificado",
      condition: "Seminovo",
      price: "R$ 2.100",
      location: "Lourdes, BH",
      seller: "Ana P.",
      img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80",
      color: "#c9d9fb",
    },
    {
      id: 3,
      code: "GD-3301",
      name: 'Smart TV Samsung 55" 4K',
      category: "Eletrônicos",
      badge: "Oferta",
      condition: "Bom estado",
      price: "R$ 1.400",
      location: "Contagem, MG",
      seller: "Carlos R.",
      img: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800&q=80",
      color: "#d4e0fc",
    },
    {
      id: 4,
      code: "GD-9900",
      name: "Tênis Nike Air Max 270 42",
      category: "Esportes",
      badge: "Novo",
      condition: "Nunca usado",
      price: "R$ 420",
      location: "Centro, BH",
      seller: "Luísa C.",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      color: "#dce8fc",
    },
  ],
  esportes: [
    {
      id: 5,
      code: "GD-5510",
      name: "Bola Futsal Penalty Max 500",
      category: "Esportes",
      badge: "",
      condition: "Bom estado",
      price: "R$ 95",
      location: "Venda Nova, BH",
      seller: "Marcos A.",
      img: "https://images.unsplash.com/photo-1551958219-acbc595b6c85?w=800&q=80",
      color: "#b8cef9",
    },
    {
      id: 6,
      code: "GD-5521",
      name: "Raquete Beach Tennis Adidas",
      category: "Esportes",
      badge: "Oferta",
      condition: "Ótimo estado",
      price: "R$ 280",
      location: "Nova Lima, MG",
      seller: "Fernanda S.",
      img: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80",
      color: "#c9d9fb",
    },
    {
      id: 7,
      code: "GD-5544",
      name: "Bike MTB Caloi Elite Carbon",
      category: "Bikes",
      badge: "Destaque",
      condition: "Seminovo",
      price: "R$ 5.200",
      location: "Funcionários, BH",
      seller: "Pedro L.",
      img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80",
      color: "#d4e0fc",
    },
    {
      id: 8,
      code: "GD-5560",
      name: "Patins Inline Oxelo MF500",
      category: "Esportes",
      badge: "",
      condition: "Bom estado",
      price: "R$ 190",
      location: "Pampulha, BH",
      seller: "Clara B.",
      img: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=800&q=80",
      color: "#dce8fc",
    },
  ],
  eletronicos: [
    {
      id: 9,
      code: "GD-1100",
      name: "MacBook Air M2 8GB 256GB",
      category: "Eletrônicos",
      badge: "Verificado",
      condition: "Seminovo",
      price: "R$ 6.800",
      location: "Belvedere, BH",
      seller: "Rafael T.",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
      color: "#b8cef9",
    },
    {
      id: 10,
      code: "GD-1122",
      name: "Fone Sony WH-1000XM5",
      category: "Eletrônicos",
      badge: "Oferta",
      condition: "Ótimo estado",
      price: "R$ 1.050",
      location: "Sion, BH",
      seller: "Beatriz M.",
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      color: "#c9d9fb",
    },
    {
      id: 11,
      code: "GD-1145",
      name: "Câmera Canon EOS Rebel T7",
      category: "Eletrônicos",
      badge: "",
      condition: "Bom estado",
      price: "R$ 1.900",
      location: "Ouro Preto, MG",
      seller: "Diego F.",
      img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
      color: "#d4e0fc",
    },
    {
      id: 12,
      code: "GD-1167",
      name: "Tablet Samsung Galaxy A8",
      category: "Eletrônicos",
      badge: "",
      condition: "Bom estado",
      price: "R$ 680",
      location: "Santa Luzia, MG",
      seller: "Tatiane O.",
      img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
      color: "#dce8fc",
    },
  ],
  moda: [
    {
      id: 13,
      code: "GD-3300",
      name: "Bolsa Couro Arezzo Caramelo",
      category: "Moda",
      badge: "Destaque",
      condition: "Ótimo estado",
      price: "R$ 310",
      location: "Lourdes, BH",
      seller: "Patrícia L.",
      img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
      color: "#b8cef9",
    },
    {
      id: 14,
      code: "GD-3315",
      name: "Tênis Adidas Stan Smith 40",
      category: "Moda",
      badge: "",
      condition: "Nunca usado",
      price: "R$ 230",
      location: "Centro, BH",
      seller: "Bruno K.",
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80",
      color: "#c9d9fb",
    },
    {
      id: 15,
      code: "GD-3328",
      name: "Relógio Casio G-Shock Preto",
      category: "Moda",
      badge: "Verificado",
      condition: "Seminovo",
      price: "R$ 480",
      location: "Alphaville, BH",
      seller: "Larissa G.",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      color: "#d4e0fc",
    },
    {
      id: 16,
      code: "GD-3341",
      name: "Óculos Ray-Ban Aviador",
      category: "Moda",
      badge: "Oferta",
      condition: "Bom estado",
      price: "R$ 190",
      location: "Savassi, BH",
      seller: "Ricardo N.",
      img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
      color: "#dce8fc",
    },
  ],
};

export interface Category {
  id: string;
  label: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  { id: "all", label: "Tudo", icon: "🛍️" },
  { id: "eletronicos", label: "Eletrônicos", icon: "📱" },
  { id: "bikes", label: "Bikes", icon: "🚲" },
  { id: "esportes", label: "Esportes", icon: "⚽" },
  { id: "moda", label: "Moda", icon: "👜" },
  { id: "moveis", label: "Móveis", icon: "🛋️" },
  { id: "livros", label: "Livros", icon: "📚" },
  { id: "jogos", label: "Jogos", icon: "🎮" },
];
