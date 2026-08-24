import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { PHONE, TEL, WHATSAPP } from "./data";

const serviceGroups = [
  {
    label: "Loans",
    links: [
      { to: "/loans", label: "Loans Overview" },
      { to: "/home-loans", label: "Home Loans" },
      { to: "/loan-against-property", label: "Loan Against Property" },
      { to: "/other-loans", label: "Other Loans" },
      { to: "/emi-calculator", label: "EMI Calculator" },
    ],
  },
  {
    label: "Real Assets",
    links: [
      { to: "/real-assets", label: "Real Assets Overview" },
      { to: "/real-estate-investment", label: "Real Estate Investment" },
      { to: "/property-types", label: "Property Types" },
    ],
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkCls =
    "text-sm font-semibold tracking-wide uppercase text-navy hover:text-brand-red transition-colors";

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${scrolled ? "bg-background/95 shadow-[0_6px_24px_-18px_oklch(0.22_0.08_265)] backdrop-blur" : "bg-background"}`}
    >
      <div className="border-gold/40 mx-auto flex max-w-6xl items-center justify-between gap-4 border-b px-5 py-3">
        <Link to="/" aria-label="NP Wealth Managers home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          <Link to="/" className={linkCls}>
            Home
          </Link>
          <Link to="/about" className={linkCls}>
            About
          </Link>
          <div className="group relative">
            <Link to="/services" className={`${linkCls} inline-flex items-center gap-1`}>
              Services <ChevronDown className="size-3.5" aria-hidden="true" />
            </Link>
            <div className="border-gold/50 bg-card invisible absolute left-1/2 z-50 w-140 -translate-x-1/2 grid-cols-2 gap-6 border p-6 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 lg:grid">
              {serviceGroups.map((g) => (
                <div key={g.label}>
                  <p className="eyebrow text-brand-red">{g.label}</p>
                  <ul className="mt-3 space-y-2">
                    {g.links.map((l) => (
                      <li key={l.to}>
                        <Link
                          to={l.to}
                          className="text-navy hover:text-brand-red text-sm transition-colors"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <Link to="/insights" className={linkCls}>
            Insights
          </Link>
          <Link to="/contact" className={linkCls}>
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={TEL}
            className="text-forest hover:text-brand-red hidden items-center gap-1.5 text-sm font-semibold sm:flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {PHONE}
          </a>
          <a
            href={WHATSAPP}
            aria-label="WhatsApp us"
            className="bg-forest text-gold-soft hidden size-9 items-center justify-center rounded-full sm:flex"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
          </a>
          <Link
            to="/contact"
            className="bg-brand-red text-gold-soft hover:bg-brand-red-dark hidden rounded-sm px-4 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase transition-colors md:inline-flex"
          >
            Book a Consultation
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="text-navy lg:hidden"
          >
            {open ? <Menu className="size-6 hidden" /> : null}
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          aria-label="Mobile"
          className="bg-card border-gold/40 max-h-[80vh] overflow-y-auto border-b px-5 py-4 lg:hidden"
        >
          <ul className="divide-border divide-y">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
            ].map((l) => (
              <li key={l.to} className="py-3">
                <Link to={l.to} onClick={() => setOpen(false)} className={linkCls}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
                className={`${linkCls} flex w-full items-center justify-between`}
              >
                Services
                <ChevronDown
                  className={`size-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              {servicesOpen ? (
                <div className="mt-3 space-y-4 pl-3">
                  <Link
                    to="/services"
                    onClick={() => setOpen(false)}
                    className="text-brand-red block text-sm font-semibold"
                  >
                    Services Hub
                  </Link>
                  {serviceGroups.map((g) => (
                    <div key={g.label}>
                      <p className="eyebrow text-forest">{g.label}</p>
                      <ul className="mt-2 space-y-2">
                        {g.links.map((l) => (
                          <li key={l.to}>
                            <Link
                              to={l.to}
                              onClick={() => setOpen(false)}
                              className="text-navy text-sm"
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : null}
            </li>
            {[
              { to: "/insights", label: "Insights" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to} className="py-3">
                <Link to={l.to} onClick={() => setOpen(false)} className={linkCls}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="bg-brand-red text-gold-soft mt-4 flex justify-center rounded-sm px-4 py-3 text-xs font-semibold tracking-[0.12em] uppercase"
          >
            Book a Consultation
          </Link>
        </nav>
      ) : null}
    </header>
  );
}