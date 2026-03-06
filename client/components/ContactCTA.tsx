import { Button } from "@/components/ui/button";
import { Citrus, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 md:px-24 md:py-32 text-center text-primary-foreground shadow-2xl">
          {/* Background shapes */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-secondary/30 blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-96 w-96 rounded-full bg-background/20 blur-3xl opacity-50" />
          
          <div className="relative mx-auto max-w-2xl">
            <div className="flex justify-center mb-8 animate-bounce">
              <Citrus className="h-16 w-16 text-secondary" />
            </div>
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl leading-tight">
              Pronto para dar um toque <span className="text-secondary">Lemon</span> ao seu projeto?
            </h2>
            <p className="mb-12 text-lg md:text-xl font-medium opacity-90 leading-relaxed">
              Estamos ansiosos para ouvir sobre sua ideia. Entre em contato hoje mesmo e vamos construir algo refrescante juntos!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full px-10 text-lg font-bold h-14 hover:scale-105 transition-transform group">
                Falar com Consultor
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 text-lg font-bold h-14 border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors">
                Ver Preços
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
