import type { PROCESS_STEPS } from "../../data/process";

type Step = (typeof PROCESS_STEPS)[number];

/** Compact card — Home teaser. */
export function ProcessStepCard({ step }: { step: Step }) {
  return (
    <div className="bg-[#121008] p-6 sm:p-8 hover:bg-[#1a1510] transition-colors duration-300">
      <p className="font-display text-4xl sm:text-5xl text-[#2a2318] mb-5 select-none">{step.step}</p>
      <h3 className="font-display text-base text-[#f0ece4] mb-3">{step.title}</h3>
      <div className="w-6 h-px bg-[#c9a96e] mb-3" />
      <p className="font-body text-xs text-[#8a7f6e] leading-relaxed">{step.desc}</p>
    </div>
  );
}

/** Full-width row — Process page. */
export function ProcessStepRow({ step }: { step: Step }) {
  return (
    <div className="grid md:grid-cols-[120px_1fr_1fr] gap-px bg-[#2a2318]">
      <div className="bg-[#0a0906] px-6 pt-6 md:p-8 flex items-center">
        <p className="font-display text-4xl md:text-6xl text-[#2a2318]">{step.step}</p>
      </div>
      <div className="bg-[#0a0906] px-6 pt-2 md:p-8 flex items-center">
        <h3 className="font-display text-xl md:text-2xl text-[#f0ece4]">{step.title}</h3>
      </div>
      <div className="bg-[#0a0906] p-6 md:p-8">
        <p className="font-body text-[#8a7f6e] leading-relaxed">{step.desc}</p>
      </div>
    </div>
  );
}