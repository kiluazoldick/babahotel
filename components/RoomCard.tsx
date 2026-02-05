// components/RoomCard.tsx
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { COLORS } from "@/lib/constants";

interface RoomCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  href?: string;
}

export default function RoomCard({
  image,
  title,
  description,
  price,
  href = "#",
}: RoomCardProps) {
  return (
    <div className="room-card bg-white rounded-lg md:rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 h-full flex flex-col">
      <div className="relative w-full h-40 md:h-48 bg-gray-200 flex-shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-semibold mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-600 mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        <div className="flex justify-between items-center pt-4 border-t gap-4">
          <span className="font-bold text-base md:text-lg whitespace-nowrap" style={{ color: COLORS.blue }}>
            {price}
          </span>
          <a
            href={href}
            className="font-medium text-xs md:text-sm flex items-center gap-1 transition-colors hover:gap-2 whitespace-nowrap"
            style={{ color: COLORS.red }}
          >
            Voir plus <ArrowRight className="w-3 md:w-4 h-3 md:h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
