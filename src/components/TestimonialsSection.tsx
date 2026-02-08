import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "The STL team is great, I totally recommend them for a job well done, with a proactive attitude and organized approach. I am impressed by their dedication and abilities. Will surely rehire.",
    name: "Soonbong K.",
    role: "CTO",
    company: "TechNova",
  },
  {
    text: "They transformed our platform into a fast, scalable product, boosting performance and efficiency. With their innovative solutions, we can now handle higher traffic while ensuring a seamless user experience.",
    name: "Stephen H.",
    role: "Product Manager",
    company: "Byte Insights",
  },
  {
    text: "Excellent work by the team. They understood the requirements and did a good job of translating to UI design without need to repeat the requirements. Team responded well to feedback.",
    name: "George B.",
    role: "CTO",
    company: "Egg Heads Club",
  },
];

const TestimonialsSection = () => (
  <section className="py-24 lg:py-32">
    <div className="container">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
          Trusted by Teams Who{" "}
          <span className="text-gradient">Believe in What We Build</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Hear directly from our clients about their experiences working with us.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="gradient-card border border-border/50 rounded-xl p-8 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Quote className="w-8 h-8 text-primary mb-4" />
            <p className="text-foreground/80 leading-relaxed flex-1 mb-6">"{t.text}"</p>
            <div>
              <p className="font-heading font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}, {t.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
