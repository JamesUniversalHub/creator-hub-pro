import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — FreeBotting" },
      { name: "description", content: "Simple, transparent pricing for every creator." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  { name: "Bronze", price: 1, perks: ["30 followers / command", "Standard delivery", "Email support"] },
  { name: "Silver", price: 3, perks: ["50 followers / command", "Priority queue", "Email support"], popular: false },
  { name: "Gold", price: 5, perks: ["70 followers / command", "Priority delivery", "Discord support"], popular: true },
  { name: "Diamond", price: 7, perks: ["100 followers / command", "Express delivery", "Priority support"] },
  { name: "Premium", price: 8, perks: ["150 followers / command", "Instant delivery", "Dedicated support"] },
];

function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Pricing</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Simple, no-nonsense pricing. Pay once, deliver forever.</p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {tiers.map((t) => (
          <Card
            key={t.name}
            className={`flex flex-col border-border/60 bg-card/40 p-6 transition hover:-translate-y-0.5 hover:border-foreground/40 ${t.popular ? "ring-1 ring-foreground/40" : ""}`}
          >
            {t.popular && <div className="mb-2 inline-block w-fit rounded-full bg-foreground px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-background">Popular</div>}
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{t.name}</div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight">${t.price}</span>
              <span className="text-xs text-muted-foreground">/ pack</span>
            </div>
            <ul className="mt-5 flex-1 space-y-2 text-sm text-muted-foreground">
              {t.perks.map((p) => (
                <li key={p} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-foreground" /> {p}</li>
              ))}
            </ul>
            <Button asChild className="mt-6">
              <Link to="/checkout" search={{ item: t.name, price: t.price }}>Buy Now</Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}