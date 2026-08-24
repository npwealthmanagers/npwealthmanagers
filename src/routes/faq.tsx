import { createFileRoute } from "@tanstack/react-router";
import { BandHeader, ContactBand, Faq, Hero, Section } from "@/components/site/ui";
import { FAQS } from "@/components/site/data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — NP Wealth Managers" },
      {
        name: "description",
        content:
          "Answers on loans, real assets, onboarding and how NP Wealth Managers works — sanction timelines, eligibility, diligence and fees.",
      },
      { property: "og:title", content: "FAQ — NP Wealth Managers" },
      { property: "og:description", content: "General, loans, real assets and onboarding questions answered." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.flatMap((g) =>
            g.items.map((i) => ({
              "@type": "Question",
              name: i.q,
              acceptedAnswer: { "@type": "Answer", text: i.a },
            })),
          ),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <Hero eyebrow="Answers" title="Frequently Asked" accent="Questions" actions={false}>
        If your question is not here, call or WhatsApp us on 9027782514 and we will answer it
        properly.
      </Hero>

      {FAQS.map((g, i) => (
        <Section key={g.group} tone={i % 2 === 0 ? "card" : "ivory"}>
          <BandHeader color={i % 2 === 0 ? "red" : "navy"}>{g.group}</BandHeader>
          <div className="mx-auto max-w-3xl">
            <Faq items={g.items} />
          </div>
        </Section>
      ))}

      <ContactBand />
    </>
  );
}