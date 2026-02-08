import { motion } from "framer-motion";
import { Lightbulb, Users, Zap, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Experience & Expertise",
    description: "Years of experience meet precision and creativity to build what truly performs.",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    description: "We understand your goals and craft technology that aligns perfectly with your vision.",
  },
  {
    icon: Zap,
    title: "Speed & Efficiency",
    description: "Agile processes and smart execution help us deliver faster without compromise.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Focused",
    description: "Solutions built to scale with your business and unlock new opportunities.",
  },
];

const FeaturesSection = () => (
  <section id="about-us" className="py-24 lg:py-32 bg-secondary/30">
    <div className="container">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
          Defining Excellence Through{" "}
          <span className="text-gradient">Experience & Innovation</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Blending experience, precision, and innovation to bring ideas to life.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="gradient-card rounded-xl p-6 border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <feature.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
