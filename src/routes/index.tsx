import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Home,
  Landmark,
  Repeat,
  FileCheck2,
  Percent,
  Headset,
  Handshake,
  UserRoundCheck,
  Gauge,
  Building2,
  ShieldCheck,
  Users,
  Building,
  ArrowRight,
} from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import keys from "@/assets/keys.jpg";
import {
  BandHeader,
  Btn,
  Card,
  ContactBand,
  FeatureRow,
  GoldRule,
  Hero,
  IconTile,
  Lead,
  Note,
  Reveal,
  Section,
  Steps,
} from "@/components/site/ui";
import { INSIGHTS } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NP Wealth Managers — Home Loans & Real Asset Advisory, Noida" },
      {
        name: "description",
        content:
          "Home loans, loan against property and real-asset investment advisory from NP Wealth Managers, Sector 63 Noida. Your wealth, our priority.",
      },
      { property: "og:title", content: "NP Wealth Managers — Your Dream Home, Our Expertise" },
      {
        property: "og:description",
        content:
          "Tailored home loan, finance and real-asset solutions for homeowners, business owners and investors across Delhi NCR.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const expertise = [
  {
    icon: Home,
    title: "Home Loan Solutions",
    text: "Buy, build, construct or renovate — we help you at every step of the way.",
  },
  {
    icon: Landmark,
    title: "Loan Against Property",
    text: "Unlock the value held in property you already own for the needs that matter.",
  },
  {
    icon: Repeat,
    title: "Balance Transfer",
    text: "Lower your interest rate and instalment with a properly modelled transfer.",
  },
  {
    icon: FileCheck2,
    title: "Easy Documentation",
    text: "A hassle-free process with minimal paperwork, reviewed before any lender sees it.",
  },
  {
    icon: Percent,
    title: "Low Interest Rates",
    text: "Competitive pricing sourced across leading banks and financial institutions.",
  },
  {
    icon: Headset,
    title: "Expert Guidance",
    text: "Personalised advice and end-to-end assistance from a named loan specialist.",
  },
];

const why = [
  { icon: Handshake, title: "Trusted Advisors", text: "Your trust is our strength." },
  { icon: UserRoundCheck, title: "Personalized Solutions", text: "Tailored plans as per your needs." },
  { icon: Gauge, title: "Quick Approval", text: "Faster processing & quick sanction." },
  { icon: Building2, title: "Wide Network", text: "Access to leading banks & NBFCs." },
  { icon: ShieldCheck, title: "Transparent Process", text: "Clear terms with complete transparency." },
  { icon: Users, title: "Ongoing Support", text: "We are with you, always." },
];

function Index() {
  return (
    <>
      <Hero
        eyebrow="Plan &#183; Manage &#183; Grow &#183; Protect"
        title="Your Dream Home,"
        accent="Our Expertise"
        image={heroHome}
        imageAlt="Modern Indian villa lit at dusk"
      >
        Home loan and finance solutions tailored just for you — and real-asset advisory for the
        capital you want working harder. Your wealth, our priority.
      </Hero>

      <Section tone="card">
        <BandHeader>Our Expertise</BandHeader>
        <div className="grid gap-x-12 md:grid-cols-2">
          {expertise.map((e) => (
            <Reveal key={e.title}>
              <FeatureRow icon={e.icon} title={e.title}>
                {e.text}
              </FeatureRow>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="ivory">
        <BandHeader color="forest">Why Choose Us?</BandHeader>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {why.map((w) => (
            <Reveal key={w.title}>
              <IconTile icon={w.icon} title={w.title}>
                {w.text}
              </IconTile>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="card">
        <BandHeader color="navy">Two Ways We Work</BandHeader>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <img
              src={keys}
              alt="House keys with a wooden house keychain"
              width={1408}
              height={912}
              loading="lazy"
              className="mb-5 h-44 w-full rounded-sm object-cover"
            />
            <h3 className="text-brand-red font-display text-2xl font-bold">Loans</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Home loans, loan against property, balance transfers and retail or business credit —
              matched to the lender most likely to say yes on the right terms.
            </p>
            <Btn to="/loans" variant="primary" className="mt-6">
              Explore Loans <ArrowRight className="size-4" aria-hidden="true" />
            </Btn>
          </Card>
          <Card>
            <div className="bg-navy-deep mb-5 flex h-44 w-full items-center justify-center rounded-sm">
              <Building className="text-gold size-16" strokeWidth={1.2} aria-hidden="true" />
            </div>
            <h3 className="text-forest font-display text-2xl font-bold">Real Assets</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Residential, commercial, industrial and mixed-use property — sourced, vetted and
              underwritten with vacancy and exit assumed, not ignored.
            </p>
            <Btn to="/real-assets" variant="outline" className="mt-6">
              Explore Real Assets <ArrowRight className="size-4" aria-hidden="true" />
            </Btn>
          </Card>
        </div>
      </Section>

      <Section tone="ivory">
        <BandHeader>How We Work</BandHeader>
        <Steps
          steps={[
            { title: "Consult", text: "We map objectives, obligations and timelines in one structured conversation." },
            { title: "Structure", text: "We shape the loan or allocation, stress-tested against rate and income shocks." },
            { title: "Deploy", text: "We drive the file — lender, documentation, valuation, disbursement or acquisition." },
            { title: "Review", text: "Annual rate and portfolio reviews keep the plan current as conditions move." },
          ]}
        />
      </Section>

      <section className="bg-navy-deep text-gold-soft px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 text-center sm:grid-cols-3">
          {[
            { n: "12+ years", l: "Advising on lending & property" },
            { n: "1,800+", l: "Client mandates supported" },
            { n: "25+", l: "Bank & NBFC lending relationships" },
          ].map((s) => (
            <div key={s.n}>
              <p className="text-gold font-display text-3xl font-bold sm:text-4xl">{s.n}</p>
              <p className="mt-2 text-xs tracking-[0.16em] uppercase">{s.l}</p>
            </div>
          ))}
        </div>
        <p className="text-gold-soft/60 mx-auto mt-8 max-w-2xl text-center text-xs">
          Track-record figures are indicative of firm activity and are shared for context, not as a
          promise of outcome.
        </p>
      </section>

      <Section tone="card">
        <GoldRule />
        <blockquote className="mx-auto mt-8 max-w-3xl text-center">
          <p className="font-display text-xl leading-relaxed italic sm:text-2xl">
            &ldquo;We had been turned down twice before. NP Wealth Managers rebuilt the file,
            explained exactly why it had failed, and our sanction came through in eleven days.&rdquo;
          </p>
          <footer className="text-muted-foreground mt-5 text-sm">
            Rohit &amp; Anuja Deshpande &#183; Home Loan &#183; Noida
          </footer>
        </blockquote>
        <div className="mt-8 flex justify-center">
          <Btn to="/testimonials" variant="outline">
            Read Client Stories
          </Btn>
        </div>
      </Section>

      <Section tone="ivory">
        <BandHeader color="navy">Latest Insights</BandHeader>
        <div className="grid gap-6 md:grid-cols-3">
          {INSIGHTS.slice(0, 3).map((a) => (
            <Card key={a.slug}>
              <p className="eyebrow text-brand-red">{a.category}</p>
              <h3 className="mt-3 font-display text-lg leading-snug font-bold">
                <Link to="/insights/$slug" params={{ slug: a.slug }} className="hover:text-brand-red">
                  {a.title}
                </Link>
              </h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{a.excerpt}</p>
              <p className="text-muted-foreground mt-4 text-xs">
                {a.date} &#183; {a.readTime}
              </p>
            </Card>
          ))}
        </div>
        <Note>
          Illustrative rates, tenures and figures across this site are indicative only. Actual terms
          depend on lender policy, property valuation and your eligibility.
        </Note>
      </Section>

      <ContactBand />
    </>
  );
}
