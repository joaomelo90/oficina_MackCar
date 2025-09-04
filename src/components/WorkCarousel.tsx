import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Camera, CheckCircle, X } from "lucide-react";
import workshop1 from "@/assets/workshop-1.jpg";
import workshop2 from "@/assets/workshop-2.jpg";
import workshop3 from "@/assets/workshop-3.jpg";

const workProjects = [
  {
    id: 1,
    title: "Revisão Completa - BMW X5",
    description: "Manutenção preventiva completa com troca de filtros, óleo e diagnóstico eletrônico",
    image: workshop1,
    category: "Manutenção Preventiva",
    duration: "2 dias",
    status: "Concluído"
  },
  {
    id: 2,
    title: "Reparo Motor - Audi A4",
    description: "Retífica completa do motor com substituição de componentes e testes de performance",
    image: workshop2,
    category: "Mecânica Geral",
    duration: "5 dias",
    status: "Concluído"
  },
  {
    id: 3,
    title: "Diagnóstico Eletrônico - Mercedes C180",
    description: "Análise completa do sistema eletrônico com equipamentos de última geração",
    image: workshop3,
    category: "Diagnóstico",
    duration: "1 dia",
    status: "Concluído"
  },
  {
    id: 4,
    title: "Restauração Completa - Civic Type R",
    description: "Projeto de restauração total incluindo motor, suspensão e pintura",
    image: workshop1,
    category: "Restauração",
    duration: "15 dias",
    status: "Concluído"
  },
  {
    id: 5,
    title: "Sistema Elétrico - Hilux SW4",
    description: "Reparo completo do sistema elétrico e instalação de acessórios",
    image: workshop2,
    category: "Elétrica",
    duration: "3 dias",
    status: "Concluído"
  }
];

const WorkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === workProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? workProjects.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="trabalhos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-1">
            <Camera className="h-4 w-4 mr-2" />
            Nossos Trabalhos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Projetos Realizados Com
            <span className="block text-primary">Excelência</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos nossos trabalhos mais recentes e veja a qualidade 
            que entregamos em cada projeto.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {workProjects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <Card className="bg-gradient-card border-0 shadow-automotive overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-64 lg:h-96">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary text-primary-foreground">
                            {project.category}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-background/90 text-foreground">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <CardContent className="p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex items-center justify-between mb-6">
                          <div className="text-sm text-muted-foreground">
                            <span className="font-medium">Duração:</span> {project.duration}
                          </div>
                        </div>
                        
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button 
            variant="outline" 
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/90 backdrop-blur-sm hover:bg-background"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/90 backdrop-blur-sm hover:bg-background"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {workProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Project Details Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-foreground">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Detalhes completos do projeto
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                  {/* Image */}
                  <div className="relative">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-64 lg:h-80 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {selectedProject.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/90 text-foreground">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {selectedProject.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Descrição</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-foreground mb-1">Categoria</h5>
                        <p className="text-muted-foreground">{selectedProject.category}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground mb-1">Duração</h5>
                        <p className="text-muted-foreground">{selectedProject.duration}</p>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-foreground mb-1">Status</h5>
                      <p className="text-muted-foreground">{selectedProject.status}</p>
                    </div>

                    <div className="pt-4">
                      <Button 
                        variant="automotive" 
                        className="w-full"
                        onClick={() => window.open(`https://wa.me/5511999999999?text=Olá! Gostaria de saber mais detalhes sobre o projeto: ${selectedProject.title}`, '_blank')}
                      >
                        Entrar em Contato via WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default WorkCarousel;