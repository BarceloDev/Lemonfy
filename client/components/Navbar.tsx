import { useState } from "react";
import { Link } from "react-router-dom";
import { Citrus, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/servicos" },
    { name: "Portfólio", href: "/portfolio" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Citrus className="h-8 w-8 text-primary transition-transform group-hover:rotate-12" />
            <span className="text-2xl font-extrabold tracking-tight text-foreground">
              Lemon<span className="text-primary">fy</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button size="sm" className="rounded-full px-6 font-bold">
                Começar
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-primary px-2 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button className="w-full rounded-full font-bold">
                Começar agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
