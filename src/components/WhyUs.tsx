import { motion } from 'motion/react';
import { CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { VALUES, WORK_PHOTOS } from '../data';

const ICONS = [CheckCircle2, Clock, ShieldCheck];

export default function WhyUs() {
  const [p1, p2, p3, p4] = WORK_PHOTOS;
  const img = (p: (typeof WORK_PHOTOS)[number]) => (
    <img src={p.src} width={p.w} height={p.h} alt={p.alt} loading="lazy" decoding="async" className="h-auto w-full rounded-2xl object-cover" />
  );

  return (
    <section id="nosotros" className="bg-tric-blue py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-4xl font-black md:text-5xl">¿Por qué elegirnos?</h2>
          <p className="mt-6 text-lg text-white/75">
            Llevamos años brindando confianza y seguridad a los vecinos de Mar del Plata. Nuestra prioridad es tu tranquilidad.
          </p>
          <ul className="mt-10 space-y-6">
            {VALUES.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <li key={item.title} className="flex gap-4">
                  <Icon className="mt-1 shrink-0 text-tric-orange" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-white/70">{item.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="space-y-4">{img(p1)}{img(p2)}</div>
          <div className="space-y-4 pt-8">{img(p3)}{img(p4)}</div>
        </motion.div>
      </div>
    </section>
  );
}
