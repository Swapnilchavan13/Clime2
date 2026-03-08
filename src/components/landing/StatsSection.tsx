import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import CarbonAtom from "@/components/CarbonAtom";

const stats = [
  { value: 300000, suffix: "+", label: "Tonnes of CO₂ Measured", prefix: "" },
  { value: 25, suffix: "+", label: "Industry Customers", prefix: "" },
  { value: 8, suffix: "+", label: "Sectors Supported", prefix: "" },
  { value: 5, suffix: "+", label: "Global Reporting Frameworks", prefix: "" },
];

function AnimatedCounter({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  );
}

const StatsSection = () => {
  return (
    <section className="section-padding bg-foreground text-primary-foreground relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
        <CarbonAtom size={400} animate />
      </div>
      <div className="section-container relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            ClimeScore in Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl sm:text-5xl font-display font-bold mb-2">
                <AnimatedCounter value={s.value} suffix={s.suffix} prefix={s.prefix} />
              </div>
              <p className="text-sm opacity-70">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
