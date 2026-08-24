import { Link } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { PHONE, TEL, WHATSAPP, ADDRESS_LINES } from "./data";
import { MessageCircle, Phone, ShieldCheck, Timer, Lock, HandCoins } from "lucide-react";

export function GoldRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="gold-rule w-16 sm:w-24" />
      <span className="text-gold text-xs">&#10022;</span>
      <span className="gold-rule w-16 sm:w-24" />
    </div>
  );
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  tone = "ivory",
  className = "",
}: {
  children: ReactNode;
  tone?: "ivory" | "card" | "navy" | "muted";
  className?: string;
}) {
  const tones = {
    ivory: "bg-background text-foreground",
    card: "bg-card text-foreground",
    muted: "bg-muted text-foreground",
    navy: "bg-navy-deep text-gold-soft",
  } as const;
  return (
    <section className={`${tones[tone]} px-5 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function BandHeader({
  children,
  color = "red",
}: {
  children: ReactNode;
  color?: "red" | "navy" | "forest";
}) {
  const colors = {
    red: "bg-brand-red",
    navy: "bg-navy",
    forest: "bg-forest",
  } as const;
  return (
    <div className="mb-10 flex justify-center">
      <h2
        className={`${colors[color]} text-gold-soft inline-flex items-center gap-4 rounded-sm px-8 py-3 text-center font-display text-lg font-bold tracking-[0.16em] uppercase shadow-[0_10px_24px_-16px_oklch(0.22_0.08_265_/_0.7)] sm:text-xl`}
      >
        <span className="text-gold text-xs" aria-hidden="true">
          &#8226;&#8226;&#8226;
        </span>
        {children}
        <span className="text-gold text-xs" aria-hidden="true">
          &#8226;&#8226;&#8226;
        </span>
      </h2>
    </div>
  );
}

export function Badge({
  icon: Icon,
  tone = "red",
}: {
  icon: LucideIcon;
  tone?: "red" | "navy" | "forest";
}) {
  const tones = {
    red: "bg-brand-red text-gold-soft",
    navy: "bg-navy text-gold-soft",
    forest: "bg-forest text-gold-soft",
  } as const;
  return (
    <span
      className={`${tones[tone]} ring-gold/60 flex size-14 shrink-0 items-center justify-center rounded-full ring-1 ring-offset-2 ring-offset-transparent`}
    >
      <Icon className="size-6" strokeWidth={1.6} aria-hidden="true" />
    </span>
  );
}

export function FeatureRow({
  icon,
  title,
  children,
  tone = "red",
}: {
  icon: LucideIcon;
  title: string;
  children?: ReactNode;
  tone?: "red" | "navy" | "forest";
}) {
  return (
    <div className="border-border/70 flex gap-4 border-b border-dashed py-5 last:border-0">
      <Badge icon={icon} tone={tone} />
      <div>
        <h3 className="text-brand-red font-display text-base font-bold tracking-wide uppercase">
          {title}
        </h3>
        <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export function IconTile({
  icon,
  title,
  children,
  tone = "forest",
}: {
  icon: LucideIcon;
  title: string;
  children?: ReactNode;
  tone?: "red" | "navy" | "forest";
}) {
  return (
    <div className="flex flex-col items-center px-2 text-center">
      <Badge icon={icon} tone={tone} />
      <h3 className="mt-3 font-display text-sm font-bold tracking-wide uppercase">{title}</h3>
      {children ? (
        <p className="text-muted-foreground mt-1 text-xs leading-relaxed">{children}</p>
      ) : null}
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`border-border bg-card rounded-md border p-6 shadow-[0_18px_40px_-34px_oklch(0.22_0.08_265_/_0.8)] transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}

export function Btn({
  to,
  href,
  children,
  variant = "primary",
  className = "",
  type,
  onClick,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "gold";
  className?: string;
  type?: "submit" | "button";
  onClick?: () => void;
}) {
  const variants = {
    primary:
      "bg-brand-red text-gold-soft hover:bg-brand-red-dark border border-transparent",
    outline:
      "border border-gold text-foreground hover:bg-gold/15",
    gold: "bg-gold text-navy-deep hover:bg-gold-soft border border-transparent",
  } as const;
  const cls = `inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-xs font-semibold tracking-[0.14em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${variants[variant]} ${className}`;
  if (to)
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  if (href)
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  return (
    <button type={type ?? "button"} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function Hero({
  eyebrow,
  title,
  accent,
  children,
  tone = "navy",
  actions = true,
  image,
  imageAlt,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  children?: ReactNode;
  tone?: "navy" | "ivory";
  actions?: boolean;
  image?: string;
  imageAlt?: string;
}) {
  const navy = tone === "navy";
  return (
    <header
      className={`${navy ? "bg-navy-deep text-gold-soft" : "bg-background text-foreground"} relative overflow-hidden px-5 py-20 sm:py-24`}
    >
      {image ? (
        <img
          src={image}
          alt={imageAlt ?? ""}
          className="absolute inset-0 size-full object-cover opacity-25"
          loading="eager"
        />
      ) : null}
      <div className="relative mx-auto max-w-4xl text-center">
        {eyebrow ? (
          <p className={`eyebrow ${navy ? "text-gold" : "text-forest"}`}>{eyebrow}</p>
        ) : null}
        <h1 className="mt-4 font-display text-3xl leading-tight font-bold sm:text-5xl">
          {title}
          {accent ? (
            <>
              <br />
              <span className={navy ? "text-gold" : "text-brand-red"}>{accent}</span>
            </>
          ) : null}
        </h1>
        <GoldRule className="mt-6" />
        {children ? (
          <div
            className={`mx-auto mt-6 max-w-2xl text-base leading-relaxed ${navy ? "text-gold-soft/85" : "text-muted-foreground"}`}
          >
            {children}
          </div>
        ) : null}
        {actions ? (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Btn to="/contact" variant={navy ? "gold" : "primary"}>
              Book a Consultation
            </Btn>
            <Btn href={TEL} variant="outline" className={navy ? "text-gold-soft" : ""}>
              <Phone className="size-4" aria-hidden="true" /> Call {PHONE}
            </Btn>
          </div>
        ) : null}
      </div>
    </header>
  );
}

const trustRow = [
  { icon: ShieldCheck, label: "Easy Process" },
  { icon: Timer, label: "Quick Disbursal" },
  { icon: Lock, label: "Secure & Reliable" },
  { icon: HandCoins, label: "Financial Freedom" },
];

export function ContactBand({ tone = "red" }: { tone?: "red" | "navy" }) {
  return (
    <section
      className={`${tone === "red" ? "bg-brand-red-dark" : "bg-navy-deep"} text-gold-soft px-5 py-12`}
      aria-labelledby="contact-band-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="contact-band-title" className="eyebrow text-gold text-center">
          Contact Us Today
        </h2>
        <GoldRule className="mt-4" />
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center">
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <span className="text-gold-soft/85 max-w-24 text-sm leading-snug font-semibold">
              Call us or WhatsApp on
            </span>
            <a
              href={TEL}
              className="text-gold font-display text-3xl font-bold tracking-wide sm:text-4xl"
            >
              {PHONE}
            </a>
            <a
              href={WHATSAPP}
              aria-label="Chat with NP Wealth Managers on WhatsApp"
              className="bg-forest text-gold-soft flex size-11 items-center justify-center rounded-full transition-transform hover:scale-105"
            >
              <MessageCircle className="size-6" aria-hidden="true" />
            </a>
          </div>
          <address className="border-gold/40 text-center text-sm leading-relaxed not-italic md:border-l md:pl-8 md:text-left">
            {ADDRESS_LINES.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
        </div>
        <ul className="border-gold/30 mt-10 grid grid-cols-2 gap-4 border-t pt-6 sm:grid-cols-4">
          {trustRow.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center justify-center gap-2 text-center text-xs font-semibold tracking-wider uppercase">
              <Icon className="text-gold size-4" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-border divide-y">
      {items.map((item) => (
        <details key={item.q} className="group py-4">
          <summary className="marker:content-none flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold">
            {item.q}
            <span className="text-gold transition-transform group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Steps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.title} className="border-gold/60 bg-card border-t-2 p-5">
          <span className="text-gold font-display text-2xl font-bold">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="text-navy mt-2 font-display text-base font-bold tracking-wide uppercase">
            {s.title}
          </h3>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className="text-muted-foreground text-base leading-relaxed">{children}</p>;
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="border-gold/50 text-muted-foreground mt-8 border-l-2 pl-4 text-xs leading-relaxed italic">
      {children}
    </p>
  );
}