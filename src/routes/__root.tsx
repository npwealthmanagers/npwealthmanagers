import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="bg-navy-deep text-gold-soft px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow text-gold">Error 404</p>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
          This Page Isn&apos;t Where It Should Be
        </h1>
        <p className="text-gold-soft/80 mt-5 text-sm leading-relaxed">
          The page you were looking for has moved or never existed. Everything you need is a step
          away — or call us on 9027782514 and we&apos;ll point you to it.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="border-gold text-gold hover:bg-gold hover:text-navy-deep rounded-sm border px-5 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="border-gold/30 mt-12 border-t pt-8 text-left">
          <p className="eyebrow text-gold text-center">Site Map</p>
          <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-3">
            {[
              { to: "/about", label: "About Us" },
              { to: "/team", label: "Team" },
              { to: "/careers", label: "Careers" },
              { to: "/testimonials", label: "Testimonials" },
              { to: "/partners", label: "Our Partners" },
              { to: "/approach", label: "Our Approach" },
              { to: "/loans", label: "Loans" },
              { to: "/home-loans", label: "Home Loans" },
              { to: "/loan-against-property", label: "Loan Against Property" },
              { to: "/other-loans", label: "Other Loans" },
              { to: "/emi-calculator", label: "EMI Calculator" },
              { to: "/real-assets", label: "Real Assets" },
              { to: "/real-estate-investment", label: "Real Estate Investment" },
              { to: "/property-types", label: "Property Types" },
              { to: "/insights", label: "Insights" },
              { to: "/faq", label: "FAQ" },
              { to: "/location", label: "Our Location" },
              { to: "/privacy-policy", label: "Privacy Policy" },
              { to: "/terms", label: "Terms & Disclaimer" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NP Wealth Managers — Home Loans, Finance & Real Assets" },
      {
        name: "description",
        content:
          "NP Wealth Managers, Sector 63 Noida: home loans, loan against property and real-asset investment advisory. Plan, Manage, Grow, Protect.",
      },
      { name: "author", content: "NP Wealth Managers" },
      { property: "og:site_name", content: "NP Wealth Managers" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Source+Sans+3:wght@400;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          name: "NP Wealth Managers",
          telephone: "+91-9027782514",
          email: "support@npwealthmanagers.com",
          url: "https://www.npwealthmanagers.com",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "H Block 202, Office Suite No. 306, 3rd Floor, Tower Dallas 1 Business Park",
            addressLocality: "Noida",
            addressRegion: "Uttar Pradesh",
            postalCode: "201301",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
