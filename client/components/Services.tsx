import { Code2, Globe, Layout, Smartphone, Database, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Desenvolvimento Web",
    description: "Websites rápidos, acessíveis e otimizados para conversão. Utilizamos as tecnologias mais modernas como React, Next.js e Tailwind.",
    icon: Globe,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Software de Gestão",
    description: "Soluções personalizadas para o seu negócio. Criamos sistemas que resolvem problemas reais e aumentam a produtividade.",
    icon: Code2,
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Consultoria UI/UX",
    description: "Design que encanta e funciona. Focamos na experiência do usuário para garantir que seu produto seja amado pelos clientes.",
    icon: Layout,
    color: "bg-secondary/10 text-secondary"
  },
  {
    title: "Aplicativos Mobile",
    description: "Presença digital em todos os lugares. Desenvolvemos apps iOS e Android nativos ou cross-platform de alta performance.",
    icon: Smartphone,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "Infraestrutura Cloud",
    description: "Escalabilidade e segurança. Configuramos e gerenciamos sua infraestrutura na nuvem para suportar o crescimento do seu negócio.",
    icon: Database,
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    title: "Otimização de Performance",
    description: "Seu site não pode esperar. Analisamos e otimizamos cada milissegundo para garantir a melhor experiência possível.",
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-500"
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest mb-2">Nossos Serviços</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">O que fazemos de melhor</h3>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Combinamos técnica, design e estratégia para entregar resultados reais.
            Nossa equipe é apaixonada por código e viciada em inovação.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 border-none bg-card">
              <CardHeader>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${service.color}`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
