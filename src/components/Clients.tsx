import { Briefcase, Building2, Home } from 'lucide-react';
import { CLIENT_TYPES } from '../data';

const ICONS = { hogares: Home, consorcios: Building2, empresas: Briefcase };

export default function Clients() {
  return (
    <section id="clientes" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 text-center font-display text-4xl font-black text-tric-blue md:text-5xl">Atendemos a:</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {CLIENT_TYPES.map((client) => {
            const Icon = ICONS[client.id];
            return (
              <div key={client.id} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-tric-gray text-tric-orange transition-colors hover:bg-tric-orange hover:text-white">
                  <Icon size={40} aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-2xl font-bold">{client.title}</h3>
                <p className="text-tric-blue/70">{client.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
