import type { GalleryItem } from "../components/ui/GalleryGrid";

export interface TaggedGalleryItem extends GalleryItem {
  tag: string;
}

export const TABS = [
  "All",
  "Weddings",
  "Portraits",
  "Events",
  "Commercial",
  "Videography",
  "Branding",
  "Decor",
  "Organizations",
  "Macro",
];

/**
 * Builds an Unsplash CDN URL from a photo ID (the "photo-xxxx" part of an
 * images.unsplash.com URL). Pass `h` as well to force a crop ratio.
 */
export const unsplash = (id: string, w = 1200, h?: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80${h ? `&h=${h}` : ""}`;

/**
 * Seeded placeholder (picsum.photos serves Unsplash-sourced photos). Same seed = same photo.
 * Used only where no matching Unsplash photo has been picked yet.
 */
export const picsum = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

// Unsplash photo IDs, grouped by portfolio category.
export const PHOTOS = {
  wedding: {
    coupleWall: "1544717304-14d94551b7dc",
    beachSunset: "1643813988885-22aee2b91982",
    posing: "1718183436619-3c6f5fd22c6a",
    facingEachOther: "1491858905701-dc9dc1f96909",
    bouquet: "1669128453417-dbda0a00e4d9",
    holdingFlowers: "1669128453403-8fc3c4b272b1",
    mirror: "1671116302821-d6fc9a003505",
    holdingHands: "1669128453389-5856378b86f2",
  },
  portrait: {
    womanNecklace: "1506863530036-1efeddceb993",
    manBlackTee: "1587397845856-e6cf49176c70",
    womanBlackTee: "1601412436009-d964bd02edbc",
    womanPonytail: "1674932668403-33398b81c92f",
    manGrayscale: "1509460913899-515f1df34fea",
    womanBench: "1571176027089-ef2446033c7f",
    womanBrownVest: "1650126909604-eea255ff507c",
    womanSmiling: "1589203832113-de9d078abc30",
    womanLongHair: "1650126909844-5c720034d9ef",
    manHandsFolded: "1641214880602-3c9cd45eadf5",
    manBlackLongSleeve: "1571216690333-2efa110cc981",
    manCityNight: "1653983539803-4b9890500bf5",
    womanHat: "1684590973400-15419be67a3c",
  },
  event: {
    concertLights: "1459749411175-04bf5292ceea",
    crowdStage: "1563841930606-67e2bce48b78",
    stageLight: "1470229722913-7c0e2dbbafd3",
    heartHand: "1429962714451-bb934ecdc4ec",
    concertField: "1533174072545-7a4b6ad7a6c3",
    frontOfStage: "1514525253161-7a46d19cd819",
    watchingBand: "1565035010268-a3816f98589a",
    bandPerforming: "1524368535928-5b5e00ddc76b",
    watchingConcert: "1522158637959-30385a09e0da",
    crowdLightedStage: "1540039155733-5bb30b53aa14",
    celebrating: "1509824227185-9c5a01ceba0d",
    crowdConcert: "1450044804117-534ccd6e6a3a",
    confetti: "1603910234616-3b5f4a6be2b4",
  },
  cars: {
    orangeLambo: "1525609004556-c46c7d6cf023",
    roadTrees: "1541348263662-e068662d82af",
    audiA4: "1621252792374-2b79e3fcf295",
    mercedesC: "1597858520171-563a8e8b9925",
    porscheDirtRoad: "1609386464913-4cbfa39de540",
    redHood: "1508974491678-7ec251d629fd",
    goldenHour: "1537041373298-55dbb337e651",
  },
  video: {
    editVideo: "1781606989257-6484c82d5560",
    monitor: "1785439537417-f13e2ebd5bf9",
    podcast: "1764664035163-f8f29058e557",
    cameraLaptop: "1780534595992-dbba36ba3385",
    editPhoto: "1487537708572-3c850b5e856e",
    liveBand: "1524368535928-5b5e00ddc76b",
    stageLight: "1470229722913-7c0e2dbbafd3",
  },
  branding: {
    notesPen: "1719179497918-f43bec73cfde",
    tabletApp: "1781606989242-2f2fe281d227",
    tabletPhotos: "1778854097508-5d70445f2dc5",
    tabletSite: "1781606989061-420b8dda8a17",
    phoneTablet: "1781606989147-a0facf592e30",
    paperWriting: "1432888498266-38ffec3eaf0a",
    laptopMan: "1632188006065-9db14ac39120",
  },
};

const P = PHOTOS;

// Placeholder for categories without picked Unsplash photos yet.
const ph = (seed: string, tall = false) =>
  tall ? picsum(seed, 900, 1200) : picsum(seed, 1200, 800);

// Portfolio page — every item's `tag` must match one of the TABS above.
export const FULL_GALLERY: TaggedGalleryItem[] = [
  // ── Weddings
  { img: unsplash(P.wedding.coupleWall), alt: "Wedding couple beside a beige wall", tag: "Weddings", tall: true },
  { img: unsplash(P.wedding.beachSunset), alt: "Bride and groom embracing on the beach at sunset", tag: "Weddings" },
  { img: unsplash(P.wedding.posing), alt: "Bride and groom posing", tag: "Weddings" },
  { img: unsplash(P.wedding.facingEachOther), alt: "Bride and groom facing each other", tag: "Weddings" },
  { img: unsplash(P.wedding.bouquet), alt: "Bridal bouquet of white flowers", tag: "Weddings", tall: true },
  { img: unsplash(P.wedding.holdingFlowers), alt: "Couple holding flowers", tag: "Weddings" },

  // ── Portraits
  { img: unsplash(P.portrait.womanNecklace), alt: "Grayscale portrait of a woman wearing a necklace", tag: "Portraits" },
  { img: unsplash(P.portrait.womanSmiling), alt: "Smiling woman in a white shirt", tag: "Portraits" },
  { img: unsplash(P.portrait.womanBench), alt: "Woman sitting on a bench", tag: "Portraits", tall: true },
  { img: unsplash(P.portrait.womanHat), alt: "Woman in a hat and plaid shirt", tag: "Portraits" },
  { img: unsplash(P.portrait.manBlackTee), alt: "Man in a black crew-neck shirt", tag: "Portraits" },
  { img: unsplash(P.portrait.manCityNight), alt: "Man standing in a city at night", tag: "Portraits" },
  { img: unsplash(P.portrait.manGrayscale), alt: "Grayscale portrait of a man", tag: "Portraits" },
  { img: unsplash(P.portrait.womanBrownVest), alt: "Woman in a brown vest", tag: "Portraits" },

  // ── Events
  { img: unsplash(P.event.concertLights), alt: "Concert crowd under stage lights", tag: "Events", tall: true },
  { img: unsplash(P.event.crowdStage), alt: "Crowd facing the stage", tag: "Events" },
  { img: unsplash(P.event.stageLight), alt: "Stage lights over the audience", tag: "Events" },
  { img: unsplash(P.event.heartHand), alt: "Fan making a heart gesture at a concert", tag: "Events" },
  { img: unsplash(P.event.concertField), alt: "People gathering on a concert field", tag: "Events" },
  { img: unsplash(P.event.frontOfStage), alt: "Group of people in front of a stage", tag: "Events" },
  { img: unsplash(P.event.watchingBand), alt: "Audience watching a band on stage", tag: "Events", tall: true },
  { img: unsplash(P.event.bandPerforming), alt: "Band performing in front of a crowd", tag: "Events" },
  { img: unsplash(P.event.watchingConcert), alt: "Group of people watching a concert", tag: "Events" },
  { img: unsplash(P.event.crowdLightedStage), alt: "Crowd facing a lit stage", tag: "Events" },
  { img: unsplash(P.event.celebrating), alt: "Group of people celebrating an occasion", tag: "Events" },
  { img: unsplash(P.event.crowdConcert), alt: "Crowd of people at a concert", tag: "Events" },
  { img: unsplash(P.event.confetti), alt: "Concert crowd with purple confetti", tag: "Events" },

  // ── Commercial
  { img: unsplash(P.cars.orangeLambo), alt: "Orange Lamborghini", tag: "Commercial", tall: true },
  { img: unsplash(P.cars.roadTrees), alt: "Black car on a tree-lined road", tag: "Commercial" },
  { img: unsplash(P.cars.audiA4), alt: "Black Audi A4 on the road", tag: "Commercial" },
  { img: unsplash(P.cars.mercedesC), alt: "Black Mercedes-Benz C-Class", tag: "Commercial" },
  { img: unsplash(P.cars.porscheDirtRoad), alt: "Black Porsche 911 on a dirt road", tag: "Commercial" },
  { img: unsplash(P.cars.redHood), alt: "Red sports car hood detail", tag: "Commercial" },
  { img: unsplash(P.cars.goldenHour), alt: "Car on the road at golden hour", tag: "Commercial" },

  // ── Videography
  { img: unsplash(P.video.editVideo), alt: "Editing video on a tablet", tag: "Videography", tall: true },
  { img: unsplash(P.video.monitor), alt: "Viewing footage on a handheld monitor", tag: "Videography" },
  { img: unsplash(P.video.podcast), alt: "Podcast recording setup with camera and microphones", tag: "Videography" },
  { img: unsplash(P.video.cameraLaptop), alt: "Digital camera beside a laptop", tag: "Videography" },
  { img: unsplash(P.video.editPhoto), alt: "Editing photos on a computer", tag: "Videography" },

  // ── Branding (the logo is yours, so it stays a local file)
  { img: "/assets/logo/logo-cream.png", alt: "Visual Frames logo", tag: "Branding" },
  { img: unsplash(P.branding.notesPen), alt: "Sketching design notes with a pen", tag: "Branding", tall: true },
  { img: unsplash(P.branding.tabletApp), alt: "Tablet showing app interface designs", tag: "Branding" },
  { img: unsplash(P.branding.tabletPhotos), alt: "Tablet displaying photos on a wooden surface", tag: "Branding" },
  { img: unsplash(P.branding.tabletSite), alt: "Tablet displaying a website design", tag: "Branding" },
  { img: unsplash(P.branding.phoneTablet), alt: "Smartphone and tablet showing social content", tag: "Branding" },

  // ── Decor (placeholders)
  { img: ph("vf-decor-1", true), alt: "Decor styling 1", tag: "Decor", tall: true },
  { img: ph("vf-decor-2"), alt: "Decor styling 2", tag: "Decor" },
  { img: ph("vf-decor-3"), alt: "Decor styling 3", tag: "Decor" },
  { img: ph("vf-decor-4"), alt: "Decor styling 4", tag: "Decor" },
  { img: ph("vf-decor-5"), alt: "Decor styling 5", tag: "Decor" },
  { img: ph("vf-decor-6"), alt: "Decor styling 6", tag: "Decor" },
  { img: ph("vf-decor-7"), alt: "Decor styling 7", tag: "Decor" },
  { img: ph("vf-decor-8"), alt: "Decor styling 8", tag: "Decor" },
  { img: ph("vf-decor-9"), alt: "Decor styling 9", tag: "Decor" },
  { img: ph("vf-decor-10"), alt: "Decor styling 10", tag: "Decor" },
  { img: ph("vf-decor-11", true), alt: "Decor styling 11", tag: "Decor", tall: true },

  // ── Organizations (placeholders)
  { img: ph("vf-org-1", true), alt: "Organization photo 1", tag: "Organizations", tall: true },
  { img: ph("vf-org-2"), alt: "Organization photo 2", tag: "Organizations" },

  // ── Macro (placeholders)
  { img: ph("vf-macro-1"), alt: "Macro detail 1", tag: "Macro" },
  { img: ph("vf-macro-2", true), alt: "Macro detail 2", tag: "Macro", tall: true },
  { img: ph("vf-macro-3"), alt: "Macro detail 3", tag: "Macro" },
  { img: ph("vf-macro-4"), alt: "Macro detail 4", tag: "Macro" },
  { img: ph("vf-macro-5"), alt: "Macro detail 5", tag: "Macro" },
  { img: ph("vf-macro-6"), alt: "Macro detail 6", tag: "Macro" },
];

// Home page teaser (first 6 are shown).
export const GALLERY: GalleryItem[] = [
  { img: unsplash(P.wedding.coupleWall), alt: "Wedding couple beside a beige wall", tall: true },
  { img: unsplash(P.wedding.beachSunset), alt: "Bride and groom embracing on the beach at sunset" },
  { img: unsplash(P.portrait.womanNecklace), alt: "Grayscale portrait of a woman wearing a necklace" },
  { img: unsplash(P.event.concertLights), alt: "Concert crowd under stage lights", tall: true },
  { img: unsplash(P.cars.porscheDirtRoad), alt: "Black Porsche 911 on a dirt road" },
  { img: unsplash(P.wedding.posing), alt: "Bride and groom posing" },
  { img: unsplash(P.event.celebrating), alt: "Group of people celebrating an occasion" },
  { img: unsplash(P.video.monitor), alt: "Viewing footage on a handheld monitor" },
];