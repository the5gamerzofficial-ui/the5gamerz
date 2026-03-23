import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = ["Home", "About Us", "Gaming Reviews", "Events", "Contact Us"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border"
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-8">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="The 5 Gamerz" className="h-10 w-auto" />
          <span className="font-display text-sm md:text-base text-primary text-glow-blue hidden sm:block">
            THE 5 GAMERZ
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="font-heading text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <AnimatePresence>
            {searchOpen && (
              <motion.input
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 200, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="bg-muted border border-border rounded-md px-3 py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                placeholder="Search reviews, events..."
                autoFocus
              />
            )}
          </AnimatePresence>
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Search size={18} />
          </button>
          <a
            href="#subscribe"
            className="hidden md:inline-flex px-4 py-1.5 rounded-md bg-primary text-primary-foreground font-heading text-sm uppercase tracking-wider hover:bg-primary/80 transition-colors"
          >
            Subscribe
          </a>
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden glass border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-6 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setIsOpen(false)}
                  className="font-heading text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {link}
                </a>
              ))}
              <a
                href="#subscribe"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-heading text-sm uppercase tracking-wider text-center"
              >
                Subscribe
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
