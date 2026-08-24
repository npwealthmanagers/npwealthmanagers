import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Phone, Twitter } from "lucide-react";
import { Logo } from "./Logo";
import { ADDRESS_LINES, CLOSING_TAGLINE, EMAIL, PHONE, TEL, WHATSAPP } from "./data";

const columns: { title: string; links: { to: string; label: string }[] }[] = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/team", label: "Team" },
      { to: "/careers", label: "Careers" },
      { to: "/testimonials", label: "Testimonials" },
      { to: "/partners", label: "Our Partners" },
      { to: "/approach", label: "Our Approach" },
      { to: "/insights", label: "Insights" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/services", label: "All Services" },
      { to: "/loans", label: "Loans" },
      { to: "/home-loans", label: "Home Loans" },
      { to: "/loan-against-property", label: "Loan Against Property" },
      { to: "/other-loans", label: "Other Loans" },
      { to: "/emi-calculator", label: "EMI Calculator" },
      { to: "/real-assets", label: "Real Assets" },
      { to: "/real-estate-investment", label: "Real Estate Investment" },
      { to: "/property-types", label: "Property Types" },
    ],
  },
  {
    title: "Support",
    links: [
      { to: "/contact", label: "Contact" },
      { to: "/faq", label: "FAQ" },
      { to: "/location", label: "Our Location" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy-policy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms & Disclaimer" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "ok" | "error">("idle");

  return (
    <footer className="bg-navy-deep text-gold-soft/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
        <div>
          <Logo light />
          <p className="eyebrow text-gold mt-4">Plan &#183; Manage &#183; Grow &#183; Protect</p>
          <p className="eyebrow text-gold-soft/70 mt-2">Your Wealth, Our Priority</p>
          <p className="mt-4 text-sm leading-relaxed">
            A Noida-based wealth advisory firm structuring lending and real-asset decisions for
            homeowners, business owners and investors.
          </p>
          <address className="text-gold-soft/70 mt-5 text-sm leading-relaxed not-italic">
            {ADDRESS_LINES.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="eyebrow text-gold">{col.title}</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              {col.title === "Support" ? (
                <>
                  <li>
                    <a href={`mailto:${EMAIL}`} className="hover:text-gold flex items-center gap-2">
                      <Mail className="size-3.5" aria-hidden="true" />
                      {EMAIL}
                    </a>
                  </li>
                  <li>
                    <a href={TEL} className="hover:text-gold flex items-center gap-2">
                      <Phone className="size-3.5" aria-hidden="true" />
                      {PHONE}
                    </a>
                  </li>
                  <li>
                    <a href={WHATSAPP} className="hover:text-gold flex items-center gap-2">
                      <MessageCircle className="size-3.5" aria-hidden="true" />
                      WhatsApp us
                    </a>
                  </li>
                </>
              ) : null}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-gold/25 mx-auto max-w-6xl border-t px-5 py-8">
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            setState(/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(email) ? "ok" : "error");
          }}
          className="flex flex-col gap-3 sm:flex-row sm:items-end"
        >
          <div className="flex-1">
            <label htmlFor="newsletter-email" className="eyebrow text-gold">
              Newsletter
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setState("idle");
              }}
              placeholder="you@example.com"
              className="border-gold/40 text-gold-soft placeholder:text-gold-soft/40 focus:border-gold mt-2 w-full border bg-transparent px-4 py-3 text-sm outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-gold text-navy-deep hover:bg-gold-soft rounded-sm px-6 py-3 text-xs font-semibold tracking-[0.14em] uppercase"
          >
            Subscribe
          </button>
        </form>
        <p aria-live="polite" className="mt-2 text-xs">
          {state === "ok" ? (
            <span className="text-gold">Thank you — you are on the list.</span>
          ) : state === "error" ? (
            <span className="text-destructive">Please enter a valid email address.</span>
          ) : null}
        </p>
      </div>

      <div className="bg-brand-red-dark px-5 py-4 text-center">
        <p className="text-gold-soft font-display text-xs tracking-[0.18em] sm:text-sm">
          {CLOSING_TAGLINE}
        </p>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs sm:flex-row">
        <p>&#169; {new Date().getFullYear()} NP Wealth Managers. All rights reserved.</p>
        <ul className="flex gap-4">
          {[
            { Icon: Linkedin, label: "LinkedIn" },
            { Icon: Instagram, label: "Instagram" },
            { Icon: Facebook, label: "Facebook" },
            { Icon: Twitter, label: "X" },
          ].map(({ Icon, label }) => (
            <li key={label}>
              <a href="#" aria-label={label} className="hover:text-gold">
                <Icon className="size-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}