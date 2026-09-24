import type { Page } from "../types";

export const NAV_ITEMS: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Services", page: "services" },
  { label: "Pricing", page: "pricing" },
  { label: "Portfolio", page: "portfolio" },
  { label: "Process", page: "process" },
  { label: "Contact", page: "contact" },
];

export const PAGE_TITLES: Record<Page, string> = {
  home: "Visual Frames | Photography & Videography",
  about: "About | Visual Frames",
  services: "Services | Visual Frames",
  pricing: "Pricing | Visual Frames",
  portfolio: "Portfolio | Visual Frames",
  process: "Process | Visual Frames",
  contact: "Contact | Visual Frames",
  terms: "Terms & Conditions | Visual Frames",
  privacy: "Privacy Policy | Visual Frames",
};