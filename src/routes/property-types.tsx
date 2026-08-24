import { createFileRoute } from "@tanstack/react-router";
import { Building2, Factory, Home, LayoutGrid } from "lucide-react";
import { Btn, ContactBand, GoldRule, Hero, Section } from "@/components/site/ui";

export const Route = createFileRoute("/property-types")({
  head: () => ({
    meta: [
      { title: "Property Types — Residential, Commercial, Industrial, Mixed-Use" },
      {
        name: "description",
        content:
          "The four property categories we advise on, what drives returns in each, and who each one suits.",
      },
      { property: "og:title", content: "Property Types We Advise On" },
      { property: "og:description", content: "Residential, commercial, industrial and mixed-use property explained." },
      { property: "og:url", content: "/property-types" },
    ],
    links: [{ rel: "canonical", href: "/property-types" }],
  }),
  component: PropertyTypes,
});

const groups = [
  {
    icon: Home,
    title: "Residential",
    lead: "Apartments, villas, plots and housing-society units.",
    points: [
      "Return is appreciation-led, with rental yield usually modest",
      "Deepest resale market, so exit is generally easiest",
      "Location, builder quality and society management drive value",
      "Suits first investments and long-horizon family holdings",
    ],
  },
  {
    icon: Building2,
    title: "Commercial",
    lead: "Offices, co-working floors, shops and showrooms.",
    points: [
      "Yield-led: rent, escalation and lock-in matter more than headline price",
      "Tenant covenant strength is the single largest risk factor",
      "Higher entry ticket and longer vacancy cycles than residential",
      "Suits investors seeking income rather than appreciation alone",
    ],
  },
  {
    icon: Factory,
    title: "Industrial",
    lead: "Warehouses, factory units and logistics hubs.",
    points: [
      "Long leases with lower day-to-day management burden",
      "Demand tied to consumption, e-commerce and freight corridors",
      "Specification, ceiling height and road access decide leasability",
      "Suits investors comfortable with a narrower buyer pool at exit",
    ],
  },
  {
    icon: LayoutGrid,
    title: "Mixed-Use",
    lead: "Developments combining homes, retail, offices and recreation.",
    points: [
      "Diversified income within a single development",
      "Footfall from one use supports the others",
      "Governance and maintenance quality vary widely — diligence matters",
      "Suits investors wanting exposure spread without multiple purchases",
    ],
  },
];

function PropertyTypes() {
  return (
    <>
      <Hero eyebrow="Know What You Are Buying" title="Four Property Types," accent="Four Different Jobs" actions={false}>
        Each category earns its return differently. Choosing the wrong one for your objective is the
        most common mistake we correct.
      </Hero>

      {groups.map((g, i) => (
        <Section key={g.title} tone={i % 2 === 0 ? "card" : "ivory"}>
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4">
              <g.icon className="text-brand-red size-10" strokeWidth={1.4} aria-hidden="true" />
              <h2 className="font-display text-2xl font-bold sm:text-3xl">{g.title}</h2>
            </div>
            <p className="text-forest mt-2 text-sm font-semibold">{g.lead}</p>
            <GoldRule className="mt-5 justify-start" />
            <ul className="text-muted-foreground mt-5 grid gap-2 text-sm leading-relaxed sm:grid-cols-2">
              {g.points.map((p) => (
                <li key={p}>&#8226; {p}</li>
              ))}
            </ul>
          </div>
        </Section>
      ))}

      <Section tone="card">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold">Not Sure Which Fits Your Plan?</h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Btn to="/contact">Book a Consultation</Btn>
            <Btn to="/real-assets" variant="outline">
              Real Assets Overview
            </Btn>
          </div>
        </div>
      </Section>

      <ContactBand tone="navy" />
    </>
  );
}