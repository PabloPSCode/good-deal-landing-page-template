"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { PRODUCTS, type ListingTab } from "@/mocks/gooddeal";
import GoodDealProductCard from "./GoodDealProductCard";
import SectionHeader from "./SectionHeader";

const TABS: { id: ListingTab; label: string }[] = [
  { id: "destaques", label: "Em Destaque" },
  { id: "esportes", label: "Esportes" },
  { id: "eletronicos", label: "Eletrônicos" },
  { id: "moda", label: "Moda & Acessórios" },
];

interface ListingsProps {
  cardRadius?: number;
}

export default function Listings({ cardRadius = 14 }: ListingsProps) {
  const [activeTab, setActiveTab] = useState<ListingTab>("destaques");

  return (
    <section className="bg-white px-4 py-24 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeader
          eyebrow="Anúncios"
          title="Ótimas Ofertas Esperando por Você"
          subtitle="Produtos usados em excelente estado, de vendedores verificados de todo o Brasil."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {TABS.map((t) => {
            const active = activeTab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                className={`rounded-lg px-5 py-2.5 font-primary text-[13px] font-semibold transition-all ${
                  active
                    ? "border-none bg-[#2048e6] text-white shadow-[0_4px_14px_rgba(32,72,230,0.22)]"
                    : "border-[1.5px] border-[#dde2ef] bg-[#f7f8fc] text-[#5a6280] hover:border-[#7ea0f8]"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PRODUCTS[activeTab].map((p) => (
            <GoodDealProductCard
              key={p.id}
              product={p}
              cardRadius={cardRadius}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-[10px] border-2 border-[#2048e6] bg-transparent px-9 py-3 font-primary text-[14px] font-semibold text-[#2048e6] transition-all hover:bg-[#2048e6] hover:text-white"
          >
            Ver todos os anúncios <ArrowRightIcon size={18} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
}
