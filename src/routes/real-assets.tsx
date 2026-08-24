import { createFileRoute } from "@tanstack/react-router";
import { Building2, Handshake, PieChart, ShieldCheck } from "lucide-react";
import skyline from "@/assets/skyline.jpg";
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

export const Route = createFileRoute("/real-assets")({
  head: () => ({
    meta: [
      { title: "Real Assets — Property Investment Advisory | NP Wealth Managers" },
      {
        name: "description",
        content:
          "Direct purchase, REITs, joint ventures and fractional ownership — how NP Wealth Managers builds and monitors real-asset portfolios.",
      },
      { property: "og:title", content: "Real Assets — Tangible, Income-Producing Investment" },
      { property: "og:description", content: "Four routes into property, underwritten honestly." },
      { property: "og:url", content: "/real-assets" },
    ],
    links: [{ rel: "canonical", href: "/real-assets" }],
  }),
  component: RealAssets,
});

const options = [
  { icon: Building2, title: "Direct Purchase", text: "You own the asset outright — full control, full responsibility, highest ticket size." },
  { icon: PieChart, title: "REITs", text: "Listed trusts holding leased property. Liquid, small entry, professionally managed." },
  { icon: Handshake, title: "Joint Ventures", text: "Two or more parties fund one project together under a written agreement." },
  { icon: ShieldCheck, title: "Fractional Ownership", text: "A share of one large leased asset through a special purpose vehicle." },
];

function RealAssets() {
  return (
    <>
      <Hero
        eyebrow="Grow &#183; Protect"
        title="Capital In Things"
        accent="That Actually Exist"
        image={skyline}
        imageAlt="Indian business district skyline at golden hour"
      >
        Real assets earn rent, hold intrinsic value and behave differently from paper markets. We help
        you own them deliberately.
      </Hero>

      <Section tone="card">
        <BandHeader color="forest">Investment Options</BandHeader>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((o) => (
            <Card key={o.title}>
              <o.icon className="text-forest size-8" strokeWidth={1.4} aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold">{o.title}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{o.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="ivory">
        <BandHeader color="navy">Portfolio Construction</BandHeader>
        <Steps
          steps={[
            { title: "Discovery", text: "Objectives, horizon, liquidity needs and existing exposure mapped." },
            { title: "Allocation", text: "How much property, in which segments and through which route." },
            { title: "Acquisition", text: "Sourcing, diligence, negotiation and documentation." },
            { title: "Monitoring", text: "Rent, occupancy, costs and exit options reviewed on a schedule." },
          ]}
        />
      </Section>

      <Section tone="card">
        <BandHeader>Risk Management</BandHeader>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {[
            { t: "Vacancy assumed", d: "We underwrite a vacant quarter every few years rather than pretending it away." },
            { t: "Title first", d: "No asset is recommended before the title chain and approvals are verified." },
            { t: "Exit modelled", d: "We agree how you would sell, and to whom, before you buy." },
          ].map((r) => (
            <Card key={r.t}>
              <h3 className="text-brand-red font-display text-lg font-bold">{r.t}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{r.d}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Btn to="/real-estate-investment">Real Estate Investment</Btn>
          <Btn to="/property-types" variant="outline">
            Property Types
          </Btn>
        </div>
      </Section>

      <Section tone="ivory">
        <BandHeader color="forest">Real Asset FAQs</BandHeader>
        <div className="mx-auto max-w-3xl">
          <Faq items={FAQS[2]!.items} />
        </div>
        <Note>
          Property values and rents move with markets. Nothing here is a guarantee of return, and any
          figures used in discussion are illustrative.
        </Note>
      </Section>

      <ContactBand tone="navy" />
    </>
  );
}