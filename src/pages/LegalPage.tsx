import { Container, Eyebrow } from "../components/ui/layout";

export default function LegalPage({ title, content }: { title: string; content: string }) {
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-20">
      <Container size="3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="font-display text-4xl sm:text-5xl text-[#f0ece4] mb-6">{title}</h1>
        <div className="w-12 h-px bg-[#c9a96e] mb-10 md:mb-12" />
        <div className="space-y-6">
          {content
            .trim()
            .split("\n\n")
            .map((para, i) => {
              const trimmed = para.trim();
              if (!trimmed) return null;
              const isHeading = /^\d+\.\s+[A-Z]/.test(trimmed) && trimmed.length < 60;
              return isHeading ? (
                <h2 key={i} className="font-display text-lg sm:text-xl text-[#f0ece4] pt-4 border-t border-[#2a2318]">
                  {trimmed}
                </h2>
              ) : (
                <p key={i} className="font-body text-[#8a7f6e] leading-relaxed whitespace-pre-line break-words">
                  {trimmed}
                </p>
              );
            })}
        </div>
      </Container>
    </div>
  );
}