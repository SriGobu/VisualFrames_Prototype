import ServiceCard from "../components/cards/ServiceCard";
import ServiceDetail from "../components/services/ServiceDetail";
import { Container, PageWrap } from "../components/ui/layout";
import SectionHeader from "../components/ui/SectionHeader";
import { SERVICES } from "../data/services";
import type { Navigate } from "../types";

interface Props {
  serviceId: string | null;
  navigate: Navigate;
}

export default function ServicesPage({ serviceId, navigate }: Props) {
  const active = SERVICES.find((s) => s.id === serviceId);

  if (active) {
    return (
      <ServiceDetail
        service={active}
        onBack={() => navigate("services")}
        onBook={() => navigate("pricing")}
      />
    );
  }

  return (
    <PageWrap>
      <Container className="py-12 md:py-16">
        <SectionHeader
          tag="What We Offer"
          title="Services"
          subtitle="Creative disciplines from wedding photography to brand design, decor and institutional coverage — all delivered with the same commitment to quality and storytelling."
        />
        <div className="grid md:grid-cols-2 gap-px bg-[#2a2318]">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} service={s} variant="full" onClick={() => navigate("services", s.id)} />
          ))}
        </div>
      </Container>
    </PageWrap>
  );
}