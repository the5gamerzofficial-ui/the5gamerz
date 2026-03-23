import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="relative border-t border-border bg-card/30 py-12">
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }} />
    <div className="container px-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="The 5 Gamerz" className="h-12 w-auto" />
            <span className="font-display text-sm text-primary text-glow-blue">THE 5 GAMERZ</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">Your ultimate gaming hub — reviews, events, and community all in one place.</p>
        </div>
        <div>
          <h4 className="font-display text-xs text-primary uppercase tracking-wider mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Home", "About Us", "Gaming Reviews", "Events", "Contact Us"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-primary transition-colors duration-300">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xs text-primary uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>03375425307</li>
            <li>the5gamerzofficial@gmail.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xs text-primary uppercase tracking-wider mb-4">Community</h4>
          <div className="flex flex-wrap gap-2">
            {["Discord", "YouTube", "Twitter"].map((s) => (
              <a key={s} href="#" className="px-3 py-1.5 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40 text-xs font-heading uppercase tracking-wider transition-all duration-300">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>©2019–2026 The 5 Gamerz — A Project by Safi Malik</span>
        <span className="font-display text-primary/40 text-[10px] uppercase tracking-widest">Level Up Your Game</span>
      </div>
    </div>
  </footer>
);

export default Footer;
