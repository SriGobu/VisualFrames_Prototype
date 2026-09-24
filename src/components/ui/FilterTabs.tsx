interface Props {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
}

/** Wraps on desktop, swipes sideways on phones. */
export default function FilterTabs({ tabs, active, onChange }: Props) {
  return (
    <div className="flex gap-2 mb-8 md:mb-10 -mx-5 px-5 sm:mx-0 sm:px-0 overflow-x-auto sm:overflow-visible sm:flex-wrap pb-2 sm:pb-0">
      {tabs.map((t) => (
        <button
          key={t}
          type="button"
          onClick={() => onChange(t)}
          className={`shrink-0 font-mono-label text-[10px] tracking-[0.2em] uppercase px-4 sm:px-5 py-2 border transition-all duration-300 ${
            active === t
              ? "border-[#c9a96e] text-[#c9a96e] bg-[#1a1510]"
              : "border-[#2a2318] text-[#8a7f6e] hover:border-[#5a5248]"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}