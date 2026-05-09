import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard, ShoppingBag, Download, KeyRound, Bell, User, Activity, TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — FreeBotting" }] }),
  component: DashboardPage,
});

const nav = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: ShoppingBag, label: "Orders" },
  { icon: Download, label: "Downloads" },
  { icon: KeyRound, label: "License / API" },
  { icon: Bell, label: "Notifications" },
  { icon: User, label: "Profile" },
];

const orders = [
  { id: "#A1029", item: "Gold Plan — Twitch", status: "Delivered", total: "$5.00" },
  { id: "#A1028", item: "500 Discord Members", status: "Processing", total: "$3.00" },
  { id: "#A1027", item: "20,000 Kick Views", status: "Delivered", total: "$2.00" },
  { id: "#A1026", item: "1,000 Roblox Followers", status: "Delivered", total: "$3.00" },
];

function DashboardPage() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-12 lg:grid-cols-[240px_1fr]">
      {/* Sidebar */}
      <aside className="h-fit rounded-2xl border border-border/60 bg-card/40 p-3">
        <div className="flex items-center gap-3 rounded-lg p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background font-semibold">A</div>
          <div>
            <div className="text-sm font-medium">Alex Carter</div>
            <div className="text-xs text-muted-foreground">Premium</div>
          </div>
        </div>
        <div className="my-2 h-px bg-border/60" />
        <nav className="space-y-1">
          {nav.map((n) => (
            <button
              key={n.label}
              className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${n.active ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"}`}
            >
              <n.icon className="h-4 w-4" /> {n.label}
            </button>
          ))}
        </nav>
      </aside>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back, Alex</h1>
            <p className="text-sm text-muted-foreground">Here's what's happening with your account.</p>
          </div>
          <Button>New order</Button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: ShoppingBag, label: "Total orders", value: "47" },
            { icon: Activity, label: "Active services", value: "3" },
            { icon: TrendingUp, label: "Growth this month", value: "+18%" },
          ].map((s) => (
            <Card key={s.label} className="border-border/60 bg-card/40 p-5">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="text-xs uppercase tracking-wide">{s.label}</span>
                <s.icon className="h-4 w-4" />
              </div>
              <div className="mt-3 text-2xl font-semibold tracking-tight">{s.value}</div>
            </Card>
          ))}
        </div>

        {/* Orders */}
        <Card className="border-border/60 bg-card/40 p-0">
          <div className="flex items-center justify-between border-b border-border/60 p-5">
            <h2 className="text-base font-semibold">Recent orders</h2>
            <button className="text-xs text-muted-foreground hover:text-foreground">View all</button>
          </div>
          <div className="divide-y divide-border/60">
            {orders.map((o) => (
              <div key={o.id} className="flex items-center justify-between p-5 text-sm">
                <div>
                  <div className="font-medium">{o.item}</div>
                  <div className="text-xs text-muted-foreground">{o.id}</div>
                </div>
                <div className="flex items-center gap-6">
                  <span className={`rounded-full border px-2 py-0.5 text-xs ${o.status === "Delivered" ? "border-border/60 text-muted-foreground" : "border-foreground/40 text-foreground"}`}>{o.status}</span>
                  <span className="font-medium">{o.total}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* License + Notifications */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-border/60 bg-card/40 p-5">
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><KeyRound className="h-4 w-4" /> API Key</div>
            <div className="mt-3 flex items-center justify-between gap-3 rounded-lg border border-border/60 bg-background/60 p-3 font-mono text-xs">
              <span className="truncate">fb_live_5Jk29sLm··············q7Z</span>
              <Button size="sm" variant="outline">Copy</Button>
            </div>
          </Card>
          <Card className="border-border/60 bg-card/40 p-5">
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><Bell className="h-4 w-4" /> Notifications</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="rounded-lg border border-border/60 bg-background/60 p-3">Your order #A1028 is processing.</li>
              <li className="rounded-lg border border-border/60 bg-background/60 p-3">Tokens added: 2,500.</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}