import { useCallback, useEffect, useState } from "react";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import { PAGE_TITLES } from "./data/nav";
import { PRIVACY_CONTENT, TERMS_CONTENT } from "./data/legal";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import PortfolioPage from "./pages/PortfolioPage";
import PricingPage from "./pages/PricingPage";
import ProcessPage from "./pages/ProcessPage";
import ServicesPage from "./pages/ServicesPage";
import type { Navigate, Page } from "./types";

function renderPage(page: Page, serviceId: string | null, navigate: Navigate) {
  switch (page) {
    case "home":
      return <HomePage navigate={navigate} />;
    case "about":
      return <AboutPage />;
    case "services":
      return <ServicesPage serviceId={serviceId} navigate={navigate} />;
    case "pricing":
      return <PricingPage />;
    case "portfolio":
      return <PortfolioPage />;
    case "process":
      return <ProcessPage />;
    case "contact":
      return <ContactPage />;
    case "terms":
      return <LegalPage title="Terms & Conditions" content={TERMS_CONTENT} />;
    case "privacy":
      return <LegalPage title="Privacy Policy" content={PRIVACY_CONTENT} />;
  }
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [serviceId, setServiceId] = useState<string | null>(null);

  const navigate = useCallback<Navigate>((p, id) => {
    setPage(p);
    setServiceId(p === "services" ? (id ?? null) : null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLES[page];
  }, [page]);

  return (
    <div className="min-h-svh bg-[#0a0906] text-[#f0ece4] overflow-x-hidden">
      <NavBar current={page} navigate={navigate} />
      <main>{renderPage(page, serviceId, navigate)}</main>
      <Footer navigate={navigate} />
    </div>
  );
}