import { ChevronDown } from 'lucide-react';
import { FAQ } from '../data';

export default function Faq() {
  return (
    <section id="preguntas" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-12 text-center font-display text-4xl font-black text-tric-blue md:text-5xl">Preguntas frecuentes</h2>
        <div className="space-y-3">
          {FAQ.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-tric-blue/10 bg-white px-6 py-5 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown size={22} className="shrink-0 text-tric-orange transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-3 leading-relaxed text-tric-blue/75">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
