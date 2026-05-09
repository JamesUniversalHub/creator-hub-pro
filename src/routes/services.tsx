import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TwitchIcon, DiscordIcon, RobloxIcon, KickIcon } from "@/components/platform-icons";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — FreeBotting" },
      { name: "description", content: "Twitch, Discord, Roblox and Kick services with instant delivery." },
    ],
  }),
  component: ServicesPage,
});

const twitchPlans = [
  { name: "Bronze", price: 1, perks: ["30 Twitch followers / command"] },
  { name: "Silver", price: 3, perks: ["50 Twitch followers / command"] },
  { name: "Gold", price: 5, perks: ["70 Twitch followers / command"] },
  { name: "Diamond", price: 7, perks: ["100 Twitch followers / command"] },
  { name: "Premium", price: 8, perks: ["150 Twitch followers / command"] },
];

const tokens = [
  { name: "2,500 Tokens", price: 1 },
  { name: "15,000 Tokens", price: 5 },
  { name: "40,000 Tokens", price: 10 },
];

const discord = [
  { name: "100 Members", price: 1 },
  { name: "500 Members", price: 3 },
  { name: "1,000 Members", price: 5 },
];

const robloxProfile = [
  { name: "Followers", price: "$3 / 1,000" },
  { name: "Friender", price: "$3 / 1,000" },
  { name: "RoPro Likes", price: "$5 / 1,000" },
];
const robloxGroup = [
  { name: "Group Members", price: "$3 / 1,000" },
  { name: "Announcement Likes", price: "$3 / 1,000" },
];
const robloxGame = [
  { name: "Game Favorites", price: "$3 / 1,000" },
  { name: "Visits / Likes", price: "$7.5 / 1,000" },
];

const kick = [
  { name: "1,000 Views", price: 0.2 },
  { name: "20,000 Views", price: 2 },
  { name: "50,000 Views", price: 5 },
];

function PlanCard({ name, price, perks }: { name: string; price: number; perks: string[] }) {
  return (
    <Card className="flex flex-col border-border/60 bg-card/40 p-6 transition hover:border-foreground/30">
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{name}</div>
      <div className="mt-2 text-3xl font-semibold tracking-tight">${price}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {perks.map((p) => (
          <li key={p} className="flex items-center gap-2 text-muted-foreground">
            <Check className="h-4 w-4 text-foreground" /> {p}
          </li>
        ))}
      </ul>
      <Button asChild className="mt-6">
        <Link to="/checkout" search={{ item: name, price }}>Buy Now</Link>
      </Button>
    </Card>
  );
}

function MiniCard({ name, price }: { name: string; price: number | string }) {
  return (
    <Card className="flex items-center justify-between border-border/60 bg-card/40 p-5 transition hover:border-foreground/30">
      <div>
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-muted-foreground">{typeof price === "number" ? `$${price}` : price}</div>
      </div>
      <Button asChild size="sm" variant="outline">
        <Link to="/checkout" search={{ item: name, price: typeof price === "number" ? price : 0 }}>Buy <ArrowRight className="ml-1 h-3 w-3" /></Link>
      </Button>
    </Card>
  );
}

function Section({ icon: Icon, title, children }: { icon: React.ComponentType<{className?: string}>; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-16">
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-foreground" />
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">All Services</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Pick a platform and find the perfect plan for your community.</p>
      </div>

      <Section icon={TwitchIcon} title="Twitch Services">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {twitchPlans.map((p) => <PlanCard key={p.name} {...p} />)}
        </div>
        <h3 className="mt-10 text-sm uppercase tracking-wider text-muted-foreground">Additional packages</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {tokens.map((t) => <MiniCard key={t.name} {...t} />)}
        </div>
      </Section>

      <Section icon={DiscordIcon} title="Discord Services">
        <div className="grid gap-4 sm:grid-cols-3">
          {discord.map((d) => <MiniCard key={d.name} {...d} />)}
        </div>
      </Section>

      <Section icon={RobloxIcon} title="Roblox Services">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground">Profile</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {robloxProfile.map((d) => <MiniCard key={d.name} {...d} />)}
        </div>
        <h3 className="mt-8 text-sm uppercase tracking-wider text-muted-foreground">Group</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {robloxGroup.map((d) => <MiniCard key={d.name} {...d} />)}
        </div>
        <h3 className="mt-8 text-sm uppercase tracking-wider text-muted-foreground">Game</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {robloxGame.map((d) => <MiniCard key={d.name} {...d} />)}
        </div>
      </Section>

      <Section icon={KickIcon} title="Kick Services">
        <div className="grid gap-3 sm:grid-cols-3">
          {kick.map((d) => <MiniCard key={d.name} {...d} />)}
        </div>
      </Section>
    </div>
  );
}