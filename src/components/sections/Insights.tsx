import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const posts = [
  {
    img: `${BASE}img/plant/PB210009.jpg`,
    tag: "Energía térmica",
    title: "Cinco fugas térmicas que toda planta tiene (y casi nadie mide)",
    excerpt:
      "Trampa de vapor mal dimensionada, condensados sin recuperar, aislamiento perdido en líneas de alta — la lista corta que pagas todos los meses.",
    read: "6 min",
    date: "Mar 2026",
  },
  {
    img: `${BASE}img/plant/15-Prensas-aceite.jpg`,
    tag: "Procesos",
    title: "Cuándo conviene cogenerar vapor a procesos (y cuándo no)",
    excerpt:
      "Análisis simple para decidir si la cogeneración es una inversión sensata para tu planta agroindustrial — antes de pedir cotizaciones.",
    read: "8 min",
    date: "Feb 2026",
  },
  {
    img: `${BASE}img/plant/P9270024.jpg`,
    tag: "Operación",
    title: "Cuellos de botella: por qué tu planta rinde menos que su capacidad nominal",
    excerpt:
      "Tres causas que se repiten en agroindustria — y cómo identificarlas con un fin de semana de medición y un par de planillas.",
    read: "5 min",
    date: "Ene 2026",
  },
];

export function Insights() {
  return (
    <section className="relative border-b border-steel-200 bg-steel-50/50 py-16 md:py-32">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
              · Notas técnicas
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold leading-tight tracking-tight text-steel-900 md:text-5xl">
              Lo que aprendimos en planta —{" "}
              <span className="text-steel-500">y vale la pena compartir</span>.
            </h2>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-steel-300 bg-white px-4 py-2 text-sm font-medium text-steel-900 transition-all hover:-translate-y-0.5 hover:border-steel-500 hover:shadow-sm md:self-end"
          >
            Ver todas las notas
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group flex flex-col overflow-hidden rounded-xl border border-steel-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-steel-900">
                <img
                  src={p.img}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover opacity-85 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <span className="absolute left-4 top-4 inline-flex rounded-full border border-white/30 bg-black/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-steel-900 transition-colors group-hover:text-signal">
                  {p.title}
                </h3>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-steel-600">
                  {p.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-steel-100 pt-4">
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-steel-500">
                    <span>{p.date}</span>
                    <span className="h-1 w-1 rounded-full bg-steel-300" />
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {p.read}
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-steel-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
