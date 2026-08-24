import { createFileRoute } from "@tanstack/react-router";
import { Building2, Gauge, Percent, ShieldCheck } from "lucide-react";
import { BandHeader, Btn, Card, ContactBand, Hero, IconTile, Note, Section } from "@/components/site/ui";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Banking & NBFC Network — NP Wealth Managers" },
      {
        name: "description",
        content:
          "Our lending network spans banks, housing finance companies and NBFCs, so client files are matched to the lender most likely to sanction on good terms.",
      },
      { property: "og:title", content: "Strong Banking Partnerships — NP Wealth Managers" },
      {
        property: "og:description",
        content: "Access to leading banks and NBFCs, and why a wide network changes your outcome.",
      },
      { property: "og:url", content: "/partners" },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
  component: Partners,
});

const partners = [
  "Partner Bank 01",
  "Partner Bank 02",
  "Partner Bank 03",
  "Housing Finance 01",
  "Housing Finance 02",
  "Partner NBFC 01",
  "Partner NBFC 02",
  "Partner NBFC 03",
  "Partner Bank 04",
  "Partner Bank 05",
  "Housing Finance 03",
  "Partner NBFC 04",
];

function Partners() {
  return (
    <>
      <Hero
        eyebrow="Wide Network"
        title="Strong Banking"
        accent="Partnerships"
        actions={false}
      >
        Access to leading banks and NBFCs means your file goes to the lender whose policy actually
        fits it — not to whoever we happen to represent.
      </Hero>

      <Section tone="card">
        <BandHeader color="navy">Our Lending Network</BandHeader>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((p) => (
            <div
              key={p}
              className="border-gold/50 bg-background flex h-24 items-center justify-center border px-4 text-center"
            >
              <span className="text-navy font-display text-sm font-bold tracking-wide uppercase">
                {p}
              </span>
            </div>
          ))}
        </div>
        <Note>
          Partner names above are neutral placeholders shown for illustration only. No bank, housing
          finance company or NBFC trademark is used or implied; the firm will confirm its actual
          empanelment list before publication.
        </Note>
      </Section>

      <Section tone="ivory">
        <BandHeader color="forest">Why The Network Matters</BandHeader>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <IconTile icon={Percent} title="Competitive Pricing">
            Multiple lenders competing for one file usually improves the rate you are offered.
          </IconTile>
          <IconTile icon={Gauge} title="Faster Sanctions">
            We know which lenders move quickly on which profiles, which removes weeks of guesswork.
          </IconTile>
          <IconTile icon={Building2} title="Policy Fit">
            Self-employed income, older properties and unusual titles all need specific lender
            appetite.
          </IconTile>
          <IconTile icon={ShieldCheck} title="A Fallback Plan">
            If one lender declines, the file moves on the same week rather than starting over.
          </IconTile>
        </div>
      </Section>

      <Section tone="card">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold">Find Out Which Lender Fits You</h2>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
            One consultation is usually enough to identify the two or three lenders worth
            approaching.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Btn to="/contact">Book a Consultation</Btn>
            <Btn to="/loans" variant="outline">
              See Loan Products
            </Btn>
          </div>
        </div>
      </Section>

      <ContactBand tone="navy" />
    </>
  );
}