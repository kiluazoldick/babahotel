// components/Footer.tsx
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { SITE, NAV_LINKS, COLORS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: COLORS.blue }}
            >
              {SITE.name}
            </h3>
            <p className="text-gray-400 mb-4 text-sm">Confort et élégance à Douala</p>
            <p className="text-gray-400 flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{SITE.address}</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">Contact Direct</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm md:text-base">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${SITE.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm md:text-base">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">Réseaux</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-500 p-2 md:p-3 rounded-full transition-colors"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="w-4 md:w-5 h-4 md:h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-pink-500 p-2 md:p-3 rounded-full transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="w-4 md:w-5 h-4 md:h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-sky-500 p-2 md:p-3 rounded-full transition-colors"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="w-4 md:w-5 h-4 md:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p className="mb-3">
            &copy; {currentYear} {SITE.name}. Tous droits réservés.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Mentions légales
            </Link>
            <span className="hidden sm:inline">•</span>
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
