import { createFileRoute } from "@tanstack/react-router";
import { Building2, MapPin, ParkingCircle, TrainFront } from "lucide-react";
import office from "@/assets/office.jpg";
import { BandHeader, Card, ContactBand, Hero, IconTile, Section } from "@/components/site/ui";
import { ADDRESS_LINES } from "@/components/site/data";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Our Location — Dallas 1 Business Park, Sector 63 Noida" },
      {
        name: "description",
        content:
          "Easy to reach, always here for you. Find NP Wealth Managers at Tower Dallas 1 Business Park, H Block, Sector 63 Noida — metro, expressway and parking access.",
      },
      { property: "og:title", content: "Our Location — Easy to Reach, Always Here for You" },
      { property: "og:description", content: "Tower Dallas 1 Business Park, Sector 63, Noida." },
      { property: "og:url", content: "/location" },
    ],
    links: [{ rel: "canonical", href: "/location" }],
  }),
  component: Location,
});

function Location() {
  return (
    <>
      <Hero eyebrow="Find Us Here" title="Easy To Reach," accent="Always Here For You!" actions={false}>
        A premium business address in the heart of Noida&apos;s commercial district, minutes from the
        metro and the expressway.
      </Hero>

      <Section tone="card">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-navy-deep text-gold-soft rounded-md p-8">
            <h2 className="text-gold font-display text-2xl font-bold">NP Wealth Managers</h2>
            <address className="mt-4 text-base leading-relaxed not-italic">
              {ADDRESS_LINES.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          </div>
          <img
            src={office}
            alt="Dallas 1 Business Park office building exterior in Sector 63, Noida"
            width={1408}
            height={912}
            loading="lazy"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </Section>

      <Section tone="ivory">
        <BandHeader color="navy">Why Our Address Works For You</BandHeader>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <IconTile icon={Building2} title="Premium Business Address" tone="navy">
            A grade-A tower with full client-meeting facilities.
          </IconTile>
          <IconTile icon={MapPin} title="Prime Sector 63 Location" tone="navy">
            At the centre of Noida&apos;s commercial belt.
          </IconTile>
          <IconTile icon={TrainFront} title="Road & Metro Connected" tone="navy">
            Minutes from Electronic City metro and NH-24.
          </IconTile>
          <IconTile icon={ParkingCircle} title="Easy Access & Parking" tone="navy">
            Ample visitor parking on site.
          </IconTile>
        </div>
      </Section>

      <Section tone="card">
        <BandHeader>Nearby Landmarks</BandHeader>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <ul className="text-muted-foreground space-y-3 text-sm leading-relaxed">
              {[
                "Electronic City Metro Station",
                "NH-24 (Delhi – Meerut Expressway)",
                "Fortis Hospital",
                "Sector 62 & Sector 64",
                "Shopping & commercial hubs",
              ].map((l) => (
                <li key={l} className="flex gap-3">
                  <MapPin className="text-gold size-4 shrink-0" aria-hidden="true" />
                  {l}
                </li>
              ))}
            </ul>
          </Card>
          <div className="border-gold/50 bg-muted relative flex h-72 items-center justify-center border">
            <div className="absolute inset-6 border border-dashed border-navy/20" aria-hidden="true" />
            <div className="relative text-center">
              <MapPin className="text-brand-red mx-auto size-12" aria-hidden="true" />
              <p className="text-navy mt-3 font-display text-lg font-bold tracking-wide uppercase">
                Dallas 1 Business Park
              </p>
              <p className="text-muted-foreground mt-1 text-xs tracking-widest uppercase">
                H Block &#183; Sector 63 Road
              </p>
            </div>
          </div>
        </div>
      </Section>

      <ContactBand tone="navy" />
    </>
  );
}