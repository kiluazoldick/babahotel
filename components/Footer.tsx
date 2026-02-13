// components/Footer.tsx
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Music2 } from "lucide-react";
import { SITE, NAV_LINKS, COLORS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo & Description */}
          <div className="mb-8 md:mb-0">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: COLORS.blue }}
            >
              {SITE.name}
            </h3>
            <p className="text-gray-400 mb-4">Confort et élégance à Douala</p>
            <p className="text-gray-400">
              <MapPin className="inline w-4 h-4 mr-1" />
              {SITE.address}
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <a
                  href={`tel:${SITE.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Réseaux sociaux</h4>
            <div className="flex gap-4">
              <a
                href="https://web.facebook.com/babahoteldouala?_rdc=1&_rdr#"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/babahoteldouala"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Music2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} {SITE.name}. Tous droits réservés.
          </p>
          <div className="mt-2">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Mentions légales
            </Link>
            {" | "}
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
