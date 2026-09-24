import { whatsappLink } from "../config";
import { PRICING_PLANS } from "../data/pricing";
import PricingCard from "../components/cards/PricingCard";
import Button from "../components/ui/Button";
import { Container, PageWrap } from "../components/ui/layout";
import SectionHeader from "../components/ui/SectionHeader";

export default function PricingPage() {
  return (
    <PageWrap>
      <Container className="py-12 md:py-16">
        <SectionHeader
          tag="Rates"
          title="Pricing"
          subtitle="Straightforward rates for our most-booked shoot types. Pick a plan below and message us directly on WhatsApp to lock in your date."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="border border-[#2a2318] p-6 sm:p-8 grid sm:grid-cols-2 gap-6">
          <div>
            <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-[#8a7f6e] mb-2">Editing Software</p>
            <p className="font-body text-sm text-[#f0ece4]">Camera shoots — Premiere Pro, After Effects</p>
            <p className="font-body text-sm text-[#f0ece4]">Mobile shoots — CapCut</p>
          </div>
          <div>
            <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-[#8a7f6e] mb-2">Please Note</p>
            <p className="font-body text-sm text-[#8a7f6e]">
              Travel expenses are excluded from the rates above and quoted separately based on location.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 md:mt-14">
          <p className="font-mono-label text-[11px] tracking-[0.2em] uppercase text-[#8a7f6e] mb-6">
            Need something custom — a wedding package or a multi-day event?
          </p>
          <Button variant="outline" href={whatsappLink("Hi Visual Frames, I'd like a custom quote for my project.")}>
            Request a Custom Quote
          </Button>
        </div>
      </Container>
    </PageWrap>
  );
}