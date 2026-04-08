/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Droplets, 
  Flame, 
  Zap, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Building2, 
  Home, 
  Briefcase,
  MessageCircle,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const WHATSAPP_URL = "https://wa.me/5492235222755";
const PHONE_NUMBER = "223-5222755";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-tric-blue selection:bg-tric-orange selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/90 py-3 shadow-md backdrop-blur-md' : 'bg-transparent py-6'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 items-center">
               <span className="font-display text-3xl font-extrabold tracking-tighter text-tric-blue">
                 Tr<span className="text-tric-orange">i</span>C
               </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-semibold transition-colors hover:text-tric-orange"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-tric-orange px-6 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95"
            >
              <MessageCircle size={18} />
              Presupuesto Gratis
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="text-tric-blue md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white px-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="py-4 text-2xl font-bold"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-2 rounded-full bg-tric-orange px-8 py-4 text-lg font-bold text-white"
            >
              <MessageCircle size={24} />
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden bg-tric-gray pt-20">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-tric-orange/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-tric-blue/5 blur-3xl" />
        
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-tric-orange/10 px-4 py-1.5 text-sm font-bold text-tric-orange">
              <ShieldCheck size={16} />
              Servicio Técnico Profesional
            </div>
            <h1 className="font-display text-5xl font-black leading-[1.1] text-tric-blue md:text-7xl">
              Soluciones <br />
              <span className="text-tric-orange underline decoration-tric-blue/10 underline-offset-8">Integrales</span> para tu hogar.
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-tric-blue/70 md:text-xl">
              No dejes que los problemas domésticos interrumpan tu día. En TRIC contamos con la experiencia y las herramientas para resolverlo rápido.
            </p>
            
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-tric-orange px-8 py-4 text-lg font-bold text-white shadow-xl shadow-tric-orange/20 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-tric-orange/30 active:translate-y-0"
              >
                <MessageCircle size={24} />
                Pedir Turno Ahora
              </a>
              <a 
                href="#servicios"
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-tric-blue/10 px-8 py-4 text-lg font-bold transition-colors hover:bg-tric-blue/5"
              >
                Ver Servicios
                <ChevronRight size={20} />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 border-t border-tric-blue/10 pt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    alt="Cliente"
                    className="h-10 w-10 rounded-full border-2 border-white object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-tric-blue/60">
                <span className="font-bold text-tric-blue">+500 clientes</span> satisfechos en Mar del Plata
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="tric_logo.png" 
                alt="Servicio de Plomería" 
                className="h-[600px] w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tric-blue/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tric-orange">
                    <Zap size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest opacity-80">Urgencias 24hs</p>
                    <p className="text-xl font-bold">Atención inmediata en toda la zona</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl border-2 border-tric-orange" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl font-black text-tric-blue md:text-5xl">Nuestros Servicios</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-tric-blue/60">
              Ofrecemos soluciones integrales con personal capacitado y materiales de primera calidad.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Plomería General",
                desc: "Reparación de fugas, destapaciones, instalación de sanitarios, griferías y tanques de agua.",
                icon: <Droplets className="text-tric-orange" size={32} />,
                color: "bg-blue-50"
              },
              {
                title: "Gasista Matriculado",
                desc: "Instalaciones, reparaciones, detección de fugas y mantenimiento de estufas, termotanques y cocinas.",
                icon: <Flame className="text-tric-orange" size={32} />,
                color: "bg-orange-50"
              },
              {
                title: "Electricidad Certificada",
                desc: "Tableros eléctricos, cortocircuitos, iluminación, cableados y certificaciones para consorcios.",
                icon: <Zap className="text-tric-orange" size={32} />,
                color: "bg-yellow-50"
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-3xl border border-tric-blue/5 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${service.color} transition-transform group-hover:scale-110`}>
                  {service.icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
                <p className="mb-6 leading-relaxed text-tric-blue/60">
                  {service.desc}
                </p>
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-tric-orange"
                >
                  Consultar
                  <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="nosotros" className="bg-tric-blue py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-black md:text-5xl">¿Por qué elegirnos?</h2>
              <p className="mt-6 text-lg text-white/70">
                Llevamos años brindando confianza y seguridad a los vecinos de Mar del Plata. Nuestra prioridad es tu tranquilidad.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  { title: "Presupuestos Transparentes", desc: "Sin sorpresas ni costos ocultos. Cotizamos antes de empezar.", icon: <CheckCircle2 className="text-tric-orange" /> },
                  { title: "Puntualidad y Compromiso", desc: "Respetamos tu tiempo. Llegamos a la hora acordada.", icon: <Clock className="text-tric-orange" /> },
                  { title: "Trabajo Garantizado", desc: "Todos nuestros servicios cuentan con garantía escrita.", icon: <ShieldCheck className="text-tric-orange" /> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold">{item.title}</h4>
                      <p className="text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <img src="img1.jpeg" alt="Trabajo" className="rounded-2xl object-cover" referrerPolicy="no-referrer" />
                <img src="img2.jpeg" alt="Trabajo" className="rounded-2xl object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="img3.jpeg" alt="Trabajo" className="rounded-2xl object-cover" referrerPolicy="no-referrer" />
                <img src="img4.jpeg" alt="Trabajo" className="rounded-2xl object-cover" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clientes" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl font-black text-tric-blue md:text-5xl">Atendemos a:</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { title: "Hogares", icon: <Home size={40} />, desc: "Soluciones rápidas para el día a día en tu casa o departamento." },
              { title: "Consorcios", icon: <Building2 size={40} />, desc: "Mantenimiento preventivo y correctivo para edificios." },
              { title: "Empresas", icon: <Briefcase size={40} />, desc: "Servicio técnico especializado para locales y oficinas." }
            ].map((client, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-tric-gray text-tric-orange transition-colors hover:bg-tric-orange hover:text-white">
                  {client.icon}
                </div>
                <h3 className="mb-2 text-2xl font-bold">{client.title}</h3>
                <p className="text-tric-blue/60">{client.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-tric-gray py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-white p-8 shadow-xl md:p-16">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-4xl font-black text-tric-blue">Zona de Cobertura</h2>
                <p className="mt-6 text-lg text-tric-blue/60">
                  Estamos ubicados en Mar del Plata y brindamos servicio en toda la zona de influencia.
                </p>
                
                <ul className="mt-8 space-y-4">
                  {['Mar del Plata', 'Batán', 'Santa Clara del Mar', 'Sierra de los Padres'].map((city) => (
                    <li key={city} className="flex items-center gap-3 font-bold">
                      <MapPin className="text-tric-orange" size={20} />
                      {city}
                    </li>
                  ))}
                </ul>

                <div className="mt-12 flex flex-col gap-6 sm:flex-row">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tric-orange/10 text-tric-orange">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-tric-blue/40">Llamanos</p>
                      <p className="text-lg font-bold">{PHONE_NUMBER}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tric-orange/10 text-tric-orange">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-tric-blue/40">WhatsApp</p>
                      <p className="text-lg font-bold">Atención 24hs</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-[400px] overflow-hidden rounded-2xl bg-tric-blue/5 relative">
                {/* Mapa de Google */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201169.05461794484!2d-57.60053405!3d-38.01756665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d94d19d34209%3A0xdd9670804bfed126!2sMar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1775674966495!5m2!1ses!2sar"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación en Mar del Plata"
                />

                {/* Fallback visual (opcional, se superpone mientras carga) */}
                <div className="absolute inset-0 flex items-center justify-center bg-tric-blue/5 text-tric-blue/20 pointer-events-none">
                  <MapPin size={100} strokeWidth={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] bg-tric-orange px-8 py-16 text-white shadow-2xl shadow-tric-orange/40"
          >
            <h2 className="font-display text-4xl font-black md:text-6xl">¿Tenés una urgencia?</h2>
            <p className="mx-auto mt-6 max-w-xl text-xl text-white/80">
              No esperes más. Escribinos ahora por WhatsApp y recibí un presupuesto sin cargo en minutos.
            </p>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-xl font-black text-tric-orange shadow-xl transition-transform hover:scale-105 active:scale-95"
            >
              <MessageCircle size={28} />
              Enviar Mensaje
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-tric-blue/5 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2">
              <span className="font-display text-3xl font-extrabold tracking-tighter text-tric-blue">
                Tr<span className="text-tric-orange">i</span>C
              </span>
              <span className="ml-2 text-sm font-medium text-tric-blue/40">© 2026 TRIC Soluciones Integrales</span>
            </div>
            
            <div className="flex gap-8">
              <a href="#" className="text-sm font-bold text-tric-blue/60 hover:text-tric-orange">Instagram</a>
              <a href="#" className="text-sm font-bold text-tric-blue/60 hover:text-tric-orange">Facebook</a>
              <a href="#" className="text-sm font-bold text-tric-blue/60 hover:text-tric-orange">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 active:scale-90"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
    </div>
  );
}
