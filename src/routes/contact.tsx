import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DiscordIcon } from "@/components/platform-icons";
import { Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — FreeBotting" }] }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Get in touch</h1>
        <p className="mt-3 text-muted-foreground">Questions, custom orders, or partnerships — we're here to help.</p>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_320px]">
        <Card className="border-border/60 bg-card/40 p-6">
          {sent ? (
            <div className="py-12 text-center">
              <h2 className="text-xl font-semibold">Message sent</h2>
              <p className="mt-2 text-sm text-muted-foreground">We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={6} required className="mt-1.5" />
              </div>
              <Button type="submit" className="w-fit">Send message</Button>
            </form>
          )}
        </Card>
        <div className="space-y-4">
          <Card className="border-border/60 bg-card/40 p-5">
            <div className="flex items-center gap-2 text-sm font-medium"><DiscordIcon className="h-4 w-4" /> Discord</div>
            <p className="mt-2 text-sm text-muted-foreground">Fastest way to reach support, 24/7.</p>
            <Button asChild size="sm" variant="outline" className="mt-3">
              <a href="https://discord.gg/freebottings" target="_blank" rel="noreferrer">Join Server</a>
            </Button>
          </Card>
          <Card className="border-border/60 bg-card/40 p-5">
            <div className="flex items-center gap-2 text-sm font-medium"><Mail className="h-4 w-4" /> Email</div>
            <p className="mt-2 text-sm text-muted-foreground">support@freebotting.app</p>
          </Card>
          <Card className="border-border/60 bg-card/40 p-5">
            <div className="flex items-center gap-2 text-sm font-medium"><MessageCircle className="h-4 w-4" /> Live chat</div>
            <p className="mt-2 text-sm text-muted-foreground">Available inside the dashboard.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}