// app/galerie/page.tsx
"use client";

import Hero from "@/components/Hero";
import { useState } from "react";
import {
  Search,
  Filter,
  ZoomIn,
  Phone,
  MessageSquare,
  Video as VideoIcon,
  Camera,
} from "lucide-react";
import { SITE, COLORS } from "@/lib/constants";

const categories = [
  "Toutes",
  "Chambres",
  "Studios",
  "Restaurant & Bar",
  "Équipements",
  "Extérieurs",
];

const galleryItems = [
  {
    category: "Chambres",
    title: "Chambre Standard",
    description: "Confort et simplicité",
  },
  {
    category: "Chambres",
    title: "Chambre VIP",
    description: "Élégance et espace",
  },
  {
    category: "Chambres",
    title: "Suite Haut Standing",
    description: "Luxe et raffinement",
  },
  {
    category: "Studios",
    title: "Studio Familial",
    description: "Espace et autonomie",
  },
  {
    category: "Studios",
    title: "Cuisine équipée",
    description: "Tout pour cuisiner",
  },
  {
    category: "Restaurant & Bar",
    title: "Salle à manger",
    description: "Ambiance chaleureuse",
  },
  {
    category: "Restaurant & Bar",
    title: "Bar Lounge",
    description: "Détente et convivialité",
  },
  { category: "Équipements", title: "Réception", description: "Accueil 24/7" },
  {
    category: "Équipements",
    title: "Salle banquet",
    description: "Événements jusqu'à 50 personnes",
  },
  {
    category: "Équipements",
    title: "Parking sécurisé",
    description: "Véhicule en sécurité",
  },
  {
    category: "Extérieurs",
    title: "Façade de l'hôtel",
    description: "Architecture moderne",
  },
  {
    category: "Extérieurs",
    title: "Terrasse",
    description: "Espace de détente",
  },
];

export default function GaleriePage() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "Toutes"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Notre Galerie"
        subtitle="Découvrez BABA HÔTEL en images"
        description="Visite virtuelle de nos espaces et équipements"
        showButtons={false}
      />

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium">Filtrer par catégorie :</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? "text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  style={
                    selectedCategory === category
                      ? {
                          backgroundColor: COLORS.blue,
                        }
                      : {}
                  }
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-gray-500 mb-2">
                      [Image: {item.title}]
                    </div>
                    <div className="text-sm text-gray-400">
                      Cliquez pour agrandir
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5 text-gray-700" />
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Aucune photo trouvée
              </h3>
              <p className="text-gray-500">Essayez une autre catégorie</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Tour Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: COLORS.blue }}
          >
            Visite virtuelle
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-xl flex items-center justify-center">
              <div className="text-center text-white">
                <VideoIcon className="w-20 h-20 mx-auto mb-4 text-gray-300" />
                <h3 className="text-xl font-semibold mb-2">
                  Visite vidéo de BABA HÔTEL
                </h3>
                <p className="text-gray-300">(Bientôt disponible)</p>
                <p className="text-sm text-gray-400 mt-4">
                  Découvrez nos espaces en mouvement
                </p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6">
              Notre visite virtuelle vous permet de découvrir l&apos;ambiance de
              notre établissement avant votre arrivée.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials with Photos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: COLORS.blue }}
          >
            Nos clients partagent leur expérience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Marie T.",
                role: "Voyageuse d'affaires",
                comment:
                  "Chambre très propre et calme. Parfait pour le travail.",
                photo: "Photo de chambre de travail",
              },
              {
                name: "La famille Martin",
                role: "Vacances en famille",
                comment:
                  "Le studio familial était parfait pour nous 4. Les enfants ont adoré.",
                photo: "Photo de studio familial",
              },
              {
                name: "M. Diallo",
                role: "Séjour prolongé",
                comment:
                  "3 mois chez BABA HÔTEL pour ma mission. Service impeccable.",
                photo: "Photo de séjour longue durée",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">[Photo témoignage]</span>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 italic mb-4">
                    &quot;{testimonial.comment}&quot;
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: COLORS.blue }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Prêt à vivre l&apos;expérience BABA HÔTEL ?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Les photos vous ont plu ? Attendez de voir en vrai ! Réservez dès
            maintenant votre séjour.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${SITE.phone}`}
              className="bg-white hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              style={{ color: COLORS.blue }}
            >
              <Phone className="w-5 h-5" />
              Réserver par téléphone
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Réserver sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <div className="bg-gray-800 aspect-video rounded-lg overflow-hidden flex items-center justify-center">
              <div className="text-white text-center">
                <Camera className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h3 className="text-xl font-semibold mb-2">
                  {galleryItems[selectedImage].title}
                </h3>
                <p>{galleryItems[selectedImage].description}</p>
                <p className="text-sm text-gray-400 mt-4">
                  (Image réelle à intégrer)
                </p>
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
