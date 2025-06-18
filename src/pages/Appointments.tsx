
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Plus, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Appointments = () => {
  const [view, setView] = useState<'day' | 'week' | 'month'>('day');
  
  // Mock data para demonstração
  const appointments = [
    {
      id: 1,
      time: "09:00",
      duration: 60,
      client: {
        name: "Maria Silva",
        phone: "(11) 99999-9999"
      },
      service: {
        name: "Corte e Escova",
        price: 80
      },
      professional: "Ana Costa",
      status: "confirmado",
      notes: "Cliente preferida corte mais curto"
    },
    {
      id: 2,
      time: "10:30",
      duration: 45,
      client: {
        name: "João Santos",
        phone: "(11) 88888-8888"
      },
      service: {
        name: "Barba e Cabelo",
        price: 60
      },
      professional: "Carlos Lima",
      status: "pendente",
      notes: ""
    },
    {
      id: 3,
      time: "14:00",
      duration: 30,
      client: {
        name: "Luciana Oliveira",
        phone: "(11) 77777-7777"
      },
      service: {
        name: "Manicure",
        price: 35
      },
      professional: "Beatriz Rocha",
      status: "confirmado",
      notes: "Esmalte vermelho"
    },
    {
      id: 4,
      time: "15:30",
      duration: 90,
      client: {
        name: "Pedro Alves",
        phone: "(11) 66666-6666"
      },
      service: {
        name: "Massagem Relaxante",
        price: 120
      },
      professional: "Maria Fernanda",
      status: "confirmado",
      notes: "Alergia a óleos cítricos"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmado':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Confirmado</Badge>;
      case 'pendente':
        return <Badge className="bg-card text-yellow-800 hover:bg-card">Pendente</Badge>;
      case 'cancelado':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Cancelado</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Agendamentos</h1>
          <p className="text-gray-600">Gerencie todos os agendamentos da sua agenda</p>
        </div>
        <Button className="gradient-brand border-0 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Novo Agendamento
        </Button>
      </div>

      {/* Filtros e Controles */}
      <Card className="border-0 shadow-lg">
        <CardContent className="pt-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Visualização */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              {(['day', 'week', 'month'] as const).map((viewType) => (
                <button
                  key={viewType}
                  onClick={() => setView(viewType)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    view === viewType
                      ? 'bg-white text-brand-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {viewType === 'day' && 'Dia'}
                  {viewType === 'week' && 'Semana'}
                  {viewType === 'month' && 'Mês'}
                </button>
              ))}
            </div>

            {/* Filtros */}
            <div className="flex gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Buscar cliente..." 
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filtros
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Atual */}
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-900">
          {new Date().toLocaleDateString('pt-BR', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </h2>
        <Badge variant="outline">{appointments.length} agendamentos</Badge>
      </div>

      {/* Lista de Agendamentos */}
      <div className="grid gap-4">
        {appointments.map((appointment) => (
          <Card key={appointment.id} className="hover-lift border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Horário */}
                <div className="flex items-center gap-3 lg:w-32">
                  <div className="flex items-center gap-2 text-brand-600">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{appointment.time}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {appointment.duration}min
                  </span>
                </div>

                {/* Informações Principais */}
                <div className="flex-1 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {appointment.client.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {appointment.client.phone}
                      </p>
                    </div>
                    {getStatusBadge(appointment.status)}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-700">Serviço:</span>
                      <span>{appointment.service.name}</span>
                      <span className="text-green-600 font-medium">
                        R$ {appointment.service.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-700">Profissional:</span>
                      <span>{appointment.professional}</span>
                    </div>
                  </div>

                  {appointment.notes && (
                    <div className="bg-blue-50 rounded-lg p-3">
                      <span className="text-sm text-gray-700">
                        <strong>Observações:</strong> {appointment.notes}
                      </span>
                    </div>
                  )}
                </div>

                {/* Ações */}
                <div className="flex lg:flex-col gap-2 lg:w-32">
                  <Button size="sm" variant="outline" className="flex-1 lg:flex-none">
                    Editar
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 lg:flex-none">
                    Remarcar
                  </Button>
                  {appointment.status === 'pendente' && (
                    <Button size="sm" className="gradient-success border-0 flex-1 lg:flex-none">
                      Confirmar
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State - Mostrar quando não há agendamentos */}
      {appointments.length === 0 && (
        <Card className="border-0 shadow-lg">
          <CardContent className="pt-12 pb-12 text-center">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Nenhum agendamento encontrado
            </h3>
            <p className="text-gray-500 mb-6">
              Comece criando seu primeiro agendamento
            </p>
            <Button className="gradient-brand border-0">
              <Plus className="w-4 h-4 mr-2" />
              Criar Agendamento
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Appointments;
