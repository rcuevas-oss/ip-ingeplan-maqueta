import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type Status = "idle" | "sending" | "sent";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <section
      id="contacto"
      className="relative border-b border-steel-200 bg-white py-16 md:py-32"
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
              · Conversemos
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-steel-900 md:text-5xl">
              ¿Tienes una planta que está rindiendo menos de lo que debería?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-steel-600">
              Cuéntanos qué te preocupa. Coordinamos una visita inicial para
              entender el escenario y definir si hay algo que rescatar — sin
              compromiso ni venta cruzada.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="tel:+56229071949"
                className="group flex items-center gap-4 rounded-md border border-steel-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-steel-400 hover:shadow-sm"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-steel-50 text-steel-700 group-hover:bg-signal group-hover:text-white">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-500">
                    Oficina · Santiago
                  </p>
                  <p className="mt-0.5 font-medium text-steel-900">
                    +56 2 2907 1949
                  </p>
                </div>
              </a>
              <a
                href="https://wa.me/56993420947"
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-4 rounded-md border border-steel-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-steel-400 hover:shadow-sm"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-steel-50 text-steel-700 group-hover:bg-signal group-hover:text-white">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-500">
                    Móvil · WhatsApp
                  </p>
                  <p className="mt-0.5 font-medium text-steel-900">
                    +56 9 9342 0947
                  </p>
                </div>
              </a>
              <a
                href="mailto:contacto@ip-ingeplan.cl"
                className="group flex items-center gap-4 rounded-md border border-steel-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-steel-400 hover:shadow-sm"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-steel-50 text-steel-700 group-hover:bg-signal group-hover:text-white">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-500">
                    Correo
                  </p>
                  <p className="mt-0.5 font-medium text-steel-900">
                    contacto@ip-ingeplan.cl
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-md border border-dashed border-steel-200 bg-steel-50/40 p-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-steel-100 text-steel-700">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-500">
                    Cobertura
                  </p>
                  <p className="mt-0.5 text-sm text-steel-700">
                    Región Metropolitana y centro-sur de Chile · visitas en terreno
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={onSubmit}
              className="rounded-xl border border-steel-200 bg-steel-50/40 p-6 md:p-8"
              aria-label="Formulario de contacto"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input id="nombre" placeholder="Cómo te llamas" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input id="empresa" placeholder="Razón social o fantasía" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@empresa.cl"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" type="tel" placeholder="+56 9 ..." />
                </div>
              </div>
              <div className="mt-5 space-y-2">
                <Label htmlFor="rubro">Rubro de la planta</Label>
                <Input
                  id="rubro"
                  placeholder="Agroindustrial, alimentos, química…"
                />
              </div>
              <div className="mt-5 space-y-2">
                <Label htmlFor="mensaje">Cuéntanos qué te preocupa</Label>
                <Textarea
                  id="mensaje"
                  placeholder="Procesos, consumo energético, cuellos de botella, ampliaciones que estás evaluando…"
                  required
                />
              </div>
              <div className="mt-6 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-steel-500">
                  Respondemos dentro del día hábil. Tus datos no se comparten.
                </p>
                <Button
                  type="submit"
                  variant="signal"
                  size="lg"
                  disabled={status !== "idle"}
                  className="w-full sm:w-auto"
                >
                  {status === "idle" && (
                    <>
                      Enviar consulta <Send className="h-4 w-4" />
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      Enviando <Loader2 className="h-4 w-4 animate-spin" />
                    </>
                  )}
                  {status === "sent" && (
                    <>
                      Recibido <Check className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
