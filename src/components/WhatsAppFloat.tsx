import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../data';

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 active:scale-90 md:bottom-8 md:right-8"
    >
      <MessageCircle size={32} fill="currentColor" aria-hidden="true" />
    </a>
  );
}
