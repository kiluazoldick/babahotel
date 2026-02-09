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
}: Readonly<RoomCardProps>) {
  return (
    <div className="room-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold" style={{ color: COLORS.blue }}>
            {price}
          </span>
          <a
            href={href}
            className="font-medium flex items-center gap-1 transition-colors"
            style={{ color: COLORS.red }}
          >
            Voir plus <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
