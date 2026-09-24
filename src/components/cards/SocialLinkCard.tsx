import type { SOCIAL_LINKS } from "../../data/social";

type Link = (typeof SOCIAL_LINKS)[number];

export default function SocialLinkCard({ link }: { link: Link }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group border border-[#2a2318] hover:border-[#c9a96e] bg-[#121008] hover:bg-[#1a1510] transition-all duration-300 p-5 sm:p-8 flex items-center gap-4 sm:gap-6"
    >
      <div className="text-[#c9a96e] shrink-0">{link.icon}</div>
      <div className="flex-1 min-w-0">
        <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-[#8a7f6e] mb-1">{link.name}</p>
        <p className="font-display text-lg sm:text-xl text-[#f0ece4] group-hover:text-[#c9a96e] transition-colors mb-1 truncate">
          {link.handle}
        </p>
        <p className="font-body text-sm text-[#5a5248]">{link.desc}</p>
      </div>
      <div className="text-[#3a3228] group-hover:text-[#c9a96e] transition-colors shrink-0 hidden sm:block">
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </a>
  );
}