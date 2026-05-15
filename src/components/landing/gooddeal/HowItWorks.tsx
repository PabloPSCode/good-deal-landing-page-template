import SectionHeader from "./SectionHeader";

const STEPS = [
  {
    num: "01",
    title: "Crie sua conta grátis",
    desc: "Cadastre-se em menos de 1 minuto com e-mail ou Google. Sem taxa, sem mensalidade.",
  },
  {
    num: "02",
    title: "Publique seu anúncio",
    desc: "Tire fotos, descreva o produto e defina o preço. Seu anúncio fica no ar em segundos.",
  },
  {
    num: "03",
    title: "Negocie com segurança",
    desc: "Receba propostas pelo chat interno. Nosso sistema de avaliações garante transparência.",
  },
  {
    num: "04",
    title: "Conclua a venda",
    desc: "Combine a entrega ou retirada. O pagamento pode ser feito pelo nosso sistema protegido.",
  },
];

function StepCard({ step }: { step: (typeof STEPS)[number] }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border-t-[3px] border-transparent bg-white p-7 shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-all duration-[250ms] hover:-translate-y-1 hover:border-[#2048e6] hover:shadow-[0_8px_32px_rgba(32,72,230,0.12)]">
      <div className="pointer-events-none absolute right-4 top-3 select-none font-secondary text-[52px] font-black leading-none text-[#e8eefb]">
        {step.num}
      </div>
      <div className="mb-3 font-secondary text-[14px] font-extrabold text-[#2048e6]">
        {step.num}
      </div>
      <h3 className="mb-2 font-secondary text-[16px] font-bold text-[#111827]">
        {step.title}
      </h3>
      <p className="font-primary text-[13.5px] leading-[1.65] text-[#5a6280]">
        {step.desc}
      </p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="bg-[#f7f8fc] px-4 py-24 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeader
          eyebrow="Como Funciona"
          title="Simples do Início ao Fim"
          subtitle="Do anúncio à venda em poucos passos. Sem complicação, sem burocracia."
          align="center"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <StepCard key={s.num} step={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
