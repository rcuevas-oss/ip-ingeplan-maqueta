import { motion } from "framer-motion";
import {
  Workflow,
  ClipboardCheck,
  Flame,
  Gauge,
  Cog,
  Wheat,
  Sun,
  Compass,
  type LucideIcon,
} from "lucide-react";

interface Specialty {
  Icon: LucideIcon;
  label: string;
}

const specialties: Specialty[] = [
  { Icon: Workflow, label: "Racionalización de plantas productivas" },
  { Icon: ClipboardCheck, label: "Estudios de factibilidad técnica/económica" },
  { Icon: Flame, label: "Aprovechamiento energía térmica" },
  { Icon: Gauge, label: "Eficiencia energética" },
  { Icon: Cog, label: "Cogeneración con vapor a procesos" },
  { Icon: Wheat, label: "Proyectos agroindustriales" },
  { Icon: Sun, label: "Deshidratación de alimentos naturales" },
  { Icon: Compass, label: "Ingeniería conceptual y base" },
];

export function Specialties() {
  return (
    <section
      id="especialidades"
      className="relative border-b border-steel-200 bg-white py-16 md:py-24"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
            · Áreas de especialidad profesional
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-steel-900 sm:text-4xl md:text-[44px]">
            Nuestras áreas de especialidad profesional son:
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {specialties.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="group flex items-start gap-3 rounded-lg border border-steel-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-signal hover:shadow-md"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-steel-50 text-steel-700 transition-colors group-hover:bg-signal group-hover:text-white">
                <s.Icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <p className="pt-1.5 text-sm font-medium leading-snug text-steel-900">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
