import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";
import CarbonAtom from "@/components/CarbonAtom";
import { useState } from "react";


const HeroSection = () => {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();

  const subject = encodeURIComponent("Sample Report Request");
  const body = encodeURIComponent(
    `Name: ${name}
Organization: ${org}
Email: ${email}
Comment: ${comment}`
  );

  // Gmail link
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=gautam@nettzero.world&su=${subject}&body=${body}`;

  // Open in a new tab
  window.open(gmailLink, "_blank");
};

  
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
            <a href="/clientlogin">
            <Button variant="hero" size="xl">
              Start Measuring <ArrowRight className="ml-1" size={18} />
            </Button>
            </a>
              {/* Button */}
      <Button variant="heroOutline" size="xl" onClick={() => setOpen(true)}>
        <Play size={16} className="mr-1" />
        View Sample Report
      </Button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

          <div className="bg-white rounded-xl shadow-xl w-[420px] p-6 relative">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4">
              Request Sample Report
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-green-600"
              />

              <input
                type="text"
                placeholder="Organization Name"
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                required
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-green-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-green-600"
              />

              <textarea
                placeholder="Comment"
                // rows="3"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-green-600"
              />

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
              >
                Send Request
              </button>

            </form>
          </div>
        </div>
      )}
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
