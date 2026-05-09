import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  img: string;
  sector: string;
  title: string;
  result: string;
  scope: string;
  span?: string;
}

const projects: Project[] = [
  {
    img: "/img/plant/15-Prensas-aceite.jpg",
    sector: "Aceites vegetales",
    title: "Optimización de prensas y filtrado",
    result: "+12% rendimiento de extracción",
    scope: "Diagnóstico de proceso · ajuste de utilities · cuellos de botella",
    span: "lg:col-span-7 lg:row-span-2",
  },
  {
    img: "/img/plant/PB210009.jpg",
    sector: "Agroindustrial",
    title: "Generación de vapor + condensados",
    result: "−22% consumo de combustible",
    scope: "Esquema térmico · recuperación de condensados",
    span: "lg:col-span-5",
  },
  {
    img: "/img/plant/P5210172.jpg",
    sector: "Alimentos",
    title: "Cogeneración con vapor a procesos",
    result: "Estudio de factibilidad técnico-económico",
    scope: "Postulación a línea de apoyo AChEE",
    span: "lg:col-span-5",
  },
  {
    img: "/img/plant/P9270024.jpg",
    sector: "Lácteos",
    title: "Modificación de planta + ampliación",
    result: "+30% capacidad sin nueva línea",
    scope: "Ingeniería conceptual · CAPEX · rentabilidad proyectada",
    span: "lg:col-span-6",
  },
  {
    img: "/img/plant/18-Filtro-aceite.jpg",
    sector: "Procesos",
    title: "Eliminación de cuellos de botella",
    result: "Recirculaciones bajaron 40%",
    scope: "Operación de fábrica · racionalización",
    span: "lg:col-span-6",
  },
];

export function Showcase() {
  return (
    <section
      id="showcase"
      className="relative border-b border-steel-200 bg-white py-16 md:py-32"
    >
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
              · Casos en planta
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold leading-tight tracking-tight text-steel-900 md:text-5xl">
              Un puñado de proyectos, todos terminados,{" "}
              <span className="text-steel-500">todos en operación</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-steel-600">
            Casos representativos de los últimos años. La identidad del cliente se
            reserva por confidencialidad — los números son reales y verificables
            bajo NDA.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-[220px] gap-4 sm:auto-rows-[260px] lg:mt-14 lg:auto-rows-[300px] lg:grid-cols-12">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative isolate overflow-hidden rounded-xl border border-steel-200 bg-steel-900 ${p.span ?? ""}`}
            >
              <img
                src={p.img}
                alt=""
                loading="lazy"
                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 -z-10 bg-gradient-to-t from-steel-950 via-steel-950/70 to-steel-950/10"
                aria-hidden
              />
              <div className="flex h-full flex-col justify-between p-6 text-white">
                <div className="flex items-start justify-between">
                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/85 backdrop-blur">
                    {p.sector}
                  </span>
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-white/10 backdrop-blur transition-all group-hover:bg-signal">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold leading-snug tracking-tight md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 font-display text-base font-medium text-signal">
                    {p.result}
                  </p>
                  <p className="mt-3 text-xs leading-snug text-white/70">
                    {p.scope}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
