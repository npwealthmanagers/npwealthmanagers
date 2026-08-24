import { createFileRoute } from "@tanstack/react-router";
import { BandHeader, Btn, Card, GoldRule, Hero, Lead, Note, Section } from "@/components/site/ui";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Leadership Team — NP Wealth Managers" },
      {
        name: "description",
        content:
          "Meet the advisory team behind NP Wealth Managers — lending, real assets, credit underwriting and client service leadership.",
      },
      { property: "og:title", content: "Leadership Team — NP Wealth Managers" },
      {
        property: "og:description",
        content: "The advisors behind every mandate: lending, real assets and client service.",
      },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: Team,
});

const people = [
  {
    name: "Nitin Prakash",
    role: "Founder & Principal Advisor",
    focus: "Lending strategy",
    bio: "Leads client mandates end to end, with a focus on structuring home loans and property-backed credit for self-employed and business-income profiles.",
  },
  {
    name: "Priya Nandan",
    role: "Director — Real Assets",
    focus: "Property investment",
    bio: "Heads sourcing and underwriting for residential and leased commercial assets, including joint-venture and fractional structures.",
  },
  {
    name: "Arvind Mehrotra",
    role: "Head of Credit & Underwriting",
    focus: "File quality",
    bio: "Reviews every file before it reaches a lender, which is why our clients' sanctions rarely stall on documentation.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Head of Client Experience",
    focus: "Service & onboarding",
    bio: "Owns the client journey from first consultation to disbursement, keeping timelines and expectations aligned.",
  },
  {
    name: "Rakesh Bhatia",
    role: "Manager — Lender Relationships",
    focus: "Bank & NBFC network",
    bio: "Maintains the empanelment network and negotiates pricing and turnaround on behalf of client files.",
  },
  {
    name: "Divya Saran",
    role: "Analyst — Research",
    focus: "Markets & micro-markets",
    bio: "Tracks rate movement, micro-market absorption and rent evidence that feeds every recommendation we make.",
  },
];

function Team() {
  return (
    <>
      <Hero
        eyebrow="Three Figures In The Emblem"
        title="The Advisors Behind"
        accent="Every Mandate"
        actions={false}
      >
        Our emblem carries three professionals inside a gold ring for a reason: no client file at NP
        Wealth Managers is ever the work of one person.
      </Hero>

      <Section tone="card">
        <BandHeader>Leadership</BandHeader>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {people.map((p) => (
            <Card key={p.name}>
              <div className="bg-navy-deep text-gold ring-gold/50 flex size-16 items-center justify-center rounded-full font-display text-xl font-bold ring-1">
                {p.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{p.name}</h3>
              <p className="text-brand-red mt-1 text-xs font-semibold tracking-[0.14em] uppercase">
                {p.role}
              </p>
              <GoldRule className="mt-4 justify-start" />
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{p.bio}</p>
              <p className="text-forest mt-4 text-xs font-semibold tracking-wider uppercase">
                Focus: {p.focus}
              </p>
            </Card>
          ))}
        </div>
        <Note>
          Team names and biographies shown here are placeholders for the firm to replace with real
          profiles before publication.
        </Note>
      </Section>

      <Section tone="ivory">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold">Speak To An Advisor Directly</h2>
          <Lead>
            Tell us what you are planning and we will put the right specialist on the call.
          </Lead>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Btn to="/contact">Book a Consultation</Btn>
            <Btn to="/about" variant="outline">
              About the Firm
            </Btn>
          </div>
        </div>
      </Section>
    </>
  );
}