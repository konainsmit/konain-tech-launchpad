import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-12 bg-secondary/20">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-10 mb-10">
        <div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-3">
            Konain<span className="block text-[10px] font-medium tracking-widest text-muted-foreground uppercase">Tech Limited</span>
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Power your vision with bold digital smart moves. Tailored solutions for startups and enterprises.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Design & UX</li>
            <li>Web & App Development</li>
            <li>AI Solutions</li>
            <li>Digital Strategy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> 0311-8231707</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> konainshahsmit@gmail.com
</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Quetta, Pakistan</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/40 pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Konain Tech Limited. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
