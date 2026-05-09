import { motion } from "framer-motion";
import {
  Gauge,
  Flame,
  Wrench,
  Cog,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    Icon: Gauge,
    code: "01",
    title: "Eficiencia energética",
    body: "Determinamos la eficiencia actual a partir del consumo eléctrico y de combustibles, identificamos potenciales de ahorro y evaluamos la factibilidad de cogeneración. Apoyamos la postulación a líneas de financiamiento de la AChEE.",
    tag: "Diagnóstico + financiamiento",
  },
  {
    Icon: Flame,
    code: "02",
    title: "Energía térmica",
    body: "Revisamos generación de vapor, distribución y recuperación de condensados. El objetivo es claro: bajar costos energéticos y cerrar fugas térmicas que se llevan los márgenes.",
    tag: "Vapor + condensados",
  },
  {
    Icon: Cog,
    code: "03",
    title: "Procesos productivos",
    body: "Analizamos cada etapa: capacidad, rendimiento, tecnología y estado de maquinaria. Proponemos los mejoramientos rentables, incluyendo automatización, instrumentación y utilities.",
    tag: "Rendimiento + tecnología",
  },
  {
    Icon: Wrench,
    code: "04",
    title: "Modificaciones y ampliaciones",
    body: "Estimamos costo de inversión y mejoramiento de índices técnicos para entregar una rentabilidad proyectada confiable. Decisiones con respaldo, no con corazonadas.",
    tag: "Factibilidad + ROI",
  },
  {
    Icon: Building2,
    code: "05",
    title: "Operación de fábricas",
    body: "Racionalización de materias primas, energía, mano de obra e infraestructura. Eliminamos cuellos de botella, optimizamos mantenimiento y reducimos recirculaciones y rechazos.",
    tag: "Operación + mantenimiento",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="relative border-b border-steel-200 bg-steel-50/50 py-16 md:py-32"
    >
      <div className="container">
        <div className="grid gap-12 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
              · Áreas de especialidad
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-steel-900 md:text-5xl">
              Cinco frentes para que tu planta gane{" "}
              <span className="text-steel-500">eficiencia y plata</span>.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-steel-600">
              Cada área se aborda con la misma orientación: identificar lo que
              hoy te cuesta más de lo que debería, proponer la solución más
              simple que resuelva, y respaldarla con números antes de invertir.
            </p>
          </motion.div>

          <div className="md:col-span-7">
            <div className="grid gap-4 md:grid-cols-2">
              {services.map((s, i) => (
                <motion.article
                  key={s.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className={cn(
                    "group relative flex flex-col rounded-lg border border-steel-200 bg-white p-6 shadow-sm transition-all duration-300",
                    "hover:-translate-y-1 hover:border-steel-400 hover:shadow-md",
                    i === 4 && "md:col-span-2",
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-md border border-steel-200 bg-steel-50 text-steel-700 transition-colors group-hover:border-signal group-hover:bg-signal group-hover:text-white">
                      <s.Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-steel-400">
                      {s.code}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-steel-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-600">
                    {s.body}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-steel-100 pt-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-500">
                      {s.tag}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-steel-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
