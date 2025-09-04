import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-workshop.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Badge */}
          <Badge className="bg-accent/20 text-accent border-accent/30 mb-6 animate-fade-in">
            <Star className="h-3 w-3 mr-1" />
            Oficina Especializada há mais de 15 anos
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="block">Excelência em</span>
            <span className="block bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Serviços Automotivos
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            Na MackCar, transformamos problemas automotivos em soluções definitivas. 
            Tecnologia avançada, equipamentos de ponta e garantia total.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
            <Button 
            variant="cta" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => window.open('https://wa.me/5511976086281', '_blank')}
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in">
            <div className="flex items-center justify-center space-x-2 p-4 bg-background/10 rounded-lg backdrop-blur-sm">
              <Shield className="h-6 w-6 text-accent" />
              <span className="font-medium">Garantia Total</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-4 bg-background/10 rounded-lg backdrop-blur-sm">
              <Clock className="h-6 w-6 text-accent" />
              <span className="font-medium">Atendimento Rápido</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-4 bg-background/10 rounded-lg backdrop-blur-sm">
              <Star className="h-6 w-6 text-accent" />
              <span className="font-medium">Qualidade Premium</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Animation Element */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="text-primary-foreground/70">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;