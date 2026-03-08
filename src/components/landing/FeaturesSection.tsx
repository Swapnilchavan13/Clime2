import { motion } from "framer-motion";
import {
  Gauge, Truck, LayoutDashboard, Database, FileText, Leaf, TrendingDown, BarChart3,
} from "lucide-react";

const features = [
  { icon: Gauge, title: "Scope 1, 2 & 3 Measurement", desc: "Comprehensive emissions tracking across all scopes." },
  { icon: Truck, title: "Vendor Emissions Tracking", desc: "Monitor supply chain and vendor carbon footprints." },
  { icon: LayoutDashboard, title: "Multi-Property Dashboards", desc: "Centralised view across all locations and departments." },
  { icon: Database, title: "Emission Factor Database", desc: "Access industry-standard emission factors automatically." },
  { icon: FileText, title: "ESG Reporting Engine", desc: "Generate compliant ESG and sustainability reports." },
  { icon: Leaf, title: "Carbon Credit Integration", desc: "Offset emissions with verified carbon credits." },
  { icon: TrendingDown, title: "Reduction Recommendations", desc: "AI-driven suggestions to lower your footprint." },
  { icon: BarChart3, title: "Data Visualisation", desc: "Interactive charts and dashboards for insights." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Platform Features
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Everything you need to measure, manage and report on your carbon emissions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group p-5 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent group-hover:bg-primary/10 transition-colors flex items-center justify-center mb-3">
                <f.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm mb-1">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
