// app/chambres-studios/page.tsx - VERSION CORRIGÉE AVEC VIDÉO
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
  Video,
} from "lucide-react";
import { PRICES, SITE, COLORS } from "@/lib/constants";
import Link from "next/link";

export const metadata = {
  title: "Nos Chambres & Studios - BABA HÔTEL Douala",
  description:
    "Découvrez nos chambres simples, VIP, haut standing et studios meublés à Douala. Photos, équipements, disponibilités.",
};

export default function ChambresStudiosPage() {
  const allRooms = [
    {
      image: "/images/chambre-simple.jpg",
      title: "Chambre Ventilée Simple",
      description:
        "Chambre fonctionnelle avec lit simple, ventilateur et salle de bain privée.",
      price: `À partir de ${PRICES.simpleRoom}/nuit`,
      features: ["Lit simple", "Ventilateur", "Salle de bain privée"],
      note: "Repas non inclus",
    },
    {
      image: "/images/chambre-climatisee.jpg",
      title: "Chambre Climatisée Standard",
      description:
        "Chambre avec climatisation, lit double et espace de travail.",
      price: `${PRICES.climatisee}/nuit`,
      features: ["Climatisation", "Lit double", "Wifi gratuit"],
    },
    // ... autres chambres ...
    {
      image: "/images/chambre-haut-standing.jpg",
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

      {/* SECTION VIDÉO IMMERSIVE POUR STUDIOS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                {/* Conteneur vidéo avec player fonctionnel */}
                <div className="relative aspect-video">
                  {/* Video player avec contrôles */}
                  <video
                    className="w-full h-full object-cover"
                    controls
                    controlsList="nodownload"
                    poster="/images/video-thumbnail.jpg" // Image de preview optionnelle
                    preload="metadata"
                    aria-label="Admirez notre studios meublés BABA HÔTEL"
                  >
                    {/* Sources vidéo - ajoutez vos formats */}
                    <source src="/videos/video.mp4" type="video/mp4" />

                    {/* Fallback pour navigateurs qui ne supportent pas la vidéo */}
                    <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-blue-400 to-blue-600">
                      <div className="text-center text-white p-8">
                        <Video className="w-20 h-20 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold mb-4">
                          Découvrez nos Studios Meublés
                        </h3>
                        <p className="text-lg mb-6">
                          Visite immersive en vidéo
                        </p>
                        <p className="text-sm text-gray-300">
                          Votre navigateur ne supporte pas la lecture vidéo.
                          <br />
                          <a
                            href="/videos/studio-visite.mp4"
                            className="text-white underline mt-2 inline-block"
                            download
                          >
                            Télécharger la vidéo
                          </a>
                        </p>
                      </div>
                    </div>
                  </video>

                  {/* Overlay play button au chargement */}
                  <div className="video-overlay absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>

                {/* Légende de la vidéo */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm">
                    Admirez notre studio meublé - BABA HÔTEL Ndogbong Zachman
                  </p>
                </div>
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
                    <h4 className="font-semibold">Espace familial</h4>
                    <p className="text-gray-600 text-sm">
                      Jusqu&apos;à 4 personnes, lit bébé disponible sur demande
                    </p>
                  </div>
                </div>

                {/* Nouveau point pour la vidéo */}
                <div className="flex items-start gap-3">
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: `${COLORS.blue}20` }}
                  >
                    <Video className="w-5 h-5" style={{ color: COLORS.blue }} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Visite virtuelle incluse</h4>
                    <p className="text-gray-600 text-sm">
                      Visualisez le studio avant de réserver grâce à notre vidéo
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
      {/* All Rooms Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: COLORS.blue }}
          >
            Tous nos hébergements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
