import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DiscordIcon, RobloxIcon } from "@/components/platform-icons";
import { Bitcoin, CreditCard, Gift, ArrowRight } from "lucide-react";

const search = z.object({
  item: z.string().default("Custom Order"),
  price: z.coerce.number().default(1),
});

export const Route = createFileRoute("/checkout")({
  validateSearch: search,
  head: () => ({
    meta: [{ title: "Checkout — FreeBotting" }],
  }),
  component: CheckoutPage,
});

const methods = [
  { id: "robux", label: "Robux", icon: RobloxIcon },
  { id: "giftcard", label: "Gift Cards", icon: Gift },
  { id: "crypto", label: "Crypto", icon: Bitcoin },
  { id: "paypal", label: "PayPal", icon: CreditCard },
] as const;

function CheckoutPage() {
  const { item, price } = Route.useSearch();
  const [qty, setQty] = useState(1);
  const [target, setTarget] = useState("");
  const [method, setMethod] = useState<string>("paypal");
  const total = (price * qty).toFixed(2);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Checkout</h1>
      <p className="mt-2 text-muted-foreground">Review your order and continue to Discord to finalize.</p>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_360px]">
        <Card className="border-border/60 bg-card/40 p-6">
          <h2 className="text-base font-semibold">Order details</h2>
          <div className="mt-5 grid gap-5">
            <div>
              <Label htmlFor="pkg">Package</Label>
              <Input id="pkg" value={item} readOnly className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="qty">Quantity</Label>
              <Input id="qty" type="number" min={1} value={qty} onChange={(e) => setQty(Math.max(1, Number(e.target.value)))} className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="target">Username / Server link</Label>
              <Input id="target" placeholder="@username or https://discord.gg/..." value={target} onChange={(e) => setTarget(e.target.value)} className="mt-1.5" />
            </div>
            <div>
              <Label>Payment method</Label>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {methods.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMethod(m.id)}
                    className={`flex flex-col items-center gap-2 rounded-lg border p-4 text-sm transition ${method === m.id ? "border-foreground bg-accent/40" : "border-border/60 hover:border-foreground/40"}`}
                  >
                    <m.icon className="h-5 w-5" />
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <Card className="h-fit border-border/60 bg-card/40 p-6">
          <h2 className="text-base font-semibold">Summary</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Package</span><span className="text-foreground">{item}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Quantity</span><span className="text-foreground">{qty}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Method</span><span className="text-foreground capitalize">{method}</span>
            </div>
            <div className="my-3 h-px bg-border/60" />
            <div className="flex items-baseline justify-between">
              <span className="text-muted-foreground">Total</span>
              <span className="text-2xl font-semibold tracking-tight">${total}</span>
            </div>
          </div>
          <Button asChild className="mt-6 w-full">
            <a href="https://discord.gg/freebottings" target="_blank" rel="noreferrer">
              <DiscordIcon className="mr-2 h-4 w-4" /> Continue to Discord <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Need help? Join our Discord for 24/7 support.
          </p>
        </Card>
      </div>
    </div>
  );
}