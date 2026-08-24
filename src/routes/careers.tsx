import { createFileRoute } from "@tanstack/react-router";
import { BandHeader, Btn, Card, Hero, Lead, Note, Section, Steps } from "@/components/site/ui";
import { EMAIL } from "@/components/site/data";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — NP Wealth Managers, Noida" },
      {
        name: "description",
        content:
          "Open roles at NP Wealth Managers in Sector 63 Noida: loan advisory, credit underwriting, real-asset research and client service.",
      },
      { property: "og:title", content: "Careers at NP Wealth Managers" },
      {
        property: "og:description",
        content: "Build a career in lending and real-asset advisory in Sector 63, Noida.",
      },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const roles = [
  {
    title: "Loan Advisor — Home Loans",
    type: "Full-time &#183; Noida, Sector 63",
    text: "Own client mandates from consultation to disbursement across home purchase, construction and balance transfer cases.",
  },
  {
    title: "Credit Analyst",
    type: "Full-time &#183; Noida, Sector 63",
    text: "Assess income profiles, prepare files for underwriting and keep documentation quality high before lender submission.",
  },
  {
    title: "Real Assets Research Associate",
    type: "Full-time &#183; Noida, Sector 63",
    text: "Track micro-market absorption, rent evidence and developer track records to support acquisition recommendations.",
  },
  {
    title: "Client Relationship Executive",
    type: "Full-time &#183; Noida, Sector 63",
    text: "Be the voice clients hear most — scheduling, updates and follow-through on every open file.",
  },
  {
    title: "Digital Marketing Executive",
    type: "Full-time &#183; Noida, Sector 63",
    text: "Run content, campaigns and enquiry flow for a brand that sells trust before it sells product.",
  },
];

function Careers() {
  return (
    <>
      <Hero
        eyebrow="Join The Practice"
        title="Careers Built On"
        accent="Client Outcomes"
        actions={false}
      >
        We hire people who would rather explain a trade-off than close a sale. If that sounds like
        you, there is a seat here.
      </Hero>

      <Section tone="card">
        <BandHeader color="forest">Our Culture</BandHeader>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Advice over targets", d: "Advisors are measured on client retention and referral, not on units pushed." },
            { t: "Learn the whole file", d: "Everyone here can read a title chain and a repayment schedule, whatever their role." },
            { t: "Small team, real ownership", d: "You will speak to clients in your first month and own outcomes soon after." },
          ].map((c) => (
            <Card key={c.t}>
              <h3 className="text-brand-red font-display text-lg font-bold">{c.t}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{c.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="ivory">
        <BandHeader>Open Roles</BandHeader>
        <ul className="space-y-4">
          {roles.map((r) => (
            <li
              key={r.title}
              className="border-border bg-card flex flex-col gap-4 border p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-display text-lg font-bold">{r.title}</h3>
                <p className="text-forest mt-1 text-xs font-semibold tracking-wider uppercase">
                  Full-time &#183; Noida, Sector 63
                </p>
                <p className="text-muted-foreground mt-2 max-w-2xl text-sm leading-relaxed">
                  {r.text}
                </p>
              </div>
              <Btn href={`mailto:${EMAIL}?subject=Application: ${r.title}`} variant="outline">
                Apply Now
              </Btn>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="card">
        <BandHeader color="navy">Application Process</BandHeader>
        <Steps
          steps={[
            { title: "Apply", text: `Email your CV and a short note to ${EMAIL} with the role in the subject line.` },
            { title: "Screening Call", text: "A 20-minute conversation about your background and what you want to build." },
            { title: "Case Discussion", text: "A real client scenario — we care how you reason, not whether you memorised formulas." },
            { title: "Offer", text: "Reference check, offer, and a structured first-30-days plan." },
          ]}
        />
        <Note>Role listings are illustrative and should be confirmed by the firm before publication.</Note>
      </Section>
    </>
  );
}