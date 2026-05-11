import { motion } from "framer-motion";
import { GraduationCap, Briefcase, ShieldCheck } from "lucide-react";

const credentials = [
  { Icon: GraduationCap, label: "Ingeniero Civil Químico", sub: "Universidad Técnica Federico Santa María" },
  { Icon: Briefcase, label: "30 años de experiencia", sub: "Operación y dirección de plantas agroindustriales" },
  { Icon: ShieldCheck, label: "Acreditado AChEE", sub: "Especialista en energía térmica y eficiencia" },
];

export function About() {
  return (
    <section
      id="empresa"
      className="relative border-b border-steel-200 bg-steel-50/50 py-16 md:py-32"
    >
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
              · Quiénes somos
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-steel-900 md:text-5xl">
              Treinta años poniendo en marcha,{" "}
              <span className="text-steel-500">
                modernizando y haciendo crecer fábricas
              </span>
              .
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-steel-700">
              <p>
                Somos un equipo de ingenieros con larga trayectoria en operaciones
                de plantas productivas. Durante años y desde distintos cargos
                fuimos parte del equipo técnico responsable del montaje, operación,
                modernización y crecimiento de fábricas del área agroindustrial.
              </p>
              <p>
                Nos especializamos en operaciones unitarias, generación y uso de
                vapor, cogeneración, eficiencia energética y operación de
                plantas. Cuando hace falta, sumamos especialidades complementarias
                de ingeniería y soporte de fabricantes de maquinaria.
              </p>
              <p className="text-steel-900 font-medium">
                Nuestra orientación es encontrar soluciones simples, confiables y
                rentables — siempre conscientes del beneficio que significan para
                tu negocio.
              </p>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-xl border border-steel-200 bg-white shadow-sm">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-signal via-signal-dark to-signal" />
              <div className="p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-500">
                  Líder técnico
                </p>
                <div className="mt-4 flex items-start gap-4">
                  <div className="relative shrink-0">
                    <img
                      src={`${import.meta.env.BASE_URL}img/team/paulino.jpg`}
                      alt="Retrato referencial del fundador"
                      loading="lazy"
                      className="h-16 w-16 rounded-full object-cover ring-2 ring-white shadow-md"
                    />
                    <span
                      className="absolute -bottom-0.5 -right-0.5 grid h-5 w-5 place-items-center rounded-full bg-signal text-[9px] font-semibold text-white ring-2 ring-white"
                      aria-hidden
                    >
                      ✓
                    </span>
                  </div>
                  <div className="min-w-0 pt-1">
                    <h3 className="font-display text-xl font-semibold leading-tight tracking-tight text-steel-900">
                      Paulino González Lanfranco
                    </h3>
                    <p className="mt-1 text-sm text-steel-600">
                      Fundador · Director técnico
                    </p>
                  </div>
                </div>
                <ul className="mt-6 space-y-4">
                  {credentials.map((c) => (
                    <li
                      key={c.label}
                      className="flex items-start gap-3 border-t border-steel-100 pt-4 first:border-t-0 first:pt-0"
                    >
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-steel-50 text-steel-700">
                        <c.Icon className="h-4 w-4" strokeWidth={1.7} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-steel-900">
                          {c.label}
                        </p>
                        <p className="mt-0.5 text-xs text-steel-500">{c.sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-steel-100 bg-steel-50 px-7 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel-600">
                  Apoyo a demanda · ingeniería complementaria · fabricantes
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
