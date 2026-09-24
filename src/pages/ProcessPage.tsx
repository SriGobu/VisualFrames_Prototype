import { ProcessStepRow } from "../components/cards/ProcessStep";
import { Card } from "../components/ui/Card";
import { Container, Eyebrow, PageWrap } from "../components/ui/layout";
import SectionHeader from "../components/ui/SectionHeader";
import { PROCESS_STEPS } from "../data/process";

const DELIVERY = [
  { label: "Sneak Peek Gallery", value: "48 Hours", sub: "10–20 curated images from your event" },
  { label: "Full Photo Gallery", value: "2–3 Weeks", sub: "Completely edited and colour-graded" },
  { label: "Cinematic Film", value: "6–8 Weeks", sub: "Full post-production, grading, and sound design" },
];

const FAQS = [
  { q: "How far in advance should I book?", a: "For weddings, we recommend booking 6–12 months in advance. For other sessions, 4–8 weeks is generally sufficient, though we often accommodate shorter notice." },
  { q: "Do you travel for shoots?", a: "Yes. We are based in Udumalpet and Pollachi, Tamil Nadu, and we travel nationwide for weddings, events, and commercial projects. Travel costs are quoted separately." },
  { q: "What formats do you deliver in?", a: "All photographs are delivered as high-resolution JPEGs via a private online gallery. Films are delivered as MP4 files optimised for both large screens and social media." },
  { q: "Do you offer packages?", a: "Yes. Check our Pricing page for standard reel, event, product, and corporate shoot rates, or message us on WhatsApp for a bespoke quote tailored to your requirements." },
  { q: "Can I request specific shots or poses?", a: "Absolutely. We encourage a detailed pre-shoot brief. Share your references, mood boards, and must-have shots — we'll factor everything into our preparation." },
];

export default function ProcessPage() {
  return (
    <PageWrap>
      <Container className="py-12 md:py-16">
        <SectionHeader
          tag="How It Works"
          title="Our Process"
          subtitle="A clear, considered workflow designed to make every booking seamless — from first enquiry to final delivery."
        />

        <div className="space-y-px mb-16 md:mb-20">
          {PROCESS_STEPS.map((p) => (
            <ProcessStepRow key={p.step} step={p} />
          ))}
        </div>

        <div className="mb-16 md:mb-20">
          <Eyebrow className="mb-8">Delivery Timelines</Eyebrow>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {DELIVERY.map((item) => (
              <Card key={item.label} className="p-6 md:p-8">
                <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-[#8a7f6e] mb-3">{item.label}</p>
                <p className="font-display text-3xl sm:text-4xl text-[#c9a96e] mb-2">{item.value}</p>
                <p className="font-body text-sm text-[#5a5248]">{item.sub}</p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Eyebrow className="mb-8">Common Questions</Eyebrow>
          <div className="space-y-px">
            {FAQS.map((item) => (
              <Card key={item.q} className="bg-[#121008] p-5 sm:p-6">
                <p className="font-display text-base text-[#f0ece4] mb-3">{item.q}</p>
                <p className="font-body text-sm text-[#8a7f6e] leading-relaxed">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </PageWrap>
  );
}