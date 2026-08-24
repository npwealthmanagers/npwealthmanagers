import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building, Home } from "lucide-react";
import {
  BandHeader,
  Btn,
  Card,
  ContactBand,
  Hero,
  Note,
  Section,
  Steps,
} from "@/components/site/ui";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Loans & Real Assets | NP Wealth Managers" },
      {
        name: "description",
        content:
          "Two connected services: lending against assets you hold, and investing capital into real assets. See how NP Wealth Managers decides which fits you.",
      },
      { property: "og:title", content: "Services — Loans & Real Assets" },
      {
        property: "og:description",
        content: "Lending and real-asset advisory that work together on one balance sheet.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <Hero
        eyebrow="Plan &#183; Manage &#183; Grow &#183; Protect"
        title="Two Services,"
        accent="One Balance Sheet"
      >
        Borrowing capacity and investment capacity are the same capacity viewed from two sides. We
        advise on both, which is why our recommendations rarely work against each other.
      </Hero>

      <Section tone="card">
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <Home className="text-brand-red size-10" strokeWidth={1.4} aria-hidden="true" />
            <h2 className="text-brand-red mt-4 font-display text-2xl font-bold">Loans</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Home loans for purchase, construction, renovation and plot development; loan against
              residential or commercial property; balance transfers with a modelled break-even; and
              retail or business credit for vehicles, education, personal needs and working capital.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                { to: "/loans", label: "Loans overview" },
                { to: "/home-loans", label: "Home Loans" },
                { to: "/loan-against-property", label: "Loan Against Property" },
                { to: "/other-loans", label: "Other Loans" },
                { to: "/emi-calculator", label: "EMI Calculator" },
              ].map((l) => (
                <li key={l.to}>
                  <Btn to={l.to} variant="outline" className="w-full">
                    {l.label} <ArrowRight className="size-4" aria-hidden="true" />
                  </Btn>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <Building className="text-forest size-10" strokeWidth={1.4} aria-hidden="true" />
            <h2 className="text-forest mt-4 font-display text-2xl font-bold">Real Assets</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Direct property purchase, listed REITs, joint ventures and fractional structures across
              residential, commercial, industrial and mixed-use segments — sourced, vetted and
              underwritten with vacancy and exit assumed from the start.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                { to: "/real-assets", label: "Real Assets overview" },
                { to: "/real-estate-investment", label: "Real Estate Investment" },
                { to: "/property-types", label: "Property Types" },
                { to: "/approach", label: "Our Approach" },
              ].map((l) => (
                <li key={l.to}>
                  <Btn to={l.to} variant="outline" className="w-full">
                    {l.label} <ArrowRight className="size-4" aria-hidden="true" />
                  </Btn>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section tone="ivory">
        <BandHeader color="navy">How We Decide What Fits</BandHeader>
        <Steps
          steps={[
            { title: "Cash Flow First", text: "We establish what your income can service comfortably at a rate two points above today's." },
            { title: "Asset Review", text: "What you already own determines whether cheap secured credit is available to you." },
            { title: "Horizon Test", text: "Capital needed within three years does not belong in an illiquid property structure." },
            { title: "Sequence", text: "We order the moves — sometimes the loan comes first, sometimes the asset does." },
          ]}
        />
        <Note>
          Nothing on this page is a personalised recommendation. Suitability is established only in a
          consultation, on your actual numbers.
        </Note>
      </Section>

      <ContactBand />
    </>
  );
}