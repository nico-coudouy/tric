import { track } from '@vercel/analytics';

/**
 * Registra en Vercel Web Analytics cada clic en WhatsApp o en un teléfono,
 * indicando desde qué parte de la página se hizo (hero, servicios, flotante, etc.).
 * Usa un solo listener global, así los links no necesitan código extra.
 */
export function trackContactClicks() {
  const onClick = (event: MouseEvent) => {
    const link = (event.target as Element | null)?.closest?.('a');
    if (!link) return;
    const href = link.getAttribute('href') ?? '';
    const channel = href.startsWith('https://wa.me') ? 'whatsapp' : href.startsWith('tel:') ? 'telefono' : null;
    if (!channel) return;

    const place =
      link.dataset.track ??
      link.closest('section')?.id ??
      (link.closest('nav') ? 'menu' : link.closest('footer') ? 'footer' : 'otro');

    track('contacto', { canal: channel, lugar: place });
  };

  document.addEventListener('click', onClick, { capture: true });
  return () => document.removeEventListener('click', onClick, { capture: true });
}
