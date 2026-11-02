import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { COVERAGE, PHONE_DISPLAY, PHONE_E164, whatsappUrl } from '../data';

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201169.05461794484!2d-57.60053405!3d-38.01756665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d94d19d34209%3A0xdd9670804bfed126!2sMar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1775674966495!5m2!1ses!2sar';

export default function Coverage() {
  return (
    <section className="bg-tric-gray py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 rounded-3xl bg-white p-8 shadow-xl md:p-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-black text-tric-blue">Zona de Cobertura</h2>
            <p className="mt-6 text-lg text-tric-blue/70">
              Estamos en Mar del Plata y trabajamos en toda la zona de influencia.
            </p>
            <ul className="mt-8 space-y-4">
              {COVERAGE.map((city) => (
                <li key={city} className="flex items-center gap-3 font-bold">
                  <MapPin className="text-tric-orange" size={20} aria-hidden="true" />
                  {city}
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col gap-6 sm:flex-row">
              <a href={`tel:${PHONE_E164}`} className="group flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-tric-orange/10 text-tric-orange-dark">
                  <Phone size={24} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-widest text-tric-blue/60">Llamanos</span>
                  <span className="block text-lg font-bold group-hover:text-tric-orange-dark">{PHONE_DISPLAY}</span>
                </span>
              </a>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-tric-orange/10 text-tric-orange-dark">
                  <MessageCircle size={24} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-widest text-tric-blue/60">WhatsApp</span>
                  <span className="block text-lg font-bold group-hover:text-tric-orange-dark">Atención 24hs</span>
                </span>
              </a>
            </div>
          </div>

          <div className="relative h-[400px] overflow-hidden rounded-2xl bg-tric-blue/5">
            <iframe
              src={MAP_SRC}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Mar del Plata, zona de cobertura"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
