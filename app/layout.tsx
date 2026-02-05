// app/layout.tsx (ajout des balises meta importantes)
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE, COLORS } from "@/lib/constants";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} - Confort et élégance à Douala`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "hôtel Douala",
    "chambre Douala",
    "studio meublé Douala",
    "hébergement Douala",
    "BABA HÔTEL",
    "Logpom",
    "Ndogbong",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://babahotel-douala.com",
    title: `${SITE.name} - Confort et élégance à Douala`,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} - Confort et élégance à Douala`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // À ajouter plus tard : google: "votre-code-verification",
    // À ajouter plus tard : yandex: "votre-code-verification",
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
        {/* TailwindCSS should be included via a PostCSS configuration or imported in a global CSS file */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
      <body className={`${poppins.className} bg-white text-gray-800`}>
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
