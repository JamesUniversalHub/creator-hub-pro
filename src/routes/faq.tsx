import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ — FreeBotting" }] }),
  component: FaqPage,
});

const faqs = [
  { q: "How fast is delivery?", a: "Most orders begin processing within 30 seconds. Larger packages can take a few minutes." },
  { q: "Is my account safe?", a: "Yes. We never ask for your password or login. We only need your public username or server link." },
  { q: "What payment methods do you accept?", a: "We accept Robux, gift cards, crypto, and PayPal." },
  { q: "Do followers and members drop off?", a: "Our service uses high-retention sources, but minor fluctuations can happen. We offer refills on premium plans." },
  { q: "Can I get a refund?", a: "If your order can't be delivered, we'll fully refund you within 24 hours." },
  { q: "Where do I get support?", a: "Join our Discord at discord.gg/freebottings and open a ticket — we're online 24/7." },
];

function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">FAQ</h1>
        <p className="mt-3 text-muted-foreground">Everything you need to know before getting started.</p>
      </div>
      <Accordion type="single" collapsible className="mt-10 space-y-2">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border/60 bg-card/40 px-4">
            <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}