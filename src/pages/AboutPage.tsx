import { IMAGES } from "../config";
import { ABOUT_STATS } from "../data/stats";
import { Card, FeatureCard } from "../components/ui/Card";
import Img from "../components/ui/Img";
import { Container, Eyebrow, PageWrap } from "../components/ui/layout";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import Stat from "../components/ui/Stat";

const STORY = [
  "Visual Frames was founded with one belief: that every moment worth living is worth preserving beautifully. What began as a passion for capturing raw, unscripted emotion has grown into a full-service creative studio trusted by 100+ clients and 10+ organizations across South India and beyond.",
  "We believe in authenticity as the main element to tell a true story through images — mixing accurate techniques with personal creative perception in the field of photography and videography.",
  "Our approach is simple: listen deeply, plan meticulously, and then disappear into the background so that the real moments can happen. The camera follows life, not the other way around.",
  "From the grandeur of a destination wedding in Rajasthan to the quiet tenderness of a newborn session in a Pollachi home, from editorial branding shoots for startups to cinematic short films — every project receives the same commitment to craft.",
];

const VALUES = [
  ["Authenticity", "Real moments, never staged"],
  ["Craft", "Technical excellence in every frame"],
  ["Story", "Narrative-driven imagery"],
  ["Trust", "100+ clients, 10+ organizations"],
];

const WHY_US = [
  { title: "Cinematic Storytelling", desc: "We approach every project as a visual narrative — with a beginning, emotional arc, and resolution. Not snapshots, stories." },
  { title: "Award-Winning Work", desc: "Recognised across the industry for excellence in wedding and lifestyle photography across South India." },
  { title: "48-Hour Sneak Peek", desc: "Receive a curated preview gallery within 48 hours of your event so you can share your joy immediately." },
  { title: "Client Portal", desc: "Track editing progress, view preview galleries, and receive real-time updates via WhatsApp and email." },
  { title: "Nationwide Coverage", desc: "Based in Udumalpet and Pollachi, Tamil Nadu. We travel nationwide for weddings, events, and commercial shoots." },
  { title: "Full Creative Suite", desc: "Photography, videography, branding, logo design, and video editing — everything under one creative roof." },
];

export default function AboutPage() {
  return (
    <PageWrap>
      <PageHero image={IMAGES.about} alt="Visual Frames founder shooting at golden hour">
        <Eyebrow>About Us</Eyebrow>
        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl text-[#f0ece4]">Visual Frames</h1>
        <p className="font-mono-label text-[11px] sm:text-[12px] tracking-[0.3em] uppercase text-[#8a7f6e] mt-3">
          Photography & Videography
        </p>
      </PageHero>

      <Container className="py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl text-[#f0ece4] mb-6">A Vision for Every Story</h2>
            <div className="w-12 h-px bg-[#c9a96e] mb-8" />
            <div className="space-y-5 font-body text-[#8a7f6e] leading-relaxed">
              {STORY.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative border border-[#2a2318] overflow-hidden h-[440px] sm:h-[420px]">
              <Img src={IMAGES.founder} alt="Pugal D — Lead Photographer at Visual Frames" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(10,9,6,0.95) 0%, rgba(10,9,6,0.55) 45%, transparent 75%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <p className="font-display text-2xl text-[#f0ece4] mb-1">Pugal D</p>
                <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-[#c9a96e] mb-3">
                  Founder & Lead Photographer
                </p>
                <p className="font-body text-sm text-[#8a7f6e] leading-relaxed">
                  With a camera in hand and an eye trained to find the extraordinary in the ordinary, Pugal D brings
                  creative vision and technical expertise to every frame.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {VALUES.map(([title, desc]) => (
                <Card key={title} className="p-4 sm:p-5">
                  <p className="font-display text-sm text-[#c9a96e] mb-1">{title}</p>
                  <p className="font-body text-xs text-[#8a7f6e]">{desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-[#121008] border-y border-[#2a2318] py-12 md:py-16">
        <Container className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">
          {ABOUT_STATS.map((s) => (
            <Stat key={s.label} {...s} size="lg" />
          ))}
        </Container>
      </div>

      <Container className="py-14 md:py-20">
        <SectionHeader tag="Why Visual Frames" title="What Sets Us Apart" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {WHY_US.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </PageWrap>
  );
}