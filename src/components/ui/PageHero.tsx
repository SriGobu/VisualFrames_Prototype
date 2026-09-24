import type { ReactNode } from "react";
import Img from "./Img";
import { Container } from "./layout";

interface Props {
  image: string;
  alt: string;
  imageOpacity?: string;
  overlay?: string;
  className?: string;
  children: ReactNode;
}

/** Centered title banner over a faded background photo (About, Contact). */
export default function PageHero({
  image,
  alt,
  imageOpacity = "opacity-25",
  overlay = "linear-gradient(to bottom, #0a0906 0%, rgba(10,9,6,0.6) 50%, #0a0906 100%)",
  className = "py-16 md:py-24",
  children,
}: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <Img src={image} alt={alt} className={imageOpacity} eager />
        <div className="absolute inset-0" style={{ background: overlay }} />
      </div>
      <Container className="relative text-center">{children}</Container>
    </div>
  );
}