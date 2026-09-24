import { SERVICES } from "../../data/services";
import type { Navigate } from "../../types";
import ServiceCard from "../cards/ServiceCard";
import Button from "../ui/Button";
import { Section } from "../ui/layout";
import SectionHeader from "../ui/SectionHeader";

export default function ServicesTeaser({ navigate }: { navigate: Navigate }) {
  return (
    <Section alt>
      <SectionHeader tag="What We Do" title="Services" actionLabel="All Services →" onAction={() => navigate("services")} />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
        {SERVICES.map((s) => (
          <ServiceCard key={s.id} service={s} onClick={() => navigate("services", s.id)} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Button variant="muted" onClick={() => navigate("pricing")}>
          See Pricing →
        </Button>
      </div>
    </Section>
  );
}