import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, MessageCircle, ShieldCheck, Zap } from 'lucide-react';
import Logo from './Logo';
import { whatsappUrl } from '../data';

const TRUST = ['Gasista matriculado', 'Electricidad certificada', 'Garantía escrita'];

// Nota: la columna derecha es provisoria hasta tener la foto real (rediseño pendiente).
export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden bg-tric-gray pt-24 pb-16">
      <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-tric-orange/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-tric-blue/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        {/* Sin animación de entrada: es el contenido principal y tiene que verse al instante */}
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-tric-orange/10 px-4 py-1.5 text-sm font-bold text-tric-orange-dark">
            <ShieldCheck size={16} aria-hidden="true" />
            Plomería, gas y electricidad en Mar del Plata
          </p>
          <h1 className="font-display text-5xl font-black leading-[1.1] text-tric-blue md:text-7xl">
            Soluciones <br />
            <span className="text-tric-orange">Integrales</span> para tu casa, edificio o local.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-tric-blue/75 md:text-xl">
            No dejes que una pérdida, un corte de luz o un problema de gas te frene el día. Lo resolvemos rápido y con garantía.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 whitespace-nowrap rounded-xl bg-tric-orange px-8 py-4 text-lg font-bold text-white shadow-xl shadow-tric-orange/20 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-tric-orange/30 active:translate-y-0"
            >
              <MessageCircle size={24} aria-hidden="true" />
              Pedir presupuesto
            </a>
            <a
              href="#servicios"
              className="flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border-2 border-tric-blue/10 px-8 py-4 text-lg font-bold transition-colors hover:bg-tric-blue/5"
            >
              Ver servicios
              <ChevronRight size={20} aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-tric-blue/10 pt-8">
            {TRUST.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold text-tric-blue/80">
                <CheckCircle2 size={18} className="text-tric-orange" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 flex h-[520px] items-center justify-center overflow-hidden rounded-3xl bg-white shadow-2xl">
            <Logo className="text-[9rem]" />
            <div className="absolute bottom-0 left-0 right-0 bg-tric-blue p-8 text-white">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tric-orange">
                  <Zap size={24} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80">Urgencias 24hs</p>
                  <p className="text-xl font-bold">Atención inmediata en toda la zona</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl border-2 border-tric-orange" />
        </motion.div>
      </div>
    </section>
  );
}
