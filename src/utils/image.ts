// Images that should be shown whole (never cropped) inside a dark box.
const CONTAIN = ["/assets/logo/", "/assets/branding/main."];

export function imgFit(src: string) {
  return CONTAIN.some((p) => src.includes(p))
    ? "object-contain p-6 sm:p-10 bg-[#0a0906]"
    : "object-cover";
}

// Exact vertical crop point (% from top) for photos where a face needs to stay
// in frame when a short/wide cell forces a crop. Anything not listed here just
// crops from the center, which is fine for product/building/decor/macro shots.
const FOCUS_Y: Record<string, number> = {
  "/assets/wedding/1.jpg": 48,
  "/assets/wedding/2.jpg": 31,
  "/assets/wedding/3.jpg": 45,
  "/assets/wedding/4.jpg": 39,
  "/assets/wedding/5.jpg": 44,
  "/assets/gallery/wedding-6.jpg": 34,

  "/assets/portrait/1.jpg": 19,
  "/assets/portrait/2.jpg": 19,
  "/assets/portrait/3.jpg": 65,
  "/assets/portrait/4.jpg": 70,
  "/assets/portrait/5.jpg": 52,
  "/assets/gallery/others-1.jpg": 62,
  "/assets/gallery/others-2.jpg": 84,
  "/assets/gallery/college-2.jpg": 67,

  "/assets/event/1.jpg": 26,
  "/assets/event/2.jpg": 45,
  "/assets/event/3.jpg": 42,
  "/assets/event/4.jpg": 62,
  "/assets/event/5.jpg": 61,
  "/assets/gallery/event-6.jpg": 49,
  "/assets/gallery/event-7.jpg": 69,
  "/assets/gallery/event-8.jpg": 88,
  "/assets/gallery/concert-6.jpg": 88,
  "/assets/gallery/concert-7.jpg": 27,
  "/assets/gallery/awards-2.jpg": 66,
  "/assets/gallery/awards-3.jpg": 12,

  "/assets/videography/1.jpg": 22,
  "/assets/videography/2.jpg": 50,
  "/assets/videography/3.jpg": 26,
  "/assets/videography/4.jpg": 51,
  "/assets/videography/5.jpg": 47,

  "/assets/founder/pugal.jpg": 22,
};

// Applied as inline style because Tailwind can't see class names built through interpolation.
export function imgPos(src: string): { objectPosition?: string } {
  const y = FOCUS_Y[src];
  return y !== undefined ? { objectPosition: `50% ${y}%` } : {};
}