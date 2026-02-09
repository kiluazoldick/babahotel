// app/contact/page.tsx
"use client";

import Hero from "@/components/Hero";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  PhoneCall,
} from "lucide-react";
import { SITE, COLORS } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulation d'envoi
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

      // Reset du statut après 5 secondes
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Téléphone",
      value: SITE.phoneFormatted,
      action: `tel:${SITE.phone}`,
      description: "Appelez-nous directement",
    },
    {
      icon: Mail,
      title: "Email",
      value: SITE.email,
      action: `mailto:${SITE.email}`,
      description: "Envoyez-nous un email",
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: SITE.address,
      action: SITE.locationUrl,
      description: "Venez nous voir",
    },
    {
      icon: Clock,
      title: "Horaires",
      value: "24h/24 - 7j/7",
      action: "#",
      description: "Réception toujours ouverte",
    },
  ];

  const subjects = [
    "Demande de réservation",
    "Information sur les tarifs",
    "Question sur les services",
    "Événement / Groupe",
    "Autre demande",
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Nous contacter"
        subtitle="Nous sommes à votre écoute"
        description="Plusieurs moyens pour échanger avec notre équipe"
        showButtons={false}
      />

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.action}
                  target={method.action.includes("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center group"
                >
                  <div
                    className="p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${COLORS.blue}1A` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: COLORS.blue }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p
                    className="font-medium mb-2"
                    style={{ color: COLORS.blue }}
                  >
                    {method.value}
                  </p>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: COLORS.blue }}
              >
                Envoyez-nous un message
              </h2>
              <p className="text-gray-600 mb-8">
                Remplissez ce formulaire et notre équipe vous répondra dans les
                plus brefs délais.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Votre numéro"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Adresse email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Votre message..."
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: "#10B981" }}
                    />
                    <p className="text-green-700">
                      Message envoyé ! Nous vous répondrons dans les plus brefs
                      délais.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                    <AlertCircle
                      className="w-5 h-5"
                      style={{ color: COLORS.red }}
                    />
                    <p className="text-red-700">
                      Une erreur est survenue. Veuillez réessayer ou nous
                      appeler directement.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 text-white"
                  style={{ backgroundColor: COLORS.red }}
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Contact Info */}
            <div className="lg:w-1/2">
              <div className="sticky top-24">
                <div className="h-96 rounded-xl shadow-lg overflow-hidden mb-8">
                  <iframe
                    src={SITE.googleMapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation de BABA HÔTEL"
                  />
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">
                    Informations pratiques
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Accès</h4>
                      <p className="text-gray-600">
                        Situé à Ndogbong Zachman, facilement accessible depuis
                        l&apos;axe routier principal. Parking sécurisé gratuit
                        pour nos clients.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">
                        Réception
                      </h4>
                      <p className="text-gray-600">
                        Ouverte 24 heures sur 24, 7 jours sur 7. Arrivée et
                        départ flexibles selon disponibilité.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">
                        Langues parlées
                      </h4>
                      <p className="text-gray-600">
                        Français, Anglais, et langues locales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: COLORS.blue }}
          >
            Questions fréquentes - Contact
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Comment vérifier la disponibilité d'une chambre ?",
                answer:
                  "Le plus rapide est de nous appeler au 697 31 37 18. Notre équipe vérifie en temps réel les disponibilités.",
              },
              {
                question: "Puis-je réserver en ligne ?",
                answer:
                  "Pour le moment, nous privilégions la réservation par téléphone ou WhatsApp pour un service personnalisé.",
              },
              {
                question: "Quelles sont les modalités de paiement ?",
                answer:
                  "Nous acceptons les paiements en espèces (FCFA) et par mobile money. La caution est requise à l'arrivée.",
              },
              {
                question: "Y a-t-il un service de navette depuis l'aéroport ?",
                answer:
                  "Oui, sur demande et avec supplément. Contactez-nous à l'avance pour organiser votre transfert.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immediate Contact CTA */}
      <section className="py-16" style={{ backgroundColor: COLORS.blue }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Contact immédiat nécessaire ?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Pour les demandes urgentes, utilisez ces moyens de contact directs :
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${SITE.phone}`}
              className="bg-white hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 text-lg inline-flex items-center justify-center gap-2"
              style={{ color: COLORS.blue }}
            >
              <PhoneCall className="w-6 h-6" />
              Appeler maintenant
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 text-lg inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-6 h-6" />
              WhatsApp instantané
            </a>
          </div>
          <p className="text-white/80 mt-8 text-sm">
            Réponse garantie en moins de 5 minutes pendant les heures
            d&apos;ouverture.
          </p>
        </div>
      </section>
    </>
  );
}
