import Img from "./Img";

export interface GalleryItem {
  img: string;
  alt: string;
  tall?: boolean;
}

interface Props {
  items: GalleryItem[];
  onItemClick?: () => void;
}

export default function GalleryGrid({ items, onItemClick }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 grid-flow-dense gap-2 sm:gap-3 auto-rows-[150px] sm:auto-rows-[190px] lg:auto-rows-[220px]">
      {items.map((item, i) => (
        <div
          key={`${item.img}-${i}`}
          onClick={onItemClick}
          className={`overflow-hidden bg-[#121008] group ${item.tall ? "row-span-2" : ""} ${onItemClick ? "cursor-pointer" : ""}`}
        >
          <Img src={item.img} alt={item.alt} className="group-hover:scale-105 transition-transform duration-700" />
        </div>
      ))}
    </div>
  );
}