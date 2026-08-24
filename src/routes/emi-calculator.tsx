import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BandHeader, Btn, Card, Hero, Note, Section } from "@/components/site/ui";

export const Route = createFileRoute("/emi-calculator")({
  head: () => ({
    meta: [
      { title: "EMI Calculator — NP Wealth Managers" },
      {
        name: "description",
        content:
          "Know your EMI before you apply. Calculate monthly instalment, total interest and total payment for any loan amount, rate and tenure.",
      },
      { property: "og:title", content: "EMI Calculator — Know Your EMI Before You Apply" },
      { property: "og:description", content: "Instant EMI, total interest and total payment figures." },
      { property: "og:url", content: "/emi-calculator" },
    ],
    links: [{ rel: "canonical", href: "/emi-calculator" }],
  }),
  component: EmiCalculator,
});

const inr = (n: number) =>
  "₹" + Math.round(n).toLocaleString("en-IN", { maximumFractionDigits: 0 });

function EmiCalculator() {
  const [amount, setAmount] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const result = useMemo(() => {
    const n = years * 12;
    const r = rate / 12 / 100;
    const emi = r === 0 ? amount / n : (amount * r * (1 + r) ** n) / ((1 + r) ** n - 1);
    const total = emi * n;
    return { emi, total, interest: total - amount, n };
  }, [amount, rate, years]);

  const interestShare = (result.interest / result.total) * 100;

  return (
    <>
      <Hero eyebrow="Plan Before You Borrow" title="Know Your EMI" accent="Before You Apply" actions={false}>
        Move the numbers and see the whole cost of the loan, not just the monthly instalment.
      </Hero>

      <Section tone="card">
        <BandHeader>EMI Calculator</BandHeader>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <div className="space-y-6">
              <div>
                <label htmlFor="amount" className="eyebrow text-brand-red">
                  Loan amount &mdash; {inr(amount)}
                </label>
                <input
                  id="amount"
                  type="range"
                  min={100000}
                  max={50000000}
                  step={100000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="accent-brand-red mt-3 w-full"
                />
              </div>
              <div>
                <label htmlFor="rate" className="eyebrow text-brand-red">
                  Interest rate &mdash; {rate.toFixed(2)}% p.a.
                </label>
                <input
                  id="rate"
                  type="range"
                  min={5}
                  max={20}
                  step={0.05}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="accent-brand-red mt-3 w-full"
                />
              </div>
              <div>
                <label htmlFor="years" className="eyebrow text-brand-red">
                  Tenure &mdash; {years} years
                </label>
                <input
                  id="years"
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="accent-brand-red mt-3 w-full"
                />
              </div>
            </div>
          </Card>

          <div className="bg-navy-deep text-gold-soft rounded-md p-7">
            <p className="eyebrow text-gold">Monthly EMI</p>
            <p className="text-gold font-display mt-2 text-4xl font-bold">{inr(result.emi)}</p>
            <dl className="border-gold/30 mt-6 space-y-3 border-t pt-6 text-sm">
              <div className="flex justify-between">
                <dt>Principal</dt>
                <dd>{inr(amount)}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Total interest</dt>
                <dd>{inr(result.interest)}</dd>
              </div>
              <div className="flex justify-between font-semibold">
                <dt>Total payment</dt>
                <dd>{inr(result.total)}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Instalments</dt>
                <dd>{result.n} months</dd>
              </div>
            </dl>
            <div className="mt-6">
              <p className="eyebrow text-gold">Principal vs interest</p>
              <div className="bg-gold-soft/20 mt-3 flex h-4 overflow-hidden rounded-full">
                <span className="bg-gold-soft" style={{ width: `${100 - interestShare}%` }} />
                <span className="bg-brand-red" style={{ width: `${interestShare}%` }} />
              </div>
              <p className="mt-2 text-xs">
                Interest is {interestShare.toFixed(1)}% of everything you will repay.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Btn to="/contact">Book a Consultation to Apply</Btn>
        </div>
        <Note>
          Figures are illustrative and calculated on a reducing-balance basis. Actual EMI, rate and
          charges vary by lender, product and eligibility.
        </Note>
      </Section>
    </>
  );
}