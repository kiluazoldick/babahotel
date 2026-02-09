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
}: Readonly<ServiceCardProps>) {
  return (
    <div className="service-card bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300">
      <div className="service-icon mb-4">
        <Icon className="w-12 h-12 mx-auto" style={{ color: COLORS.blue }} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
