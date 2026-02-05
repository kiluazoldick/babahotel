// components/ServiceCard.tsx
import { LucideIcon } from "lucide-react";
import { COLORS } from "@/lib/constants";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="service-card bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center h-full flex flex-col">
      <div className="service-icon mb-3 md:mb-4 flex-shrink-0">
        <Icon className="w-10 md:w-12 h-10 md:h-12 mx-auto" style={{ color: COLORS.blue }} />
      </div>
      <h3 className="text-base md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm md:text-base text-gray-600 flex-grow">{description}</p>
    </div>
  );
}
