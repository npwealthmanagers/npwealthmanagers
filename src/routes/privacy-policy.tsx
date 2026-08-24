import { createFileRoute } from "@tanstack/react-router";
import { Hero, Note, Section } from "@/components/site/ui";
import { EMAIL } from "@/components/site/data";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — NP Wealth Managers" },
      {
        name: "description",
        content:
          "How NP Wealth Managers collects, uses, stores and shares personal information, and how to contact us about privacy.",
      },
      { property: "og:title", content: "Privacy Policy — NP Wealth Managers" },
      { property: "og:description", content: "Our approach to personal data, cookies and third parties." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: Privacy,
});

const sections = [
  { t: "Information we collect", d: "Contact details you submit through our forms (name, email, phone), the service you express interest in, and any documents you choose to share during an advisory engagement. We also collect basic analytics about site usage." },
  { t: "How we use your information", d: "To respond to enquiries, assess eligibility, prepare and submit loan or investment files with your consent, and to keep you informed about your active engagement. We do not sell personal data." },
  { t: "Cookies and analytics", d: "We use essential cookies for site function and may use analytics cookies to understand which pages are useful. You can block cookies in your browser; essential functionality may be affected." },
  { t: "Third parties", d: "With your consent, we share the information needed to process an application with lenders, valuers, legal counsel and other service providers involved in your file. They are expected to use it only for that purpose." },
  { t: "Data retention and security", d: "Records are retained for as long as required for the engagement and applicable statutory periods, and are held under access controls and a written confidentiality standard." },
  { t: "Your rights", d: "You may request access to, correction of, or deletion of your personal information, and may withdraw consent for future processing at any time." },
  { t: "Contact for privacy questions", d: `Write to ${EMAIL} with "Privacy" in the subject line and we will respond within a reasonable period.` },
];

function Privacy() {
  return (
    <>
      <Hero eyebrow="Legal" title="Privacy" accent="Policy" actions={false} />
      <Section tone="card">
        <div className="mx-auto max-w-3xl">
          {sections.map((s) => (
            <div key={s.t} className="border-border border-b py-6 last:border-0">
              <h2 className="text-navy font-display text-xl font-bold">{s.t}</h2>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
          <Note>
            This policy is a structural template prepared for review by the firm&apos;s legal counsel
            before publication.
          </Note>
        </div>
      </Section>
    </>
  );
}