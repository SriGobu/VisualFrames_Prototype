import { IMAGES } from "../../config";
import { HOME_STATS } from "../../data/stats";
import type { Navigate } from "../../types";
import Button from "../ui/Button";
import Img from "../ui/Img";
import { Container, Eyebrow } from "../ui/layout";
import Stat from "../ui/Stat";

export default function Hero({ navigate }: { navigate: Navigate }) {
  return (
    <section className="relative min-h-svh flex items-end overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0906]">
        <Img src={IMAGES.hero} alt="Visual Frames videographer at golden hour" className="opacity-45" eager />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #0a0906 35%, rgba(10,9,6,0.4) 70%, rgba(10,9,6,0.65) 100%)" }}
        />
      </div>

      <Container className="relative z-10 pt-32 pb-12 sm:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <Eyebrow className="mb-5 sm:mb-6">Demo Location · Demo Location · Demo Location · Nationwide</Eyebrow>
            <h1 className="font-display text-5xl sm:text-7xl xl:text-8xl leading-[0.95] text-[#f0ece4] mb-6">
              Capturing
              <br />
              <em className="text-[#c9a96e]">Moments</em>
              <br />
              That Last
            </h1>
            <p className="font-body text-base sm:text-lg text-[#8a7f6e] max-w-md leading-relaxed mb-8 sm:mb-10">
              Award-winning photography, videography, branding, and creative production. Real emotions. Timeless
              frames.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button onClick={() => navigate("contact")}>Get in Touch</Button>
              <Button variant="subtle" onClick={() => navigate("portfolio")}>
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Founder card — only where there's room (laptop and up) */}
          <div className="hidden lg:flex justify-end">
            <div className="relative w-[280px] h-[360px]">
              <div className="w-full h-full overflow-hidden border border-[#2a2318]">
                <Img src={IMAGES.founder} alt="Pugal D — Visual Frames Photographer" eager />
              </div>
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(10,9,6,0.7) 0%, transparent 50%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-display text-lg text-[#f0ece4]">Pugal D</p>
                <p className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-[#c9a96e]">
                  Founder & Lead Photographer
                </p>
              </div>
              <div className="absolute -top-3 -right-3 w-12 h-12 border border-[#c9a96e] opacity-40" />
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-6 sm:gap-10">
          {HOME_STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </Container>
    </section>
  );
}