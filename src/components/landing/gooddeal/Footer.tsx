"use client";

import {
  CaretRightIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import Logo from "./Logo";

const COLS = [
  {
    title: "Navegação",
    links: ["Início", "Anúncios", "Categorias", "Como Funciona", "Contato"],
  },
  {
    title: "Categorias",
    links: [
      "Eletrônicos",
      "Bikes",
      "Esportes",
      "Moda & Calçados",
      "Móveis",
      "Livros & Jogos",
    ],
  },
  {
    title: "Ajuda",
    links: [
      "Central de Ajuda",
      "Segurança",
      "Política de Privacidade",
      "Termos de Uso",
      "Resolução de Conflitos",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1236] px-4 pb-7 pt-14 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-11 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4">
              <Logo light />
            </div>
            <p className="mb-4 max-w-[300px] font-primary text-[13px] leading-[1.75] text-white/50">
              O marketplace brasileiro de produtos usados. Simples, seguro e sem
              taxas para quem vende.
            </p>
            <div className="flex flex-col gap-2 font-primary text-[13px] text-white/55">
              <div className="flex items-center gap-2">
                <PhoneIcon size={14} weight="fill" />
                (31) 3200-0000
              </div>
              <div className="flex items-center gap-2">
                <EnvelopeSimpleIcon size={14} weight="fill" />
                oi@gooddeal.com.br
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon size={14} weight="fill" />
                BH · SP · RJ · e todo o Brasil
              </div>
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <div className="mb-5 font-secondary text-[14px] font-bold text-white">
                {col.title}
              </div>
              <div className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <a
                    key={l}
                    href="#"
                    className="flex items-center gap-1.5 font-primary text-[13px] text-white/50 transition-colors hover:text-[#4d76f5]"
                  >
                    <CaretRightIcon size={12} weight="bold" />
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-5 h-px bg-white/[0.07]" />

        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <span className="font-primary text-[12px] text-white/30">
            © 2026 GoodDeal Tecnologia LTDA · CNPJ 00.000.000/0001-00
          </span>
          <span className="font-primary text-[12px] text-white/30">
            Feito com ❤️ no Brasil ·{" "}
            <span className="font-semibold text-[#4d76f5]">Versão 2.4.1</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
