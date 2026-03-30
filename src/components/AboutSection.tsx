import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Shield, Gamepad2, Users, Zap, Target, Trophy } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const stats = [
  { value: "50K+", label: "Community Members", icon: Users },
  { value: "1,200+", label: "Game Reviews", icon: Gamepad2 },
  { value: "300+", label: "Events Hosted", icon: Trophy },
  { value: "24/7", label: "Live Support", icon: Zap },
];

const values = [
  {
    icon: Shield,
    title: "Honest Reviews",
    description:
      "No paid promotions. Every review is written by real gamers who play every title start to finish before scoring it.",
    color: "primary",
  },
  {
    icon: Target,
    title: "Pro-Level Insights",
    description:
      "Our team includes esports veterans, speedrunners, and industry analysts who break down meta strategies and hidden mechanics.",
    color: "secondary",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "From Discord tournaments to local meetups, we build spaces where gamers connect, compete, and grow together.",
    color: "accent",
  },
];

const glowMap: Record<string, string> = {
  primary: "text-glow-blue",
  secondary: "text-glow-purple",
  accent: "text-glow-green",
};

const borderMap: Record<string, string> = {
  primary: "neon-border",
  secondary: "neon-border-purple",
  accent: "neon-border-green",
};

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);

  return (
    <section
      ref={sectionRef}
      id="about-us"
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(hsl(var(--primary)/0.5)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-heading text-xs uppercase tracking-[0.4em] text-primary/70 mb-4 block">
            Who We Are
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About{" "}
            <span className="text-primary text-glow-blue">The 5 Gamerz</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Born from five friends who believed gaming deserves better coverage.
            We turned late-night sessions into a platform that now serves
            thousands of passionate gamers worldwide.
          </p>
        </motion.div>

        {/* Image + Story grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 md:mb-32">
          {/* Image */}
          <motion.div
            ref={imageRef}
            style={{ y: imageY }}
            className="relative group"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <img
                src={aboutTeam}
                alt="The 5 Gamerz team in their gaming lounge"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
                width={1024}
                height={768}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-heading text-sm uppercase tracking-widest text-primary/80">
                  Est. 2020
                </p>
                <p className="font-display text-xl md:text-2xl font-bold text-foreground">
                  5 Friends. 1 Mission.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Story */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                From LAN Parties to a{" "}
                <span className="text-secondary text-glow-purple">
                  Global Community
                </span>
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  What started as five college friends arguing about game
                  rankings in a cramped dorm room has evolved into one of the
                  most trusted independent gaming platforms online.
                </p>
                <p>
                  We cover everything from AAA blockbusters to hidden indie gems,
                  delivering in-depth reviews, competitive strategies, and
                  community-driven events that bring gamers together across the
                  globe.
                </p>
                <p>
                  Our editorial independence is non-negotiable. We don't accept
                  paid reviews or sponsored scores — every opinion you read here
                  is earned through hours of genuine gameplay.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {["FPS", "RPG", "MOBA", "Strategy", "Indie", "Battle Royale"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-heading uppercase tracking-wider border border-primary/30 text-primary/80 bg-primary/5"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24 md:mb-32"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="glass rounded-xl p-6 text-center group hover:border-primary/40 transition-colors duration-500"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-display text-2xl md:text-3xl font-bold text-primary text-glow-blue mb-1">
                {stat.value}
              </div>
              <div className="font-heading text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values / pillars */}
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-display text-2xl md:text-3xl font-bold text-foreground"
          >
            What Drives Us
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
              className={`glass rounded-2xl p-8 border ${borderMap[item.color]} group hover:bg-card/80 transition-all duration-500`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-${item.color}/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <item.icon className={`w-6 h-6 text-${item.color}`} />
              </div>
              <h4
                className={`font-display text-xl font-bold text-foreground mb-3 ${glowMap[item.color]}`}
              >
                {item.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
