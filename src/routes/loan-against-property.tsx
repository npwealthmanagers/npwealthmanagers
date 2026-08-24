import { createFileRoute } from "@tanstack/react-router";
import { Building2, Home, Store, Warehouse } from "lucide-react";
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

export const Route = createFileRoute("/loan-against-property")({
  head: () => ({
    meta: [
      { title: "Loan Against Property — NP Wealth Managers, Noida" },
      {
        name: "description",
        content:
          "Unlock the value of residential or commercial property you own: how a loan against property works, eligible assets, documents and process.",
      },
      { property: "og:title", content: "Unlock the Value of Your Property" },
      {
        property: "og:description",
        content: "Property-backed credit, structured so it stays comfortably serviceable.",
      },
      { property: "og:url", content: "/loan-against-property" },
    ],
    links: [{ rel: "canonical", href: "/loan-against-property" }],
  }),
  component: Lap,
});

function Lap() {
  return (
    <>
      <Hero eyebrow="Secured Credit" title="Unlock The Value" accent="Of Your Property">
        Among the cheapest large-ticket credit available to an individual — and among the easiest to
        misuse. We structure it to fund something that outlasts the loan.
      </Hero>

      <Section tone="card">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-brand-red font-display text-2xl font-bold">What it is</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              A loan against property is credit secured by a residential or commercial property you
              already own. Because the lender&apos;s risk is low, pricing is materially better than
              unsecured borrowing and tenures run far longer.
            </p>
          </div>
          <div>
            <h2 className="text-forest font-display text-2xl font-bold">How it works</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              The lender values the property, sanctions a share of that value and registers a charge
              on it. You retain ownership and occupancy; the charge is released once the loan closes.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ivory">
        <BandHeader color="navy">Eligible Property Types</BandHeader>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <IconTile icon={Home} title="Residential" tone="navy">
            Self-occupied or rented apartments, villas and independent houses.
          </IconTile>
          <IconTile icon={Building2} title="Commercial Office" tone="navy">
            Owned office space, whether occupied by you or leased out.
          </IconTile>
          <IconTile icon={Store} title="Retail" tone="navy">
            Shops and showrooms with clear title and approvals.
          </IconTile>
          <IconTile icon={Warehouse} title="Industrial" tone="navy">
            Select warehouses and units, subject to lender appetite.
          </IconTile>
        </div>
      </Section>

      <Section tone="card">
        <BandHeader color="forest">Indicative Terms</BandHeader>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { k: "Loan to value", v: "A share of assessed market value, typically lower for commercial than residential." },
            { k: "Tenure", v: "Long tenures available; we recommend the shortest that leaves real headroom." },
            { k: "Rate", v: "Priced well below unsecured credit, varying with profile, property and lender." },
          ].map((t) => (
            <Card key={t.k}>
              <p className="eyebrow text-brand-red">{t.k}</p>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{t.v}</p>
            </Card>
          ))}
        </div>
        <Note>
          Terms above are illustrative: loan-to-value, tenure and rate are set by each lender after
          valuation and credit assessment.
        </Note>
      </Section>

      <Section tone="ivory">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-navy font-display text-2xl font-bold">Documents Required</h2>
          <ul className="text-muted-foreground mt-4 grid gap-2 text-sm leading-relaxed sm:grid-cols-2">
            {[
              "KYC for all applicants and co-owners",
              "Last six months of bank statements",
              "Salary slips and Form 16, or two to three years of ITR",
              "Complete title chain of the property",
              "Approved building plan and completion or occupancy certificate",
              "Latest property tax receipts and society NOC where applicable",
              "Existing loan statements, if the property is mortgaged",
              "Lease deed, where the property is rented out",
            ].map((d) => (
              <li key={d}>&#8226; {d}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="card">
        <BandHeader>The Process</BandHeader>
        <Steps
          steps={[
            { title: "Assessment", text: "Purpose, property and serviceability reviewed together." },
            { title: "Valuation", text: "Lender's technical and legal teams assess the property." },
            { title: "Sanction", text: "Amount, rate and tenure issued; charge documentation prepared." },
            { title: "Disbursement", text: "Funds released after mortgage registration is complete." },
          ]}
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Btn to="/emi-calculator">Calculate My EMI</Btn>
          <Btn to="/contact" variant="outline">
            Book a Consultation
          </Btn>
        </div>
      </Section>

      <Section tone="ivory">
        <BandHeader color="navy">LAP FAQs</BandHeader>
        <div className="mx-auto max-w-3xl">
          <Faq items={FAQS[1]!.items} />
        </div>
      </Section>

      <ContactBand tone="navy" />
    </>
  );
}