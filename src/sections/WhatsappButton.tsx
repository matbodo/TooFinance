import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp"
      href="https://wa.me/556299042011"
      aria-label="Falar com um consultor pelo WhatsApp"
    >
      <MessageCircle size={20} strokeWidth={2.2} aria-hidden="true" />
    </a>
  );
}
