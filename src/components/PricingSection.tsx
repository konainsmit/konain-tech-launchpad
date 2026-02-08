import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$999",
    period: "per project",
    description: "Perfect for small businesses and MVPs",
    features: ["UI/UX Design", "Responsive Web App", "3 Revisions", "1 Month Support", "Basic SEO"],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$2,999",
    period: "per project",
    description: "For scaling businesses needing full-stack solutions",
    features: ["Everything in Starter", "Custom Backend & API", "AI Integration", "3 Months Support", "Analytics Dashboard", "Priority Delivery"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored pricing",
    description: "For large-scale digital transformation",
    features: ["Everything in Growth", "Dedicated Team", "24/7 Support", "SLA Guarantee", "Custom Integrations", "Training & Docs"],
    highlighted: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 lg:py-32 bg-secondary/30">
    <div className="container">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
          Transparent <span className="text-gradient">Pricing</span> for Every Scale
        </h2>
        <p className="text-muted-foreground text-lg">
          Choose a plan that fits your ambition. No hidden fees.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            className={`rounded-xl p-8 border flex flex-col ${
              plan.highlighted
                ? "gradient-accent border-primary/50 shadow-glow relative"
                : "gradient-card border-border/50"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-semibold px-4 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="font-heading text-xl font-semibold text-foreground">{plan.name}</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-4">{plan.description}</p>
            <div className="mb-6">
              <span className="text-4xl font-heading font-bold text-foreground">{plan.price}</span>
              <span className="text-sm text-muted-foreground ml-2">/{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-2 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              className={`w-full ${
                plan.highlighted
                  ? "bg-foreground text-background hover:bg-foreground/90"
                  : "gradient-accent text-primary-foreground hover:opacity-90 border-0"
              }`}
            >
              Get Started
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
