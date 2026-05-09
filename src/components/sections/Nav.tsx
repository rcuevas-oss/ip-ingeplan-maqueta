import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#metodologia", label: "Metodología" },
  { href: "#empresa", label: "Empresa" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-steel-200/80 bg-white/85 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-steel-700 transition-colors hover:bg-steel-100 hover:text-steel-900"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+56229071949"
            className="flex items-center gap-2 text-sm font-medium text-steel-700 transition-colors hover:text-steel-900"
          >
            <Phone className="h-4 w-4" />
            +56 2 2907 1949
          </a>
          <Button asChild variant="signal" size="sm">
            <a href="#contacto">Solicitar evaluación</a>
          </Button>
        </div>
        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="grid h-10 w-10 place-items-center rounded-md text-steel-900 hover:bg-steel-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-steel-200 bg-white md:hidden"
          >
            <div className="container flex flex-col gap-1 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium text-steel-800 hover:bg-steel-100"
                >
                  {l.label}
                </a>
              ))}
              <Button asChild variant="signal" className="mt-2">
                <a href="#contacto" onClick={() => setOpen(false)}>
                  Solicitar evaluación
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
