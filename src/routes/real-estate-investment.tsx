import { createFileRoute } from "@tanstack/react-router";
import office from "@/assets/office.jpg";
import {
  BandHeader,
  Btn,
  Card,
  ContactBand,
  Faq,
  Hero,
  Note,
  Section,
  Steps,
} from "@/components/site/ui";
import { FAQS } from "@/components/site/data";

export const Route = createFileRoute("/real-estate-investment")({
  head: () => ({
    meta: [
      { title: "Real Estate Investment Advisory — NP Wealth Managers" },
      {
        name: "description",
        content:
          "How we source, vet and underwrite residential, commercial, industrial and mixed-use property for investor clients across Delhi NCR.",
      },
      { property: "og:title", content: "Real Estate Investment — Sourced and Vetted" },
      { property: "og:description", content: "Diligence, underwriting and acquisition support for property investors." },
      { property: "og:url", content: "/real-estate-investment" },
    ],
    links: [{ rel: "canonical", href: "/real-estate-investment" }],
  }),
  component: Rei,
});

function Rei() {
  return (
    <>
      <Hero
        eyebrow="Sourcing & Diligence"
        title="Property Bought On"
        accent="Numbers, Not Brochures"
        image={office}
        imageAlt="Contemporary office building in a Noida business park"
      >
        Every asset we recommend has been through the same five checks — and plenty do not survive
        them.
      </Hero>

      <Section tone="card">
        <BandHeader>How We Vet An Asset</BandHeader>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {[
            { t: "Title & approvals", d: "Complete chain of title, sanctioned plans, occupancy and encumbrance checks with independent counsel." },
            { t: "Sponsor track record", d: "Developer or seller delivery history, litigation record and financial standing." },
            { t: "Micro-market evidence", d: "Actual transacted prices and rents nearby, not asking prices in listings." },
            { t: "Tenant covenant", d: "For leased assets: tenant strength, lock-in, escalation and exit clauses." },
            { t: "Net yield model", d: "Yield after tax, maintenance, leasing costs and assumed vacancy." },
            { t: "Exit path", d: "Who the likely buyer is, and what they will underwrite when you sell." },
          ].map((c) => (
            <Card key={c.t}>
              <h3 className="text-forest font-display text-lg font-bold">{c.t}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{c.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="ivory">
        <BandHeader color="navy">Segments We Cover</BandHeader>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Residential", d: "Apartments, villas and plots — appreciation-led with modest yield." },
            { t: "Commercial", d: "Offices and retail — yield-led, dependent on tenant quality." },
            { t: "Industrial", d: "Warehousing and logistics — long leases, lower management burden." },
            { t: "Mixed-use", d: "Blended developments combining residential, retail and offices." },
          ].map((s) => (
            <Card key={s.t}>
              <h3 className="text-brand-red font-display text-lg font-bold">{s.t}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{s.d}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Btn to="/property-types" variant="outline">
            Explore Property Types
          </Btn>
        </div>
      </Section>

      <Section tone="card">
        <BandHeader color="forest">The Client Process</BandHeader>
        <Steps
          steps={[
            { title: "Mandate", text: "Budget, segment, city and horizon agreed in writing." },
            { title: "Shortlist", text: "Assets presented with a full underwriting model each." },
            { title: "Diligence", text: "Legal and technical checks completed before any commitment." },
            { title: "Close & Hold", text: "Negotiation, registration, then scheduled performance reviews." },
          ]}
        />
      </Section>

      <Section tone="ivory">
        <BandHeader>Investment FAQs</BandHeader>
        <div className="mx-auto max-w-3xl">
          <Faq items={FAQS[2]!.items} />
        </div>
        <Note>Illustrative only. Property investment carries market, liquidity and tenant risk.</Note>
      </Section>

      <ContactBand />
    </>
  );
}