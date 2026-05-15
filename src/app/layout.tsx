/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
//@ts-ignore
import "../styles/globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GoodDeal — Compre e Venda com Confiança",
  description:
    "Marketplace brasileiro de produtos usados. Bikes, eletrônicos, esportes, moda e muito mais. Direto de pessoa para pessoa, com total segurança.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
