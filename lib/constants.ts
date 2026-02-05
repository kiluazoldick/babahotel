// lib/constants.ts
export const SITE = {
  name: "BABA HÔTEL",
  description: "Confort et élégance à Douala",
  phone: "697313718",
  phoneFormatted: "697 31 37 18",
  whatsapp: "237697313718",
  address: "Ndogbong Zachman – Rue Winner Chapelle, Douala",
  email: "contact@babahotel.com",
  locationUrl: "https://maps.app.goo.gl/aEGAU7SyQbATkgnm6",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.830704553405!2d9.748524875705424!3d4.054923095918854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610da6b4e8a5b7%3A0xc9ce6d800ac8f0ef!2sBaba%20h%C3%B4tel!5e0!3m2!1sfr!2scm!4v1769801469576!5m2!1sfr!2scm",
};

export const COLORS = {
  blue: "#7EC8E3", // Couleur principale bleu
  red: "#FF5A5F", // Couleur CTA rouge
};

export const PRICES = {
  simpleRoom: "8 000 FCFA",
  climatisee: "10 000 FCFA",
  climatiseeConforme: "12 000 FCFA",
  climatiseeVIP: "15 000 FCFA",
  hautStanding: "17 000 FCFA",
  studioMeuble: "20 000 FCFA",
  studioPromo: "18 000 FCFA",
  sieste2h: "3 500 FCFA",
  sieste4h: "6 500 FCFA",
};

export const NAV_LINKS = [
  { name: "Accueil", href: "/" },
  { name: "Chambres & Studios", href: "/chambres-studios" },
  { name: "Tarifs & Services", href: "/tarifs-services" },
  { name: "Galerie", href: "/galerie" },
  { name: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    icon: "Home",
    title: "Chambres Confortables",
    description: "Des chambres spacieuses et bien équipées pour votre confort.",
  },
  {
    icon: "Box",
    title: "Studios Meublés",
    description: "Studios entièrement équipés pour des séjours prolongés.",
  },
  {
    icon: "Tag",
    title: "Tarifs Accessibles",
    description: "Des prix compétitifs pour un excellent rapport qualité-prix.",
  },
  {
    icon: "Shield",
    title: "Sécurité & Tranquillité",
    description: "Un environnement sécurisé pour votre tranquillité d'esprit.",
  },
];
