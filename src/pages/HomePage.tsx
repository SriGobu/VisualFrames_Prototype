import AboutTeaser from "../components/home/AboutTeaser";
import CtaSection from "../components/home/CtaSection";
import Hero from "../components/home/Hero";
import PortfolioTeaser from "../components/home/PortfolioTeaser";
import ProcessTeaser from "../components/home/ProcessTeaser";
import ServicesTeaser from "../components/home/ServicesTeaser";
import type { Navigate } from "../types";

export default function HomePage({ navigate }: { navigate: Navigate }) {
  return (
    <>
      <Hero navigate={navigate} />
      <AboutTeaser navigate={navigate} />
      <ServicesTeaser navigate={navigate} />
      <PortfolioTeaser navigate={navigate} />
      <ProcessTeaser navigate={navigate} />
      <CtaSection navigate={navigate} />
    </>
  );
}