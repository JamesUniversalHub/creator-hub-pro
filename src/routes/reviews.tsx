import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({ meta: [{ title: "Reviews — FreeBotting" }] }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Jordan M.", handle: "@jordanstreams", rating: 5, text: "Got 100 followers within a minute. Super clean service, and the dashboard is honestly nicer than most paid SaaS tools." },
  { name: "Riley K.", handle: "@rileygg", rating: 5, text: "Used the Gold plan twice now. Fast, reliable, and their Discord support replied in under 2 minutes." },
  { name: "Sam T.", handle: "@samkicks", rating: 4, text: "Kick views are legit and ramp up smoothly. Would love to see even more package sizes." },
  { name: "Avery L.", handle: "@averyrblx", rating: 5, text: "Roblox group members showed up instantly. No drops after a week. 10/10." },
  { name: "Casey D.", handle: "@caseyplays", rating: 5, text: "The checkout flow is so smooth. Hopped into Discord, paid, done in 30 seconds." },
  { name: "Morgan P.", handle: "@morganlive", rating: 5, text: "Honestly the most professional bot service I've ever used. Feels like a real product." },
];

function ReviewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">What creators say</h1>
        <p className="mt-3 text-muted-foreground">Real reviews from creators using FreeBotting every day.</p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r) => (
          <Card key={r.handle} className="border-border/60 bg-card/40 p-6 transition hover:border-foreground/30">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold">{r.name.charAt(0)}</div>
              <div>
                <div className="text-sm font-medium">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.handle}</div>
              </div>
            </div>
            <div className="mt-3 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-3.5 w-3.5 ${i < r.rating ? "fill-foreground text-foreground" : "text-muted"}`} />
              ))}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{r.text}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}