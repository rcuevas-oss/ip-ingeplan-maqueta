import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden border-b border-steel-200 bg-white py-16 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative isolate overflow-hidden rounded-2xl border border-steel-200 bg-steel-950 p-6 text-white sm:rounded-3xl sm:p-10 md:p-16"
        >
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url(${import.meta.env.BASE_URL}img/plant/15-Prensas-aceite.jpg)` }}
            aria-hidden
          />
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-br from-steel-950/95 via-steel-950/85 to-steel-900/70"
            aria-hidden
          />
          <div
            className="absolute -right-32 -top-32 -z-10 h-[500px] w-[500px] rounded-full bg-signal/10 blur-3xl"
            aria-hidden
          />

          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
                · Hablemos de tu planta
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-[56px]">
                Una visita inicial,{" "}
                <span className="text-signal">cero compromiso</span>.
                <br />
                Salimos con una hipótesis o nos vamos sin cuenta.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
                Coordinamos un recorrido inicial por tu planta, conversamos con tu
                equipo técnico y te entregamos una primera lectura técnica antes de
                proponer cualquier consultoría.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
                  Próximos pasos
                </p>
                <ol className="mt-4 space-y-3 text-sm text-white/85">
                  {[
                    "Conversación inicial · 30 min · sin compromiso",
                    "Visita en terreno + entrevista técnica",
                    "Propuesta de alcance + factibilidad",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-signal/40 bg-signal/15 font-mono text-[10px] font-medium text-signal">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 flex flex-col gap-3">
                  <Button asChild variant="signal" size="lg" className="w-full">
                    <a href="#contacto" className="group">
                      Agendar diagnóstico
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="w-full border border-white/20 bg-white/5 text-white hover:bg-white/10"
                  >
                    <a href="tel:+56229071949">
                      <Phone className="h-4 w-4" />
                      +56 2 2907 1949
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
