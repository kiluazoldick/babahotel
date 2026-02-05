// app/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE, COLORS } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://babahotel-douala.com"),
  title: {
    default: `${SITE.name} - Chambres & Studios à Douala`,
    template: `%s - ${SITE.name}`,
  },
  description:
    "Chambres confortables et studios meublés à Douala. Tarifs à partir de 8 000 FCFA. Wifi et petit déjeuner inclus. Réservez maintenant !",
  keywords: [
    "hôtel Douala",
    "chambre Douala",
    "studio meublé Douala",
    "hébergement Douala",
    "BABA HÔTEL",
    "Logpom",
    "Ndogbong",
    "hôtel pas cher",
    "location chambre",
    "séjour longue durée",
    "tarif accessible",
    "confort élégance",
  ],
  authors: [{ name: SITE.name, url: "https://babahotel-douala.com" }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  alternates: {
    canonical: "https://babahotel-douala.com",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://babahotel-douala.com",
    siteName: SITE.name,
    title: `${SITE.name} - Chambres & Studios à Douala`,
    description:
      "Chambres confortables et studios meublés à Douala. Tarifs à partir de 8 000 FCFA. Wifi et petit déjeuner inclus.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "BABA HÔTEL Douala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} - Chambres & Studios à Douala`,
    description:
      "Chambres confortables et studios meublés à Douala. Tarifs à partir de 8 000 FCFA.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Favicon & Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content={COLORS.blue} />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
            * {
              -webkit-tap-highlight-color: transparent;
            }
            body { 
              font-family: 'Poppins', sans-serif; 
              scroll-behavior: smooth;
              text-rendering: optimizeLegibility;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            .hero-image {
              background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/hero.jpg');
              background-size: cover;
              background-position: center;
              background-attachment: fixed;
            }
            @media (max-width: 768px) {
              .hero-image {
                background-attachment: scroll;
              }
            }
            .room-card {
              transition: all 0.3s ease;
            }
            .room-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.1);
            }
            .service-icon {
              transition: all 0.3s ease;
            }
            .service-card:hover .service-icon {
              transform: scale(1.1);
              color: ${COLORS.red};
            }
            /* Animation pour les sections */
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-in-up {
              animation: fadeInUp 0.6s ease-out forwards;
            }
          `,
          }}
        />
      </head>
      <body className="bg-white text-gray-800 font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />

        {/* Schema.org JSON-LD pour l'hôtel */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: SITE.name,
              description: SITE.description,
              address: {
                "@type": "PostalAddress",
                streetAddress: SITE.address,
                addressLocality: "Douala",
                addressRegion: "Littoral",
                addressCountry: "CM",
              },
              telephone: `+237${SITE.phone}`,
              priceRange: "8,000 FCFA - 20,000 FCFA",
              amenityFeature: [
                "FreeWifi",
                "Parking",
                "AirConditioning",
                "Breakfast",
                "LaundryService",
                "RoomService",
              ],
              starRating: {
                "@type": "Rating",
                ratingValue: "4",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
