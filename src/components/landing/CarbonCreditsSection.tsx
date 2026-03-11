import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, ShieldCheck, ArrowUpRight, Globe } from "lucide-react";

const CarbonCreditsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-4">
              <Leaf size={14} /> Offset Integration
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
              Carbon Credit Integration
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              After measuring your emissions, offset your remaining footprint with curated, verified carbon credits — directly from within the platform.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: ShieldCheck, text: "Access to verified carbon credit projects" },
                { icon: Globe, text: "Integration with NettZero carbon removal projects" },
                { icon: ArrowUpRight, text: "Offset emissions directly after measuring your footprint" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="text-primary" size={16} />
                  </div>
                  <p className="text-sm text-foreground">{item.text}</p>
                </div>
              ))}
            </div>

           <Button
  variant="hero"
  size="lg"
  onClick={() => window.open("https://climegrove.com/", "_blank")}
>
  Explore Carbon Credits
  <ArrowUpRight size={16} className="ml-1" />
</Button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-accent rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-20">
                <Leaf size={120} className="text-primary" />
              </div>
              <div className="relative space-y-6">
                <div className="bg-background rounded-xl p-5 shadow-soft">
                  <p className="text-xs text-muted-foreground mb-1">Your Emissions</p>
                  <p className="text-2xl font-display font-bold text-foreground">1,247 tCO₂e</p>
                </div>
                <div className="bg-background rounded-xl p-5 shadow-soft">
                  <p className="text-xs text-muted-foreground mb-1">Offset Available</p>
                  <p className="text-2xl font-display font-bold gradient-text">1,247 Credits</p>
                </div>
                <div className="bg-primary rounded-xl p-5">
                  <p className="text-xs text-primary-foreground/70 mb-1">Status</p>
                  <p className="text-lg font-display font-bold text-primary-foreground">Carbon Neutral ✓</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CarbonCreditsSection;
