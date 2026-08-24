import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { BandHeader, Card, Hero, Section } from "@/components/site/ui";
import { ADDRESS_LINES, EMAIL, PHONE, TEL, WHATSAPP } from "@/components/site/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact NP Wealth Managers — Sector 63, Noida" },
      {
        name: "description",
        content:
          "Book a consultation with NP Wealth Managers. Call or WhatsApp 9027782514, email support@npwealthmanagers.com, or visit our Sector 63 Noida office.",
      },
      { property: "og:title", content: "Contact NP Wealth Managers" },
      { property: "og:description", content: "Call, WhatsApp, email or visit us in Sector 63, Noida." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "Loans", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const field =
    "border-border bg-background focus:border-gold mt-2 w-full border px-4 py-3 text-sm outline-none";

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(form.email)) next.email = "Please enter a valid email address.";
    if (!/^[0-9+\s-]{10,15}$/.test(form.phone)) next.phone = "Please enter a valid phone number.";
    if (form.message.trim().length < 10) next.message = "Please tell us a little more (10+ characters).";
    setErrors(next);
    setSent(Object.keys(next).length === 0);
  };

  return (
    <>
      <Hero eyebrow="Let&apos;s Talk" title="Book A Consultation," accent="No Obligation" actions={false}>
        Tell us what you are planning. You will leave the conversation with a written view of your
        options.
      </Hero>

      <Section tone="card">
        <BandHeader>Send Us a Message</BandHeader>
        <div className="grid gap-10 lg:grid-cols-2">
          <form noValidate onSubmit={submit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="eyebrow text-brand-red">
                  Full name
                </label>
                <input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={field}
                  aria-invalid={!!errors.name}
                />
                {errors.name ? <p className="text-destructive mt-1 text-xs">{errors.name}</p> : null}
              </div>
              <div>
                <label htmlFor="email" className="eyebrow text-brand-red">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={field}
                  aria-invalid={!!errors.email}
                />
                {errors.email ? <p className="text-destructive mt-1 text-xs">{errors.email}</p> : null}
              </div>
              <div>
                <label htmlFor="phone" className="eyebrow text-brand-red">
                  Phone
                </label>
                <input
                  id="phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={field}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone ? <p className="text-destructive mt-1 text-xs">{errors.phone}</p> : null}
              </div>
              <div>
                <label htmlFor="service" className="eyebrow text-brand-red">
                  Service of interest
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className={field}
                >
                  <option>Loans</option>
                  <option>Real Assets</option>
                  <option>General</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="eyebrow text-brand-red">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={field}
                aria-invalid={!!errors.message}
              />
              {errors.message ? <p className="text-destructive mt-1 text-xs">{errors.message}</p> : null}
            </div>
            <button
              type="submit"
              className="bg-brand-red text-gold-soft hover:bg-brand-red-dark mt-6 rounded-sm px-7 py-3 text-xs font-semibold tracking-[0.14em] uppercase"
            >
              Send Message
            </button>
            <p aria-live="polite" className="mt-3 text-sm">
              {sent ? (
                <span className="text-forest font-semibold">
                  Thank you — your enquiry has been recorded. An advisor will call you within one
                  working day.
                </span>
              ) : null}
            </p>
          </form>

          <div className="space-y-4">
            <Card>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <Mail className="text-gold size-5 shrink-0" aria-hidden="true" />
                  <a href={`mailto:${EMAIL}`} className="hover:text-brand-red">
                    {EMAIL}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="text-gold size-5 shrink-0" aria-hidden="true" />
                  <a href={TEL} className="hover:text-brand-red">
                    {PHONE}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="text-gold size-5 shrink-0" aria-hidden="true" />
                  <a href={WHATSAPP} className="hover:text-brand-red">
                    WhatsApp us on {PHONE}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="text-gold size-5 shrink-0" aria-hidden="true" />
                  <address className="not-italic">
                    {ADDRESS_LINES.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </address>
                </li>
                <li className="flex gap-3">
                  <Clock className="text-gold size-5 shrink-0" aria-hidden="true" />
                  <span>Monday to Saturday, 10:00 &ndash; 19:00 IST</span>
                </li>
              </ul>
            </Card>
            <div className="border-gold/50 bg-navy-deep text-gold-soft relative flex h-64 items-center justify-center border">
              <div className="text-center">
                <MapPin className="text-gold mx-auto size-10" aria-hidden="true" />
                <p className="eyebrow text-gold mt-3">Dallas 1 Business Park</p>
                <p className="mt-2 text-xs">Sector 63, Noida &#183; H Block</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}