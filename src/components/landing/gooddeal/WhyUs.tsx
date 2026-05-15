"use client";

import {
  BellIcon,
  ChatCircleDotsIcon,
  CurrencyCircleDollarIcon,
  DeviceMobileIcon,
  ShieldCheckIcon,
  StarIcon,
  type Icon,
} from "@phosphor-icons/react";
import SectionHeader from "./SectionHeader";

interface FeatureItem {
  icon: Icon;
  title: string;
  desc: string;
}

const ITEMS: FeatureItem[] = [
  {
    icon: ShieldCheckIcon,
    title: "Vendedores Verificados",
    desc: "Todo vendedor passa por verificação de identidade. Você sabe com quem está negociando.",
  },
  {
    icon: ChatCircleDotsIcon,
    title: "Chat Seguro Integrado",
    desc: "Negocie sem expor seu número de telefone. Tudo registrado e protegido na plataforma.",
  },
  {
    icon: StarIcon,
    title: "Sistema de Avaliações",
    desc: "Vendedores e compradores se avaliam mutuamente. Reputação visível antes de qualquer negócio.",
  },
  {
    icon: BellIcon,
    title: "Alertas de Preço",
    desc: "Cadastre o produto que procura e seja notificado quando surgir um anúncio novo.",
  },
  {
    icon: CurrencyCircleDollarIcon,
    title: "Pagamento Protegido",
    desc: "Use o GoodPay para reter o valor até você confirmar o recebimento do produto.",
  },
  {
    icon: DeviceMobileIcon,
    title: "App iOS e Android",
    desc: "Compre e venda de onde estiver. Notificações em tempo real para não perder nenhuma oferta.",
  },
];

function FeatureCard({ item }: { item: FeatureItem }) {
  const Icon = item.icon;
  return (
    <div className="rounded-2xl border-[1.5px] border-t-[3px] border-[#eef0f7] bg-white p-7 shadow-[0_1px_6px_rgba(0,0,0,0.04)] transition-all duration-[250ms] hover:-translate-y-[3px] hover:border-t-[#2048e6] hover:bg-[#f7f8fc] hover:shadow-[0_6px_24px_rgba(32,72,230,0.1)]">
      <div className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8eefb] text-[#2048e6]">
        <Icon size={26} weight="duotone" />
      </div>
      <h3 className="mb-2 font-secondary text-[16px] font-bold text-[#111827]">
        {item.title}
      </h3>
      <p className="font-primary text-[13.5px] leading-[1.65] text-[#5a6280]">
        {item.desc}
      </p>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section className="bg-white px-4 py-24 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeader
          eyebrow="Por que GoodDeal"
          title="O Marketplace Que Coloca Você no Controle"
          subtitle="Segurança, transparência e praticidade em cada negociação."
          align="center"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
