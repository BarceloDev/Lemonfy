import { Button } from "@/components/ui/button";
import { Citrus, ArrowRight, Code, Laptop } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden py-24 md:py-32 lg:py-48">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-pulse delay-700" />

      {/* Decorative floating lemons */}
      <div className="absolute top-1/4 left-10 opacity-10 animate-bounce hidden lg:block">
        <Citrus className="h-16 w-16 text-primary rotate-12" />
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-10 animate-bounce delay-1000 hidden lg:block">
        <Citrus className="h-20 w-20 text-secondary -rotate-12" />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center text-center">
         
          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl mb-6">
            Transformando o <span className="text-primary italic">digital</span> em algo <span className="underline decoration-secondary">refrescante</span>.
          </h1>
          
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl mb-10 leading-relaxed">
            Na Lemonfy, criamos experiências digitais únicas. Do desenvolvimento web impecável a softwares robustos que impulsionam seu negócio.
          </p>
          
         
          <div className="mt-20 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2"><Laptop className="h-6 w-6" /> <span className="font-bold">Web Dev</span></div>
            <div className="flex items-center gap-2"><Code className="h-6 w-6" /> <span className="font-bold">Software Engineering</span></div>
            <div className="flex items-center gap-2"><Citrus className="h-6 w-6" /> <span className="font-bold">UI/UX Design</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
