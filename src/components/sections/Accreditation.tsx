import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Accreditation() {
  return (
    <section className="relative isolate overflow-hidden bg-steel-900 py-16 text-white md:py-24">
      <div className="absolute inset-0 grid-pattern-dark opacity-40" aria-hidden />
      <div
        className="absolute -top-32 left-1/4 h-[400px] w-[400px] rounded-full bg-signal/15 blur-3xl"
        aria-hidden
      />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="grid items-center gap-10 md:grid-cols-12"
        >
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-white/80">
              <BadgeCheck className="h-3.5 w-3.5 text-signal" />
              Consultor acreditado
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Estamos en el registro de consultores de la{" "}
              <span className="text-signal">Agencia Chilena de Eficiencia Energética</span>.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
              Eso significa que podemos preparar contigo los estudios técnicos
              para postular a líneas de apoyo en proyectos de generación de
              vapor, esquemas calóricos, cogeneración, aprovechamiento de
              energía eléctrica, secado y refrigeración.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
                Líneas de apoyo elegibles
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/85">
                {[
                  "Generación de vapor",
                  "Esquemas calóricos",
                  "Cogeneración",
                  "Aprovechamiento de energía eléctrica",
                  "Secado de productos",
                  "Refrigeración industrial",
                ].map((l) => (
                  <li key={l} className="flex items-center gap-2.5">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {l}
                  </li>
                ))}
              </ul>
              <Button asChild variant="signal" size="sm" className="mt-6 w-full">
                <a href="#contacto" className="group">
                  Quiero postular a una línea de apoyo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
