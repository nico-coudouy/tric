import { motion } from 'motion/react';
import { CheckCheck, MessageCircle, Phone, ShieldCheck, Zap } from 'lucide-react';
import { OWNER, PHONE_E164, whatsappUrl } from '../data';

// Foto provisoria: reemplazar por una de Alejandro trabajando (vertical, luz natural).
const HERO_PHOTO = { src: '/trabajo-2.webp', w: 675, h: 900, alt: 'Alejandro revisando un tablero eléctrico' };

export default function Hero() {
  return (
    <section id="inicio" className="bg-tric-cream pt-28 pb-16 lg:pt-32 lg:pb-24">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-12 lg:grid-rows-[auto_auto]">
        {/* Presentación (sin animación de entrada: es el contenido principal) */}
        <div className="rounded-[2rem] border border-tric-blue/5 bg-white p-7 shadow-sm sm:p-10 lg:col-span-7">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tric-blue font-display text-lg font-extrabold text-white">
              {OWNER.initials}
            </span>
            <div className="leading-tight">
              <p className="font-bold">{OWNER.name}</p>
              <p className="flex items-center gap-1.5 text-sm text-tric-blue/70">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Respondo por WhatsApp
              </p>
            </div>
          </div>

          <h1 className="mt-8 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-tric-blue sm:text-6xl">
            Hola, soy {OWNER.firstName}.{' '}
            <span className="text-tric-blue/55">Arreglo lo de</span>{' '}
            <span className="relative whitespace-nowrap text-tric-orange">
              agua, gas y luz
            </span>{' '}
            <span className="text-tric-blue/55">de tu casa.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-tric-blue/75">
            Más de {OWNER.years} años trabajando en Mar del Plata. Presupuesto sin cargo y precio claro antes de empezar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl(`Hola ${OWNER.firstName}! Quiero pedir un presupuesto.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-tric-orange px-7 py-4 text-lg font-bold text-white shadow-lg shadow-tric-orange/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-tric-orange/30"
            >
              <MessageCircle size={22} aria-hidden="true" />
              Escribile a {OWNER.firstName}
            </a>
            <a
              href={`tel:${PHONE_E164}`}
              className="flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-tric-blue/15 px-7 py-4 text-lg font-bold transition-colors hover:bg-tric-blue/5"
            >
              <Phone size={20} aria-hidden="true" />
              Llamar
            </a>
          </div>
        </div>

        {/* Foto + conversación */}
        <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] bg-tric-blue lg:col-span-5 lg:row-span-2">
          <img
            src={HERO_PHOTO.src}
            width={HERO_PHOTO.w}
            height={HERO_PHOTO.h}
            alt={HERO_PHOTO.alt}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tric-blue/85 via-tric-blue/10 to-transparent" />

          <div className="absolute inset-x-4 bottom-4 space-y-2.5 sm:inset-x-6 sm:bottom-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mr-10 w-fit rounded-2xl rounded-bl-md bg-white px-4 py-3 text-[15px] text-tric-blue shadow-lg"
            >
              Hola {OWNER.firstName}, el calefón no prende y huele a gas
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.4 }}
              className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-[#D9FDD3] px-4 py-3 text-[15px] text-tric-blue shadow-lg"
            >
              Cerrá la llave de paso y abrí una ventana. Salgo para allá.
              <span className="ml-2 inline-flex translate-y-0.5 items-center gap-1 text-xs text-tric-blue/50">
                10:42 <CheckCheck size={14} className="text-sky-500" aria-hidden="true" />
              </span>
            </motion.div>
          </div>
        </div>

        {/* Datos en bento */}
        <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
          <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
            <p className="font-display text-5xl font-extrabold tracking-tight text-tric-blue">+{OWNER.years}</p>
            <p className="mt-1 text-sm font-semibold text-tric-blue/70">años de oficio</p>
          </div>
          <div className="rounded-[1.5rem] bg-tric-blue p-6 text-white">
            <ShieldCheck size={28} className="text-tric-orange" aria-hidden="true" />
            <p className="mt-3 font-bold leading-snug">Matriculado en gas y electricidad</p>
          </div>
          <div className="rounded-[1.5rem] bg-tric-orange p-6 text-white">
            <Zap size={28} aria-hidden="true" />
            <p className="mt-3 font-bold leading-snug">Urgencias las 24 horas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
