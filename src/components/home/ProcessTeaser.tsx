import { PROCESS_STEPS } from "../../data/process";
import type { Navigate } from "../../types";
import { ProcessStepCard } from "../cards/ProcessStep";
import { Section } from "../ui/layout";
import SectionHeader from "../ui/SectionHeader";

export default function ProcessTeaser({ navigate }: { navigate: Navigate }) {
  return (
    <Section alt>
      <SectionHeader tag="How It Works" title="Our Process" actionLabel="Full Process →" onAction={() => navigate("process")} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2a2318]">
        {PROCESS_STEPS.map((p) => (
          <ProcessStepCard key={p.step} step={p} />
        ))}
      </div>
    </Section>
  );
}