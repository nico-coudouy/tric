export const BRAND = 'TriC';
export const BRAND_FULL = 'TriC Soluciones Integrales';
export const SITE_URL = 'https://tric-ten.vercel.app';

export const PHONE_DISPLAY = '223 522-2755';
export const PHONE_E164 = '+5492235222755';
const WHATSAPP_NUMBER = '5492235222755';

/** Link de WhatsApp con mensaje precargado para que el cliente no arranque en blanco. */
export function whatsappUrl(message = 'Hola! Quiero pedir un presupuesto.') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Clientes', href: '#clientes' },
  { name: 'Contacto', href: '#contacto' },
];

export type ServiceId = 'plomeria' | 'gas' | 'electricidad';

export const SERVICES: { id: ServiceId; title: string; desc: string }[] = [
  {
    id: 'plomeria',
    title: 'Plomería General',
    desc: 'Reparación de fugas, destapaciones, instalación de sanitarios, griferías y tanques de agua.',
  },
  {
    id: 'gas',
    title: 'Gasista Matriculado',
    desc: 'Instalaciones, reparaciones, detección de fugas y mantenimiento de estufas, termotanques y cocinas.',
  },
  {
    id: 'electricidad',
    title: 'Electricidad Certificada',
    desc: 'Tableros eléctricos, cortocircuitos, iluminación, cableados y certificaciones para consorcios.',
  },
];

export const VALUES = [
  { title: 'Presupuestos transparentes', desc: 'Sin sorpresas ni costos ocultos. Cotizamos antes de empezar.' },
  { title: 'Puntualidad y compromiso', desc: 'Respetamos tu tiempo. Llegamos a la hora acordada.' },
  { title: 'Trabajo garantizado', desc: 'Todos nuestros servicios cuentan con garantía escrita.' },
];

export const CLIENT_TYPES = [
  { id: 'hogares', title: 'Hogares', desc: 'Soluciones rápidas para el día a día en tu casa o departamento.' },
  { id: 'consorcios', title: 'Consorcios', desc: 'Mantenimiento preventivo y correctivo para edificios.' },
  { id: 'empresas', title: 'Empresas', desc: 'Servicio técnico especializado para locales y oficinas.' },
] as const;

export const COVERAGE = ['Mar del Plata', 'Batán', 'Santa Clara del Mar', 'Sierra de los Padres'];

export const WORK_PHOTOS = [
  { src: '/trabajo-1.webp', w: 900, h: 675, alt: 'Comedor con cocina terminado, con iluminación colgante instalada' },
  { src: '/trabajo-2.webp', w: 675, h: 900, alt: 'Tablero eléctrico abierto durante una medición con pinza amperométrica' },
  { src: '/trabajo-3.webp', w: 900, h: 675, alt: 'Ambiente en obra con instalación de luminarias en el techo' },
  { src: '/trabajo-4.webp', w: 675, h: 900, alt: 'Baño terminado con mampara y revestimiento de madera' },
];
