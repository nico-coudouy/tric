import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../data';

export default function Contact() {
  return (
    <section id="contacto" className="py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[3rem] bg-tric-orange px-8 py-16 text-white shadow-2xl shadow-tric-orange/40"
        >
          <h2 className="font-display text-4xl font-black md:text-6xl">¿Tenés una urgencia?</h2>
          <p className="mx-auto mt-6 max-w-xl text-xl font-medium text-white">
            No esperes más. Escribinos por WhatsApp y recibí un presupuesto sin cargo en minutos.
          </p>
          <a
            href={whatsappUrl('Hola! Tengo una urgencia, ¿me pueden ayudar?')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-xl font-black text-tric-orange-dark shadow-xl transition-transform hover:scale-105 active:scale-95"
          >
            <MessageCircle size={28} aria-hidden="true" />
            Escribir por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
