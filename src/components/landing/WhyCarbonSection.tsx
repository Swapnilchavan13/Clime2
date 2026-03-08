import { motion } from "framer-motion";
import { BarChart3, Globe, Building2, Target } from "lucide-react";

const reasons = [
  {
    icon: BarChart3,
    title: "Data-Driven Claims",
    desc: "Sustainability claims require measurable data. Without quantified emissions, green credentials lack credibility.",
  },
  {
    icon: Globe,
    title: "Regulatory Compliance",
    desc: "Carbon reporting regulations are increasing globally. Stay ahead of mandatory disclosure requirements.",
  },
  {
    icon: Building2,
    title: "Complex Scope 3",
    desc: "Hospitality and operational sectors have complex Scope 3 emissions across supply chains and services.",
  },
  {
    icon: Target,
    title: "Path to Net-Zero",
    desc: "Measurement is the first step toward reduction and net-zero planning. You can't reduce what you don't measure.",
  },
];

const WhyCarbonSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Why Carbon Measurement Matters
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Quantifying your environmental impact is no longer optional — it's the foundation of credible sustainability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="card-elevated card-hover p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-4">
                <r.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCarbonSection;
