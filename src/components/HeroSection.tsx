import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "100+", label: "Satisfied Clients" },
  { value: "20+", label: "Expert Developers" },
  { value: "5+", label: "Country Reach" },
];

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center pt-20 overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 gradient-hero opacity-80" />
      <div className="absolute inset-0 gradient-glow" />
    </div>

    <div className="container relative z-10 py-20 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6 text-foreground">
            Power Your Vision{" "}
            <span className="text-gradient">with Bold Digital</span>{" "}
            Smart Moves
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-8">
            Stand out with smart, tailored digital solutions designed to turn
            innovative ideas into tangible results and drive success.
          </p>
          <Button size="lg" className="gradient-accent text-primary-foreground border-0 text-base px-8 hover:opacity-90 group">
            Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 border-t border-border/40 pt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {stats.map((stat, i) => (
          <div key={i} className="text-center md:border-r last:border-r-0 border-border/30">
            <p className="text-3xl md:text-4xl font-heading font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
