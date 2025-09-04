import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  Zap, 
  Settings, 
  CarFront, 
  Gauge, 
  Battery,
  Cog,
  Shield
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Manutenção Preventiva",
    description: "Revisões completas para manter seu veículo sempre em perfeito estado",
    features: ["Troca de óleo", "Filtros", "Revisão geral"]
  },
  {
    icon: Settings,
    title: "Mecânica Geral",
    description: "Serviços completos de mecânica com tecnologia de ponta",
    features: ["Motor", "Transmissão", "Suspensão"]
  },
  {
    icon: Gauge,
    title: "Diagnóstico Digital",
    description: "Análise computadorizada para identificação precisa de problemas",
    features: ["Scanner automotivo", "Testes eletrônicos", "Relatórios detalhados"]
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-1">
            <Cog className="h-4 w-4 mr-2" />
            Nossos Serviços
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Soluções Completas Para
            <span className="block text-primary">Seu Veículo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços automotivos com tecnologia avançada 
            e profissionais especializados para cuidar do seu veículo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-card hover:shadow-automotive transition-smooth transform hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg group-hover:bg-primary-light transition-smooth">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-foreground group-hover:text-primary transition-smooth">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 text-base">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-accent" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary p-8 rounded-2xl shadow-automotive">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Precisa de um orçamento personalizado?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
             Seu carro será analisado com cuidado e receberá a melhor solução.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-smooth transform hover:scale-105" onClick={() => window.open('https://wa.me/5511976086281', '_blank')}>
                WhatsApp: (11)  97608-6281
              </button>
              <a  href="#localizacao"  className="px-8 py-3 bg-primary-foreground/20 text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/30 transition-smooth">
                Visitar Oficina
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;