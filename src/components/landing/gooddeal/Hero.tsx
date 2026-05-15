"use client";

import DarkVeil from "./DarkVeil";

interface HeroProps {
  title: string;
  subtitle: string;
}

const STATS = [
  { value: "180 mil+", label: "Anúncios Ativos" },
  { value: "95 mil+", label: "Vendedores Cadastrados" },
  { value: "R$ 12M+", label: "em Negócios Fechados" },
  { value: "4.9 ★", label: "Avaliação na App Store" },
];

export default function Hero({ title }: HeroProps) {
  const titleWords = title.split(" ");

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
      <div className="absolute inset-0 isolate">
        <DarkVeil
          hueShift={240}
          speed={0.6}
          warpAmount={0.6}
          scanlineIntensity={0.05}
          scanlineFrequency={2}
          noiseIntensity={0.02}
        />
        {/* Brand-blue tint: mix-blend-color rewrites hue+saturation, keeping the shader's luminance variations */}
        <div className="pointer-events-none absolute inset-0 bg-[#2048e6] mix-blend-color" />
        {/* Extra depth: multiply a darker blue on top for richer shadows */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1a3bbf_0%,#0a1a5c_85%)] mix-blend-multiply opacity-70" />
        {/* Vignette for text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,18,54,0.35)_0%,rgba(10,18,54,0.15)_50%,rgba(10,18,54,0.55)_100%)]" />
      </div>

      <div className="relative z-[2] mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-16 pt-[clamp(96px,12vw,140px)] sm:pb-20 md:px-8">
        <h1 className="mx-auto mb-4 text-balance text-center font-secondary text-[clamp(2rem,6.5vw,4.5rem)] font-black leading-[1.05] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
          {titleWords.map((word, i) => (
            <span
              key={i}
              className={word === "Facilidade" ? "text-[#7ea0f8]" : ""}
            >
              {word}{" "}
            </span>
          ))}
        </h1>

        <div className="mt-[clamp(2rem,4vw,3rem)] grid w-full grid-cols-2 gap-x-[clamp(1.5rem,4vw,2.5rem)] gap-y-6 sm:flex sm:flex-wrap sm:justify-center">
          {STATS.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="font-secondary text-[clamp(1.75rem,4.5vw,3rem)] font-extrabold leading-none text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                {s.value}
              </div>
              <div className="mt-1.5 font-primary text-[clamp(0.75rem,1.3vw,1rem)] leading-snug text-white/75">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 md:flex">
        <div className="animate-bounce font-primary text-[clamp(0.625rem,0.8vw,0.75rem)] tracking-[0.1em] text-white/55">
          ROLE
        </div>
        <div className="h-8 w-px bg-gradient-to-b from-white/55 to-transparent" />
      </div>
    </section>
  );
}
