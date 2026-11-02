import { BRAND } from '../data';

/**
 * Logo TriC: "Tr" + triángulo naranja con punto (la "i") + "C".
 * Proporciones tomadas del logo original. Escala con el font-size del contenedor.
 */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label={BRAND}
      className={`font-display font-extrabold leading-none tracking-tight text-tric-blue ${className}`}
    >
      <span aria-hidden="true">Tr</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 187 247"
        className="mx-[0.03em] inline-block h-[0.72em] w-auto fill-tric-orange align-baseline"
      >
        <circle cx="93.5" cy="26" r="25" />
        <polygon points="93.5,78 187,247 0,247" />
      </svg>
      <span aria-hidden="true">C</span>
    </span>
  );
}
