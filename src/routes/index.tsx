import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Shield, Zap, Activity, Users, ShoppingBag } from "lucide-react";
import { TwitchIcon, DiscordIcon, RobloxIcon, KickIcon } from "@/components/platform-icons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FreeBotting — Creator & Community Services" },
      { name: "description", content: "Grow your Twitch, Discord, Roblox and Kick presence with reliable, instant bot services." },
    ],
  }),
  component: Index,
});

const stats = [
  { label: "Orders Delivered", value: "1.2M+" },
  { label: "Active Users", value: "48K" },
  { label: "Uptime", value: "99.9%" },
  { label: "Avg Delivery", value: "< 30s" },
];

const services = [
  { icon: TwitchIcon, name: "Twitch", desc: "Followers, viewers, tokens" },
  { icon: DiscordIcon, name: "Discord", desc: "Members and engagement" },
  { icon: RobloxIcon, name: "Roblox", desc: "Followers, groups, games" },
  { icon: KickIcon, name: "Kick", desc: "Views and stream growth" },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "var(--gradient-glow)" }} />
        <div className="mx-auto max-w-5xl px-6 py-28 text-center md:py-36">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3 w-3" /> Trusted by 48,000+ creators
          </div>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
            Creator & Community<br />Services.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Instant, reliable growth for your favorite platforms. One command, real results.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="shadow-[0_0_40px_-10px_oklch(1_0_0/0.5)]">
              <Link to="/pricing">Get Started <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://discord.gg/freebottings" target="_blank" rel="noreferrer">
                <DiscordIcon className="mr-2 h-4 w-4" /> Join Discord
              </a>
            </Button>
          </div>

          {/* Platform icons row */}
          <div className="mt-14 flex items-center justify-center gap-10 text-muted-foreground/70">
            <TwitchIcon className="h-6 w-6 transition hover:text-foreground" />
            <DiscordIcon className="h-6 w-6 transition hover:text-foreground" />
            <RobloxIcon className="h-6 w-6 transition hover:text-foreground" />
            <KickIcon className="h-6 w-6 transition hover:text-foreground" />
          </div>
        </div>
      </section>

      {/* Dashboard mockup */}
      <section className="mx-auto max-w-6xl px-6">
        <Card className="overflow-hidden border-border/60 p-0" style={{ background: "var(--gradient-surface)", boxShadow: "var(--shadow-soft)" }}>
          <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
            <div className="h-2.5 w-2.5 rounded-full bg-muted" />
            <div className="h-2.5 w-2.5 rounded-full bg-muted" />
            <div className="h-2.5 w-2.5 rounded-full bg-muted" />
            <span className="ml-3 text-xs text-muted-foreground">Dashboard preview</span>
          </div>
          <div className="grid gap-4 p-6 md:grid-cols-3">
            {[
              { icon: Activity, label: "Active orders", value: "12" },
              { icon: Users, label: "Followers gained", value: "8,420" },
              { icon: ShoppingBag, label: "Tokens", value: "32,500" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border/60 bg-card/60 p-5">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="text-xs uppercase tracking-wide">{s.label}</span>
                  <s.icon className="h-4 w-4" />
                </div>
                <div className="mt-3 text-3xl font-semibold tracking-tight">{s.value}</div>
                <div className="mt-3 h-1.5 w-full rounded-full bg-muted">
                  <div className="h-full w-2/3 rounded-full bg-foreground/80" />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Stats */}
      <section className="mx-auto mt-20 max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-6 text-center">
              <div className="text-3xl font-semibold tracking-tight">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto mt-24 max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Built for every platform</h2>
            <p className="mt-2 text-muted-foreground">Pick a platform and start growing in seconds.</p>
          </div>
          <Button asChild variant="ghost" className="hidden md:inline-flex">
            <Link to="/services">All services <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Card key={s.name} className="group cursor-pointer border-border/60 bg-card/40 p-6 transition hover:border-foreground/30 hover:bg-card">
              <s.icon className="h-7 w-7 text-foreground" />
              <h3 className="mt-4 text-lg font-semibold">{s.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-4 flex items-center text-sm text-muted-foreground transition group-hover:text-foreground">
                Explore <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto mt-24 max-w-6xl px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Zap, title: "Instant Delivery", desc: "Most orders are processed in under 30 seconds." },
            { icon: Shield, title: "Safe & Reliable", desc: "No login required. We never ask for passwords." },
            { icon: Activity, title: "24/7 Uptime", desc: "Our network runs around the clock without downtime." },
          ].map((f) => (
            <Card key={f.title} className="border-border/60 bg-card/40 p-6">
              <f.icon className="h-5 w-5 text-foreground" />
              <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
