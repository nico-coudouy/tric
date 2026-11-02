import Logo from './Logo';
import { BRAND_FULL, PHONE_DISPLAY, PHONE_E164, whatsappUrl } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-tric-blue/5 bg-white py-12 pb-28 md:pb-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <Logo className="text-3xl" />
          <span className="text-sm font-medium text-tric-blue/60">
            © {new Date().getFullYear()} {BRAND_FULL}
          </span>
        </div>
        <div className="flex gap-8">
          <a href={`tel:${PHONE_E164}`} className="text-sm font-bold text-tric-blue/70 hover:text-tric-orange-dark">
            {PHONE_DISPLAY}
          </a>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-tric-blue/70 hover:text-tric-orange-dark">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
