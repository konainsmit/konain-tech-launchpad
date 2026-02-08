import { motion } from "framer-motion";
import { Palette, Code2, Brain, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Palette,
    num: "01",
    title: "Design & UX",
    description: "We create intuitive and engaging designs that prioritize user experience, ensuring your digital presence is both visually appealing and easy to navigate.",
  },
  {
    icon: Code2,
    num: "02",
    title: "Web & App Development",
    description: "Our development team builds robust, scalable web and mobile applications using the latest technologies to deliver high-performance solutions.",
  },
  {
    icon: Brain,
    num: "03",
    title: "AI Solutions",
    description: "We leverage the power of artificial intelligence to create innovative solutions that drive efficiency and unlock new opportunities.",
  },
  {
    icon: BarChart3,
    num: "04",
    title: "Digital Strategy",
    description: "Data-driven strategies that align technology with your business goals to maximize growth and competitive advantage.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 lg:py-32">
    <div className="container">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
          End-to-End Digital Services That{" "}
          <span className="text-gradient">Turn Ideas Into Impact</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          From concept to launch, we provide comprehensive digital services that bring your vision to life.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="gradient-card border border-border/50 rounded-xl p-8 flex flex-col hover:border-primary/40 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="font-heading text-5xl font-bold text-border/60 mb-4">{service.num}</span>
            <div className="flex items-center gap-3 mb-3">
              <service.icon className="w-6 h-6 text-primary" />
              <h3 className="font-heading text-xl font-semibold text-foreground">{service.title}</h3>
            </div>
            <p className="text-muted-foreground mb-6 flex-1">{service.description}</p>
            <Button variant="outline" className="w-fit border-primary/30 text-primary hover:bg-primary/10">
              Get Started
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
