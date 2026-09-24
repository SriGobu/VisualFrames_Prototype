import { whatsappLink } from "../../config";
import type { PRICING_PLANS } from "../../data/pricing";

type Plan = (typeof PRICING_PLANS)[number];

export default function PricingCard({ plan }: { plan: Plan }) {
  return (
    <a
      href={whatsappLink(`Hi Visual Frames, I'd like to book the ${plan.title} package.`)}
      target="_blank"
      rel="noopener noreferrer"
      className="group text-left border border-[#2a2318] hover:border-[#c9a96e] bg-[#121008] p-6 sm:p-8 transition-all duration-300 flex flex-col"
    >
      <h3 className="font-display text-2xl text-[#f0ece4] mb-1 group-hover:text-[#c9a96e] transition-colors">
        {plan.title}
      </h3>
      <p className="font-body text-xs text-[#5a5248] mb-6">{plan.note}</p>
      <div className="space-y-3 mb-8 flex-1">
        {plan.rows.map((row) => (
          <div key={row.device} className="flex items-baseline justify-between gap-3 border-t border-[#2a2318] pt-3">
            <span className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-[#8a7f6e]">{row.device}</span>
            <span className="font-display text-lg sm:text-xl text-[#c9a96e] text-right">{row.price}</span>
          </div>
        ))}
      </div>
      <p className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
        Book on WhatsApp →
      </p>
    </a>
  );
}