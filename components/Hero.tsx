// components/Hero.tsx
import { Phone } from "lucide-react";
import { SITE, COLORS } from "@/lib/constants";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showButtons?: boolean;
}

export default function Hero({
  title = "Baba Hôtel",
  subtitle = "Confort et élégance à Logpom",
  description = "Chambres et studios meublés à prix accessibles",
  showButtons = true,
}: HeroProps) {
  return (
    <section className="hero-image min-h-screen md:h-screen flex items-center justify-center text-white">
      <div className="text-center px-4 py-12 md:py-0 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight">
          {title}
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 font-medium opacity-90">
          {subtitle}
        </h2>
        <p className="text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto opacity-95 leading-relaxed">
          {description}
        </p>

        {showButtons && (
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <a
              href="#contact"
              className="font-bold py-3 md:py-4 px-6 md:px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 text-white text-sm md:text-base"
              style={{ backgroundColor: COLORS.red }}
            >
              Réserver maintenant
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="bg-white hover:bg-gray-100 font-bold py-3 md:py-4 px-6 md:px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base"
              style={{ color: COLORS.red }}
            >
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">Appeler</span>
              <span className="sm:hidden">Appel</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
