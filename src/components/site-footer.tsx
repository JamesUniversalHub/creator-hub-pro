import { Link } from "@tanstack/react-router";
import { DiscordIcon, TwitchIcon, RobloxIcon, KickIcon } from "./platform-icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background font-bold">F</div>
              <span className="text-base font-semibold">FreeBotting</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Creator & community services for streamers and gamers.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Platforms</h4>
            <div className="mt-3 flex gap-3 text-muted-foreground">
              <TwitchIcon className="h-5 w-5 transition-colors hover:text-foreground" />
              <DiscordIcon className="h-5 w-5 transition-colors hover:text-foreground" />
              <RobloxIcon className="h-5 w-5 transition-colors hover:text-foreground" />
              <KickIcon className="h-5 w-5 transition-colors hover:text-foreground" />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} FreeBotting. All rights reserved.</p>
          <p>Made for creators worldwide.</p>
        </div>
      </div>
    </footer>
  );
}