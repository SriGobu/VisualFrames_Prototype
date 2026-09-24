export type Page =
  | "home"
  | "about"
  | "services"
  | "pricing"
  | "portfolio"
  | "process"
  | "contact"
  | "terms"
  | "privacy";

// Pass a service id as the 2nd argument to open that service's detail page directly.
export type Navigate = (page: Page, serviceId?: string) => void;

export interface Service {
  id: string;
  tag: string;
  title: string;
  short: string;
  description: string;
  subServices: string[];
  images: string[]; // gallery images (1–5)
  bg: string; // hero/background image
  main: string; // main image shown on the right of the service detail
}