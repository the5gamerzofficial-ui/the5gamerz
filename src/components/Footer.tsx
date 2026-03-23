import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-card/50 py-12">
    <div className="container px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="The 5 Gamerz" className="h-14 w-auto mb-4" />
          <p className="text-muted-foreground text-sm">Our mission is to give you the ultimate gaming hub — reviews, events, and community all in one place.</p>
        </div>
        <div>
          <h4 className="font-display text-sm text-primary mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Home", "About Us", "Gaming Reviews", "Events", "Contact Us"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-primary transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm text-primary mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>03375425307</li>
            <li>the5gamerzofficial@gmail.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm text-primary mb-4">Community</h4>
          <div className="flex gap-3">
            {["Discord", "YouTube", "Twitter"].map((s) => (
              <a key={s} href="#" className="px-3 py-1.5 rounded-md bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 text-xs font-heading uppercase tracking-wider transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        ©2019–2026 The 5 Gamerz — A Project by Safi Malik
      </div>
    </div>
  </footer>
);

export default Footer;
