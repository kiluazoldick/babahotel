// app/chambres-studios/page.tsx - VERSION CORRIGÉE AVEC VIDÉO
"use client";

import Hero from "@/components/Hero";
import {
  Check,
  ArrowRight,
  Bed,
  Home,
  Users,
  Wifi,
  Coffee,
  Car,
  Phone,
  Play,
} from "lucide-react";
import { PRICES, SITE, COLORS, IMAGES } from "@/lib/constants";
import Link from "next/link";

export default function ChambresStudiosPage() {
  const allRooms = [
    {
      id: "chambre-simple",
      image: IMAGES.chambreSimple,
      title: "Chambre Ventilée Simple",
      description:
        "Chambre fonctionnelle avec lit simple, ventilateur et salle de bain privée.",
      price: `${PRICES.simpleRoom}/nuit`,
      features: ["Lit simple", "Ventilateur", "Salle de bain privée"],
      note: "Repas non inclus",
    },
    {
      id: "chambre-climatisee",
      image: IMAGES.chambreClimatisee,
      title: "Chambre Climatisée Standard",
      description:
        "Chambre avec climatisation, lit double et espace de travail.",
      price: `${PRICES.climatisee}/nuit`,
      features: ["Climatisation", "Lit double", "Espace travail", "Wifi"],
    },
    {
      id: "chambre-conforme",
      image: IMAGES.chambreConforme,
      title: "Chambre Climatisée Conforme",
      description:
        "Chambre spacieuse avec tout le confort nécessaire pour un séjour agréable.",
      price: `${PRICES.climatiseeConforme}/nuit`,
      features: ["Climatisation", "Lit king-size", "TV", "Minibar"],
    },
    {
      id: "chambre-vip",
      image: IMAGES.chambreVIP,
      title: "Chambre VIP Climatisée",
      description:
        "Chambre de luxe avec espace salon, décoration raffinée et vue agréable.",
      price: `${PRICES.climatiseeVIP}/nuit`,
      features: ["Espace salon", "Décoration premium", "Vue", "Service room"],
    },
    {
      id: "chambre-haut-standing",
      image: IMAGES.chambreHautStanding,
      title: "Chambre Haut Standing",
      description:
        "Notre offre premium avec équipements haut de gamme et service personnalisé.",
      price: `${PRICES.hautStanding}/nuit`,
      features: ["Suite", "Jacuzzi", "Service VIP", "Petit-déjeuner au lit"],
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
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="font-medium py-2 px-6 rounded-full text-white"
              style={{ backgroundColor: COLORS.blue }}
            >
              Tous les hébergements
            </button>
            <button className="bg-white text-gray-700 hover:bg-gray-100 font-medium py-2 px-6 rounded-full transition-colors">
              Chambres
            </button>
            <button className="bg-white text-gray-700 hover:bg-gray-100 font-medium py-2 px-6 rounded-full transition-colors">
              Studios
            </button>
            <button className="bg-white text-gray-700 hover:bg-gray-100 font-medium py-2 px-6 rounded-full transition-colors">
              Promotions
            </button>
          </div>
        </div>
      </section>

      {/* SECTION VIDÉO IMMERSIVE POUR STUDIOS - VERSION CORRIGÉE */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                {/* Conteneur vidéo avec hauteur fixe */}
                <div className="relative h-100 w-full">
                  {/* Video player avec dimensions exactes */}
                  <video
                    className=" inset-0 w-full h-full object-cover"
                    controls
                    controlsList="nodownload"
                    preload="metadata"
                    playsInline
                    aria-label="Visite des studios meublés BABA HÔTEL"
                  >
                    <source src="/videos/video.mp4" type="video/mp4" />
                    {/* Simple texte de fallback - PAS DE DIV */}
                    Votre navigateur ne supporte pas la lecture vidéo.
                  </video>

                  {/* Overlay play button séparé (optionnel) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-12 h-12 text-white fill-white" />
                    </div>
                  </div>

                  {/* Légende de la vidéo */}
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4 pointer-events-none">
                    <p className="text-white text-sm font-medium">
                      Studio meublé - BABA HÔTEL Ndogbong Zachman
                    </p>
                  </div>
                </div>
              </div>

              {/* Infos complémentaires sous la vidéo */}
              <div className="mt-3 text-center text-sm text-gray-500">
                <span>
                  Cliquez sur play pour découvrir nos studios meublés en vidéo
                  immersive. Parfait pour se projeter avant de réserver !
                </span>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: COLORS.blue }}
              >
                Studios Meublés : Votre Chez-Vous à Douala
              </h2>
              <p className="text-gray-600 mb-6">
                Nos studios meublés offrent tout le confort d&apos;un
                appartement moderne avec la flexibilité d&apos;un hôtel. Parfait
                pour les séjours professionnels prolongés, les relocations ou
                les vacances en famille.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: `${COLORS.blue}20` }}
                  >
                    <Home className="w-5 h-5" style={{ color: COLORS.blue }} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Kitchenette complète</h4>
                    <p className="text-gray-600 text-sm">
                      Équipée de réfrigérateur, plaques de cuisson et ustensiles
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: `${COLORS.blue}20` }}
                  >
                    <Wifi className="w-5 h-5" style={{ color: COLORS.blue }} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Wifi ultra-rapide</h4>
                    <p className="text-gray-600 text-sm">
                      Idéal pour le télétravail et le streaming
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: `${COLORS.blue}20` }}
                  >
                    <Users className="w-5 h-5" style={{ color: COLORS.blue }} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Espace convivial</h4>
                    <p className="text-gray-600 text-sm">
                      Jusqu&apos;à 2 personnes, pour un meilleur confort
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={`tel:${SITE.phone}`}
                  className="font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 text-white"
                  style={{ backgroundColor: COLORS.red }}
                >
                  <Phone className="w-5 h-5" />
                  Réserver un studio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Rooms Grid - VERSION CORRIGÉE SANS ERREUR */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: COLORS.blue }}
          >
            Tous nos hébergements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allRooms.map((room) => (
              <div
                key={room.id}
                className="room-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Conteneur d'image - VERSION SIMPLE SANS ERREUR */}
                <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                  {/* Image simple - pas de onError */}
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Badge "Promo" si c'est un studio promo */}
                  {room.id === "studio-promo" && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      -10% PROMO
                    </div>
                  )}

                  {/* Badge "Repas non inclus" pour chambre simple */}
                  {room.note && (
                    <div className="absolute bottom-3 left-3 bg-amber-500/90 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                      ⚠️ {room.note}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {room.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2 text-gray-700 text-sm">
                      Équipements inclus :
                    </h4>
                    <ul className="space-y-1.5">
                      {room.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <Check
                            className="w-4 h-4 shrink-0"
                            style={{ color: "#10B981" }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div>
                      <span
                        className="font-bold text-lg"
                        style={{ color: COLORS.blue }}
                      >
                        {room.price}
                      </span>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Wifi inclus
                      </p>
                    </div>
                    <a
                      href={`tel:${SITE.phone}`}
                      className="font-medium py-2.5 px-5 rounded-full transition-all duration-300 hover:scale-105 text-sm text-white shadow-md hover:shadow-lg"
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: COLORS.blue }}
          >
            Équipements inclus dans tous nos hébergements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
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

      {/* CTA Section - CORRIGÉ SANS DÉGRADÉ */}
      <section className="py-16" style={{ backgroundColor: COLORS.blue }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Prêt à réserver votre séjour ?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
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
