import type { Navigate } from "../../types";
import Button from "../ui/Button";
import { Eyebrow, Section } from "../ui/layout";

export default function CtaSection({ navigate }: { navigate: Navigate }) {
  return (
    <Section className="text-center">
      <Eyebrow>Ready to Begin?</Eyebrow>
      <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-[#f0ece4] mb-6">
        Let's Create
        <br />
        <em className="text-[#c9a96e]">Together</em>
      </h2>
      <p className="font-body text-[#8a7f6e] max-w-md mx-auto mb-10 leading-relaxed">
        Whether you're planning a wedding, milestone event, or brand project — we'd love to hear your story.
      </p>
      <Button size="lg" onClick={() => navigate("contact")}>
        Get in Touch
      </Button>
    </Section>
  );
}