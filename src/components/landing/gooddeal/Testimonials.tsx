"use client";

import { StarIcon } from "@phosphor-icons/react";
import SectionHeader from "./SectionHeader";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  stars: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mariana S.",
    role: "Compradora • BH, MG",
    text: "Comprei um MacBook seminovo por metade do preço e chegou perfeito. O chat deixou tudo muito transparente e me senti segura do começo ao fim.",
    stars: 5,
  },
  {
    name: "Felipe R.",
    role: "Vendedor • Campinas, SP",
    text: "Vendi minha bike em 2 dias! O sistema de anúncio é simples demais. Já fechei mais de 10 negócios pelo GoodDeal e nunca tive problema.",
    stars: 5,
  },
  {
    name: "Camila T.",
    role: "Compradora • Recife, PE",
    text: "Achei um tênis Nike nunca usado por R$ 200 a menos que na loja. O pagamento protegido me deu confiança para comprar de alguém desconhecido.",
    stars: 5,
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="relative rounded-2xl border-[1.5px] border-[#eef0f7] bg-white p-7 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
      <div className="pointer-events-none absolute right-5 top-3 select-none font-serif text-[64px] leading-none text-[#c6d4f9]">
        &ldquo;
      </div>
      <div className="mb-3.5 flex gap-[3px]">
        {Array.from({ length: t.stars }).map((_, i) => (
          <StarIcon key={i} size={14} weight="fill" color="#f59e0b" />
        ))}
      </div>
      <p className="mb-5 font-primary text-[14px] leading-[1.7] text-[#252d4a]">
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#2048e6] to-[#7ea0f8]">
          <span className="font-secondary text-[15px] font-bold text-white">
            {t.name[0]}
          </span>
        </div>
        <div>
          <div className="font-primary text-[13px] font-semibold text-[#111827]">
            {t.name}
          </div>
          <div className="font-primary text-[11px] text-[#9aa3be]">
            {t.role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#f7f8fc] px-4 py-24 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeader
          eyebrow="Depoimentos"
          title="Quem Usa, Recomenda"
          align="center"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
