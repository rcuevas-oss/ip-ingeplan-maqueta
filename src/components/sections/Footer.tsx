import { Logo } from "@/components/Logo";

const cols = [
  {
    title: "Áreas",
    items: [
      { label: "Eficiencia energética", href: "#servicios" },
      { label: "Energía térmica", href: "#servicios" },
      { label: "Procesos productivos", href: "#servicios" },
      { label: "Modificaciones y ampliaciones", href: "#servicios" },
      { label: "Operación de fábricas", href: "#servicios" },
    ],
  },
  {
    title: "Empresa",
    items: [
      { label: "Quiénes somos", href: "#empresa" },
      { label: "Metodología", href: "#metodologia" },
      { label: "Acreditación AChEE", href: "#empresa" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Contacto",
    items: [
      { label: "+56 2 2907 1949", href: "tel:+56229071949" },
      { label: "+56 9 9342 0947", href: "https://wa.me/56993420947" },
      { label: "contacto@ip-ingeplan.cl", href: "mailto:contacto@ip-ingeplan.cl" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-steel-950 text-white">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              Consultoría técnica para pymes productivas y agroindustria.
              Soluciones simples, confiables y rentables.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2 lg:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                {c.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {c.items.map((it) => (
                  <li key={it.label}>
                    <a
                      href={it.href}
                      className="text-sm text-white/80 transition-colors hover:text-signal"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
              Sello
            </p>
            <div className="mt-4 rounded-md border border-white/15 bg-white/[0.03] p-4">
              <p className="font-display text-sm font-semibold text-white">
                AChEE
              </p>
              <p className="mt-1 text-xs leading-snug text-white/60">
                Consultor acreditado en eficiencia energética
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col items-start justify-between gap-3 py-6 md:flex-row md:items-center">
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} IP Ingeplan · Santiago, Chile.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
            Maqueta de propuesta · v0.1
          </p>
        </div>
      </div>
    </footer>
  );
}
