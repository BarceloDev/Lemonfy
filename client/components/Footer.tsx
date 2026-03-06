import { Link } from "react-router-dom";
import { Citrus, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nós", href: "/sobre" },
        { name: "Carreiras", href: "/carreiras" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Serviços",
      links: [
        { name: "Desenvolvimento Web", href: "/servicos/web" },
        { name: "Apps Mobile", href: "/servicos/mobile" },
        { name: "Consultoria UI/UX", href: "/servicos/design" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacidade", href: "/privacidade" },
        { name: "Termos", href: "/termos" },
      ],
    },
  ];

  return (
    <footer className="border-t bg-background py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <Citrus className="h-8 w-8 text-primary transition-transform group-hover:rotate-12" />
              <span className="text-2xl font-extrabold tracking-tight text-foreground">
                Lemon<span className="text-primary">fy</span>
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-muted-foreground leading-relaxed">
              Transformando ideias ácidas em soluções doces para o seu negócio.
              Especialistas em desenvolvimento web e de software com um toque cítrico.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">Github</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Lemonfy - Desenvolvimento de Software. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
