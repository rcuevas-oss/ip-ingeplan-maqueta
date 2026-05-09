import { motion } from "framer-motion";
import {
  HardHat,
  LineChart,
  Handshake,
  ShieldCheck,
} from "lucide-react";

const items = [
  {
    Icon: HardHat,
    title: "Ingenieros con piso de planta",
    body: "Recomendamos lo que hemos hecho. Treinta años montando, operando y modernizando plantas — los diagnósticos parten en terreno, no en una sala de reuniones.",
  },
  {
    Icon: LineChart,
    title: "Decisiones con número detrás",
    body: "Cada propuesta de inversión llega con factibilidad técnica y económica. Si la rentabilidad no cierra, lo decimos antes de gastarte el CAPEX.",
  },
  {
    Icon: Handshake,
    title: "Solución más simple que resuelve",
    body: "Privilegiamos buenas prácticas operativas y ajustes de bajo costo antes de proponer inversión. Los quick wins suelen pagar el resto del proyecto.",
  },
  {
    Icon: ShieldCheck,
    title: "Acreditados para postular a AChEE",
    body: "Te acompañamos a postular a líneas de apoyo de la Agencia Chilena de Eficiencia Energética — desde el estudio técnico hasta el cierre financiero.",
  },
];

export function WhyUs() {
  return (
    <section className="relative border-b border-steel-200 bg-steel-950 py-16 text-white md:py-32">
      <div className="absolute inset-0 grid-pattern-dark opacity-30" aria-hidden />
      <div
        className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-signal/10 blur-3xl"
        aria-hidden
      />
      <div className="container relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
              · Por qué Ingeplan
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              No somos consultora de manual.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
              Somos un equipo de ingenieros que pasó la mitad de la carrera con casco
              puesto. Eso cambia la forma de mirar tu planta y de proponer soluciones
              — privilegiamos lo que va a funcionar el lunes a las 8.
            </p>
            <div className="mt-9 grid grid-cols-3 gap-3">
              {[
                { k: "AChEE", v: "Acreditados" },
                { k: "30 años", v: "En operación" },
                { k: "USM", v: "Ing. Civil Q." },
              ].map((b) => (
                <div
                  key={b.k}
                  className="rounded-md border border-white/10 bg-white/[0.03] p-3 text-center"
                >
                  <p className="font-display text-sm font-semibold text-signal">
                    {b.k}
                  </p>
                  <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55">
                    {b.v}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((it, i) => (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05]"
                >
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-signal/0 blur-2xl transition-all duration-500 group-hover:bg-signal/20" />
                  <div className="grid h-11 w-11 place-items-center rounded-md border border-white/15 bg-white/5 text-white">
                    <it.Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug tracking-tight">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {it.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
