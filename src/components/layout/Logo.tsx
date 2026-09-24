export default function Logo({ size = "nav" }: { size?: "nav" | "large" }) {
  const isLarge = size === "large";
  return (
    <div className={isLarge ? "text-center" : "leading-none text-left"}>
      <p
        className={`font-display tracking-[0.03em] text-[#f0ece4] whitespace-nowrap ${
          isLarge ? "text-4xl md:text-5xl" : "text-lg md:text-xl"
        }`}
      >
        VISUAL <span className="text-[#c9a96e]">FRAMES</span>
      </p>
      <p
        className={`font-mono-label uppercase text-[#8a7f6e] whitespace-nowrap ${
          isLarge ? "text-[11px] tracking-[0.4em] mt-3" : "text-[8px] md:text-[9px] tracking-[0.25em] mt-1"
        }`}
      >
        Photography &amp; Videography
      </p>
    </div>
  );
}