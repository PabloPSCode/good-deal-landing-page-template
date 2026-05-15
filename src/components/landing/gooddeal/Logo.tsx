import Image from "next/image";

interface LogoProps {
  light?: boolean;
}

export default function Logo({ light = false }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/images/logo.png"
        alt="GoodDeal"
        width={36}
        height={36}
        priority
        className="h-9 w-9 object-contain"
      />
      <span
        className={`font-secondary text-[20px] font-black tracking-[-0.03em] ${
          light ? "text-white" : "text-[#111827]"
        }`}
      >
        Good
        <span className={light ? "text-[#4d76f5]" : "text-[#2048e6]"}>
          Deal
        </span>
      </span>
    </div>
  );
}
