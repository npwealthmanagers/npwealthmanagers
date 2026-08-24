import { createFileRoute } from "@tanstack/react-router";
import { Hero, Note, Section } from "@/components/site/ui";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Disclaimer — NP Wealth Managers" },
      {
        name: "description",
        content:
          "Terms of use for the NP Wealth Managers website, plus disclaimers covering advice, past performance and risk in lending and real-asset products.",
      },
      { property: "og:title", content: "Terms & Conditions / Disclaimer" },
      { property: "og:description", content: "Site terms, service eligibility and risk disclosure." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

const terms = [
  { t: "Acceptance of terms", d: "By using this website you agree to these terms. If you do not agree, please discontinue use." },
  { t: "Use of the site", d: "Content is provided for general information. You may not copy, scrape or republish it commercially without written permission." },
  { t: "Service eligibility", d: "All loan and investment services are subject to eligibility, documentation, lender or counterparty approval, and applicable law. Nothing on this site constitutes an offer or a commitment to lend." },
  { t: "Accuracy of information", d: "We take care to keep content current, but rates, product features and market data change frequently and may be out of date." },
  { t: "Limitation of liability", d: "To the extent permitted by law, we are not liable for indirect or consequential loss arising from use of this site or reliance on its content." },
  { t: "Governing law", d: "These terms are governed by the laws of India, with jurisdiction at Gautam Buddha Nagar, Uttar Pradesh. [Placeholder — to be confirmed by counsel.]" },
];

const disclaimers = [
  { t: "Not personalised advice", d: "Content on this site is general in nature and does not take account of your objectives, financial situation or needs. It is not personalised financial, legal or tax advice." },
  { t: "Illustrative figures", d: "All rates, EMIs, yields, tenures and track-record figures shown are illustrative. Actual outcomes depend on lender policy, valuation, market conditions and your eligibility." },
  { t: "Past performance", d: "Past performance of any property, market or product is not indicative of future results." },
  { t: "Lending risk", d: "Borrowing carries risk. Rates may rise, instalments may increase, and secured credit places the pledged property at risk if repayments are not maintained." },
  { t: "Real-asset risk", d: "Property investment carries market, liquidity, tenant, construction, title and regulatory risk. Exit may take considerable time and may occur at a loss." },
  { t: "Regulatory disclosure", d: "Registration and licence details of the firm and its distribution arrangements are to be inserted here. [Placeholder — to be confirmed before publication.]" },
];

function Terms() {
  return (
    <>
      <Hero eyebrow="Legal" title="Terms &amp; Conditions" accent="And Disclaimer" actions={false} />

      <Section tone="card">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-brand-red font-display text-2xl font-bold">Terms of Use</h2>
          {terms.map((s) => (
            <div key={s.t} className="border-border border-b py-6 last:border-0">
              <h3 className="text-navy font-display text-lg font-bold">{s.t}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ivory">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-forest font-display text-2xl font-bold">Disclaimer</h2>
          {disclaimers.map((s) => (
            <div key={s.t} className="border-border border-b py-6 last:border-0">
              <h3 className="text-navy font-display text-lg font-bold">{s.t}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
          <Note>
            These pages are structural templates and must be reviewed by legal counsel before the
            site is published.
          </Note>
        </div>
      </Section>
    </>
  );
}