import { Citrus, ShieldCheck, Heart, Sparkles } from "lucide-react";

const features = [
  {
    title: "Experiência Refrescante",
    description: "Criamos interfaces limpas e intuitivas que proporcionam uma jornada de usuário leve e sem fricções.",
    icon: Citrus
  },
  {
    title: "Segurança de Ferro",
    description: "Nossos sistemas são robustos e construídos com as melhores práticas de segurança da indústria.",
    icon: ShieldCheck
  },
  {
    title: "Amor pelo Código",
    description: "Código bem escrito é arte. Nossos desenvolvedores cuidam de cada detalhe para um sistema impecável.",
    icon: Heart
  },
  {
    title: "Inovação Cítrica",
    description: "Damos um toque de inovação em cada projeto, trazendo soluções criativas para problemas complexos.",
    icon: Sparkles
  }
];

export default function Features() {
  return (
    <section id="recursos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-secondary font-bold uppercase tracking-widest mb-2">Por que nós?</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">O toque Lemon que seu projeto precisa</h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-xl">
              Somos uma startup que nasceu com o propósito de descomplicar o digital. 
              Para nós, desenvolver software é mais do que apenas escrever código; 
              é sobre entregar valor e transformar visões em realidade com um toque de 
              frescor e inovação.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col gap-3 group">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-xl">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-12 -left-12 h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-pulse" />
            <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-secondary/20 blur-3xl animate-pulse" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" 
                alt="Web development team" 
                className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
