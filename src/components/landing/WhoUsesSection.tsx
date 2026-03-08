import { motion } from "framer-motion";
import { Hotel, UtensilsCrossed, Users, Plane, GraduationCap, Building, Briefcase } from "lucide-react";

const industries = [
  { icon: Hotel, label: "Hotels & Resorts" },
  { icon: UtensilsCrossed, label: "Restaurant Chains" },
  { icon: Users, label: "Hospitality Groups" },
  { icon: Plane, label: "Travel Companies" },
  { icon: GraduationCap, label: "Campuses & Institutions" },
  { icon: Building, label: "Real Estate" },
  { icon: Briefcase, label: "SMEs" },
];

const clientLogos = [
  "Marriott Hotels", "Hilton", "Accor Group", "IHG", "Hyatt",
  "Four Seasons", "Radisson", "Wyndham", "Best Western", "Choice Hotels",
];

const caseStudies = [
  {
    company: "Pacific Resort Group",
    headline: "Multi-Property Emissions Tracking",
    summary: "A hospitality resort group measuring emissions across 12 properties in 4 countries, achieving full Scope 1-3 visibility.",
    outcome: "32% emission reduction identified in first year",
  },
  {
    company: "Urban Kitchen Co.",
    headline: "Kitchen & Logistics Analysis",
    summary: "Restaurant chain analysing kitchen energy usage and logistics emissions across 45 outlets.",
    outcome: "€180K annual savings from energy optimisation",
  },
  {
    company: "GreenField Campus",
    headline: "First Sustainability Report",
    summary: "Hospitality campus generating its first GRI-aligned sustainability report for stakeholder disclosure.",
    outcome: "Report completed in 6 weeks vs 6 months industry average",
  },
  {
    company: "Coastal Boutique Hotel",
    headline: "Carbon Baseline & Offsets",
    summary: "Boutique hotel establishing its carbon footprint baseline and implementing a verified offset strategy.",
    outcome: "Carbon neutral certification achieved",
  },
];

const WhoUsesSection = () => {
  return (
    <section className="section-padding bg-muted/40">
      <div className="section-container">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Designed for Hospitality & Operational Businesses
          </h2>
        </motion.div>

        {/* Industry icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              className="flex flex-col items-center gap-2 w-28"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
                <ind.icon className="text-primary" size={24} />
              </div>
              <span className="text-xs text-muted-foreground text-center font-medium">{ind.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-sm text-muted-foreground font-medium uppercase tracking-wider mb-8">
            Trusted by Leading Organisations
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {clientLogos.map((name) => (
              <div
                key={name}
                className="h-16 rounded-lg bg-background border border-border flex items-center justify-center"
              >
                <span className="text-sm font-display font-semibold text-muted-foreground/60">{name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.company}
              className="card-elevated card-hover p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">{cs.company}</span>
              <h3 className="font-display font-bold text-foreground text-lg mt-2 mb-2">{cs.headline}</h3>
              <p className="text-sm text-muted-foreground mb-4">{cs.summary}</p>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                {cs.outcome}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoUsesSection;
