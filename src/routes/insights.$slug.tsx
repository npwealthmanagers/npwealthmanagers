import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Card, GoldRule, Section } from "@/components/site/ui";
import { INSIGHTS } from "@/components/site/data";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = INSIGHTS.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { slug: article.slug, title: article.title, excerpt: article.excerpt };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article Unavailable — NP Wealth Managers" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: `${loaderData.title} — NP Wealth Managers` },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/insights/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/insights/${params.slug}` }],
    };
  },
  component: Article,
});

function Article() {
  const { slug } = Route.useLoaderData();
  const article = INSIGHTS.find((a) => a.slug === slug);
  if (!article) throw notFound();
  const related = INSIGHTS.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <header className="bg-navy-deep text-gold-soft px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-gold">{article.category}</p>
          <h1 className="mt-4 font-display text-3xl leading-tight font-bold sm:text-4xl">
            {article.title}
          </h1>
          <GoldRule className="mt-6 justify-start" />
          <p className="text-gold-soft/70 mt-5 text-sm">
            {article.author} &#183; {article.date} &#183; {article.readTime}
          </p>
        </div>
      </header>

      <Section tone="card">
        <article className="mx-auto max-w-3xl">
          {article.body.map((p, i) => (
            <div key={p.slice(0, 20)}>
              <p className="text-muted-foreground mt-5 text-base leading-relaxed">{p}</p>
              {i === 1 ? (
                <blockquote className="border-gold my-8 border-l-2 pl-5">
                  <p className="font-display text-xl leading-snug italic">&ldquo;{article.quote}&rdquo;</p>
                </blockquote>
              ) : null}
            </div>
          ))}
        </article>
      </Section>

      <Section tone="ivory">
        <h2 className="text-center font-display text-2xl font-bold">Related Reading</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((a) => (
            <Card key={a.slug}>
              <p className="eyebrow text-brand-red">{a.category}</p>
              <h3 className="mt-3 font-display text-base leading-snug font-bold">
                <Link to="/insights/$slug" params={{ slug: a.slug }} className="hover:text-brand-red">
                  {a.title}
                </Link>
              </h3>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}