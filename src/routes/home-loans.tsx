import { createFileRoute } from "@tanstack/react-router";
import { Hammer, Home, Landmark, LandPlot, PaintRoller, Repeat } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
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

export const Route = createFileRoute("/home-loans")({
  head: () => ({
    meta: [
      { title: "Home Loans in Noida & Delhi NCR — NP Wealth Managers" },
      {
        name: "description",
        content:
          "Home purchase, construction, renovation, plot-plus-construction and balance transfer loans arranged across leading banks and housing finance companies.",
      },
      { property: "og:title", content: "Home Loans — Buy, Build, Renovate" },
      {
        property: "og:description",
        content: "Every type of home loan, structured and placed with the right lender.",
      },
      { property: "og:url", content: "/home-loans" },
    ],
    links: [{ rel: "canonical", href: "/home-loans" }],
  }),
  component: HomeLoans,
});

const types = [
  { icon: Home, title: "Home Purchase Loan", text: "For a ready or under-construction home, resale or new." },
  { icon: Hammer, title: "Home Construction Loan", text: "Staged funding as your build progresses on land you own." },
  { icon: PaintRoller, title: "Home Renovation Loan", text: "Repair, extend or modernise an existing home." },
  { icon: Landmark, title: "Loan Against Property", text: "Borrow against a property you already hold." },
  { icon: Repeat, title: "Balance Transfer Loan", text: "Move an existing loan to better terms, with a top-up option." },
  { icon: LandPlot, title: "Plot + Construction Loan", text: "Buy the plot and fund the build under one facility." },
];

function HomeLoans() {
  return (
    <>
      <Hero
        eyebrow="Types Of Home Loans We Offer"
        title="Buy, Build, Construct"
        accent="Or Renovate"
        image={heroHome}
        imageAlt="Modern Indian villa lit at dusk"
      >
        Whatever stage your home is at, there is a facility built for it — and a lender whose policy
        fits your income profile.
      </Hero>

      <Section tone="card">
        <BandHeader>Types Of Home Loans We Offer</BandHeader>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((t) => (
            <IconTile key={t.title} icon={t.icon} title={t.title} tone="red">
              {t.text}
            </IconTile>
          ))}
        </div>
      </Section>

      <Section tone="ivory">
        <BandHeader color="forest">Balance Transfer, Explained</BandHeader>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-brand-red font-display text-lg font-bold">When it pays</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Early in a loan, most of every instalment is interest — so a lower rate has years of
              interest left to work on. The longer your remaining tenure, the larger the saving.
            </p>
          </Card>
          <Card>
            <h3 className="text-forest font-display text-lg font-bold">When it does not</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Processing, legal, valuation and insurance costs have to be recovered. If the
              break-even month falls beyond how long you will hold the loan, staying put is better.
            </p>
          </Card>
        </div>
      </Section>

      <Section tone="card">
        <BandHeader color="navy">From Enquiry To Keys</BandHeader>
        <Steps
          steps={[
            { title: "Consult", text: "Objective, budget and eligibility mapped in one sitting." },
            { title: "File Build", text: "Documents assembled and reviewed before any lender sees them." },
            { title: "Sanction", text: "Terms negotiated across shortlisted lenders and explained fully." },
            { title: "Disbursement", text: "Funds released to seller or builder per the agreed schedule." },
          ]}
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Btn to="/emi-calculator">Calculate My EMI</Btn>
          <Btn to="/loan-against-property" variant="outline">
            Loan Against Property
          </Btn>
        </div>
      </Section>

      <Section tone="ivory">
        <BandHeader>Home Loan FAQs</BandHeader>
        <div className="mx-auto max-w-3xl">
          <Faq items={FAQS[1]!.items} />
        </div>
        <Note>
          Loan features described here are indicative and vary by lender, property and applicant
          profile.
        </Note>
      </Section>

      <ContactBand />
    </>
  );
}