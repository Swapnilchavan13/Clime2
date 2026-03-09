import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { UserPlus, Database, Calculator, FileBarChart, ArrowRight } from "lucide-react";
import CarbonAtom from "@/components/CarbonAtom";

const steps = [
  { icon: UserPlus, title: "Create your account", step: "01" },
  { icon: Database, title: "Enter operational data", step: "02" },
  { icon: Calculator, title: "Automatic emissions calculation", step: "03" },
  { icon: FileBarChart, title: "Generate sustainability reports and reduction plans", step: "04" },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute bottom-10 left-10 opacity-5">
        <CarbonAtom size={300} animate />
      </div>
      <div className="section-container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            How ClimeScore Works
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Get started in minutes — no consultants needed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              className="relative text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <span className="text-5xl font-display font-bold text-primary/10 absolute top-2 left-1/2 -translate-x-1/2">
                {s.step}
              </span>
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4 relative z-10">
                <s.icon className="text-primary" size={26} />
              </div>
              <p className="font-display font-semibold text-foreground text-sm relative z-10">{s.title}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 text-primary/30">
                  <ArrowRight size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="/clientlogin">
          <Button variant="hero" size="lg">
            Start Your Carbon Assessment <ArrowRight className="ml-1" size={16} />
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
