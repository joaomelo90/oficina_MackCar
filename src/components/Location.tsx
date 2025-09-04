import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Navigation,
  Car,
  Route
} from "lucide-react";

const Location = () => {
  const handleOpenMaps = () => {
    // Coordenadas de exemplo para São Paulo
    const latitude = -23.738960;
    const longitude = -46.575250;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, '_blank');
  };

  return (
    <section id="localizacao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-1">
            <MapPin className="h-4 w-4 mr-2" />
            Localização
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Visite Nossa
            <span className="block text-primary">Oficina</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos estrategicamente localizados para melhor atendê-lo. 
           Venha conhecer nossa estrutura e atendimento especializado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Map */}
          <div className="relative">
            <Card className="bg-gradient-card border-0 shadow-card overflow-hidden h-96 lg:h-[500px]">
              <CardContent className="p-0 h-full">
                {/* Placeholder for map - In a real implementation, you would use Google Maps or similar */}
                <div className="w-full h-full bg-muted/50 flex items-center justify-center relative">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Oficina MackCar </h3>
                    <p className="text-muted-foreground">Rua Ministro Frederico Barreto, 480 - Bairro dos Casas</p>
                  </div>
                  
                  {/* Interactive Map Button */}
                  <Button 
                    variant="cta" 
                    className="absolute bottom-4 right-4"
                    onClick={handleOpenMaps}
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Abrir no Maps
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address Card */}
            <Card className="bg-gradient-card border-0 shadow-card hover:shadow-automotive transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <MapPin className="h-6 w-6" />
                  <span>Endereço</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium text-foreground">Rua Ministro Frederico Barreto, 480</p>
                  <p className="text-muted-foreground">Bairro dos Casas - São Bernardo do Campo - SP</p>
                  <p className="text-muted-foreground">CEP: 09840-550</p>
                </div>
              </CardContent>
            </Card>

            {/* Opening Hours */}
            <Card className="bg-gradient-card border-0 shadow-card hover:shadow-automotive transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <Clock className="h-6 w-6" />
                  <span>Horário de Funcionamento</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Segunda a Sexta:</span>
                    <span className="font-medium text-accent">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Sábados:</span>
                    <span className="font-medium text-accent">08:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Domingos:</span>
                    <span className="text-muted-foreground">Fechado</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <Card className="bg-gradient-card border-0 shadow-card hover:shadow-automotive transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <Phone className="h-6 w-6" />
                  <span>Contato</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium text-foreground">(11) 97608-6281 - (11) 4317-0709</p>
                      <p className="text-sm text-muted-foreground">WhatsApp e Ligações</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium text-foreground">cristianojulio@gmail.com</p>
                      <p className="text-sm text-muted-foreground">Email</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <Button variant="cta" className="w-full" onClick={() => window.open('https://wa.me/5511976086281', '_blank')}>
                    <Phone className="h-4 w-4 mr-2" />
                    WhatsApp Direto
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Facilities */}
            <Card className="bg-gradient-primary border-0 shadow-automotive text-primary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Car className="h-6 w-6" />
                  <span>Facilidades</span>
                </CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Comodidades para nossos clientes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Route className="h-4 w-4 text-accent" />
                    <span className="text-sm">Estacionamento</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Route className="h-4 w-4 text-accent" />
                    <span className="text-sm">Wi-Fi Gratuito</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Route className="h-4 w-4 text-accent" />
                    <span className="text-sm">Café Grátis</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;