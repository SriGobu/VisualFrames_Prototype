import type { Service } from "../types";
import { PHOTOS, unsplash, picsum } from "./gallery"; // adjust the path/filename if yours differs

const { wedding: W, portrait: P, event: E, cars: C, video: V, branding: B } = PHOTOS;

// Builds { images, bg, main } from 7 Unsplash IDs:
// first 5 = gallery images, 6th = wide background, 7th = tall hero.
const fromIds = (ids: string[]) => ({
  images: ids.slice(0, 5).map((id) => unsplash(id, 1200)),
  bg: unsplash(ids[5], 1600, 900),
  main: unsplash(ids[6], 900, 1200),
});

// Placeholder set for services without picked Unsplash photos yet.
const fromPicsum = (seed: string) => ({
  images: [1, 2, 3, 4, 5].map((n) => picsum(`${seed}-${n}`, n % 2 ? 900 : 1200, n % 2 ? 1200 : 800)),
  bg: picsum(`${seed}-bg`, 1600, 900),
  main: picsum(`${seed}-main`, 900, 1200),
});

export const SERVICES: Service[] = [
  {
    id: "wedding-photography",
    tag: "01",
    title: "Wedding Photography",
    short: "Pre-wedding, wedding-day, post-wedding and bridal coverage — real emotion, editorial finish.",
    description:
      "From the first pre-wedding frame to the last post-wedding portrait, our wedding photography is built around real emotion rather than posed perfection. We cover every ritual, every candid glance, and every grand moment across pre-wedding sessions, the wedding day itself, bridal portraits, and post-wedding editorial shoots — delivered as a cohesive, cinematic gallery.",
    subServices: ["Pre-Wedding", "Wedding Day", "Post-Wedding", "Bridal Portraits"],
    ...fromIds([W.coupleWall, W.posing, W.facingEachOther, W.holdingFlowers, W.mirror, W.beachSunset, W.bouquet]),
  },
  {
    id: "portrait-photography",
    tag: "02",
    title: "Portrait Photography",
    short: "Personal portraits, model portfolios, and baby & kids sessions with a natural, editorial eye.",
    description:
      "Whether it's a personal portrait session, a model building their portfolio, or a milestone shoot for a little one, our portrait work is about drawing out personality in front of the camera. Studio lighting or natural light, directed poses or candid movement — every portrait session is tailored to how you want to be seen.",
    subServices: ["Portrait Sessions", "Model Portfolio", "Baby & Kids"],
    ...fromIds([P.womanNecklace, P.womanSmiling, P.womanBench, P.womanHat, P.manBlackTee, P.manCityNight, P.womanBrownVest]),
  },
  {
    id: "event-photography",
    tag: "03",
    title: "Event Photography & Videography",
    short: "Traditional functions, concerts, corporate events and birthdays — fully covered, photo and film.",
    description:
      "Events move fast and don't repeat themselves, so we cover them the way live broadcasts are covered — multiple angles, no missed moments. From traditional functions and religious ceremonies to concerts, corporate events, and birthday celebrations, we deliver both a complete photo gallery and short-form video coverage from the same shoot.",
    subServices: ["Traditional Functions", "Concerts & Live Events", "Corporate Events", "Birthday Events"],
    ...fromIds([E.crowdStage, E.stageLight, E.heartHand, E.bandPerforming, E.confetti, E.concertLights, E.celebrating]),
  },
  {
    id: "commercial-photography",
    tag: "04",
    title: "Commercial Photography",
    short: "Product, corporate, brand and advertising photography built for business results.",
    description:
      "Commercial photography needs to sell, not just look good. We shoot product photography with clean, precise lighting, corporate photography for teams and offices, brand imagery that matches your visual identity, and advertising photography built for campaigns — all delivered production-ready for print and digital.",
    subServices: ["Product Photography", "Corporate Photography", "Brand Photography", "Advertising Photography"],
    ...fromIds([C.orangeLambo, C.audiA4, C.mercedesC, C.porscheDirtRoad, C.redHood, C.roadTrees, C.goldenHour]),
  },
  {
    id: "videography",
    tag: "05",
    title: "Videography",
    short: "Wedding films, event videography, promotional and corporate videos — shot and edited in-house.",
    description:
      "Our videography team crafts short films, not raw event recordings — wedding films with a narrative arc, event videography that captures the energy of the room, promotional videos built to convert, and corporate videos for internal and external communication. Shot on professional cinema cameras and gimbals, edited in Premiere Pro and After Effects.",
    subServices: ["Wedding Films", "Event Videography", "Promotional Videos", "Corporate Videos"],
    ...fromIds([V.editVideo, V.monitor, V.podcast, V.cameraLaptop, V.editPhoto, V.liveBand, V.stageLight]),
  },
  {
    id: "branding-design",
    tag: "06",
    title: "Branding & Design",
    short: "Logo design, brand identity and social media creatives for businesses that need to stand out.",
    description:
      "A strong brand needs a strong mark. We design logos, build full brand identity systems — colour, type, tone — and produce ongoing social media creatives so your business looks as considered online as it does in person. Every project starts with strategy, not just a blank canvas.",
    subServices: ["Logo Design", "Brand Identity", "Social Media Creatives"],
    ...fromIds([B.notesPen, B.tabletApp, B.tabletPhotos, B.tabletSite, B.phoneTablet, B.paperWriting, B.laptopMan]),
  },
  {
    id: "decor",
    tag: "07",
    title: "Decor",
    short: "Event decoration and styling services",
    description:
      "Transform any space into a stunning visual experience with our event decoration and styling services. From elegant floral arrangements to creative lighting setups, we bring your vision to life.",
    subServices: ["Floral Design", "Lighting Setup", "Space Styling"],
    ...fromPicsum("vf-decor"), // placeholder — swap for fromIds([...7 Unsplash IDs]) later
  },
  {
    id: "organizations",
    tag: "08",
    title: "Organizations",
    short: "Professional photography and videography for organizations and institutions",
    description:
      "Capture your organization's people, events, achievements, and professional moments with our photography and videography services. From corporate events and institutional programs to team portraits and promotional content, we create visuals that represent your organization with clarity and impact.",
    subServices: ["Corporate Events", "Institutional Events", "Team & Group Photography", "Promotional Content"],
    ...fromPicsum("vf-org"), // placeholder — swap for fromIds([...7 Unsplash IDs]) later
  },
];