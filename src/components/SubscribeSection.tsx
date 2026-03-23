import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, X } from "lucide-react";
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Subscribe Today
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
              Join our newsletter to receive exclusive updates and insights from The 5 Gamerz community.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-heading text-base uppercase tracking-wider hover:bg-primary/80 transition-all neon-border"
            >
              Subscribe Now
            </button>
          </motion.div>
        </div>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative glass rounded-2xl p-8 max-w-md w-full neon-border"
          >
            <button onClick={() => setModalOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X size={20} />
            </button>
            <h3 className="font-display text-2xl text-primary text-glow-blue mb-2">Join The 5 Gamerz</h3>
            <p className="text-muted-foreground mb-6">Get the latest news, reviews, and event updates.</p>
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
        </div>
      )}
    </>
  );
};

export default SubscribeSection;
