import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bike,
  Briefcase,
  Car,
  FileCheck2,
  GraduationCap,
  Home,
  Landmark,
  Percent,
  Repeat,
  Store,
  Timer,
  UserRoundCheck,
  Wallet,
} from "lucide-react";
import keys from "@/assets/keys.jpg";
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
  Steps,
} from "@/components/site/ui";
import { FAQS } from "@/components/site/data";

export const Route = createFileRoute("/loans")({
  head: () => ({
    meta: [
      { title: "Loans — Home, Property & Business Finance | NP Wealth Managers" },
      {
        name: "description",
        content:
          "Home loans made easy: home finance, loan against property, balance transfer, vehicle, education, personal and business loans arranged across leading lenders.",
      },
      { property: "og:title", content: "Home Loans Made Easy, Dreams Made Real" },
      {
        property: "og:description",
        content: "Finance solutions across home, property, vehicle, education, personal and business credit.",
      },
      { property: "og:url", content: "/loans" },
    ],
    links: [{ rel: "canonical", href: "/loans" }],
  }),
  component: Loans,
});

const products = [
  { icon: Home, title: "Home Loan", to: "/home-loans", text: "Purchase, construction or renovation." },
  { icon: Landmark, title: "Loan Against Property", to: "/loan-against-property", text: "Unlock value you already own." },
  { icon: Repeat, title: "Balance Transfer", to: "/home-loans", text: "Move to better terms, if it pays." },
  { icon: Car, title: "Vehicle Loan", to: "/other-loans", text: "Drive your dreams." },
  { icon: Bike, title: "Two Wheeler Loan", to: "/other-loans", text: "Easy & affordable." },
  { icon: GraduationCap, title: "Education Loan", to: "/other-loans", text: "Invest in your future." },
  { icon: Wallet, title: "Personal Loan", to: "/other-loans", text: "For your needs." },
  { icon: Store, title: "Business Loan", to: "/other-loans", text: "Grow your business." },
];

function Loans() {
  return (
    <>
      <Hero
        eyebrow="Finance Solutions"
        title="Home Loans Made Easy,"
        accent="Dreams Made Real"
        image={keys}
        imageAlt="Brass house keys with a wooden house keychain"
      >
        One conversation, a properly built file, and lenders competing for it. That is the whole of
        our lending method.
      </Hero>

      <Section tone="card">
        <BandHeader>Finance Solutions</BandHeader>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <Link
              key={p.title}
              to={p.to}
              className="border-border bg-background hover:border-gold flex flex-col items-center gap-3 border p-6 text-center transition-colors"
            >
              <IconTile icon={p.icon} title={p.title} tone="red">
                {p.text}
              </IconTile>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="ivory">
        <BandHeader color="forest">Why Borrow Through Us</BandHeader>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <IconTile icon={Percent} title="Low Interest Rates">
            Compared across our lender panel, not quoted from one.
          </IconTile>
          <IconTile icon={FileCheck2} title="Minimum Documentation">
            A checklist built once, checked before submission.
          </IconTile>
          <IconTile icon={Timer} title="Quick Approval">
            Sanctions typically in 7&ndash;15 working days on complete files.
          </IconTile>
          <IconTile icon={Briefcase} title="High Eligibility">
            Income structured and presented to maximise assessed capacity.
          </IconTile>
          <IconTile icon={UserRoundCheck} title="Personal Assistance">
            A named advisor from consultation to disbursement.
          </IconTile>
        </div>
      </Section>

      <Section tone="card">
        <BandHeader color="navy">The Lending Process</BandHeader>
        <Steps
          steps={[
            { title: "Application", text: "Profile, income and objective captured; lender shortlist agreed with you." },
            { title: "Valuation", text: "Legal and technical assessment of the property by the lender's panel." },
            { title: "Sanction", text: "Terms issued — rate, tenure, amount and conditions, explained line by line." },
            { title: "Disbursement", text: "Funds released to you or the builder as per the agreed schedule." },
          ]}
        />
      </Section>

      <Section tone="ivory">
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <h2 className="text-brand-red font-display text-xl font-bold">Eligibility, In Short</h2>
            <ul className="text-muted-foreground mt-4 space-y-2 text-sm leading-relaxed">
              <li>&#8226; Age typically 21 to 65 at loan maturity</li>
              <li>&#8226; Salaried with stable employment, or self-employed with filed returns</li>
              <li>&#8226; A clean repayment record on existing obligations</li>
              <li>&#8226; Property with a clear, marketable title and required approvals</li>
              <li>&#8226; Total obligations comfortably inside your monthly income</li>
            </ul>
          </Card>
          <Card>
            <h2 className="text-forest font-display text-xl font-bold">Documents Usually Needed</h2>
            <ul className="text-muted-foreground mt-4 space-y-2 text-sm leading-relaxed">
              <li>&#8226; Identity and address proof (KYC) for all applicants</li>
              <li>&#8226; Last six months of bank statements</li>
              <li>&#8226; Salary slips and Form 16, or last two to three years&apos; ITR</li>
              <li>&#8226; Existing loan statements, if any</li>
              <li>&#8226; Property documents: agreement, title chain, approvals</li>
            </ul>
          </Card>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Btn to="/emi-calculator" variant="primary">
            Calculate My EMI
          </Btn>
          <Btn to="/contact" variant="outline">
            Book a Consultation
          </Btn>
        </div>
      </Section>

      <Section tone="card">
        <BandHeader>Loan FAQs</BandHeader>
        <div className="mx-auto max-w-3xl">
          <Faq items={FAQS[1]!.items} />
        </div>
        <Note>
          Rates, tenures and eligibility described here are indicative. Final terms are set by the
          lender following valuation and credit assessment.
        </Note>
      </Section>

      <ContactBand />
    </>
  );
}