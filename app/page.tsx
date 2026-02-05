// app/page.tsx
import { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import RoomCard from "@/components/RoomCard";
import {
  Home,
  Box,
  Tag,
  Shield,
  MapPin,
  Star,
  DollarSign,
  Headphones,
  ArrowRight,
  Phone,
  MessageSquare,
} from "lucide-react";
import { SERVICES, PRICES, SITE, COLORS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "BABA HÔTEL Douala - Chambres & Studios Confortables",
  description:
    "Bienvenue à BABA HÔTEL, votre hôtel de confiance à Douala. Chambres confortables, studios meublés, petit déjeuner inclus. Réservez dès maintenant !",
  keywords: [
    "hôtel Douala",
    "chambres confortables",
    "studios meublés",
    "hébergement accessible",
    "tarifs compétitifs",
  ],
};

export default function HomePage() {
  const rooms = [
    {
      image: "/images/chambre-simple.jpg",
      title: "Chambre Standard",
      description:
        "Chambre confortable avec lit simple, salle de bain privée et ventilateur.",
      price: `À partir de ${PRICES.simpleRoom}/nuit`,
    },
    {
      image: "/images/chambre-climatisee.jpg",
      title: "Chambre Climatisée",
      description:
        "Espace confortable avec climatisation, wifi haut débit et espace de travail.",
      price: `À partir de ${PRICES.climatisee}/nuit`,
    },
    {
      image: "/images/studio-meuble.jpg",
      title: "Studio Meublé",
      description:
        "Studio entièrement équipé avec kitchenette, idéal pour les longs séjours.",
      price: `À partir de ${PRICES.studioMeuble}/nuit`,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
            style={{ color: COLORS.blue }}
          >
            Nos Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {SERVICES.map((service, index) => {
              const Icon =
                service.icon === "Home"
                  ? Home
                  : service.icon === "Box"
                    ? Box
                    : service.icon === "Tag"
                      ? Tag
                      : Shield;
              return (
                <ServiceCard
                  key={index}
                  icon={Icon}
                  title={service.title}
                  description={service.description}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
            style={{ color: COLORS.blue }}
          >
            Pourquoi choisir Baba Hôtel ?
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="lg:w-1/2">
              <div className="relative w-full h-96 rounded-xl shadow-lg overflow-hidden">
                <img
                  src="/images/restaurant.jpg"
                  alt="Espace de détente BABA HÔTEL"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <MapPin style={{ color: COLORS.blue }} /> Proximité &
                  Accessibilité
                </h3>
                <p className="text-gray-600">
                  Situé à Logpom, Douala, notre hôtel est facilement accessible
                  depuis les principaux axes routiers.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <Star style={{ color: COLORS.blue }} /> Propreté et Confort
                </h3>
                <p className="text-gray-600">
                  Nous mettons un point d&apos;honneur à maintenir nos chambres
                  et espaces communs impeccables.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <DollarSign style={{ color: COLORS.blue }} /> Rapport
                  Qualité/Prix
                </h3>
                <p className="text-gray-600">
                  Offrez-vous un hébergement de qualité à des prix très
                  compétitifs.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <Headphones style={{ color: COLORS.blue }} /> Service Client
                </h3>
                <p className="text-gray-600">
                  Notre équipe est disponible 24/7 pour répondre à vos besoins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Preview Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
            style={{ color: COLORS.blue }}
          >
            Nos Chambres & Studios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {rooms.map((room, index) => (
              <RoomCard
                key={index}
                image={room.image}
                title={room.title}
                description={room.description}
                price={room.price}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/chambres-studios"
              className="font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 inline-flex items-center gap-2 hover:scale-105 text-white"
              style={{ backgroundColor: COLORS.blue }}
            >
              Voir toutes nos chambres
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="contact" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
            style={{ color: COLORS.blue }}
          >
            Localisation & Contact
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
            <div className="lg:w-1/2">
              <div className="h-96 rounded-xl shadow-lg overflow-hidden">
                <iframe
                  src={SITE.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation de BABA HÔTEL sur Google Maps"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Nous trouver</h3>
              <p className="text-gray-600 mb-6">
                Baba Hôtel est situé au cœur de Logpom, Douala, facilement
                accessible depuis les principales artères de la ville.
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <MapPin style={{ color: COLORS.blue }} /> Adresse
                </h4>
                <p className="text-gray-600">{SITE.address}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Phone style={{ color: COLORS.blue }} /> Téléphone
                </h4>
                <a
                  href={`tel:${SITE.phone}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {SITE.phoneFormatted}
                </a>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 text-white"
                  style={{ backgroundColor: COLORS.red }}
                >
                  <MessageSquare className="w-5 h-5" /> WhatsApp
                </a>
                <a
                  href={`tel:${SITE.phone}`}
                  className="font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 text-white"
                  style={{ backgroundColor: COLORS.blue }}
                >
                  <Phone className="w-5 h-5" /> Appeler
                </a>
                <a
                  href={SITE.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 hover:scale-105"
                >
                  <MapPin className="w-5 h-5" /> Itinéraire
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
