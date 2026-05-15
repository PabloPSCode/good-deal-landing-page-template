"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV_ITEMS = [
  "Início",
  "Anúncios",
  "Categorias",
  "Como Funciona",
  "Contato",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-[background,box-shadow] duration-300 ${
        scrolled
          ? "bg-white shadow-[0_1px_20px_rgba(32,72,230,0.1)]"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-4 md:px-8">
        <Logo light={!scrolled} />

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              className={`font-primary text-[13.5px] font-medium transition-colors hover:!text-[#2048e6] ${
                scrolled ? "text-[#252d4a]" : "text-white/90"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="#"
            className={`hidden font-primary text-[13px] font-medium md:inline ${
              scrolled ? "text-[#252d4a]" : "text-white/85"
            }`}
          >
            Entrar
          </a>
          <button
            type="button"
            className="rounded-lg bg-[#2048e6] px-5 py-2.5 font-primary text-[13px] font-semibold text-white transition-colors hover:bg-[#0f30b5]"
          >
            + Anunciar Grátis
          </button>
        </div>
      </div>
    </header>
  );
}
