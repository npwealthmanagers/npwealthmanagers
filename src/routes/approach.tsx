import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, Scale, ShieldCheck } from "lucide-react";
import { BandHeader, Btn, Card, Hero, IconTile, Note, Section } from "@/components/site/ui";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Our Approach & Investment Philosophy — NP Wealth Managers" },
      {
        name: "description",
        content:
          "Risk-first, transparent and long-horizon: the principles behind every lending and real-asset recommendation we make.",
      },
      { property: "og:title", content: "Our Approach — Risk First, Always" },
      { property: "og:description", content: "How loans and real assets work together in one plan." },
      { property: "og:url", content: "/approach" },
    ],
    links: [{ rel: "canonical", href: "/approach" }],
  }),
  component: Approach,
});

function Approach() {
  return (
    <>
      <Hero eyebrow="Investment Philosophy" title="Risk First," accent="Then Everything Else" actions={false}>
        A plan that only works in good conditions is not a plan. Every recommendation here is
        stress-tested before it is spoken aloud.
      </Hero>

      <Section tone="card">
        <BandHeader color="navy">Our Principles</BandHeader>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <IconTile icon={Scale} title="Risk First" tone="navy">
            Tested against a rate rise, an income gap and a vacant quarter.
          </IconTile>
          <IconTile icon={Eye} title="Transparency" tone="navy">
            Fees, commissions and trade-offs disclosed before you decide.
          </IconTile>
          <IconTile icon={Compass} title="Long Horizon" tone="navy">
            We optimise for the decade, not the transaction.
          </IconTile>
          <IconTile icon={ShieldCheck} title="Protection" tone="navy">
            Serviceability comes before size, always.
          </IconTile>
        </div>
      </Section>

      <Section tone="ivory">
        <BandHeader color="forest">How The Two Sides Work Together</BandHeader>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {[
            { t: "Borrow cheaply", d: "Property-backed credit is the least expensive large-ticket money available to most individuals." },
            { t: "Deploy productively", d: "Use it for assets that produce income or reduce costlier debt — never for consumption." },
            { t: "Keep headroom", d: "Total obligations stay comfortably inside stable income, tested above today's rate." },
          ].map((c) => (
            <Card key={c.t}>
              <h3 className="text-brand-red font-display text-lg font-bold">{c.t}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{c.d}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Btn to="/contact">Book a Consultation</Btn>
          <Btn to="/services" variant="outline">
            See Our Services
          </Btn>
        </div>
        <Note>
          This page describes our general approach and is not personalised financial advice.
        </Note>
      </Section>
    </>
  );
}