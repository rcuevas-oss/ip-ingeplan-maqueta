import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Check,
  Loader2,
  Gauge,
  Flame,
  Cog,
  Wrench,
  Building2,
  ShieldCheck,
  MapPin,
  Wheat,
  Wine,
  Milk,
  Beef,
  FlaskConical,
  Coffee,
  Droplets,
  Snowflake,
  Mail,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Block =
  | { kind: "text"; text: string }
  | {
      kind: "list";
      items: Array<{ icon: LucideIcon; label: string; sub?: string }>;
    }
  | {
      kind: "steps";
      items: Array<{ label: string; sub?: string }>;
    }
  | {
      kind: "stat";
      value: string;
      label: string;
      hint?: string;
    }
  | {
      kind: "callout";
      tone: "info" | "success" | "accent";
      icon: LucideIcon;
      title: string;
      body: string;
    };

interface Message {
  id: string;
  role: "bot" | "user" | "system";
  blocks?: Block[];
  text?: string;
  ts: number;
}

interface KnowledgeEntry {
  keywords: string[];
  blocks: Block[];
  followUps?: string[];
}

const knowledge: KnowledgeEntry[] = [
  {
    keywords: ["servicio", "servicios", "que hacen", "qué hacen", "ofrecen"],
    blocks: [
      {
        kind: "text",
        text: "Trabajamos en cinco frentes — todos parten con un diagnóstico en planta:",
      },
      {
        kind: "list",
        items: [
          { icon: Gauge, label: "Eficiencia energética", sub: "Diagnóstico + financiamiento AChEE" },
          { icon: Flame, label: "Energía térmica", sub: "Vapor + condensados" },
          { icon: Cog, label: "Procesos productivos", sub: "Rendimiento + tecnología" },
          { icon: Wrench, label: "Modificaciones y ampliaciones", sub: "Factibilidad + ROI" },
          { icon: Building2, label: "Operación de fábricas", sub: "Operación + mantenimiento" },
        ],
      },
    ],
    followUps: ["¿Cómo es la metodología?", "Quiero agendar una visita"],
  },
  {
    keywords: ["achee", "acreditación", "acreditacion", "subsidio", "fondo", "postular"],
    blocks: [
      {
        kind: "callout",
        tone: "accent",
        icon: ShieldCheck,
        title: "Consultor acreditado AChEE",
        body: "Estamos en el registro oficial de la Agencia Chilena de Eficiencia Energética.",
      },
      {
        kind: "text",
        text: "Podemos preparar contigo los estudios técnicos para postular a líneas de apoyo en:",
      },
      {
        kind: "list",
        items: [
          { icon: Flame, label: "Generación de vapor" },
          { icon: Gauge, label: "Esquemas calóricos" },
          { icon: Cog, label: "Cogeneración" },
          { icon: Droplets, label: "Aprovechamiento de energía eléctrica" },
          { icon: Wheat, label: "Secado de productos" },
          { icon: Snowflake, label: "Refrigeración industrial" },
        ],
      },
    ],
    followUps: ["¿Qué tipo de planta atienden?", "Quiero agendar una visita"],
  },
  {
    keywords: ["región", "region", "regiones", "santiago", "ubicación", "ubicacion", "donde", "dónde"],
    blocks: [
      {
        kind: "callout",
        tone: "info",
        icon: MapPin,
        title: "Cobertura habitual",
        body: "Región Metropolitana y centro-sur de Chile.",
      },
      {
        kind: "text",
        text: "Operamos desde Santiago y trabajamos en terreno por tramos según el plan acordado. Para regiones más lejanas evaluamos viabilidad caso a caso.",
      },
    ],
    followUps: ["¿Cómo agendamos?", "¿Qué sectores atienden?"],
  },
  {
    keywords: ["sector", "sectores", "rubro", "industria", "tipo de planta", "agroindustria", "vino", "lácteo", "lacteo", "alimentos"],
    blocks: [
      {
        kind: "text",
        text: "Nos especializamos en industrias donde la operación de planta es el negocio:",
      },
      {
        kind: "list",
        items: [
          { icon: Wheat, label: "Agroindustrial" },
          { icon: Wine, label: "Vitivinícola" },
          { icon: Milk, label: "Lácteos" },
          { icon: Beef, label: "Cárnicos" },
          { icon: Coffee, label: "Alimentos secos" },
          { icon: Droplets, label: "Aceites" },
          { icon: FlaskConical, label: "Química" },
          { icon: Snowflake, label: "Refrigeración" },
        ],
      },
    ],
    followUps: ["¿Hacen casos de éxito?", "Quiero agendar una visita"],
  },
  {
    keywords: ["metodología", "metodologia", "proceso", "cómo trabajan", "como trabajan", "etapas"],
    blocks: [
      {
        kind: "text",
        text: "Cinco etapas que repetimos en cada engagement:",
      },
      {
        kind: "steps",
        items: [
          { label: "Marco y objetivos", sub: "Acordamos alcance con la Gerencia" },
          { label: "Visita y levantamiento", sub: "Recorremos planta y entrevistamos al equipo" },
          { label: "Quick wins", sub: "Soluciones rápidas de buenas prácticas" },
          { label: "Factibilidad técnico-económica", sub: "Para inversiones que requieren CAPEX" },
          { label: "Ejecución", sub: "Acompañamos al equipo o nos hacemos cargo" },
        ],
      },
    ],
    followUps: ["¿Firman NDA?", "Quiero agendar una visita"],
  },
  {
    keywords: ["nda", "confidencialidad", "confidencial"],
    blocks: [
      {
        kind: "callout",
        tone: "success",
        icon: ShieldCheck,
        title: "Sí, firmamos NDA",
        body: "Antes de la primera visita de levantamiento si el cliente lo requiere.",
      },
      {
        kind: "text",
        text: "Trabajamos con información operativa sensible. La identidad y los datos de los clientes nunca se comparten en cartera pública.",
      },
    ],
    followUps: ["Quiero agendar una visita"],
  },
  {
    keywords: ["pequeña", "pequena", "pyme", "tamaño", "tamano", "chica"],
    blocks: [
      {
        kind: "text",
        text: "Trabajamos con pymes productivas y empresas medianas. La consultoría se dimensiona al tamaño y complejidad de la planta — no aplicamos un mismo paquete a todos.",
      },
      {
        kind: "callout",
        tone: "info",
        icon: Sparkles,
        title: "En plantas chicas",
        body: "Las primeras intervenciones suelen ser operativas y de bajo costo — quick wins antes de inversión.",
      },
    ],
    followUps: ["¿Cómo agendamos?", "¿Qué sectores atienden?"],
  },
  {
    keywords: ["precio", "costo", "valor", "cuánto cuesta", "cuanto cuesta", "honorarios"],
    blocks: [
      {
        kind: "text",
        text: "El alcance y los honorarios se definen después de conocer tu planta. Cada caso es distinto, así que prefiero no improvisar números aquí.",
      },
      {
        kind: "callout",
        tone: "accent",
        icon: CheckCircle2,
        title: "Conversación inicial",
        body: "Sin costo y sin compromiso — partimos por entender qué necesitas.",
      },
    ],
    followUps: ["Quiero agendar una visita"],
  },
];

const quickStarters = [
  "¿Qué servicios ofrecen?",
  "¿Cómo postulo a AChEE?",
  "¿Hacen visitas en regiones?",
  "Quiero agendar una visita",
];

const FALLBACK: Block[] = [
  {
    kind: "text",
    text: "Buena pregunta — no me la sé al detalle.",
  },
  {
    kind: "callout",
    tone: "info",
    icon: Mail,
    title: "Te ayudamos directo",
    body: "Déjame tu correo y un par de líneas sobre tu planta. Un ingeniero del equipo te responde dentro del día hábil.",
  },
];

const SCHEDULE: Block[] = [
  {
    kind: "text",
    text: "Perfecto. Coordinemos una primera conversación:",
  },
  {
    kind: "steps",
    items: [
      { label: "Conversación inicial", sub: "30 min · sin compromiso" },
      { label: "Visita en terreno", sub: "Recorrido + entrevista técnica" },
      { label: "Propuesta de alcance", sub: "Con factibilidad estimada" },
    ],
  },
  {
    kind: "text",
    text: "Déjame tus datos abajo y te contactamos dentro del día hábil.",
  },
];

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

function findReply(text: string): KnowledgeEntry | null {
  const n = normalize(text);
  for (const entry of knowledge) {
    if (entry.keywords.some((k) => n.includes(normalize(k)))) {
      return entry;
    }
  }
  return null;
}

function isScheduleIntent(text: string) {
  const n = normalize(text);
  return ["agendar", "visita", "cita", "contacto", "reunir", "reunión", "reunion"].some(
    (k) => n.includes(k),
  );
}

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uid(),
      role: "bot",
      blocks: [
        {
          kind: "text",
          text: "Hola 👋 Soy el asistente de IP Ingeplan.",
        },
        {
          kind: "text",
          text: "Cuéntame sobre tu planta o pregúntame por servicios, AChEE, o cómo agendar una visita.",
        },
      ],
      ts: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [followUps, setFollowUps] = useState<string[]>(quickStarters);

  const [leadOpen, setLeadOpen] = useState(false);
  const [leadStatus, setLeadStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadNote, setLeadNote] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing, leadOpen]);

  useEffect(() => {
    if (open) {
      setUnread(false);
      const t = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const send = (text: string) => {
    const clean = text.trim();
    if (!clean) return;

    setMessages((m) => [
      ...m,
      { id: uid(), role: "user", text: clean, ts: Date.now() },
    ]);
    setInput("");
    setFollowUps([]);
    setTyping(true);

    if (isScheduleIntent(clean)) {
      setTimeout(() => {
        setTyping(false);
        setMessages((m) => [
          ...m,
          {
            id: uid(),
            role: "bot",
            blocks: SCHEDULE,
            ts: Date.now(),
          },
        ]);
        setLeadOpen(true);
      }, 700);
      return;
    }

    const match = findReply(clean);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        {
          id: uid(),
          role: "bot",
          blocks: match?.blocks ?? FALLBACK,
          ts: Date.now(),
        },
      ]);
      if (match?.followUps) setFollowUps(match.followUps);
      else if (!match) setLeadOpen(true);
    }, Math.min(900 + clean.length * 12, 1800));
  };

  const submitLead = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLeadStatus("sending");
    setTimeout(() => {
      setLeadStatus("sent");
      setMessages((m) => [
        ...m,
        {
          id: uid(),
          role: "system",
          text: `Mensaje recibido — ${leadName || "Sin nombre"} · ${leadEmail}. Te contactamos dentro del día hábil.`,
          ts: Date.now(),
        },
      ]);
      setTimeout(() => {
        setLeadOpen(false);
        setLeadStatus("idle");
        setLeadName("");
        setLeadEmail("");
        setLeadNote("");
        setFollowUps(["¿Qué servicios ofrecen?", "¿Cómo postulo a AChEE?"]);
      }, 1800);
    }, 900);
  };

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            key="fab"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => setOpen(true)}
            className="fixed bottom-4 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-signal text-white shadow-lg shadow-signal/30 transition-all hover:scale-105 hover:bg-signal-dark hover:shadow-xl hover:shadow-signal/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-signal/30 md:bottom-6 md:right-6 md:h-16 md:w-16"
            aria-label="Abrir chat de atención"
          >
            <MessageSquare className="h-6 w-6" strokeWidth={1.8} />
            {unread && (
              <span className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-steel-900 text-[10px] font-bold text-white ring-2 ring-white">
                1
              </span>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            role="dialog"
            aria-label="Chat de atención"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={cn(
              "fixed z-50 flex flex-col overflow-hidden bg-white shadow-2xl shadow-steel-950/15",
              "inset-0 md:inset-auto md:bottom-6 md:right-6 md:h-[640px] md:w-[420px] md:rounded-2xl md:border md:border-steel-200",
            )}
            style={{ height: "100dvh" }}
          >
            <header className="relative flex shrink-0 items-center gap-3 border-b border-steel-200 bg-steel-950 px-4 py-3.5 text-white md:px-5 md:py-4">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal to-transparent" />
              <div className="relative">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-signal font-display font-semibold">
                  IP
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-steel-950" />
              </div>
              <div className="flex-1 leading-tight">
                <p className="font-display text-sm font-semibold">
                  Asistente IP Ingeplan
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                  En línea · responde en minutos
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-md text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Cerrar chat"
              >
                <X className="h-4 w-4" />
              </button>
            </header>

            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto bg-steel-50/40 px-3 py-4 md:px-4 md:py-5"
            >
              {messages.map((m) => (
                <MessageBubble key={m.id} msg={m} />
              ))}
              {typing && <TypingBubble />}

              {leadOpen && leadStatus !== "sent" && (
                <motion.form
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={submitLead}
                  className="rounded-xl border border-steel-200 bg-white p-4 shadow-sm"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                    · Tus datos
                  </p>
                  <div className="mt-3 space-y-2.5">
                    <input
                      type="text"
                      placeholder="Nombre"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="h-11 w-full rounded-md border border-steel-200 bg-white px-3 text-sm focus:border-steel-500 focus:outline-none focus:ring-2 focus:ring-steel-500/20"
                    />
                    <input
                      type="email"
                      required
                      placeholder="tu@empresa.cl"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="h-11 w-full rounded-md border border-steel-200 bg-white px-3 text-sm focus:border-steel-500 focus:outline-none focus:ring-2 focus:ring-steel-500/20"
                    />
                    <textarea
                      placeholder="Una línea sobre tu planta (rubro, ubicación, qué te preocupa)"
                      rows={2}
                      value={leadNote}
                      onChange={(e) => setLeadNote(e.target.value)}
                      className="w-full resize-none rounded-md border border-steel-200 bg-white px-3 py-2.5 text-sm focus:border-steel-500 focus:outline-none focus:ring-2 focus:ring-steel-500/20"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={leadStatus !== "idle"}
                    className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-signal text-sm font-medium text-white shadow-sm transition-all hover:bg-signal-dark hover:shadow-md disabled:opacity-60"
                  >
                    {leadStatus === "idle" && (
                      <>
                        Enviar al equipo <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                    {leadStatus === "sending" && (
                      <>
                        Enviando <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}

              {leadStatus === "sent" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4"
                >
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-emerald-500 text-white">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-emerald-900">
                    Recibido. Te escribimos al correo dentro del día hábil.
                  </p>
                </motion.div>
              )}
            </div>

            {followUps.length > 0 && !leadOpen && (
              <div className="flex shrink-0 flex-wrap gap-2 border-t border-steel-100 bg-white px-3 py-2.5 md:px-4 md:py-3">
                {followUps.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="rounded-full border border-steel-200 bg-steel-50 px-3 py-1.5 text-xs font-medium text-steel-700 transition-all hover:-translate-y-0.5 hover:border-signal hover:bg-signal/10 hover:text-signal-dark"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex shrink-0 items-center gap-2 border-t border-steel-200 bg-white px-3 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu mensaje…"
                className="h-11 flex-1 rounded-md border border-steel-200 bg-steel-50 px-4 text-sm text-steel-900 placeholder:text-steel-400 focus:border-steel-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-steel-500/20"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-signal text-white shadow-sm transition-all hover:bg-signal-dark hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Enviar mensaje"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            <div className="flex shrink-0 items-center justify-center gap-1.5 border-t border-steel-100 bg-steel-50 py-1.5">
              <Sparkles className="h-3 w-3 text-steel-400" />
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-steel-500">
                Asistente automatizado · respuestas pre-armadas
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MessageBubble({ msg }: { msg: Message }) {
  if (msg.role === "system") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="my-1 text-center"
      >
        <p className="inline-block rounded-full border border-steel-200 bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-steel-500">
          {msg.text}
        </p>
      </motion.div>
    );
  }

  const isBot = msg.role === "bot";

  if (!isBot) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="flex justify-end"
      >
        <div className="max-w-[82%] rounded-2xl rounded-br-sm bg-steel-900 px-4 py-2.5 text-sm leading-relaxed text-white shadow-sm">
          {msg.text}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="flex max-w-[92%] flex-col gap-2"
    >
      {msg.blocks?.map((b, i) => (
        <BotBlock key={i} block={b} index={i} total={msg.blocks!.length} />
      ))}
    </motion.div>
  );
}

function BotBlock({ block, index, total }: { block: Block; index: number; total: number }) {
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const baseBubble =
    "border border-steel-200 bg-white shadow-sm";

  if (block.kind === "text") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: index * 0.08 }}
        className={cn(
          "px-4 py-2.5 text-sm leading-relaxed text-steel-800",
          baseBubble,
          "rounded-2xl",
          isFirst && "rounded-tl-md",
          isLast && "rounded-bl-sm",
        )}
      >
        {block.text}
      </motion.div>
    );
  }

  if (block.kind === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: index * 0.08 }}
        className={cn(
          "overflow-hidden rounded-2xl",
          baseBubble,
          isLast && "rounded-bl-sm",
        )}
      >
        <ul className="divide-y divide-steel-100">
          {block.items.map((it, i) => (
            <li
              key={i}
              className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-steel-50"
            >
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-steel-50 text-steel-700">
                <it.icon className="h-4 w-4" strokeWidth={1.7} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium leading-tight text-steel-900">
                  {it.label}
                </p>
                {it.sub && (
                  <p className="mt-0.5 text-xs leading-snug text-steel-500">
                    {it.sub}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    );
  }

  if (block.kind === "steps") {
    return (
      <motion.ol
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: index * 0.08 }}
        className={cn(
          "space-y-0 overflow-hidden rounded-2xl",
          baseBubble,
          isLast && "rounded-bl-sm",
        )}
      >
        {block.items.map((it, i) => (
          <li
            key={i}
            className={cn(
              "flex items-start gap-3 px-4 py-3",
              i < block.items.length - 1 && "border-b border-steel-100",
            )}
          >
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-signal/30 bg-signal/10 font-mono text-[11px] font-semibold text-signal-dark">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1 pt-0.5">
              <p className="text-sm font-medium leading-tight text-steel-900">
                {it.label}
              </p>
              {it.sub && (
                <p className="mt-0.5 text-xs leading-snug text-steel-500">
                  {it.sub}
                </p>
              )}
            </div>
          </li>
        ))}
      </motion.ol>
    );
  }

  if (block.kind === "stat") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: index * 0.08 }}
        className={cn(
          "rounded-2xl bg-steel-950 p-5 text-white shadow-sm",
          isLast && "rounded-bl-sm",
        )}
      >
        <p className="font-display text-3xl font-semibold tracking-tight text-signal">
          {block.value}
        </p>
        <p className="mt-1 text-sm font-medium text-white">{block.label}</p>
        {block.hint && (
          <p className="mt-2 text-xs text-white/60">{block.hint}</p>
        )}
      </motion.div>
    );
  }

  if (block.kind === "callout") {
    const tones: Record<typeof block.tone, string> = {
      info: "border-steel-200 bg-steel-50",
      success: "border-emerald-200 bg-emerald-50",
      accent: "border-signal/30 bg-signal/[0.06]",
    };
    const iconTones: Record<typeof block.tone, string> = {
      info: "bg-steel-200 text-steel-800",
      success: "bg-emerald-500 text-white",
      accent: "bg-signal text-white",
    };
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: index * 0.08 }}
        className={cn(
          "flex items-start gap-3 rounded-2xl border p-4",
          tones[block.tone],
          isLast && "rounded-bl-sm",
        )}
      >
        <div
          className={cn(
            "grid h-9 w-9 shrink-0 place-items-center rounded-md",
            iconTones[block.tone],
          )}
        >
          <block.icon className="h-4 w-4" strokeWidth={1.8} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-sm font-semibold leading-tight text-steel-900">
            {block.title}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-steel-700">
            {block.body}
          </p>
        </div>
      </motion.div>
    );
  }

  return null;
}

function TypingBubble() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-start"
    >
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-steel-200 bg-white px-4 py-3 shadow-sm">
        {[0, 0.2, 0.4].map((d) => (
          <motion.span
            key={d}
            className="h-1.5 w-1.5 rounded-full bg-steel-400"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: d }}
          />
        ))}
      </div>
    </motion.div>
  );
}
