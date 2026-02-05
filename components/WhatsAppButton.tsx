// components/WhatsAppButton.tsx
import { MessageSquare } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function WhatsAppButton() {
  const whatsappMessage = encodeURIComponent(
    `Bonjour, je souhaite obtenir des informations sur les disponibilités à BABA HÔTEL.`,
  );
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 md:bottom-6 right-4 md:right-6 p-3 md:p-4 rounded-full shadow-lg md:shadow-xl z-50 transition-all duration-300 hover:scale-110 active:scale-95"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Contactez-nous sur WhatsApp"
      title="Envoyer un message WhatsApp"
    >
      <MessageSquare className="w-6 md:w-7 h-6 md:h-7 text-white" />
    </a>
  );
}
