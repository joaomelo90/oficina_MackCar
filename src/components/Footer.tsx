import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  MessageCircle
} from "lucide-react";

import Logo from "../assets/logo.jpg"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-black p-1 rounded-lg">
                <img 
                src={Logo} 
                alt="Logo mackCar"
                className="w-20 h-auto"
                />
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Há mais de 15 anos oferecendo excelência em serviços automotivos. 
              Nossa paixão é cuidar do seu veículo com a qualidade que ele merece.
            </p>
            
            <div className="flex space-x-4">
              <button className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary-foreground/20 transition-smooth">
                <Facebook 
                className="h-5 w-5" 
                onClick={() => window.open(" https://www.facebook.com/cristianojuliogomessantos.julio", '_blank')}
                />
              </button>
              <button className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary-foreground/20 transition-smooth">
                <Instagram 
                className="h-5 w-5"
                onClick={() => window.open("https://www.instagram.com/oficinamecanicamackcar", '_blank')}
                />
              </button>
              <button 
                className="bg-accent p-3 rounded-lg hover:bg-accent/90 transition-smooth text-accent-foreground"
                onClick={() => window.open('https://wa.me/5511976086281', '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Phone className="h-5 w-5 mr-2 text-accent" />
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>Rua Ministro Frederico Barreto, 480</p>
                  <p> Bairro dos Casas</p>
                  <p>São Bernardo do Campo - SP</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">(11) 4317-0709</span>
                <span className="text-primary-foreground/80">(11) 97608-6281</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">cristianojulio3@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-accent" />
              Horário
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-primary-foreground/80">Segunda - Sexta:</span>
                <span className="text-accent font-medium">08:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-foreground/80">Sábados:</span>
                <span className="text-accent font-medium">08:00 - 13:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-foreground/80">Domingos:</span>
                <span className="text-primary-foreground/60">Fechado</span>
              </div>
            </div>
          
          </div>
        </div>

        {/* Services Quick Links */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4 text-center">Nossos Serviços</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Manutenção Preventiva',
              'Mecânica Geral',
              'Diagnóstico Digital',
            ].map((service, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground/80 hover:bg-primary-foreground/10 transition-smooth cursor-pointer"
              >
                {service}
              </Badge>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © {currentYear} MackCar Oficina Automotiva. Todos os direitos reservados Code Solution Tecnology.
            </div>
            
            {/*<div className="flex items-center space-x-6 text-sm">
              <button className="text-primary-foreground/80 hover:text-accent transition-smooth">
                Política de Privacidade
              </button>
              <button className="text-primary-foreground/80 hover:text-accent transition-smooth">
                Termos de Serviço
              </button>
            </div>*/}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;