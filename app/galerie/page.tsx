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
  Play,
} from "lucide-react";
import { SITE, COLORS, IMAGES } from "@/lib/constants";

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
    id: "chambre-standard",
    category: "Chambres",
    title: "Chambre Standard",
    description: "Confort et simplicité",
    image: IMAGES.galerie.chambreStandard,
  },
  {
    id: "chambre-vip",
    category: "Chambres",
    title: "Chambre VIP",
    description: "Élégance et espace",
    image: IMAGES.galerie.chambreVIP,
  },
  {
    id: "suite-haut-standing",
    category: "Chambres",
    title: "Suite Haut Standing",
    description: "Luxe et raffinement",
    image: IMAGES.galerie.suiteHautStanding,
  },
  {
    id: "studio-familial",
    category: "Studios",
    title: "Studio Familial",
    description: "Espace et autonomie",
    image: IMAGES.galerie.studioFamilial,
  },
  {
    id: "Salle-de-reception",
    category: "Équipements",
    title: "Salle de reception",
    description: "Tout pour vos evenements",
    image: IMAGES.galerie.salledeReception,
  },
  {
    id: "espace-vip-interieur",
    category: "Équipements",
    title: "Espace VIP interieur",
    description: "Cadre tranquille a l'abri des regards",
    image: IMAGES.galerie.vipInter,
  },
  {
    id: "bar-lounge",
    category: "Restaurant & Bar",
    title: "Bar Lounge",
    description: "Détente et convivialité",
    image: IMAGES.galerie.barLounge,
  },
  {
    id: "reception",
    category: "Équipements",
    title: "Réception",
    description: "Accueil 24/7",
    image: IMAGES.galerie.reception,
  },

  {
    id: "espace-vip-exterieur",
    category: "Extérieurs",
    title: "Espace VIP exterieur",
    description: "A l'abris de regards",
    image: IMAGES.galerie.vipExte,
  },
  {
    id: "terrasse",
    category: "Extérieurs",
    title: "Terrasse",
    description: "Espace de détente",
    image: IMAGES.galerie.terrasse,
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

      {/* Gallery Grid - AVEC VRAIES IMAGES */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
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

      {/* Video Tour Section - AVEC VIDÉO RÉELLE */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: COLORS.blue }}
          >
            Visite virtuelle
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
              {/* Lecteur vidéo avec vraie vidéo */}
              <div className="relative aspect-video">
                <video
                  className="w-full h-full object-cover"
                  controls
                  controlsList="nodownload"
                  preload="metadata"
                  playsInline
                  poster="/images/video-thumbnail.jpg" // Optionnel : image d'aperçu
                  aria-label="Visite virtuelle de BABA HÔTEL"
                >
                  <source src="/videos/video.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>

                {/* Overlay play button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white fill-white" />
                  </div>
                </div>
              </div>

              {/* Légende */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pointer-events-none">
                <p className="text-white text-sm font-medium">
                  🎬 Visite immersive - Studios meublés BABA HÔTEL
                </p>
              </div>
            </div>

            <p className="text-center text-gray-600 mt-6">
              Découvrez nos studios meublés en vidéo. Ambiance, équipements et
              confort vous attendent.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials - SANS PHOTOS, UNIQUEMENT TEXTE */}
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
                  "Chambre très propre et calme. Parfait pour le travail. Le wifi est excellent et le personnel aux petits soins.",
              },
              {
                name: "Famille Martin",
                role: "Vacances en famille",
                comment:
                  "Le studio familial était parfait pour nous 4. La kitchenette nous a permis de cuisiner, les enfants ont adoré.",
              },
              {
                name: "M. Diallo",
                role: "Séjour professionnel (3 mois)",
                comment:
                  "3 mois chez BABA HÔTEL pour ma mission. Service impeccable, studio bien équipé. Je recommande vivement.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                {/* Étoiles */}
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Commentaire */}
                <p className="text-gray-600 italic mb-6 text-lg leading-relaxed">
                  &quot;{testimonial.comment}&quot;
                </p>

                {/* Auteur */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
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

      {/* Image Modal - AVEC VRAIE IMAGE */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <div className="bg-black rounded-xl overflow-hidden">
              <img
                src={galleryItems[selectedImage].image}
                alt={galleryItems[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {galleryItems[selectedImage].title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {galleryItems[selectedImage].description}
                </p>
              </div>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
              aria-label="Fermer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
