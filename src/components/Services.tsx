import { motion } from 'motion/react';
import { ChevronRight, Droplets, Flame, Zap, type LucideIcon } from 'lucide-react';
import { SERVICES, whatsappUrl, type ServiceId } from '../data';

const ICONS: Record<ServiceId, { Icon: LucideIcon; bg: string }> = {
  plomeria: { Icon: Droplets, bg: 'bg-blue-50' },
  gas: { Icon: Flame, bg: 'bg-orange-50' },
  electricidad: { Icon: Zap, bg: 'bg-yellow-50' },
};

export default function Services() {
  return (
    <section id="servicios" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-black text-tric-blue md:text-5xl">Nuestros Servicios</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-tric-blue/70">
            Soluciones integrales con personal capacitado y materiales de primera calidad.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES.map((service, index) => {
            const { Icon, bg } = ICONS[service.id];
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative overflow-hidden rounded-3xl border border-tric-blue/5 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${bg} transition-transform group-hover:scale-110`}>
                  <Icon className="text-tric-orange" size={32} aria-hidden="true" />
                </div>
                <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
                <p className="mb-6 leading-relaxed text-tric-blue/70">{service.desc}</p>
                <a
                  href={whatsappUrl(`Hola! Quiero consultar por ${service.title.toLowerCase()}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-tric-orange-dark"
                >
                  Consultar por WhatsApp
                  <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
