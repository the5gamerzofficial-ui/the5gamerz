import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const events = [
  { title: "Community Game Night", date: "2026-04-05", time: "8:00 PM EST", description: "Weekly multiplayer sessions with community members." },
  { title: "New Releases Showcase", date: "2026-04-12", time: "6:00 PM EST", description: "Live stream covering the hottest upcoming game releases." },
  { title: "Pro Tournament Finals", date: "2026-04-20", time: "3:00 PM EST", description: "Watch top players compete for the championship title." },
  { title: "Developer Q&A Session", date: "2026-04-28", time: "7:00 PM EST", description: "Ask your favorite developers anything, live." },
];

const useCountdown = (targetDate: string) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 });
  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, mins: 0 };
      return { days: Math.floor(diff / 86400000), hours: Math.floor((diff % 86400000) / 3600000), mins: Math.floor((diff % 3600000) / 60000) };
    };
    setTimeLeft(calc());
    const id = setInterval(() => setTimeLeft(calc()), 60000);
    return () => clearInterval(id);
  }, [targetDate]);
  return timeLeft;
};

const EventCard = ({ event, index }: { event: typeof events[0]; index: number }) => {
  const countdown = useCountdown(event.date);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const x = useTransform(scrollYProgress, [0, 1], [-60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div ref={ref} style={{ x, opacity }} className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-accent neon-border-green" />
        {index < events.length - 1 && <div className="w-0.5 flex-1 bg-gradient-to-b from-accent/40 to-transparent" />}
      </div>
      <div className="flex-1 glass rounded-xl p-6 mb-8 group hover:neon-border transition-all duration-500">
        <div className="flex flex-wrap items-center gap-3 mb-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(event.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
          <span className="flex items-center gap-1"><Clock size={14} /> {event.time}</span>
        </div>
        <h3 className="font-display text-xl text-foreground mb-2">{event.title}</h3>
        <p className="text-muted-foreground mb-4">{event.description}</p>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-3 text-xs font-display">
            <span className="px-2 py-1 rounded bg-accent/10 text-accent">{countdown.days}d</span>
            <span className="px-2 py-1 rounded bg-accent/10 text-accent">{countdown.hours}h</span>
            <span className="px-2 py-1 rounded bg-accent/10 text-accent">{countdown.mins}m</span>
          </div>
          <button className="flex items-center gap-1 text-sm text-accent font-heading uppercase tracking-wider hover:gap-2 transition-all">
            Register <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const EventsSection = () => (
  <section id="events" className="py-24 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
    <div className="container px-4 relative z-10 max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-5xl text-center text-accent text-glow-green mb-16"
      >
        Upcoming Events
      </motion.h2>
      {events.map((event, i) => (
        <EventCard key={event.title} event={event} index={i} />
      ))}
    </div>
  </section>
);

export default EventsSection;
