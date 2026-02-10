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
  subtitle = "Confort et élégance à Ndongbong",
  description = "Chambres et studios meublés à prix accessibles",
  showButtons = true,
}: Readonly<HeroProps>) {
  const whatsappMessage = encodeURIComponent(
    "Bonjour,je viens de votre site internet je souhaite réserver une chambre",
  );

  return (
    <section className="hero-image h-screen flex items-center justify-center text-white">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <h2 className="text-xl md:text-2xl mb-8">{subtitle}</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">{description}</p>

        {showButtons && (
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${whatsappMessage}`}
              className="font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 text-white"
              style={{ backgroundColor: COLORS.red }}
            >
              Réserver maintenant
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="bg-white hover:bg-gray-100 font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              style={{ color: COLORS.red }}
            >
              <Phone className="w-5 h-5" />
              Appeler
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
