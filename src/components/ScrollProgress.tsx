import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--neon-cyan)))",
        boxShadow: "0 0 10px hsl(var(--primary) / 0.6), 0 0 30px hsl(var(--primary) / 0.3)",
      }}
    />
  );
};

export default ScrollProgress;
