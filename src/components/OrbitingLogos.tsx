import { motion } from "framer-motion";
import gtaLogo from "@/assets/gta-logo.png";
import carMechanicLogo from "@/assets/car-mechanic-logo.png";
import gasStationLogo from "@/assets/gas-station-logo.png";

const logos = [
  { src: gtaLogo, alt: "GTA", delay: 0 },
  { src: carMechanicLogo, alt: "Car Mechanic", delay: 2 },
  { src: gasStationLogo, alt: "Gas Station", delay: 4 },
];

const OrbitingLogos = () => (
  <div className="absolute inset-0 pointer-events-none">
    {logos.map((logo, i) => {
      const angle = (360 / logos.length) * i;
      return (
        <motion.div
          key={logo.alt}
          className="absolute top-1/2 left-1/2"
          style={{ width: 64, height: 64, marginLeft: -32, marginTop: -32 }}
          animate={{ rotate: [angle, angle + 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: logo.delay * 0 }}
        >
          <motion.div
            style={{ translateX: 120, translateY: 0 }}
            animate={{ rotate: [-(angle), -(angle + 360)] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-[0_0_12px_hsl(var(--primary)/0.4)] rounded-xl bg-card/60 p-1.5 border border-border/40"
              loading="lazy"
              width={64}
              height={64}
            />
          </motion.div>
        </motion.div>
      );
    })}
  </div>
);

export default OrbitingLogos;
