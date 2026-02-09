// app/layout.tsx
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
  title: `${SITE.name} - Confort et élégance à Douala`,
  description: SITE.description,
  keywords: [
    "hôtel Douala",
    "chambre Douala",
    "studio meublé Douala",
    "hébergement Douala",
    "BABA HÔTEL",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script src="https://cdn.tailwindcss.com" async></script>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
            body { 
              font-family: 'Poppins', sans-serif; 
              scroll-behavior: smooth; 
            }
            .hero-image {
              background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/hero.jpg');
              background-size: cover;
              background-position: center;
            }
            .room-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
            }
            .service-icon {
              transition: all 0.3s ease;
            }
            .service-card:hover .service-icon {
              transform: scale(1.1);
              color: ${COLORS.red};
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
      </body>
    </html>
  );
}
