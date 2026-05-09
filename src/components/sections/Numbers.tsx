import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { TrendingDown, Banknote, Factory, Wrench } from "lucide-react";

interface Item {
  Icon: typeof TrendingDown;
  prefix?: string;
  suffix?: string;
  to: number;
  decimals?: number;
  label: string;
  caption: string;
}

const items: Item[] = [
  {
    Icon: TrendingDown,
    suffix: "%",
    to: 18,
    label: "Ahorro térmico promedio",
    caption: "Mejora típica en consumo de combustibles tras 12 meses de implementación.",
  },
  {
    Icon: Banknote,
    prefix: "$",
    to: 240,
    suffix: "M CLP",
    label: "Recuperación promedio",
    caption: "Beneficio anual identificado en plantas medianas (200–800 t/día).",
  },
  {
    Icon: Factory,
    suffix: "+",
    to: 50,
    label: "Plantas intervenidas",
    caption: "Diagnósticos, ampliaciones, montajes y operación en la zona centro-sur.",
  },
  {
    Icon: Wrench,
    suffix: "",
    to: 30,
    label: "Años en piso de planta",
    caption: "Equipo técnico con trayectoria operativa, no consultora académica.",
  },
];

function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  inView,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  inView: boolean;
}) {
  const v = useMotionValue(0);
  const display = useTransform(v, (n) =>
    n.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, "."),
  );
  const [text, setText] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(v, to, { duration: 1.6, ease: "easeOut" });
    const unsub = display.on("change", (latest) => setText(latest));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to, v, display]);

  return (
    <span className="tabular-nums">
      {prefix}
      {text}
      {suffix}
    </span>
  );
}

export function Numbers() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden border-b border-steel-200 bg-steel-50/50 py-16 md:py-28"
    >
      <div className="absolute inset-0 -z-10 grid-pattern opacity-50" aria-hidden />
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
            · Cifras que importan
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-steel-900 md:text-5xl">
            Ingeniería que se mide en{" "}
            <span className="text-steel-500">números, no en slides</span>.
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-steel-200 bg-steel-200 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative flex flex-col bg-white p-7 transition-colors hover:bg-steel-50"
            >
              <div className="grid h-10 w-10 place-items-center rounded-md bg-steel-50 text-steel-700 transition-colors group-hover:bg-signal group-hover:text-white">
                <it.Icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <div className="mt-6 font-display text-4xl font-semibold leading-none tracking-tight text-steel-900 md:text-5xl">
                <Counter
                  to={it.to}
                  prefix={it.prefix}
                  suffix={it.suffix}
                  decimals={it.decimals}
                  inView={inView}
                />
              </div>
              <p className="mt-3 text-sm font-medium text-steel-900">{it.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-steel-500">
                {it.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
