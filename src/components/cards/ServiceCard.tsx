import type { Service } from "../../types";
import Img from "../ui/Img";

interface Props {
  service: Service;
  onClick: () => void;
  variant?: "tile" | "full"; // tile = Home teaser, full = Services page
}

export default function ServiceCard({ service: s, onClick, variant = "tile" }: Props) {
  if (variant === "tile") {
    return (
      <button
        onClick={onClick}
        className="group relative overflow-hidden bg-[#1a1510] border border-[#2a2318] hover:border-[#c9a96e] transition-all duration-300 text-left h-40 sm:h-52 lg:h-56"
      >
        <Img
          src={s.bg}
          alt={s.title}
          className="opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(10,9,6,0.9) 0%, rgba(10,9,6,0.2) 60%)" }}
        />
        <div className="absolute bottom-0 left-0 p-3 sm:p-4">
          <p className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-[#c9a96e] mb-0.5">{s.tag}</p>
          <p className="font-display text-base sm:text-lg leading-tight text-[#f0ece4]">{s.title}</p>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="group bg-[#0a0906] relative overflow-hidden text-left hover:bg-[#121008] transition-colors duration-300 min-h-[260px] sm:min-h-[280px] flex flex-col justify-end"
    >
      <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
        <Img src={s.bg} alt={s.title} className="group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(10,9,6,0.98) 0%, rgba(10,9,6,0.5) 100%)" }}
      />
      <div className="relative p-6 sm:p-8 w-full">
        <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-[#c9a96e] mb-2">{s.tag}</p>
        <h3 className="font-display text-2xl sm:text-3xl text-[#f0ece4] mb-3 group-hover:text-[#c9a96e] transition-colors duration-300">
          {s.title}
        </h3>
        <div className="w-8 h-px bg-[#c9a96e] mb-3" />
        <p className="font-body text-sm text-[#8a7f6e] leading-relaxed max-w-sm mb-3">{s.short}</p>
        <div className="flex flex-wrap gap-x-1.5 gap-y-1">
          {s.subServices.map((sub, i) => (
            <span key={sub} className="font-mono-label text-[9px] tracking-[0.1em] uppercase text-[#5a5248]">
              {sub}
              {i < s.subServices.length - 1 ? " ·" : ""}
            </span>
          ))}
        </div>
        <p className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] mt-4 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
          Learn More →
        </p>
      </div>
    </button>
  );
}