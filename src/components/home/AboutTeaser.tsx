import { IMAGES } from "../../config";
import type { Navigate } from "../../types";
import Button from "../ui/Button";
import Img from "../ui/Img";
import { Eyebrow, Section } from "../ui/layout";

export default function AboutTeaser({ navigate }: { navigate: Navigate }) {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div className="overflow-hidden bg-[#121008] h-[360px] sm:h-[440px] lg:h-[480px]">
            <Img
              src={IMAGES.founder}
              alt="Pugal D photographer"
              className="hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="hidden sm:block absolute -bottom-5 -right-5 w-40 h-40 border border-[#2a2318] pointer-events-none" />
          <div className="hidden sm:block absolute -top-3 -left-3 w-20 h-20 border border-[#c9a96e] opacity-25 pointer-events-none" />
        </div>
        <div>
          <Eyebrow>About Visual Frames</Eyebrow>
          <h2 className="font-display text-4xl sm:text-5xl text-[#f0ece4] leading-tight mb-4">
            A Vision for
            <br />
            <em>Every Story</em>
          </h2>
          <div className="w-12 h-px bg-[#c9a96e] mb-6" />
          <p className="font-body text-[#8a7f6e] leading-relaxed mb-4">
            Visual Frames began with a single passion: to transform fleeting moments into timeless memories. Led by
            Pugal D, our team blends artistic excellence with technical mastery across photography, videography, and
            creative design.
          </p>
          <p className="font-body text-[#8a7f6e] leading-relaxed mb-8">
            Based in Udumalpet and Pollachi, Tamil Nadu, serving clients nationwide. We believe authenticity is the
            main element to tell a true story through images.
          </p>
          <Button variant="link" onClick={() => navigate("about")}>
            Our Full Story →
          </Button>
        </div>
      </div>
    </Section>
  );
}