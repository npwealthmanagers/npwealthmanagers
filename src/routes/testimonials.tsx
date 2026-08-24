import { createFileRoute } from "@tanstack/react-router";
import { PlayCircle, Quote } from "lucide-react";
import { BandHeader, Btn, Card, ContactBand, Hero, Note, Section } from "@/components/site/ui";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Stories — NP Wealth Managers" },
      {
        name: "description",
        content:
          "What clients say about working with NP Wealth Managers on home loans, loan against property and real-estate investment mandates.",
      },
      { property: "og:title", content: "What Our Clients Say — NP Wealth Managers" },
      {
        property: "og:description",
        content: "Client stories across home loans, loan against property and real-asset mandates.",
      },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

const quotes = [
  {
    name: "Rohit & Anuja Deshpande",
    service: "Home Loan",
    city: "Noida",
    text: "We had been turned down twice before. NP Wealth Managers rebuilt the file, explained exactly why it had failed, and our sanction came through in eleven days.",
  },
  {
    name: "Sanjay Iyer",
    service: "Loan Against Property",
    city: "Ghaziabad",
    text: "They talked me out of the larger loan I asked for and showed me the arithmetic. Two years on, that was the right call.",
  },
  {
    name: "Meenal Chopra",
    service: "Balance Transfer",
    city: "Greater Noida",
    text: "I was ready to switch lenders on a headline rate. Their break-even model showed I would only save if I stayed nine more years — so we restructured instead.",
  },
  {
    name: "Faisal Qureshi",
    service: "Real Estate Investment",
    city: "Delhi",
    text: "The underwriting assumed a vacant quarter every three years. My previous advisor never mentioned vacancy at all.",
  },
  {
    name: "Kavita Raghavan",
    service: "Home Purchase Loan",
    city: "Sector 62, Noida",
    text: "Self-employed income makes lenders nervous. They knew which lender would actually understand my returns, and it saved months.",
  },
  {
    name: "Devendra Malik",
    service: "Commercial Property",
    city: "Noida Expressway",
    text: "Clear terms, disclosed fees, and a named person answering the phone every time. That is rarer than it should be.",
  },
];

function Testimonials() {
  return (
    <>
      <Hero eyebrow="Social Proof" title="What Our" accent="Clients Say" actions={false}>
        Trust is the only product we actually sell. These are the words clients used when we asked
        them how the work felt.
      </Hero>

      <Section tone="card">
        <BandHeader>Client Stories</BandHeader>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q) => (
            <Card key={q.name}>
              <Quote className="text-gold size-7" aria-hidden="true" />
              <p className="mt-4 text-sm leading-relaxed italic">&ldquo;{q.text}&rdquo;</p>
              <p className="text-navy mt-5 font-display text-base font-bold">{q.name}</p>
              <p className="text-brand-red mt-1 text-xs font-semibold tracking-wider uppercase">
                {q.service} &#183; {q.city}
              </p>
            </Card>
          ))}
        </div>
        <Note>
          Client names shown are placeholders used with illustrative quotes; the firm should replace
          them with consented testimonials before publication.
        </Note>
      </Section>

      <section className="bg-navy-deep text-gold-soft px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 text-center sm:grid-cols-3">
          {[
            { n: "12+", l: "Years in business" },
            { n: "1,800+", l: "Clients served" },
            { n: "₹900 Cr+", l: "Loans facilitated" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-gold font-display text-3xl font-bold sm:text-4xl">{s.n}</p>
              <p className="mt-2 text-xs tracking-[0.16em] uppercase">{s.l}</p>
            </div>
          ))}
        </div>
        <p className="text-gold-soft/60 mx-auto mt-6 max-w-2xl text-center text-xs">
          Figures are indicative of firm activity and shared for context only.
        </p>
      </section>

      <Section tone="ivory">
        <BandHeader color="forest">In Their Own Words</BandHeader>
        <div className="grid gap-6 sm:grid-cols-3">
          {["Home loan, Sector 63", "Property mandate, Delhi", "Balance transfer, Ghaziabad"].map(
            (label) => (
              <div
                key={label}
                className="bg-navy-deep text-gold-soft flex aspect-video flex-col items-center justify-center gap-3 rounded-sm"
              >
                <PlayCircle className="text-gold size-10" aria-hidden="true" />
                <p className="text-xs tracking-[0.16em] uppercase">Video coming soon</p>
                <p className="text-gold-soft/60 text-xs">{label}</p>
              </div>
            ),
          )}
        </div>
        <div className="mt-10 flex justify-center">
          <Btn to="/contact">Book a Consultation</Btn>
        </div>
      </Section>

      <ContactBand />
    </>
  );
}