import { GALLERY } from "../../data/gallery";
import type { Navigate } from "../../types";
import GalleryGrid from "../ui/GalleryGrid";
import { Section } from "../ui/layout";
import SectionHeader from "../ui/SectionHeader";

export default function PortfolioTeaser({ navigate }: { navigate: Navigate }) {
  return (
    <Section>
      <SectionHeader tag="Selected Work" title="Portfolio" actionLabel="Full Gallery →" onAction={() => navigate("portfolio")} />
      <GalleryGrid items={GALLERY.slice(0, 6)} onItemClick={() => navigate("portfolio")} />
    </Section>
  );
}