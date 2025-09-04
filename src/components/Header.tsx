import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border fixed w-full top-0 z-50 shadow-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold text-black">Oficina Mecânica <span className="text-red-600">MackCar</span></h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-foreground hover:text-primary transition-smooth">
            Início
          </a>
          <a href="#servicos" className="text-foreground hover:text-primary transition-smooth">
            Serviços
          </a>
          <a href="#trabalhos" className="text-foreground hover:text-primary transition-smooth">
            Trabalhos
          </a>
          <a href="#depoimentos" className="text-foreground hover:text-primary transition-smooth">
            Depoimentos
          </a>
          <a href="#localizacao" className="text-foreground hover:text-primary transition-smooth">
            Localização
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-2 text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span className="text-sm">(11) 97608-6281</span>
          </div>
          <Button 
          variant="cta" 
          size="sm"
          onClick={() => window.open('https://wa.me/5511976086281', '_blank')}
          >
            Orçamento
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;