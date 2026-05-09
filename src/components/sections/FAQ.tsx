import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Trabajan con plantas pequeñas o solo con industrias grandes?",
    a: "Trabajamos con pymes productivas y empresas medianas. La consultoría se dimensiona al tamaño y a la complejidad de la planta — no aplicamos un mismo paquete a todos. En plantas chicas, frecuentemente las primeras intervenciones son operativas y de bajo costo.",
  },
  {
    q: "¿Cómo parte una consultoría con ustedes?",
    a: "Acordamos con la Gerencia el alcance y los objetivos. Después hacemos visitas a planta, conversamos con supervisión y mantención, y revisamos información técnica. Si falta data mínima, la levantamos primero — sin eso, todo lo demás flota.",
  },
  {
    q: "¿Qué entregables esperamos del proceso?",
    a: "Diagnóstico operativo, identificación priorizada de oportunidades de mejora, propuesta de soluciones con impacto estimado, y para todo lo que requiera CAPEX, un estudio de factibilidad técnico-económica que respalde la decisión de la Gerencia.",
  },
  {
    q: "¿Se pueden financiar los estudios con apoyo público?",
    a: "Sí. Estamos en el registro oficial de consultores de la AChEE (Agencia Chilena de Eficiencia Energética), por lo que podemos preparar contigo los estudios técnicos para postular a líneas de apoyo en generación de vapor, esquemas calóricos, cogeneración, secado y refrigeración.",
  },
  {
    q: "¿Pueden hacerse cargo de la ejecución, o solo del estudio?",
    a: "Ambas opciones son posibles. En la fase de ejecución podemos apoyar al equipo técnico de la fábrica o hacernos cargo de actividades específicas: ingeniería de detalle, contratación, supervisión de obra, puesta en marcha y entrega operativa.",
  },
  {
    q: "¿En qué zonas de Chile operan?",
    a: "Cobertura habitual: Región Metropolitana y centro-sur del país. Trabajamos en terreno y por tramos según el plan acordado. Para regiones más lejanas, evaluamos viabilidad caso a caso.",
  },
  {
    q: "¿Firman acuerdo de confidencialidad?",
    a: "Sí, siempre que el cliente lo requiera. Trabajamos con información operativa sensible y firmamos NDA antes de la primera visita de levantamiento. La identidad y los datos de los clientes no se comparten en cartera pública.",
  },
];

export function FAQ() {
  return (
    <section className="relative border-b border-steel-200 bg-white py-16 md:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-4"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
              · Preguntas frecuentes
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-steel-900 md:text-4xl">
              Lo que preguntan antes de la primera visita.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-steel-600">
              Si te queda algo afuera, escríbenos en el formulario de abajo.
              Respondemos dentro del día hábil — no necesitas un correo
              perfecto para empezar a conversar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-8"
          >
            <Accordion type="single" collapsible className="rounded-xl border border-steel-200 bg-steel-50/40 px-4 sm:px-6 md:px-8">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
