import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = ["Home", "About us", "Services", "Portfolio", "Contact us"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-heading text-xl font-bold tracking-tight text-foreground">
          Konain<span className="block text-[10px] font-medium tracking-widest text-muted-foreground uppercase">Tech Limited</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <Button className="hidden md:inline-flex gradient-accent text-primary-foreground hover:opacity-90 border-0">
          Get Started
        </Button>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border pb-6">
          <ul className="container flex flex-col gap-4 pt-2">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <Button className="w-full gradient-accent text-primary-foreground border-0">Get Started</Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
