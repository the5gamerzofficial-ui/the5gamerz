import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import warriorAvatar from "@/assets/warrior-avatar.png";

const heroWords = ["Community", "Diverse Content", "Expert Insights"];

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const avatarScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const avatarY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[120vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background layer */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})`, y: bgY }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />

      {/* Text BEHIND avatar */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none select-none"
        style={{ y: textY, opacity: textOpacity }}
      >
        <h1 className="font-display text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black leading-none text-center uppercase">
          <span className="block text-primary/20">THE 5</span>
          <span className="block text-secondary/20">GAMERZ</span>
        </h1>
      </motion.div>

      {/* Avatar FOREGROUND */}
      <motion.div
        className="relative z-20 flex items-end justify-center"
        style={{ scale: avatarScale, y: avatarY }}
      >
        <img
          src={warriorAvatar}
          alt="Gaming Warrior"
          className="h-[60vh] sm:h-[70vh] md:h-[80vh] w-auto object-contain drop-shadow-[0_0_40px_hsl(var(--primary)/0.4)]"
          width={1024}
          height={1536}
        />
      </motion.div>

      {/* Overlaid content */}
      <div className="absolute z-30 bottom-0 left-0 right-0 pb-16 md:pb-24">
        <div className="container px-4">
          {/* Scroll-revealed words */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8">
            {heroWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.2 }}
                className="font-display text-sm md:text-lg uppercase tracking-[0.3em] px-4 py-2 rounded-full border border-primary/30 text-primary/80 bg-background/20 backdrop-blur-sm"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-center text-foreground mb-3"
          >
            Elevate Your{" "}
            <span className="text-primary text-glow-blue">Gaming</span>{" "}
            Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted-foreground text-center text-sm md:text-lg max-w-xl mx-auto mb-8"
          >
            Latest gameplay, tutorials, reviews, and community events — all in one hub.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#community"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-heading text-base uppercase tracking-wider hover:bg-primary/80 transition-all duration-300 neon-border text-center"
            >
              Join Community
            </a>
            <a
              href="#reviews"
              className="px-8 py-3 rounded-lg border border-secondary text-secondary font-heading text-base uppercase tracking-wider hover:bg-secondary/10 transition-all duration-300 neon-border-purple text-center"
            >
              Explore Reviews
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
