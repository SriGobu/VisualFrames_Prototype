import Button from "./Button";
import { Eyebrow } from "./layout";

interface Props {
  tag: string;
  title: string;
  subtitle?: string;
  actionLabel?: string; // optional "View all →" link on the right
  onAction?: () => void;
}

export default function SectionHeader({ tag, title, subtitle, actionLabel, onAction }: Props) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
      <div>
        <Eyebrow>{tag}</Eyebrow>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#f0ece4]">{title}</h2>
        {subtitle && <p className="font-body text-[#8a7f6e] max-w-xl leading-relaxed mt-4">{subtitle}</p>}
      </div>
      {actionLabel && (
        <Button variant="link" onClick={onAction} className="self-start md:self-auto">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}