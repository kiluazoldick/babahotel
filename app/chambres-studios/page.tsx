// app/chambres-studios/page.tsx
import Hero from "@/components/Hero";
import RoomCard from "@/components/RoomCard";
import {
  Check,
  ArrowRight,
  Bed,
  Home,
  Users,
  Wifi,
  Coffee,
  Car,
  MessageSquare,
} from "lucide-react";
import { PRICES, SITE, COLORS } from "@/lib/constants";
import Link from "next/link";

export const metadata = {
  title: "Chambres & Studios - BABA HÔTEL Douala | Tarifs 8.000-20.000 FCFA",
  description:
    "Découvrez nos 6 types de chambres et studios meublés à Douala : chambre simple, climatisée, VIP, haut standing et studios. Petit déjeuner et Wifi inclus. Tarifs transparents.",
  keywords: [
    "chambre Douala",
    "studio meublé",
    "hébergement climatisé",
    "chambre VIP",
    "prix abordable",
  ],
};

export default function ChambresStudiosPage() {
  const allRooms = [
    {
      image: "/images/chambre-simple.jpg",
      title: "Chambre Simple",
      description:
        "Chambre fonctionnelle avec lit simple, ventilateur et salle de bain privée.",
      price: `${PRICES.simpleRoom}/nuit`,
      features: ["Lit simple", "Ventilateur", "Salle de bain privée"],
    },
    {
      image: "/images/chambre-climatisee.jpg",
      title: "Chambre Climatisée",
      description:
        "Chambre avec climatisation, lit double et espace de travail.",
      price: `${PRICES.climatisee}/nuit`,
      features: ["Climatisation", "Lit double", "Espace travail", "Wifi"],
    },
    {
      image: "/images/chambre-conforme.jpg",
      title: "Chambre Climatisée Conforme",
      description:
        "Chambre spacieuse avec tout le confort nécessaire pour un séjour agréable.",
      price: `${PRICES.climatiseeConforme}/nuit`,
      features: ["Climatisation", "Lit king-size", "TV", "Minibar"],
    },
    {
      image: "/images/chambre-vip.jpg",
      title: "Chambre VIP Climatisée",
      description:
        "Chambre de luxe avec espace salon, décoration raffinée et vue agréable.",
      price: `${PRICES.climatiseeVIP}/nuit`,
      features: ["Espace salon", "Décoration premium", "Vue", "Service room"],
    },
    {
      image: "/images/chambre-haut-standing.jpg",
      title: "Chambre Haut Standing",
      description:
        "Notre offre premium avec équipements haut de gamme et service personnalisé.",
      price: `${PRICES.hautStanding}/nuit`,
      features: ["Suite", "Jacuzzi", "Service VIP", "Petit-déjeuner au lit"],
    },
    {
      image: "/images/studio-meuble.jpg",
      title: "Studio Meublé",
      description:
        "Studio entièrement équipé avec kitchenette, idéal pour séjours prolongés.",
      price: `${PRICES.studioMeuble}/nuit`,
      features: [
        "Kitchenette",
        "Espace vie",
        "Séjour longue durée",
        "Réduction",
      ],
    },
  ];

  const equipmentIncluded = [
    { icon: Wifi, text: "Wifi haut débit gratuit" },
    { icon: Coffee, text: "Petit déjeuner inclus" },
    { icon: Bed, text: "Linge de lit fourni" },
    { icon: Car, text: "Parking sécurisé gratuit" },
    { icon: Users, text: "Service de ménage quotidien" },
    { icon: Home, text: "Climatisation dans toutes les chambres" },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Nos Hébergements"
        subtitle="Découvrez notre gamme complète"
        description="Chambres confortables et studios meublés pour tous vos besoins"
        showButtons={false}
      />

      {/* Filter Tabs */}
      <section className="py-6 md:py-8 bg-gray-50 sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <button
              className="font-medium py-2 px-4 md:px-6 rounded-full text-white text-xs md:text-sm"
              style={{ backgroundColor: COLORS.blue }}
            >
              Tous
            </button>
            <button className="bg-white text-gray-700 hover:bg-gray-100 font-medium py-2 px-4 md:px-6 rounded-full transition-colors text-xs md:text-sm">
              Chambres
            </button>
            <button className="bg-white text-gray-700 hover:bg-gray-100 font-medium py-2 px-4 md:px-6 rounded-full transition-colors text-xs md:text-sm">
              Studios
            </button>
            <button className="bg-white text-gray-700 hover:bg-gray-100 font-medium py-2 px-4 md:px-6 rounded-full transition-colors text-xs md:text-sm">
              Promo
            </button>
          </div>
        </div>
      </section>

      {/* All Rooms Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
            style={{ color: COLORS.blue }}
          >
            Tous nos hébergements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allRooms.map((room, index) => (
              <div
                key={index}
                className="room-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
              >
                <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Image: {room.title}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2 text-gray-700">
                      Équipements inclus :
                    </h4>
                    <ul className="space-y-1">
                      {room.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <Check
                            className="w-4 h-4"
                            style={{ color: "#10B981" }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <span
                      className="font-bold text-lg"
                      style={{ color: COLORS.blue }}
                    >
                      {room.price}
                    </span>
                    <a
                      href={`tel:${SITE.phone}`}
                      className="font-medium py-2 px-4 rounded-full transition-all duration-300 hover:scale-105 text-sm text-white"
                      style={{ backgroundColor: COLORS.red }}
                    >
                      Réserver
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Included */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
            style={{ color: COLORS.blue }}
          >
            Équipements inclus dans tous nos hébergements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {equipmentIncluded.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: COLORS.blue }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.text}</h3>
                    <p className="text-gray-600 text-sm">
                      Profitez de ce service inclus dans tous nos tarifs
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
            style={{ color: COLORS.blue }}
          >
            Questions fréquentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Les petits déjeuners sont-ils inclus ?
              </h3>
              <p className="text-gray-600">
                Oui ! Tous nos tarifs incluent le petit déjeuner continental
                servi chaque matin de 6h30 à 10h.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Y a-t-il une réduction pour les séjours longs ?
              </h3>
              <p className="text-gray-600">
                Absolument. Pour les séjours de plus de 7 nuits, bénéficiez de
                10% de réduction. Au-delà d&apos;un mois, contactez-nous pour un
                tarif spécial.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Les chambres sont-elles équipées de coffre-fort ?
              </h3>
              <p className="text-gray-600">
                Les chambres VIP et Haut Standing disposent d&apos;un
                coffre-fort numérique. Pour les autres chambres, nous proposons
                un service de coffre à la réception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16" style={{ backgroundColor: COLORS.blue }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">
            Prêt à réserver votre séjour ?
          </h2>
          <p className="text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Contactez-nous dès maintenant pour vérifier les disponibilités et
            bénéficier du meilleur tarif.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${SITE.phone}`}
              className="bg-white hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              style={{ color: COLORS.blue }}
            >
              <ArrowRight className="w-5 h-5" />
              Appeler pour réserver
            </a>
            <Link
              href="/tarifs-services"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              Voir tous les tarifs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
