
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, Plus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock data para demonstração
  const stats = [
    {
      title: "Agendamentos Hoje",
      value: "12",
      description: "3 ainda pendentes",
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Clientes Ativos",
      value: "248",
      description: "+12 este mês",
      icon: Users,
      color: "text-emerald-600", 
      bgColor: "bg-emerald-50"
    },
    {
      title: "Serviços Oferecidos",
      value: "15",
      description: "5 categorias",
      icon: Clock,
      color: "text-violet-600",
      bgColor: "bg-violet-50"
    }
  ];

  const todayAppointments = [
    {
      id: 1,
      time: "09:00",
      client: "Maria Silva",
      service: "Corte e Escova",
      professional: "Ana Costa",
      status: "confirmado"
    },
    {
      id: 2,
      time: "10:30",
      client: "João Santos",
      service: "Barba e Cabelo",
      professional: "Carlos Lima",
      status: "pendente"
    },
    {
      id: 3,
      time: "14:00",
      client: "Luciana Oliveira",
      service: "Manicure",
      professional: "Beatriz Rocha",
      status: "confirmado"
    },
    {
      id: 4,
      time: "15:30",
      client: "Pedro Alves",
      service: "Massagem Relaxante",
      professional: "Maria Fernanda",
      status: "confirmado"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmado':
        return 'bg-emerald-50 text-emerald-700 border border-emerald-200';
      case 'pendente':
        return 'bg-orange-50 text-orange-700 border border-orange-200';
      default:
        return 'bg-muted text-muted-foreground border';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Visão geral da sua agenda hoje</p>
        </div>
        <div className="flex gap-3">
          <Link to="/app/appointments">
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Ver Agenda
            </Button>
          </Link>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Novo Agendamento
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover-lift border shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Today's Appointments */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="border shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl">Agendamentos de Hoje</CardTitle>
                <CardDescription>
                  {new Date().toLocaleDateString('pt-BR', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </CardDescription>
              </div>
              <Link to="/app/appointments">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  Ver todos <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todayAppointments.map((appointment) => (
                  <div 
                    key={appointment.id}
                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-sm font-medium text-foreground w-16">
                        {appointment.time}
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          {appointment.client}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {appointment.service} • {appointment.professional}
                        </div>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                      {appointment.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <Card className="border shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/app/appointments" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Novo Agendamento
                </Button>
              </Link>
              <Link to="/app/clients" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Cadastrar Cliente
                </Button>
              </Link>
              <Link to="/app/services" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="w-4 h-4 mr-2" />
                  Gerenciar Serviços
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border shadow-sm bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Link de Agendamento</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Compartilhe com seus clientes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-primary-foreground/20 rounded p-3 mb-4">
                <code className="text-sm text-primary-foreground/90">
                  bookingpro.com/clinica-exemplo
                </code>
              </div>
              <Button variant="secondary" size="sm" className="w-full">
                Copiar Link
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
