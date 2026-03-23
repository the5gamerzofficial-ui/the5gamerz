import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  { title: "Elden Ring: Shadow of the Erdtree", rating: 9.5, genre: "Action RPG", summary: "A masterclass in DLC design that expands an already legendary world." },
  { title: "Baldur's Gate 3", rating: 9.8, genre: "CRPG", summary: "The gold standard for RPGs, offering unmatched player freedom and storytelling." },
  { title: "Helldivers 2", rating: 8.7, genre: "Co-op Shooter", summary: "Chaotic, hilarious, and endlessly replayable cooperative action." },
  { title: "Black Myth: Wukong", rating: 9.0, genre: "Action Adventure", summary: "A visually stunning journey through Chinese mythology with combat depth." },
];

const ReviewsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % reviews.length);
  const prev = () => setCurrent((p) => (p - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="container px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl text-center text-secondary text-glow-purple mb-16"
        >
          Featured Reviews
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-8 md:p-12 neon-border-purple text-center"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-heading uppercase tracking-wider mb-4">
                {reviews[current].genre}
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                {reviews[current].title}
              </h3>
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.round(reviews[current].rating / 2) ? "fill-neon-blue text-neon-blue" : "text-muted-foreground"}
                  />
                ))}
                <span className="ml-2 font-display text-lg text-primary">{reviews[current].rating}</span>
              </div>
              <p className="text-muted-foreground text-lg">{reviews[current].summary}</p>
            </motion.div>
          </AnimatePresence>

          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full glass text-muted-foreground hover:text-primary transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full glass text-muted-foreground hover:text-primary transition-colors">
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-secondary" : "bg-muted-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
