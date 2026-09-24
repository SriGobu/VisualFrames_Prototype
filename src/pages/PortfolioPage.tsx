import { useState } from "react";
import Button from "../components/ui/Button";
import FilterTabs from "../components/ui/FilterTabs";
import GalleryGrid from "../components/ui/GalleryGrid";
import { Container, PageWrap } from "../components/ui/layout";
import SectionHeader from "../components/ui/SectionHeader";
import { FULL_GALLERY, TABS } from "../data/gallery";
import { SOCIAL_LINKS } from "../data/social";

const instagram = SOCIAL_LINKS.find((l) => l.name === "Instagram")!;

export default function PortfolioPage() {
  const [tab, setTab] = useState("All");
  const items = tab === "All" ? FULL_GALLERY : FULL_GALLERY.filter((item) => item.tag === tab);

  return (
    <PageWrap>
      <Container className="py-12 md:py-16">
        <SectionHeader
          tag="Our Work"
          title="Portfolio"
          subtitle="A curated selection from across our photography, videography, and creative projects."
        />
        <FilterTabs tabs={TABS} active={tab} onChange={setTab} />
        <GalleryGrid items={items} />

        <div className="text-center mt-12 md:mt-16">
          <p className="font-mono-label text-[11px] tracking-[0.2em] uppercase text-[#8a7f6e] mb-6">
            See more of our work on Instagram
          </p>
          <Button variant="outline" href={instagram.href}>
            {instagram.handle} on Instagram
          </Button>
        </div>
      </Container>
    </PageWrap>
  );
}