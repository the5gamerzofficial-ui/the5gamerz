import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, Zap } from "lucide-react";
import { toast } from "sonner";

const SubscribeSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Subscribed! Welcome to The 5 Gamerz community.");
    setName("");
    setEmail("");
    setModalOpen(false);
  };

  return (
    <>
      <section id="subscribe" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/10 to-primary/5" />
        {/* Decorative grid lines */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="container px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
              Stay <span className="text-primary text-glow-blue">Connected</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
              Join our newsletter for exclusive updates, reviews, and event invites from The 5 Gamerz community.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-heading text-base uppercase tracking-wider hover:bg-primary/80 transition-all neon-border group"
            >
              <span className="flex items-center gap-2">
                <Mail size={18} />
                Subscribe Now
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={() => setModalOpen(false)} />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative glass rounded-2xl p-8 max-w-md w-full neon-border overflow-hidden"
            >
              {/* Glitch decoration */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
              <button onClick={() => setModalOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
                <X size={20} />
              </button>
              <Zap className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display text-2xl text-primary text-glow-blue mb-2">Join The 5 Gamerz</h3>
              <p className="text-muted-foreground mb-6 text-sm">Get the latest news, reviews, and event updates delivered to your inbox.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading uppercase tracking-wider hover:bg-primary/80 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SubscribeSection;
