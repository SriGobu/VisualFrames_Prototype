import { useEffect, useState } from "react";
import { DEFAULT_WA_MESSAGE, WHATSAPP_DISPLAY, whatsappLink } from "../../config";
import { NAV_ITEMS } from "../../data/nav";
import { useScrollY } from "../../hooks/useScrollY";
import type { Navigate, Page } from "../../types";
import Button from "../ui/Button";
import Logo from "./Logo";

export default function NavBar({ current, navigate }: { current: Page; navigate: Navigate }) {
  const scrollY = useScrollY();
  const [open, setOpen] = useState(false);
  const solid = scrollY > 60 || current !== "home" || open;

  // close the mobile menu whenever the page changes
  useEffect(() => {
    setOpen(false);
  }, [current]);

  // lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkCls = (page: Page) =>
    `font-mono-label uppercase transition-colors duration-300 ${
      current === page ? "text-[#c9a96e]" : "text-[#8a7f6e] hover:text-[#c9a96e]"
    }`;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500 pt-[env(safe-area-inset-top)]"
      style={{
        background: solid ? "rgba(10,9,6,0.96)" : "transparent",
        backdropFilter: solid ? "blur(12px)" : "none",
        borderBottom: solid ? "1px solid #2a2318" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-3 flex items-center justify-between gap-6">
        <button onClick={() => navigate("home")} className="shrink-0" aria-label="Visual Frames home">
          <Logo size="nav" />
        </button>

        {/* Desktop / large tablet */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_ITEMS.map(({ label, page }) => (
            <button key={page} onClick={() => navigate(page)} className={`${linkCls(page)} text-[11px] tracking-[0.2em]`}>
              {label}
            </button>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button variant="outline" size="sm" href={whatsappLink(DEFAULT_WA_MESSAGE)}>
            WhatsApp Us
          </Button>
        </div>

        {/* Phone / small tablet */}
        <button
          className="lg:hidden text-[#c9a96e] shrink-0 p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-px bg-current transition-transform ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-px bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-current transition-transform ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0a0906] border-t border-[#2a2318] px-5 sm:px-6 py-6 flex flex-col gap-5 max-h-[calc(100svh-4rem)] overflow-y-auto">
          {NAV_ITEMS.map(({ label, page }) => (
            <button key={page} onClick={() => navigate(page)} className={`${linkCls(page)} text-[12px] tracking-[0.2em] text-left py-1`}>
              {label}
            </button>
          ))}
          <a
            href={whatsappLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-label text-[12px] tracking-[0.15em] text-[#c9a96e]"
          >
            {WHATSAPP_DISPLAY}
          </a>
        </div>
      )}
    </header>
  );
}