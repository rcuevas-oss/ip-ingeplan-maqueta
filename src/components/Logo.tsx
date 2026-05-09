import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function Logo({ className, variant = "dark" }: LogoProps) {
  const fg = variant === "dark" ? "text-steel-900" : "text-white";
  const accent = "text-signal";
  return (
    <a
      href="#top"
      className={cn("group flex items-center gap-2.5 font-display", className)}
      aria-label="IP Ingeplan — inicio"
    >
      <span
        className={cn(
          "relative grid h-9 w-9 place-items-center rounded-md border transition-colors",
          variant === "dark"
            ? "border-steel-300 bg-white"
            : "border-white/20 bg-white/5",
        )}
      >
        <span className={cn("absolute inset-1 rounded-sm border", variant === "dark" ? "border-steel-400/50" : "border-white/30")} />
        <span className={cn("font-display text-sm font-bold leading-none", fg)}>IP</span>
        <span className={cn("absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full", "bg-signal")} />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("text-[15px] font-semibold tracking-tight", fg)}>
          Ingeplan<span className={accent}>.</span>
        </span>
        <span
          className={cn(
            "mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em]",
            variant === "dark" ? "text-steel-500" : "text-white/60",
          )}
        >
          Ingeniería de fábricas
        </span>
      </span>
    </a>
  );
}
