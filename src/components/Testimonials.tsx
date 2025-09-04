import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Ana from "../assets/ana.jpg"
import Carlos from "../assets/carlos.jpg"
import Fernando from "../assets/fernando.jpg"
import Roberto from "../assets/roberto.jpg"
import Marina from "../assets/marina.jpg"
import Juliana from "../assets/juliana.jpg"

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Empresário",
    avatar: Carlos,
    rating: 5,
    text: "Excelente atendimento! Meu Argo ficou como nova após o serviço na MackCar. Cris e  muito competentes e preços justos.",
    service: "Manutenção Argo"
  },
  {
    name: "Ana Maria Santos",
    role: "Advogada",
    avatar: Ana,
    rating: 5,
    text: "Sempre levo meu HB20 na MackCar. Muito honestos no diagnóstico e feito apenas o que realmente precisa. Confiança total!",
    service: "Revisão HB20"
  },
  {
    name: "Roberto Costa",
    role: "Metalúrgico",
    avatar: Roberto,
    rating: 5,
    text: "Atendimento excepcional! Resolveu um problema no meu Onix que outras oficinas não conseguiram.",
    service: "Manutenção Onix"
  },
  {
    name: "Marina Oliveira",
    role: "Funcionario Público",
    avatar: Marina,
    rating: 5,
    text: "Oficina de primeira qualidade! Cris e muito profissional e sempre cumpre os prazos prometidos. Recomendo a todos!",
    service: "Revisão HB20"
  },
  {
    name: "Fernando Lima",
    role: "Eletricista",
    avatar: Fernando,
    rating: 5,
    text: "Há 5 anos confio meus carros à MackCar. Nunca tive problemas, sempre saem perfeitos. Melhor custo-benefício da região!",
    service: "Cliente há 5 anos"
  },
  {
    name: "Juliana Pereira",
    role: "Enfermeira",
    avatar: Juliana,
    rating: 5,
    text: "Cris fez o motor do meu Peugeot e o serviço ficou impecável! Trabalho de alta qualidade e atenção aos detalhes.",
    service: "Motor Restaurado com Qualidade e Precisão"
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-1">
            <MessageCircle className="h-4 w-4 mr-2" />
            Depoimentos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O Que Nossos Clientes
            <span className="block text-primary">Dizem Sobre Nós</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja o que eles falam sobre nosso trabalho.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-0 shadow-card hover:shadow-automotive transition-smooth transform hover:scale-105 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="h-8 w-8" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Service Badge */}
                <Badge variant="outline" className="mb-4 text-xs">
                  {testimonial.service}
                </Badge>
                
                {/* Author Info */}
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10 bg-gradient-primary">
                     <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="text-primary-foreground font-medium">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 shadow-automotive">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/90">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15</div>
              <div className="text-primary-foreground/90">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-foreground/90">Garantia Total</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5★</div>
              <div className="text-primary-foreground/90">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;