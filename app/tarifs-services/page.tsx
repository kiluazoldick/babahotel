// app/tarifs-services/page.tsx
import Hero from "@/components/Hero";
import {
  Check,
  Star,
  Coffee,
  Wifi,
  Car,
  Utensils,
  Wine,
  Shield,
  Clock,
  Users,
  Phone,
  MessageSquare,
} from "lucide-react";
import { PRICES, SITE, COLORS } from "@/lib/constants";
import Link from "next/link";

export const metadata = {
  title: "Tarifs & Services - BABA HÔTEL Douala",
  description:
    "Tarifs transparents : chambre à 8.000 FCFA, studio à 20.000 FCFA. Petit déjeuner et wifi inclus. Voir tous nos services.",
};

export default function TarifsServicesPage() {
  const roomTypes = [
    {
      type: "Chambre Simple",
      price: PRICES.simpleRoom,
      features: ["Lit simple", "Ventilateur", "Salle de bain"],
    },
    {
      type: "Chambre Climatisée",
      price: PRICES.climatisee,
      features: ["Climatisation", "Lit double", "Wifi"],
    },
    {
      type: "Chambre Conforme",
      price: PRICES.climatiseeConforme,
      features: ["Climatisation", "TV", "Minibar"],
    },
    {
      type: "Chambre VIP",
      price: PRICES.climatiseeVIP,
      features: ["Espace salon", "Service room", "Vue"],
    },
    {
      type: "Chambre Haut Standing",
      price: PRICES.hautStanding,
      features: ["Suite", "Jacuzzi", "Service VIP"],
    },
    {
      type: "Studio Meublé",
      price: PRICES.studioMeuble,
      features: ["Kitchenette", "Espace vie", "Long séjour"],
    },
    {
      type: "Studio Promo",
      price: PRICES.studioPromo,
      features: ["Économie", "Tout inclus", "Dispo limitée"],
    },
  ];

  const servicesIncluded = [
    {
      icon: Coffee,
      title: "Petit Déjeuner",
      description: "Buffet continental servi chaque matin",
    },
    {
      icon: Wifi,
      title: "Wifi Gratuit",
      description: "Haut débit dans tout l'établissement",
    },
    {
      icon: Car,
      title: "Parking Sécurisé",
      description: "Place de parking incluse avec surveillance",
    },
    {
      icon: Shield,
      title: "Sécurité 24/7",
      description: "Gardiennage et caméras de sécurité",
    },
  ];

  const additionalServices = [
    {
      icon: Utensils,
      title: "Restaurant",
      description: "Cuisine africaine & internationale",
    },
    { icon: Wine, title: "Bar", description: "Boissons fraîches et cocktails" },
    {
      icon: Users,
      title: "Salle Banquet",
      description: "Événements jusqu'à 50 personnes",
    },
    {
      icon: Clock,
      title: "Laverie",
      description: "Service de blanchisserie rapide",
    },
  ];

  const specialOffers = [
    {
      name: "Sieste 2 heures",
      price: PRICES.sieste2h,
      description: "Repos court avec accès à la chambre",
    },
    {
      name: "Sieste 4 heures",
      price: PRICES.sieste4h,
      description: "Repos prolongé, idéal voyageurs",
    },
    {
      name: "Séjour Semaine",
      discount: "-10%",
      description: "7 nuits ou plus, tous hébergements",
    },
    {
      name: "Séjour Mensuel",
      discount: "Tarif spécial",
      description: "Contactez-nous pour un devis",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Nos Tarifs & Services"
        subtitle="Transparence et excellence"
        description="Découvrez nos offres complètes avec petit déjeuner et wifi inclus dans tous les tarifs"
        showButtons={false}
      />

      {/* Price Guarantee Banner */}
      <section className="py-8" style={{ backgroundColor: COLORS.blue }}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Star className="w-8 h-8 text-yellow-300" />
            <p className="text-white text-lg font-semibold">
              Garantie du meilleur prix direct ! Pas de frais de réservation en
              ligne.
            </p>
            <Star className="w-8 h-8 text-yellow-300" />
          </div>
        </div>
      </section>

      {/* Main Price Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: COLORS.blue }}
          >
            Tarifs des hébergements
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border p-4 text-left font-semibold">
                    Type de chambre / studio
                  </th>
                  <th className="border p-4 text-left font-semibold">
                    Prix par nuit
                  </th>
                  <th className="border p-4 text-left font-semibold">
                    Équipements inclus
                  </th>
                  <th className="border p-4 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {roomTypes.map((room, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="border p-4 font-medium">{room.type}</td>
                    <td className="border p-4">
                      <span
                        className="font-bold text-lg"
                        style={{ color: COLORS.blue }}
                      >
                        {room.price}
                      </span>
                      <p className="text-sm text-gray-500 mt-1">
                        Petit déjeuner + Wifi inclus
                      </p>
                    </td>
                    <td className="border p-4">
                      <ul className="space-y-1">
                        {room.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Check
                              className="w-4 h-4"
                              style={{ color: "#10B981" }}
                            />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="border p-4">
                      <a
                        href={`tel:${SITE.phone}`}
                        className="font-medium py-2 px-4 rounded-full transition-all duration-300 hover:scale-105 inline-block text-center w-full text-white"
                        style={{ backgroundColor: COLORS.red }}
                      >
                        Réserver
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6" style={{ color: "#10B981" }} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Important :</h3>
                <p className="text-gray-700">
                  Tous nos tarifs incluent le{" "}
                  <strong>petit déjeuner buffet</strong> et l&apos;accès au{" "}
                  <strong>wifi haut débit</strong>. Les taxes sont incluses. Pas
                  de frais cachés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: COLORS.blue }}
          >
            Services inclus dans tous les tarifs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesIncluded.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className="p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: `${COLORS.blue}1A` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: COLORS.blue }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: COLORS.blue }}
          >
            Services supplémentaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="border p-6 rounded-xl hover:border-gray-400 transition-colors"
                >
                  <Icon
                    className="w-10 h-10 mb-4"
                    style={{ color: COLORS.blue }}
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section
        className="py-16"
        style={{ backgroundColor: `${COLORS.blue}10` }}
      >
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: COLORS.blue }}
          >
            Offres spéciales & Promotions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialOffers.map((offer, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{offer.name}</h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  <div className="flex justify-between items-center">
                    <span
                      className="text-2xl font-bold"
                      style={{ color: COLORS.blue }}
                    >
                      {offer.price || offer.discount}
                    </span>
                    <a
                      href={`tel:${SITE.phone}`}
                      className="font-medium py-2 px-4 rounded-full transition-all duration-300 hover:scale-105 text-sm text-white"
                      style={{ backgroundColor: COLORS.red }}
                    >
                      Profiter
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: COLORS.blue }}
          >
            Ce que disent nos clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Jean M.",
                comment:
                  "Excellent rapport qualité-prix. Petit déjeuner copieux et chambre très propre.",
              },
              {
                name: "Sophie K.",
                comment:
                  "Studio parfait pour mon séjour professionnel d'un mois. Service impeccable.",
              },
              {
                name: "Thomas L.",
                comment:
                  "L'emplacement est idéal, le personnel est aux petits soins. Je recommande !",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  &quot;{testimonial.comment}&quot;
                </p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16" style={{ backgroundColor: COLORS.red }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Vous avez des questions sur nos tarifs ?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Notre équipe est disponible pour vous conseiller et vous proposer la
            meilleure offre selon vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${SITE.phone}`}
              className="bg-white hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              style={{ color: COLORS.red }}
            >
              <Phone className="w-5 h-5" />
              Appelez-nous au {SITE.phoneFormatted}
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Nous écrire un message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
