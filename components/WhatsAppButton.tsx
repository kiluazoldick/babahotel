// components/WhatsAppButton.tsx - OPTIMISATION
import { MessageSquare } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function WhatsAppButton() {
  const whatsappMessage = encodeURIComponent(
    `Bonjour BABA HÔTEL,je viens depuis votre site internet je souhaite obtenir des informations ou faire une réservation.`,
  );
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="fixed bottom-6 right-6 p-4 rounded-full shadow-xl z-50 transition-all duration-300 hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Contactez-nous sur WhatsApp"
      title="Cliquez pour nous contacter sur WhatsApp"
    >
      <MessageSquare className="w-6 h-6 text-white" />
    </a>
  );
}
