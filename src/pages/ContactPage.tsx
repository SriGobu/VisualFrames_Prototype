import { IMAGES } from "../config";
import { SOCIAL_LINKS } from "../data/social";
import SocialLinkCard from "../components/cards/SocialLinkCard";
import { Container, Eyebrow, PageWrap } from "../components/ui/layout";
import PageHero from "../components/ui/PageHero";

export default function ContactPage() {
  return (
    <PageWrap>
      <PageHero
        image={IMAGES.contact}
        alt="Contact Visual Frames"
        imageOpacity="opacity-15"
        overlay="linear-gradient(to bottom, #0a0906 0%, rgba(10,9,6,0.7) 50%, #0a0906 100%)"
        className="py-14 md:py-20"
      >
        <Eyebrow>Reach Out</Eyebrow>
        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl text-[#f0ece4] mb-4">
          Get in
          <br />
          <em className="text-[#c9a96e]">Touch</em>
        </h1>
        <p className="font-body text-[#8a7f6e] max-w-md mx-auto leading-relaxed">
          Whether you're planning a wedding, a brand project, or a milestone event — choose the channel that suits you
          best and let's start the conversation.
        </p>
      </PageHero>

      <Container size="4xl" className="py-12 md:py-16">
        <div className="grid gap-3 sm:gap-4">
          {SOCIAL_LINKS.map((link) => (
            <SocialLinkCard key={link.name} link={link} />
          ))}
        </div>

        <div className="mt-12 md:mt-16 border border-[#2a2318] p-6 sm:p-10 text-center">
          <Eyebrow>Based In</Eyebrow>
          <p className="font-display text-xl sm:text-2xl text-[#f0ece4] mb-2">Udumalpet & Pollachi, Tamil Nadu</p>
          <p className="font-body text-[#8a7f6e] mb-2">Serving Tamil Nadu · Andhra Pradesh · Telangana · Worldwide</p>
          <p className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-[#5a5248]">Mon – Sat · 9 AM – 7 PM IST</p>
        </div>
      </Container>
    </PageWrap>
  );
}