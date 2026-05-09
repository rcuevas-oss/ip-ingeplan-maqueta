import { motion } from "framer-motion";
import {
  Wheat,
  Wine,
  Milk,
  Beef,
  FlaskConical,
  Coffee,
  Droplets,
  Snowflake,
} from "lucide-react";

const sectors = [
  { Icon: Wheat, label: "Agroindustrial" },
  { Icon: Wine, label: "Vitivinícola" },
  { Icon: Milk, label: "Lácteos" },
  { Icon: Beef, label: "Cárnicos" },
  { Icon: FlaskConical, label: "Química" },
  { Icon: Coffee, label: "Alimentos secos" },
  { Icon: Droplets, label: "Aceites" },
  { Icon: Snowflake, label: "Refrigeración" },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Sectores que atendemos"
      className="border-b border-steel-200 bg-white py-14 md:py-16"
    >
      <div className="container">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="md:col-span-4"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
              · Sectores
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight text-steel-900 md:text-[28px]">
              Donde la operación de planta es el negocio.
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-steel-600">
              Especializados en industrias donde un grado de eficiencia se traduce en
              margen — agroindustria, alimentos y procesos térmicos.
            </p>
          </motion.div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-steel-200 bg-steel-200 sm:grid-cols-4">
              {sectors.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="group flex flex-col items-center justify-center gap-2 bg-white px-4 py-6 transition-colors hover:bg-steel-50"
                >
                  <s.Icon
                    className="h-5 w-5 text-steel-500 transition-colors group-hover:text-signal"
                    strokeWidth={1.6}
                  />
                  <span className="text-center font-mono text-[10px] uppercase tracking-[0.14em] text-steel-700">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
