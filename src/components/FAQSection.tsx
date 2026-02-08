import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What industries does Konain Tech work with?",
    a: "We collaborate with startups, enterprises, and nonprofits across diverse industries — from fintech and education to healthcare and e-commerce.",
  },
  {
    q: "How long does a typical project take to complete?",
    a: "Project timelines vary based on complexity. A simple web app takes 4-6 weeks, while enterprise solutions can take 3-6 months. We provide detailed timelines during discovery.",
  },
  {
    q: "Do you offer post-launch support and maintenance?",
    a: "Yes! All our plans include post-launch support. We also offer extended maintenance packages for ongoing updates, monitoring, and optimization.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "We specialize in React, Next.js, Node.js, Python, AI/ML, cloud infrastructure (AWS, GCP), and mobile development with React Native and Flutter.",
  },
  {
    q: "Can you handle custom software development?",
    a: "Absolutely. Custom software development is our core strength. We build tailored solutions from scratch that perfectly fit your unique business requirements.",
  },
];

const FAQSection = () => (
  <section className="py-24 lg:py-32 bg-secondary/30">
    <div className="container max-w-3xl">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
          Frequently Asked{" "}
          <span className="text-gradient">Questions</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Their ability to turn complex ideas into smooth, intuitive solutions truly sets them apart.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="gradient-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="text-foreground font-heading font-medium text-left hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
