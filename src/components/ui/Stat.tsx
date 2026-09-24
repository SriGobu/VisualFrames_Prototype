export default function Stat({ value, label, size = "sm" }: { value: string; label: string; size?: "sm" | "lg" }) {
  const lg = size === "lg";
  return (
    <div>
      <p className={`font-display text-[#c9a96e] ${lg ? "text-4xl md:text-5xl mb-2" : "text-3xl"}`}>{value}</p>
      <p className={`font-mono-label text-[10px] tracking-[0.2em] uppercase text-[#8a7f6e] ${lg ? "" : "mt-1"}`}>
        {label}
      </p>
    </div>
  );
}