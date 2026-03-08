import { motion } from "framer-motion";
import { Gauge, TrendingDown, FileText } from "lucide-react";

const pillars = [
  {
    icon: Gauge,
    title: "Measure",
    items: [
      "Scope 1, Scope 2 and Scope 3 emissions measurement",
      "Multi-property and multi-department data input",
      "Automated emission factors",
    ],
  },
  {
    icon: TrendingDown,
    title: "Reduce",
    items: [
      "Identify emission hotspots",
      "Generate reduction recommendations",
      "Support sustainable procurement decisions",
    ],
  },
  {
    icon: FileText,
    title: "Report",
    items: [
      "Generate GRI-aligned sustainability reports",
      "Download ESG and carbon footprint reports",
      "Management dashboards for monitoring emissions",
    ],
  },
];

const PlatformSection = () => {
  return (
    <section id="platform" className="section-padding bg-muted/40">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            A Complete Carbon Management Platform
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From data collection to boardroom-ready reports — everything in one platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="card-elevated card-hover p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5">
                <p.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-4">{p.title}</h3>
              <ul className="space-y-3">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
