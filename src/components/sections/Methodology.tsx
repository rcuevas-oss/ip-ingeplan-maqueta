import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Marco y objetivos",
    body: "Acordamos con la Gerencia el alcance, objetivos y criterios de éxito de la consultoría. Sin esa claridad, el resto se desordena.",
  },
  {
    n: "02",
    title: "Visita y levantamiento",
    body: "Recorremos planta e instalaciones anexas. Conversamos con supervisores, operadores y mantención. Revisamos información técnica histórica y actual; si falta, la levantamos.",
  },
  {
    n: "03",
    title: "Quick wins",
    body: "Identificamos primero las soluciones de buenas prácticas: rápidas, simples y de implementación inmediata. Casi siempre aparecen en la primera etapa.",
  },
  {
    n: "04",
    title: "Factibilidad e inversión",
    body: "Para soluciones que requieren CAPEX, hacemos los estudios técnico-económicos que respaldan la decisión. La Gerencia decide con datos en la mano.",
  },
  {
    n: "05",
    title: "Ejecución",
    body: "Acompañamos al equipo técnico de la fábrica o nos hacemos cargo de actividades específicas: ingeniería de detalle, contratación, ejecución, puesta en marcha.",
  },
];

export function Methodology() {
  return (
    <section
      id="metodologia"
      className="relative overflow-hidden border-b border-steel-200 bg-white py-16 md:py-32"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
            · Cómo trabajamos
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-steel-900 md:text-5xl">
            Una metodología clara, sin humo.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-steel-600">
            Cinco etapas que repetimos en cada engagement. La transparencia del
            proceso es lo que hace posible una recomendación honesta — y un
            cliente que vuelve.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-steel-200 md:grid-cols-5 rounded-lg overflow-hidden border border-steel-200">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative flex flex-col bg-white p-6 transition-colors hover:bg-steel-50"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-medium tracking-[0.16em] text-signal">
                  {s.n}
                </span>
                <span className="h-px flex-1 bg-steel-200" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug tracking-tight text-steel-900">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-600">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
