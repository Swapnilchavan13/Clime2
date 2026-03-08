import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";
import CarbonAtom from "@/components/CarbonAtom";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Subtle bg decoration */}
      <div className="absolute inset-0 bg-gradient-subtle pointer-events-none" />
      <div className="absolute top-20 right-10 opacity-10">
        <CarbonAtom size={200} animate />
      </div>

      <div className="section-container relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              <CarbonAtom size={16} animate={false} />
              Carbon Management Platform
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Measure Your Carbon Footprint.{" "}
            <span className="gradient-text">Reduce Emissions.</span>{" "}
            Generate Global Sustainability Reports.
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ClimeScore is a carbon management platform that helps organisations measure Scope 1, Scope 2 and Scope 3 emissions and generate globally compliant sustainability reports.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button variant="hero" size="xl">
              Start Measuring <ArrowRight className="ml-1" size={18} />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play size={16} className="mr-1" /> View Sample Report
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="rounded-xl overflow-hidden border border-border shadow-elevated">
            <img
              src={heroDashboard}
              alt="ClimeScore carbon emissions measurement dashboard showing emission charts and carbon metrics"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
          {/* Glow effect behind */}
          <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
