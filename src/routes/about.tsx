import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, HandCoins, Scale, ShieldCheck, Sparkles } from "lucide-react";
import skyline from "@/assets/skyline.jpg";
import {
  BandHeader,
  ContactBand,
  GoldRule,
  Hero,
  IconTile,
  Lead,
  Note,
  Reveal,
  Section,
} from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NP Wealth Managers — Plan, Manage, Grow, Protect" },
      {
        name: "description",
        content:
          "How NP Wealth Managers advises Delhi NCR clients on lending and real assets: our story, philosophy, milestones and values.",
      },
      { property: "og:title", content: "About NP Wealth Managers" },
      {
        property: "og:description",
        content: "Our story, philosophy and values — Plan, Manage, Grow, Protect.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Hero
        eyebrow="Your Wealth, Our Priority"
        title="Four Words We Actually"
        accent="Work By"
        image={skyline}
        imageAlt="Indian business district skyline at golden hour"
      >
        Plan &#183; Manage &#183; Grow &#183; Protect is not a slogan on our wall. It is the order in
        which we take on a client&apos;s balance sheet.
      </Hero>

      <Section tone="card">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-brand-red text-center">Our Story</p>
          <GoldRule className="mt-4" />
          <div className="mt-8 space-y-5">
            <Lead>
              NP Wealth Managers began with a simple observation: families in Delhi NCR were being
              sold financial products, not advised on financial decisions. A home loan was pitched on
              a rate. A property was pitched on a brochure. Nobody was doing the arithmetic on the
              client&apos;s side of the table.
            </Lead>
            <Lead>
              We built the firm around that arithmetic. Today we work on two connected fronts —
              structuring borrowing against assets our clients already hold, and deploying capital
              into real, tangible assets that produce income. The two are inseparable, because
              borrowing capacity and investment capacity are the same capacity seen from opposite
              sides.
            </Lead>
            <Lead>
              Our office sits in Tower Dallas 1 Business Park, Sector 63 Noida, and most of our
              clients still arrive through a referral from someone we have already helped. That is
              the measure we care about.
            </Lead>
          </div>
        </div>
      </Section>

      <Section tone="ivory">
        <BandHeader color="forest">Mission &amp; Philosophy</BandHeader>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="border-gold/60 bg-card border-l-2 p-7">
            <h3 className="text-brand-red font-display text-xl font-bold">Our Mission</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              To make every borrowing and property decision our clients take a considered one — fully
              costed, clearly explained, and tested against the conditions nobody hopes for.
            </p>
          </div>
          <div className="border-gold/60 bg-card border-l-2 p-7">
            <h3 className="text-forest font-display text-xl font-bold">Our Philosophy</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Cheap secured credit should fund assets that outlast the loan. Income-producing property
              should be underwritten with vacancy assumed. And nothing should be recommended that we
              cannot explain in one page.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="card">
        <BandHeader>Milestones</BandHeader>
        <ol className="border-gold/50 mx-auto max-w-3xl space-y-8 border-l pl-8">
          {[
            { y: "2014", t: "The practice begins", d: "Founded in Noida as a two-person home loan advisory serving Sector 62 and 63 professionals." },
            { y: "2017", t: "Lending network widens", d: "Empanelled with a broad set of banks and NBFCs, enabling genuine comparison rather than single-lender pitching." },
            { y: "2019", t: "Real assets added", d: "Property advisory formalised, covering residential and leased commercial acquisitions." },
            { y: "2022", t: "Structured mandates", d: "Joint ventures and fractional structures introduced for clients building diversified property exposure." },
            { y: "2025", t: "Dallas 1 Business Park", d: "Moved to a dedicated client-facing office in Tower Dallas 1, Sector 63 Noida." },
          ].map((m) => (
            <Reveal key={m.y}>
              <li className="relative">
                <span className="bg-gold absolute top-2 -left-[2.4rem] size-3 rounded-full" aria-hidden="true" />
                <p className="text-gold font-display text-lg font-bold">{m.y}</p>
                <h3 className="text-navy mt-1 font-display text-base font-bold tracking-wide uppercase">
                  {m.t}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{m.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="ivory">
        <BandHeader color="navy">Our Values</BandHeader>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Scale, title: "Risk First", text: "Every plan is stress-tested before it is presented." },
            { icon: Eye, title: "Transparency", text: "Fees, commissions and trade-offs stated up front." },
            { icon: Compass, title: "Long Horizon", text: "We optimise for the decade, not the quarter." },
            { icon: HandCoins, title: "Real Assets", text: "A bias towards things that exist and produce income." },
            { icon: ShieldCheck, title: "Protection", text: "Nothing recommended that a rate rise would break." },
            { icon: Sparkles, title: "Plain Language", text: "If we cannot explain it simply, we do not sell it." },
          ].map((v) => (
            <Reveal key={v.title}>
              <IconTile icon={v.icon} title={v.title} tone="navy">
                {v.text}
              </IconTile>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="card">
        <div className="border-gold/50 mx-auto max-w-4xl border-y py-8 text-center">
          <p className="eyebrow text-brand-red">Credentials &amp; Affiliations</p>
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
            Loan distribution relationships with scheduled commercial banks and registered NBFCs
            &#183; Property advisory conducted with independent legal and technical due diligence
            partners &#183; Client documentation handled under a written confidentiality standard.
          </p>
          <Note>
            Regulatory registration details are to be confirmed by the firm before publication. This
            section is a placeholder for the specific licence and registration numbers.
          </Note>
        </div>
      </Section>

      <ContactBand tone="navy" />
    </>
  );
}