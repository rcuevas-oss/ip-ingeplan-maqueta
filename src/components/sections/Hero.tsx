import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  Factory,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "30", suffix: "años", label: "Operando plantas productivas" },
  { value: "+50", suffix: "", label: "Plantas intervenidas en agroindustria" },
  { value: "AChEE", suffix: "", label: "Consultor acreditado oficial" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-steel-950 pb-16 pt-24 text-white md:pb-32 md:pt-36"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url(/img/plant/P5210172.jpg)" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-steel-950 via-steel-950/95 to-steel-900/85"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 grid-pattern-dark opacity-40" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_25%_0%,rgba(255,122,24,0.22),transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 right-0 -z-10 h-[480px] w-[60%] bg-[radial-gradient(ellipse_at_bottom_right,rgba(94,131,165,0.35),transparent_60%)]"
        aria-hidden
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-3"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-white/80 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            Consultoría técnica · Santiago, Chile
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/65">
            <Sparkles className="h-3 w-3 text-signal" />
            Acreditados AChEE · 30 años de operación
          </div>
        </motion.div>

        <div className="mt-7 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
              className="font-display text-[34px] font-semibold leading-[1.05] tracking-tight text-balance sm:text-[40px] md:text-6xl lg:text-[76px]"
            >
              <span className="block text-white/55">Ingeniería para fábricas</span>
              <span className="block">
                que quieren{" "}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10">producir mejor</span>
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-3 bg-signal/40 -skew-x-6"
                    aria-hidden
                  />
                </span>
                .
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:mt-7 md:text-xl"
            >
              Diagnosticamos plantas productivas, identificamos oportunidades
              reales de ahorro energético y rentabilizamos cada etapa del proceso.
              Sin recetas de manual: soluciones simples, confiables y medibles —
              respaldadas por treinta años en piso de planta.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild variant="signal" size="lg">
                <a href="#contacto" className="group">
                  Agendar diagnóstico
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white/10 text-white hover:bg-white/15 border border-white/15"
              >
                <a href="#showcase" className="group">
                  <PlayCircle className="h-4 w-4" />
                  Ver casos en planta
                </a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex items-center gap-6 text-xs text-white/55"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-signal" />
                Sin compromiso · sin venta cruzada
              </div>
              <span className="hidden h-4 w-px bg-white/15 md:block" />
              <div className="hidden md:block">
                Cobertura RM y centro-sur de Chile
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="relative h-full">
              <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-signal/30 via-white/5 to-transparent opacity-60 blur-sm" />
              <div className="relative h-full rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 backdrop-blur-md">
                <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-signal to-transparent" />
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
                  Indicadores de servicio
                </p>
                <div className="mt-4 divide-y divide-white/10">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-baseline justify-between gap-3 py-3.5"
                    >
                      <div>
                        <span className="font-display text-3xl font-semibold tracking-tight">
                          {s.value}
                        </span>
                        {s.suffix && (
                          <span className="ml-1.5 text-sm text-white/60">
                            {s.suffix}
                          </span>
                        )}
                      </div>
                      <span className="max-w-[60%] text-right text-xs leading-snug text-white/65">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
                  {[
                    { Icon: Factory, label: "Fábricas" },
                    { Icon: Activity, label: "Energía" },
                    { Icon: ShieldCheck, label: "Acreditado" },
                  ].map(({ Icon, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center gap-1.5 rounded-md bg-white/5 py-3 text-center transition-colors hover:bg-white/10"
                    >
                      <Icon className="h-4 w-4 text-signal" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/70">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-md border border-white/10 bg-steel-900/40 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                    Caso típico · 12 meses
                  </p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-3xl font-semibold text-signal">
                      18%
                    </span>
                    <span className="text-xs text-white/65">
                      ahorro promedio en energía térmica
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
