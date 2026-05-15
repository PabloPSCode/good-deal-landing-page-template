"use client";

import { useState } from "react";
import Image from "next/image";
import {
  HeartIcon,
  MapPinIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react";
import type { Condition, Product } from "@/mocks/gooddeal";

interface GoodDealProductCardProps {
  product: Product;
  cardRadius?: number;
}

const CONDITION_STYLES: Record<Condition, { bg: string; color: string }> = {
  "Nunca usado": { bg: "#dcfce7", color: "#15803d" },
  Seminovo: { bg: "#e8eefb", color: "#2048e6" },
  "Ótimo estado": { bg: "#fef9c3", color: "#a16207" },
  "Bom estado": { bg: "#ffedd5", color: "#c2410c" },
};

function ConditionPill({ condition }: { condition: Condition }) {
  const s = CONDITION_STYLES[condition];
  return (
    <span
      className="inline-block self-start rounded-full px-2 py-[3px] font-primary text-[10px] font-semibold tracking-[0.04em]"
      style={{ background: s.bg, color: s.color }}
    >
      {condition}
    </span>
  );
}

function getBadgeStyle(badge: Product["badge"]) {
  if (badge === "Verificado")
    return { bg: "rgba(22,163,74,0.9)", color: "white" };
  if (badge === "Oferta") return { bg: "rgba(234,88,12,0.9)", color: "white" };
  return { bg: "rgba(255,255,255,0.92)", color: "#2048e6" };
}

export default function GoodDealProductCard({
  product,
  cardRadius = 14,
}: GoodDealProductCardProps) {
  const [liked, setLiked] = useState(false);
  const badgeStyle = getBadgeStyle(product.badge);

  return (
    <div
      className="group flex cursor-pointer flex-col overflow-hidden border border-[#eef0f7] bg-white shadow-[0_2px_14px_rgba(32,72,230,0.07),0_1px_3px_rgba(0,0,0,0.05)] transition-[box-shadow,transform] duration-[250ms] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(32,72,230,0.15),0_2px_8px_rgba(0,0,0,0.07)]"
      style={{ borderRadius: cardRadius }}
    >
      <div
        className="relative h-[196px] flex-shrink-0 overflow-hidden"
        style={{ background: product.color }}
      >
        <Image
          src={product.img}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 280px"
          className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute left-3 top-3 rounded-md bg-[rgba(32,72,230,0.88)] px-2 py-[3px] font-primary text-[10px] font-semibold tracking-[0.04em] text-white backdrop-blur-[4px]">
          {product.category}
        </div>
        {product.badge && (
          <div
            className="absolute right-11 top-3 flex items-center gap-1 rounded-md px-2 py-[3px] font-primary text-[10px] font-bold"
            style={{ background: badgeStyle.bg, color: badgeStyle.color }}
          >
            {product.badge === "Verificado" && (
              <ShieldCheckIcon size={14} weight="fill" />
            )}
            {product.badge}
          </div>
        )}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setLiked((l) => !l);
          }}
          className={`absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.12)] transition-transform duration-150 ${
            liked ? "scale-110" : "scale-100"
          }`}
          aria-label={liked ? "Desfavoritar" : "Favoritar"}
        >
          <HeartIcon
            size={16}
            weight={liked ? "fill" : "regular"}
            color={liked ? "#e63946" : "#252d4a"}
          />
        </button>
        <div className="absolute bottom-2 left-2.5 rounded bg-black/30 px-1.5 py-[2px] font-primary text-[9.5px] text-white/90 backdrop-blur-[4px]">
          #{product.code}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-3.5">
        <ConditionPill condition={product.condition} />

        <div className="font-secondary text-[14px] font-bold leading-[1.3] text-[#111827]">
          {product.name}
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 font-primary text-[11px] text-[#5a6280]">
            <MapPinIcon size={11} weight="bold" /> {product.location}
          </span>
          <span className="font-primary text-[11px] text-[#9aa3be]">
            por {product.seller}
          </span>
        </div>

        <div className="h-px bg-[#eef0f7]" />

        <div className="flex items-center justify-between">
          <div className="font-secondary text-[20px] font-black text-[#2048e6]">
            {product.price}
          </div>
          <button
            type="button"
            className="rounded-md bg-[#e8eefb] px-3.5 py-1.5 font-primary text-[12px] font-semibold text-[#2048e6] transition-colors hover:bg-[#2048e6] hover:text-white"
          >
            Ver anúncio
          </button>
        </div>
      </div>
    </div>
  );
}
