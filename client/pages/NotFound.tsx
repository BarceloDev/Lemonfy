import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Citrus, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="mb-8 relative">
        <Citrus className="h-24 w-24 text-primary animate-bounce opacity-20" />
        <h1 className="text-9xl font-black text-primary/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
          404
        </h1>
      </div>
      <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Oops! Limão azedo.</h2>
      <p className="text-xl text-muted-foreground mb-12 max-w-md mx-auto leading-relaxed">
        Parece que a página que você procura não existe ou foi movida para um pomar distante.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="rounded-full px-8 font-bold">
          <Link to="/">
            <Home className="mr-2 h-5 w-5" />
            Voltar ao Início
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-full px-8 font-bold">
          <Link to="/contato">
            Relatar Problema
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
