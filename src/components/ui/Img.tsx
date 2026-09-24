import { useState, type CSSProperties } from "react";
import { imgFit, imgPos } from "../../utils/image";

interface Props {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  eager?: boolean; // above-the-fold images
}

export default function Img({ src, alt, className = "", style, eager = false }: Props) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  if (failedSrc === src) {
    return <div role="img" aria-label={alt} className={`w-full h-full bg-[#1a1510] ${className}`} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailedSrc(src)}
      className={`w-full h-full ${imgFit(src)} ${className}`}
      style={{ ...imgPos(src), ...style }}
    />
  );
}