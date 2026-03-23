import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Gamepad2, Brain } from "lucide-react";
import communityImg from "@/assets/community.jpg";
import diverseImg from "@/assets/diverse-content.jpg";
import expertImg from "@/assets/expert-insights.jpg";

const features = [
  {
    icon: Users,
    title: "Community Engagement",
    description: "Connect with fellow gamers, share experiences, and participate in exciting discussions that enhance your gaming life.",
    image: communityImg,
    color: "text-primary",
    glowClass: "text-glow-blue",
    borderClass: "neon-border",
  },
  {
    icon: Gamepad2,
    title: "Diverse Content",
    description: "From tutorials to gameplay reviews, our diverse range of content caters to all types of gamers.",
    image: diverseImg,
    color: "text-secondary",
    glowClass: "text-glow-purple",
    borderClass: "neon-border-purple",
  },
  {
    icon: Brain,
    title: "Expert Insights",
    description: "Stay informed with expert insights and tips that help you navigate the ever-evolving gaming landscape.",
    image: expertImg,
    color: "text-accent",
    glowClass: "text-glow-green",
    borderClass: "neon-border-green",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -80 : 80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity, scale }}
      className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
    >
      <div className="lg:w-1/2 group">
        <div className={`relative overflow-hidden rounded-xl border border-border ${feature.borderClass}`}>
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <feature.icon className={`w-8 h-8 ${feature.color}`} />
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 text-center lg:text-left">
        <h3 className={`font-display text-2xl md:text-3xl ${feature.color} ${feature.glowClass} mb-4`}>
          {feature.title}
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => (
  <section id="community" className="py-24 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
    <div className="container px-4 relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-5xl text-center text-primary text-glow-blue mb-20"
      >
        Why The 5 Gamerz?
      </motion.h2>
      <div className="space-y-24">
        {features.map((feature, i) => (
          <FeatureCard key={feature.title} feature={feature} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
