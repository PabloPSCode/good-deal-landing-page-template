"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";

interface CTAProps {
  ctaLabel: string;
}

export default function CTA({ ctaLabel }: CTAProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0a1a5c_0%,#2048e6_100%)] px-4 py-20 md:px-8">
      <svg
        className="absolute right-0 top-0 opacity-[0.06]"
        width="400"
        height="300"
        viewBox="0 0 400 300"
        aria-hidden
      >
        <circle cx="350" cy="0" r="200" fill="white" />
      </svg>
      <div className="relative mx-auto max-w-[800px] text-center">
        <div className="mb-4 font-primary text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7ea0f8]">
          Tem algo para vender?
        </div>
        <h2 className="mb-4 font-secondary text-[clamp(26px,4vw,46px)] font-black leading-[1.2] text-white">
          Transforme o que você não usa em Dinheiro
        </h2>
        <p className="mb-10 font-primary text-[16px] leading-[1.7] text-white/70">
          Milhões de compradores esperam por produtos como os seus. Publique seu
          primeiro anúncio em menos de 2 minutos, completamente grátis.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <button
            type="button"
            className="flex items-center gap-2 rounded-[10px] bg-white px-9 py-4 font-primary text-[15px] font-bold text-[#2048e6] transition-transform hover:scale-[1.02] hover:opacity-90"
          >
            {ctaLabel} <ArrowRightIcon size={18} weight="bold" />
          </button>
          <button
            type="button"
            className="rounded-[10px] border-2 border-white/40 bg-transparent px-9 py-4 font-primary text-[15px] font-semibold text-white transition-all hover:border-white/70 hover:bg-white/10"
          >
            Explorar Anúncios
          </button>
        </div>
      </div>
    </section>
  );
}
