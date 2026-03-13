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
  "The Tamara Coorg", "The Legacy Mandwa", "Stone Hedge", "Bridges by RARE", "Aashraya On the Ganga",
  "The Machan", "Orah", "SAEL", "Sakhua", "FAR & BEYOND", "Symbiosis College of Arts & Commerce", "THE OASIS" ,
];

const caseStudies = [
  {
    company: "The Tamara Coorg",
    headline: "Resort-Wide Emissions Tracking",
    summary:
      "Luxury resort measuring energy, water, and carbon emissions across its Coorg property, implementing sustainable operations.",
    outcome:
      "Granular visibility across 6 departments and over 500 emission factors",
  },
  {
    company: "The Machan, Lonavala",
    headline: "Asia’s first Carbon Neutral Resort",
    summary:
      "Sustainable hotel integrating eco-friendly practices across hospitality and guest services. 100% offsetting through Carbon Credits to become Carbon neutral for 3 years in a row.",
    outcome:
      "Widespread acclaim from media and guests",
  },
  {
    company: "Symbiosis College of Arts & Commerce",
    headline: "Emission Measurement & United Nations Race to Zero member",
    summary:
      "Scope 1, 2, & 3 emissions measurement including from transport of over 3,000 students.",
    outcome:
      "One of the only 6 universities in India to have plan published in United Nation’s Race to Zero program.",
  },
  {
    company: "Bridges by RARE",
    headline: "A Carbon Neutral Travel Conference",
    summary:
      "One of the only travel events in the world to accurately measure its emission across 4 days of activity and 1,000+ delegates from 12 countries. Scope 1 & 2 offset with high quality CDR credits.",
    outcome:
      "One of the few Biochar Carbon Credit buyers from India",
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
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
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
