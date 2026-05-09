const items = [
  "Racionalización de plantas productivas",
  "Estudios de factibilidad técnica/económica",
  "Aprovechamiento energía térmica",
  "Eficiencia energética",
  "Cogeneración con vapor a procesos",
  "Proyectos agroindustriales",
  "Deshidratación de alimentos naturales",
  "Ingeniería conceptual y base",
];

export function Marquee() {
  const doubled = [...items, ...items];
  return (
    <section
      aria-label="Áreas de especialidad"
      className="border-y border-steel-200 bg-white py-5"
    >
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {doubled.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-steel-500"
            >
              <span className="h-1 w-1 rounded-full bg-signal" />
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
