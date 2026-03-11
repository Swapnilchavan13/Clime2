import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    desc: "For single-property businesses starting their carbon journey.",
    features: [
      "1 property / location",
      "Scope 1 & 2 measurement",
      "Basic carbon footprint report",
      "Emission factor database",
      "Email support",
    ],
    cta: "Start Subscription",
    popular: false,
  },
  {
    name: "Professional",
    price: "$40",
    period: "/month",
    desc: "For multi-property organisations needing comprehensive reporting.",
    features: [
      "Up to 10 properties",
      "Scope 1, 2 & 3 measurement",
      "GRI-aligned reports",
      "Reduction recommendations",
      "Multi-department dashboards",
      "Carbon credit integration",
      "Priority support",
    ],
    cta: "Start Subscription",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large organisations with complex operational needs.",
    features: [
      "Unlimited properties",
      "Full Scope 1, 2 & 3",
      "Custom ESG reporting",
      "API access",
      "Dedicated account manager",
      "White-label options",
      "SSO & advanced security",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingSection = () => {
  const [openForm, setOpenForm] = useState(false);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [org, setOrg] = useState("");
const [comment, setComment] = useState("");
    const [openPlan, setOpenPlan] = useState<string | null>(null);

    const handleSubmit = (e) => {
  e.preventDefault();

  const subject = encodeURIComponent("Enterprise Plan Inquiry");

  const body = encodeURIComponent(
`Name: ${name}
Organization: ${org}
Email: ${email}
Comment: ${comment}`
  );

  const gmailLink =
    `https://mail.google.com/mail/?view=cm&fs=1&to=gautam@nettzero.world&su=${subject}&body=${body}`;

  window.open(gmailLink, "_blank");

  setOpenForm(false);
};

  return (
    <section id="pricing" className="section-padding bg-muted/40">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Choose the plan that fits your organisation's needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`rounded-2xl p-7 relative ${
                plan.popular
                  ? "bg-foreground text-primary-foreground border-2 border-primary"
                  : "card-elevated"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className="font-display font-bold text-lg mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-display font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.popular ? "opacity-60" : "text-muted-foreground"}`}>{plan.period}</span>
              </div>
              <p className={`text-sm mb-6 ${plan.popular ? "opacity-70" : "text-muted-foreground"}`}>{plan.desc}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={16} className={`shrink-0 mt-0.5 ${plan.popular ? "text-primary" : "text-primary"}`} />
                    <span className={plan.popular ? "opacity-90" : ""}>{f}</span>
                  </li>
                ))}
              </ul>

             <Button
  variant={plan.popular ? "hero" : "outline"}
  className="w-full"
  size="lg"
  onClick={() => {
    if (plan.name === "Enterprise") {
      setOpenForm(true);
    } else {
      window.location.href = "/registration";
    }
  }}
>
  {plan.cta} <ArrowRight size={16} className="ml-1" />
</Button>
            </motion.div>
          ))}
        </div>
        {openForm && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-6 w-full max-w-md">
      <h3 className="text-xl font-semibold mb-4">Contact Sales</h3>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full border rounded-lg p-2"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Organization"
          className="w-full border rounded-lg p-2"
          value={org}
          onChange={(e)=>setOrg(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          required
          className="w-full border rounded-lg p-2"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <textarea
          placeholder="Comment"
          className="w-full border rounded-lg p-2"
          // rows="3"
          value={comment}
          onChange={(e)=>setComment(e.target.value)}
        />

        <div className="flex gap-3 pt-2">
          <Button type="submit" className="w-full">
            Send Email
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={()=>setOpenForm(false)}
          >
            Cancel
          </Button>
        </div>

      </form>
    </div>
  </div>
)}
      </div>
    </section>
  );
};

export default PricingSection;
