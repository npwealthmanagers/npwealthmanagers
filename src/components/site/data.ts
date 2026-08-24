export const PHONE = "9027782514";
export const TEL = "tel:+919027782514";
export const WHATSAPP = "https://wa.me/919027782514";
export const EMAIL = "support@npwealthmanagers.com";
export const ADDRESS_LINES = [
  "H Block 202, Office Suite No. 306, 3rd Floor,",
  "Tower Dallas 1 Business Park, Sector 63, Noida,",
  "Gautam Buddha Nagar, Uttar Pradesh 201301",
];
export const CLOSING_TAGLINE =
  "YOUR GOALS. OUR EXPERTISE. BUILDING WEALTH, SECURING FUTURE.";

export type Insight = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  body: string[];
  quote: string;
};

export const INSIGHTS: Insight[] = [
  {
    slug: "balance-transfer-when-it-pays",
    title: "Balance Transfer: When Moving Your Home Loan Actually Pays",
    category: "Loans",
    date: "12 July 2026",
    readTime: "6 min read",
    author: "NP Wealth Desk",
    excerpt:
      "A lower advertised rate is not the whole story. Here is how to weigh processing costs, remaining tenure and interest already paid before you switch lenders.",
    quote:
      "The saving lives in the remaining tenure, not in the headline rate.",
    body: [
      "Most borrowers consider a balance transfer when a neighbour mentions a cheaper rate. That is a reasonable trigger, but a poor basis for a decision. What matters is how much interest is still ahead of you in the schedule, because that is the only portion a lower rate can touch.",
      "Early in a home loan, the majority of every instalment is interest. A borrower three years into a twenty-year loan has most of the interest still ahead, so even a modest rate reduction compounds into a meaningful figure. A borrower fourteen years in is mostly repaying principal, and the same reduction barely moves the needle.",
      "Against the saving, set the switching cost: processing fee, legal and valuation charges, insurance the new lender may bundle, and the weeks of documentation effort. We model the break-even month for every client before recommending a transfer — if the break-even sits beyond your likely holding period, staying put is the better advice.",
      "One more consideration is what else the transfer can unlock. A top-up alongside the transfer often prices far below an unsecured loan, which can make a renovation or a business need considerably cheaper to fund.",
    ],
  },
  {
    slug: "loan-against-property-discipline",
    title: "Borrowing Against Property Without Overextending",
    category: "Loans",
    date: "28 June 2026",
    readTime: "5 min read",
    author: "NP Wealth Desk",
    excerpt:
      "A loan against property is among the cheapest large-ticket credit available to an individual — and among the easiest to misuse. A simple discipline keeps it safe.",
    quote:
      "Secured credit should fund something that outlasts the loan.",
    body: [
      "Property-backed credit is priced low because the lender's risk is low. That asymmetry is the borrower's advantage, provided the money funds something durable: a business expansion, a consolidation of costlier debt, an education, a second asset.",
      "Our working rule is that total obligations across all loans should stay comfortably inside forty percent of stable monthly income, tested against a rate two percentage points above today's. A loan that only works at the current rate is not a loan you should sign.",
      "Tenure is the other lever. A longer tenure lowers the instalment and raises the lifetime interest. We usually recommend the shortest tenure that still leaves genuine monthly headroom, with prepayment used deliberately rather than opportunistically.",
    ],
  },
  {
    slug: "reading-rental-yield-honestly",
    title: "Reading Rental Yield Honestly",
    category: "Real Assets",
    date: "9 June 2026",
    readTime: "7 min read",
    author: "NP Wealth Desk",
    excerpt:
      "Gross yield flatters almost every commercial listing. Net yield, after vacancy, maintenance and taxes, is the number an investor should actually underwrite.",
    quote: "Underwrite the vacancy you hope never happens.",
    body: [
      "Gross yield divides annual rent by purchase price and ignores everything that erodes it. Net yield subtracts society charges, property tax, maintenance and repairs, leasing commissions, insurance and — most importantly — expected vacancy between tenants.",
      "In office and retail assets, a single quarter of vacancy every three years is a realistic assumption in most Indian micro-markets. Build it into the model from the start, and a listing that advertised eight percent may underwrite closer to five and a half. That is still a sound asset; it is simply a different asset than advertised.",
      "Tenant quality deserves as much attention as the building. A slightly lower rent from a covenant-strong tenant on a longer lock-in usually produces a better risk-adjusted return than a premium rent from a fragile one.",
    ],
  },
  {
    slug: "fractional-ownership-explained",
    title: "Fractional Ownership, Explained Plainly",
    category: "Real Assets",
    date: "22 May 2026",
    readTime: "5 min read",
    author: "NP Wealth Desk",
    excerpt:
      "Fractional structures put institutional-grade property within reach of individual investors. They also introduce liquidity and governance questions worth understanding first.",
    quote: "You are buying a structure as much as a building.",
    body: [
      "Fractional ownership lets several investors hold an economic interest in one large asset, typically a leased commercial property, through a special purpose vehicle. The appeal is obvious: entry at a fraction of the ticket size, professional management, and rent distributed proportionally.",
      "The trade-offs are structural. Exit depends on either a secondary buyer or a collective sale, so treat these as multi-year commitments. Read how decisions are made — who approves a sale, how disputes resolve, what fees the manager draws in good years and bad.",
      "Used deliberately, fractional exposure diversifies a property allocation across cities and tenants instead of concentrating it in one building. That diversification, not the yield alone, is the real argument for it.",
    ],
  },
  {
    slug: "documents-that-slow-sanctions",
    title: "The Six Documents That Slow Most Sanctions",
    category: "Process",
    date: "3 May 2026",
    readTime: "4 min read",
    author: "NP Wealth Desk",
    excerpt:
      "Sanction timelines rarely stall on eligibility. They stall on paperwork. Preparing six specific items ahead of time removes most of the delay.",
    quote: "Preparation buys you weeks, not days.",
    body: [
      "In our experience the same six items account for most sanction delays: an incomplete chain of property title, a missing occupancy or completion certificate, bank statements that omit a salary-credit month, an unreconciled ITR versus Form 16, an unclosed loan that still shows on the bureau report, and an unsigned co-applicant KYC.",
      "None of these are difficult to fix — they are simply difficult to fix quickly, once a file is already in underwriting and the clock is running.",
      "We front-load a document review before any lender sees the file. It is unglamorous work, and it is the single biggest reason our clients' sanctions land on schedule.",
    ],
  },
  {
    slug: "plan-manage-grow-protect",
    title: "Plan, Manage, Grow, Protect: A Working Sequence",
    category: "Philosophy",
    date: "18 April 2026",
    readTime: "5 min read",
    author: "NP Wealth Desk",
    excerpt:
      "Our four words are not a slogan pinned to a wall. They describe the order in which we take on a client's balance sheet.",
    quote: "Protection is not the last step. It is the standing condition.",
    body: [
      "Plan comes first because borrowing capacity and investment capacity are the same capacity, viewed from two sides. A client who plans a property purchase in eighteen months should not be locking capital into an illiquid structure today.",
      "Manage is the unglamorous middle: keeping obligations serviced, rates reviewed annually, and documentation current so that the next opportunity does not require a scramble.",
      "Grow is where real assets and secured leverage work together — using cheap, property-backed credit to acquire assets that produce income, rather than to fund consumption.",
      "Protect runs through all three. Every recommendation we make is stress-tested against a rate rise, an income gap and a vacancy, because a plan that only works in good conditions is not a plan.",
    ],
  },
];

export const FAQS: { group: string; items: { q: string; a: string }[] }[] = [
  {
    group: "General",
    items: [
      {
        q: "What exactly does NP Wealth Managers do?",
        a: "We advise on two connected areas: lending — home loans, loan against property and retail or business credit — and real assets, meaning direct and structured property investment. Most of our clients use both sides together.",
      },
      {
        q: "Do you charge clients a fee?",
        a: "Our advisory engagement is discussed openly at the first consultation. Where a lender pays us a distribution fee, we disclose it. You will never be told a fee structure after a file has been submitted.",
      },
      {
        q: "Where are you based?",
        a: "Our office is at Tower Dallas 1 Business Park, Sector 63, Noida. We work with clients across Delhi NCR and, for real-asset mandates, across major Indian metros.",
      },
    ],
  },
  {
    group: "Loans",
    items: [
      {
        q: "How long does a home loan sanction take?",
        a: "With complete documentation, most sanctions land within seven to fifteen working days, and disbursement follows legal and technical clearance. Incomplete paperwork is the usual cause of delay, which is why we review your file before any lender does.",
      },
      {
        q: "How much can I borrow against my property?",
        a: "Lenders typically fund a share of assessed market value, with the exact loan-to-value depending on property type, location and your income profile. Figures we share are indicative until a lender's valuation is complete.",
      },
      {
        q: "Can I move an existing loan to a cheaper lender?",
        a: "Yes — that is a balance transfer. It is worthwhile only when the interest saved over your remaining tenure clearly exceeds switching costs. We model the break-even before recommending it.",
      },
      {
        q: "Do you help with self-employed or business income profiles?",
        a: "Frequently. Self-employed files need a stronger narrative around income consistency, and lender appetite varies widely. Matching the profile to the right lender is much of the value we add.",
      },
    ],
  },
  {
    group: "Real Assets",
    items: [
      {
        q: "What minimum ticket size do real-asset mandates need?",
        a: "It depends on the route. Direct purchase and joint ventures require substantially more capital than fractional structures or listed REITs, which are how many clients begin building property exposure.",
      },
      {
        q: "How do you vet a property before recommending it?",
        a: "Title chain and approvals, developer or seller track record, micro-market absorption and rent evidence, tenant covenant where the asset is leased, and an underwriting model that assumes vacancy rather than ignoring it.",
      },
      {
        q: "Are returns guaranteed?",
        a: "No. Property values and rents move with markets, and any figures we publish are illustrative. Risk disclosure is part of every mandate discussion.",
      },
    ],
  },
  {
    group: "Account & Onboarding",
    items: [
      {
        q: "What happens at the first consultation?",
        a: "A structured conversation about your objectives, existing obligations and timelines. You leave with a written view of options — there is no obligation to proceed.",
      },
      {
        q: "What documents should I bring?",
        a: "Identity and address proof, last six months of bank statements, latest income proof or returns, and any existing loan statements. For property matters, bring whatever title documents you hold.",
      },
      {
        q: "How do we stay in touch?",
        a: "A named advisor stays with your file from consultation to disbursement or acquisition, reachable on call and WhatsApp at 9027782514.",
      },
    ],
  },
];