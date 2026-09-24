import type { Service } from "../../types";
import Button from "../ui/Button";
import GalleryGrid from "../ui/GalleryGrid";
import Img from "../ui/Img";
import { Container, Eyebrow, PageWrap } from "../ui/layout";

interface Props {
  service: Service;
  onBack: () => void;
  onBook: () => void;
}

export default function ServiceDetail({ service, onBack, onBook }: Props) {
  return (
    <PageWrap className="min-h-svh">
      {/* Background = service.bg */}
      <div className="relative h-[40svh] sm:h-[50vh] min-h-[240px] overflow-hidden">
        <Img src={service.bg} alt={service.title} className="opacity-50" eager />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #0a0906 30%, rgba(10,9,6,0.3) 100%)" }}
        />
        <Container className="absolute inset-x-0 bottom-0 pb-8 md:pb-10">
          <Eyebrow className="mb-2">{service.tag} / Service</Eyebrow>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl text-[#f0ece4] break-words">{service.title}</h1>
        </Container>
      </div>

      <Container className="py-10 md:py-16">
        <Button variant="muted" onClick={onBack} className="mb-8 md:mb-10">
          ← Back to All Services
        </Button>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mb-12 md:mb-16">
          <div>
            <p className="font-body text-base sm:text-lg text-[#f0ece4] leading-relaxed mb-6">{service.short}</p>
            <div className="w-12 h-px bg-[#c9a96e] mb-6" />
            <p className="font-body text-[#8a7f6e] leading-relaxed mb-8">{service.description}</p>

            <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
              {service.subServices.map((sub) => (
                <span
                  key={sub}
                  className="font-mono-label text-[10px] tracking-[0.15em] uppercase border border-[#2a2318] text-[#8a7f6e] px-3 py-1.5"
                >
                  {sub}
                </span>
              ))}
            </div>

            <Button onClick={onBook}>Book This Service — View Pricing</Button>
          </div>

          {/* Right side = service.main */}
          <div className="overflow-hidden bg-[#121008] aspect-[4/5] md:aspect-auto md:h-[480px] lg:h-[520px]">
            <Img src={service.main} alt={`${service.title} — featured`} />
          </div>
        </div>

        <Eyebrow className="mb-6">Gallery</Eyebrow>
        <GalleryGrid
          items={service.images.map((img, i) => ({ img, alt: `${service.title} ${i + 1}`, tall: i === 0 }))}
        />
      </Container>
    </PageWrap>
  );
}