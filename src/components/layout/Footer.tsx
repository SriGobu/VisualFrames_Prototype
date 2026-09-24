import { DEFAULT_WA_MESSAGE, WHATSAPP_DISPLAY, whatsappLink } from "../../config";
import { NAV_ITEMS } from "../../data/nav";
import { SOCIAL_LINKS } from "../../data/social";
import type { Navigate } from "../../types";
import { Container } from "../ui/layout";
import Logo from "./Logo";

const smallLink = "font-body text-sm text-[#5a5248] hover:text-[#c9a96e] transition-colors";
const legalLink =
  "font-mono-label text-[10px] tracking-[0.15em] uppercase text-[#5a5248] hover:text-[#c9a96e] transition-colors";
const colTitle = "font-mono-label text-[10px] tracking-[0.25em] uppercase text-[#8a7f6e] mb-4";

export default function Footer({ navigate }: { navigate: Navigate }) {
  return (
    <footer className="border-t border-[#2a2318] pt-12 pb-[calc(3rem+env(safe-area-inset-bottom))] bg-[#0a0906]">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          <div>
            <Logo size="nav" />
            <p className="font-body text-sm text-[#5a5248] mt-4 leading-relaxed max-w-xs">
              Professional photography, videography, branding, and creative production based in Udumalpet & Pollachi,
              Tamil Nadu — available nationwide.
            </p>
          </div>

          <div>
            <p className={colTitle}>Quick Links</p>
            <div className="flex flex-col gap-2 items-start">
              {NAV_ITEMS.map(({ label, page }) => (
                <button key={page} onClick={() => navigate(page)} className={`${smallLink} text-left`}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className={colTitle}>Contact</p>
            <div className="flex flex-col gap-2 mb-5">
              <a href={whatsappLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className={smallLink}>
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
              <p className="font-body text-sm text-[#5a5248]">Udumalpet & Pollachi, Tamil Nadu</p>
            </div>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-[#5a5248] hover:text-[#c9a96e] transition-colors p-1 -m-1"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#2a2318] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="font-mono-label text-[10px] tracking-[0.15em] text-[#3a3228]">
            © {new Date().getFullYear()} Visual Frames Photography & Videography. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <button onClick={() => navigate("terms")} className={legalLink}>
              Terms & Conditions
            </button>
            <button onClick={() => navigate("privacy")} className={legalLink}>
              Privacy Policy
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}