import { createFileRoute, Link } from "@tanstack/react-router";
import { BandHeader, Card, Hero, Section } from "@/components/site/ui";
import { INSIGHTS } from "@/components/site/data";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Lending, Property & Markets | NP Wealth Managers" },
      {
        name: "description",
        content:
          "Short, practical notes on home loans, balance transfers, rental yield, fractional ownership and the discipline behind good property decisions.",
      },
      { property: "og:title", content: "Insights from NP Wealth Managers" },
      { property: "og:description", content: "Practical notes on lending, real assets and markets." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: Insights,
});

function Insights() {
  return (
    <>
      <Hero eyebrow="Reading Room" title="Notes On Lending," accent="Property & Markets" actions={false}>
        Written by the people who do the underwriting, not by a marketing desk.
      </Hero>

      <Section tone="card">
        <BandHeader>All Articles</BandHeader>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INSIGHTS.map((a) => (
            <Card key={a.slug}>
              <p className="eyebrow text-brand-red">{a.category}</p>
              <h2 className="mt-3 font-display text-lg leading-snug font-bold">
                <Link to="/insights/$slug" params={{ slug: a.slug }} className="hover:text-brand-red">
                  {a.title}
                </Link>
              </h2>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{a.excerpt}</p>
              <p className="text-muted-foreground mt-4 text-xs">
                {a.date} &#183; {a.readTime}
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}