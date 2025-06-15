
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Clock, Settings, Check } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Calendar,
      title: "Agenda Inteligente",
      description: "Visualize e gerencie todos os agendamentos em tempo real"
    },
    {
      icon: Users,
      title: "Gestão de Clientes",
      description: "Cadastro completo com histórico e preferências"
    },
    {
      icon: Clock,
      title: "Múltiplos Serviços",
      description: "Configure serviços, durações e valores personalizados"
    },
    {
      icon: Settings,
      title: "Configuração Flexível",
      description: "Adapte o sistema às necessidades do seu negócio"
    }
  ];

  const benefits = [
    "Interface intuitiva e responsiva",
    "Gestão completa de profissionais",
    "Agendamento público para clientes", 
    "Controle de horários e disponibilidade",
    "Relatórios e analytics",
    "Suporte a múltiplas unidades"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="px-6 py-4 bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">BookingPro</h1>
              <p className="text-xs text-gray-500">Sistema de Agendamento</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/booking">
              <Button variant="outline">Agendar Demo</Button>
            </Link>
            <Link to="/app">
              <Button className="gradient-brand border-0">Acessar Sistema</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforme sua
              <span className="text-transparent bg-clip-text gradient-brand"> Agenda</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Sistema completo de agendamento para clínicas de estética, barbearias, 
              salões de beleza, consultórios e todos os tipos de serviços.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/app">
                <Button size="lg" className="gradient-brand border-0 text-lg px-8 py-3 hover-lift">
                  Começar Gratuitamente
                </Button>
              </Link>
              <Link to="/booking">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 hover-lift">
                  Ver Demonstração
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-xl text-gray-600">
              Funcionalidades pensadas para maximizar sua produtividade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl gradient-brand flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Por que escolher o BookingPro?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nossa plataforma foi desenvolvida especificamente para negócios de serviços, 
                oferecendo todas as ferramentas necessárias para otimizar sua operação.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full gradient-success flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="glass-effect rounded-3xl p-8 shadow-2xl">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl gradient-brand flex items-center justify-center mb-6">
                    <Calendar className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Comece hoje mesmo!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Configure sua empresa em minutos e comece a receber agendamentos
                  </p>
                  <Link to="/app">
                    <Button className="gradient-brand border-0 w-full">
                      Criar Conta Gratuita
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">BookingPro</span>
          </div>
          <p className="text-gray-400">
            © 2024 BookingPro. Sistema completo de agendamento para seu negócio.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
