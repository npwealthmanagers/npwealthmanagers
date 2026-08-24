import { createFileRoute } from "@tanstack/react-router";
import { Bike, Car, GraduationCap, Landmark, Store, Wallet } from "lucide-react";
import {
  BandHeader,
  Btn,
  Card,
  ContactBand,
  Faq,
  Hero,
  IconTile,
  Note,
  Section,
} from "@/components/site/ui";
import { FAQS } from "@/components/site/data";

export const Route = createFileRoute("/other-loans")({
  head: () => ({
    meta: [
      { title: "Vehicle, Education, Personal & Business Loans — NP Wealth Managers" },
      {
        name: "description",
        content:
          "Finance solutions fuelling your goals: vehicle, two-wheeler, education, personal and business loans arranged across banks and NBFCs.",
      },
      { property: "og:title", content: "Finance Solutions, Fuelling Your Goals" },
      {
        property: "og:description",
        content: "Vehicle, two-wheeler, education, personal and business credit, properly matched.",
      },
      { property: "og:url", content: "/other-loans" },
    ],
    links: [{ rel: "canonical", href: "/other-loans" }],
  }),
  component: OtherLoans,
});

const products = [
  {
    icon: Car,
    title: "Vehicle Loan",
    tag: "Drive your dreams",
    eligibility: "Salaried or self-employed with stable income and a clean repayment history.",
    process: "Quote and invoice, KYC and income proof, sanction, direct disbursal to the dealer.",
  },
  {
    icon: Bike,
    title: "Two Wheeler Loan",
    tag: "Easy & affordable",
    eligibility: "Minimal documentation; often approved on income proof and KYC alone.",
    process: "Dealer quote, KYC, quick sanction, same-week disbursal in most cases.",
  },
  {
    icon: GraduationCap,
    title: "Education Loan",
    tag: "Invest in your future",
    eligibility: "Admission confirmation plus a co-applicant with assessable income.",
    process: "Offer letter and fee schedule, co-applicant assessment, sanction, fee-wise disbursal.",
  },
  {
    icon: Wallet,
    title: "Personal Loan",
    tag: "For your needs",
    eligibility: "Salaried or professional income, with obligations inside lender thresholds.",
    process: "KYC, bank statements, sanction, disbursal to your account.",
  },
  {
    icon: Store,
    title: "Business Loan",
    tag: "Grow your business",
    eligibility: "Operating history with filed returns and GST records where applicable.",
    process: "Financials and banking review, assessment, sanction, working-capital disbursal.",
  },
];

function OtherLoans() {
  return (
    <>
      <Hero
        eyebrow="Retail & Business Credit"
        title="Finance Solutions,"
        accent="Fuelling Your Goals"
      >
        Not every goal is a house. For everything else the same discipline applies — compare lenders,
        cost the whole loan, keep it comfortably serviceable.
      </Hero>

      <Section tone="card">
        <BandHeader>What We Arrange</BandHeader>
        <div className="grid gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {products.map((p) => (
            <IconTile key={p.title} icon={p.icon} title={p.title} tone="forest">
              {p.tag}
            </IconTile>
          ))}
        </div>
      </Section>

      <Section tone="ivory">
        <BandHeader color="navy">Eligibility &amp; Process</BandHeader>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Card key={p.title}>
              <h3 className="text-brand-red font-display text-lg font-bold">{p.title}</h3>
              <p className="text-forest mt-1 text-xs font-semibold tracking-wider uppercase">
                {p.tag}
              </p>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                <span className="text-navy font-semibold">Eligibility:</span> {p.eligibility}
              </p>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                <span className="text-navy font-semibold">Process:</span> {p.process}
              </p>
            </Card>
          ))}
          <Card>
            <Landmark className="text-forest size-8" strokeWidth={1.4} aria-hidden="true" />
            <h3 className="text-forest mt-3 font-display text-lg font-bold">
              Loan Against Property
            </h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              If you own property, secured credit is almost always cheaper than any product on this
              page. Start there.
            </p>
            <Btn to="/loan-against-property" variant="outline" className="mt-5">
              Unlock The Value
            </Btn>
          </Card>
        </div>
      </Section>

      <Section tone="card">
        <BandHeader color="forest">FAQs</BandHeader>
        <div className="mx-auto max-w-3xl">
          <Faq items={FAQS[1]!.items} />
        </div>
        <Note>
          Product features are indicative; eligibility and pricing are determined by each lender.
        </Note>
      </Section>

      <ContactBand />
    </>
  );
}