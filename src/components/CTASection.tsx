import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-24 lg:py-32">
    <div className="container">
      <motion.div
        className="gradient-accent rounded-2xl p-12 md:p-20 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 gradient-glow opacity-50" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Your Vision, Our Craft
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-lg mx-auto mb-8">
            Ready to transform your ideas into impactful digital solutions? Let's build something remarkable together.
          </p>
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 text-base px-8 group"
          >
            Contact Us <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
