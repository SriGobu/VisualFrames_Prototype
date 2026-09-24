export const WHATSAPP_NUMBER = "910000000000";
export const WHATSAPP_DISPLAY = "+91 00000 00000";
export const DEFAULT_WA_MESSAGE = "Hi Visual Frames, I'd like to know more about your services.";

export const whatsappLink = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const IMAGES = {
  founder: "/assets/founder/pugal.jpg",
  hero: "/assets/hero/home-background.jpg",
  about: "/assets/about/about-background.jpg",
  contact:
    "https://images.unsplash.com/photo-1722952934661-dde241aeb591?w=1600&h=600&fit=crop&auto=format",
};