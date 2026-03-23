import { motion } from "framer-motion";
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
    color: "text-primary" as const,
    glowClass: "text-glow-blue",
  },
  {
    icon: Gamepad2,
    title: "Diverse Content",
    description: "From tutorials to gameplay reviews, our diverse range of content caters to all types of gamers.",
    image: diverseImg,
    color: "text-secondary" as const,
    glowClass: "text-glow-purple",
  },
  {
    icon: Brain,
    title: "Expert Insights",
    description: "Stay informed with expert insights and tips that help you navigate the ever-evolving gaming landscape.",
    image: expertImg,
    color: "text-accent" as const,
    glowClass: "text-glow-green",
  },
];

const FeaturesSection = () => {
  return (
    <section id="community" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="container px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl text-center text-primary text-glow-blue mb-16"
        >
          Why The 5 Gamerz?
        </motion.h2>

        <div className="space-y-20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="lg:w-1/2 group">
                <div className="relative overflow-hidden rounded-xl border border-border">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <feature.icon className={`w-10 h-10 ${feature.color} mb-4 mx-auto lg:mx-0`} />
                <h3 className={`font-display text-2xl md:text-3xl ${feature.color} ${feature.glowClass} mb-4`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
