import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock, Plus, Filter, Search, List, Grid } from "lucide-react";
import { Input } from "@/components/ui/input";
import Calendar from "@/components/calendar/Calendar";
import AppointmentForm from "@/components/forms/AppointmentForm";

const Appointments = () => {
  const [view, setView] = useState<'calendar' | 'list'>('calendar');
  const [showNewAppointment, setShowNewAppointment] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  // Mock data para demonstração
  const appointments = [
    {
      id: "2024-01-15-1",
      time: "09:00",
      duration: 60,
      title: "Corte e Escova",
      client: {
        name: "Maria Silva",
        phone: "(11) 99999-9999"
      },
      service: {
        name: "Corte e Escova",
        price: 80
      },
      professional: "Ana Costa",
      status: "confirmado" as const,
      notes: "Cliente preferida corte mais curto",
      color: "bg-green-100 text-green-800"
    },
    {
      id: "2024-01-15-2",
      time: "10:30",
      duration: 45,
      title: "Barba e Cabelo",
      client: {
        name: "João Santos",
        phone: "(11) 88888-8888"
      },
      service: {
        name: "Barba e Cabelo",
        price: 60
      },
      professional: "Carlos Lima",
      status: "pendente" as const,
      notes: "",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      id: "2024-01-15-3",
      time: "14:00",
      duration: 30,
      title: "Manicure",
      client: {
        name: "Luciana Oliveira",
        phone: "(11) 77777-7777"
      },
      service: {
        name: "Manicure",
        price: 35
      },
      professional: "Beatriz Rocha",
      status: "confirmado" as const,
      notes: "Esmalte vermelho",
      color: "bg-green-100 text-green-800"
    },
    {
      id: "2024-01-16-1",
      time: "15:30",
      duration: 90,
      title: "Massagem Relaxante",
      client: {
        name: "Pedro Alves",
        phone: "(11) 66666-6666"
      },
      service: {
        name: "Massagem Relaxante",
        price: 120
      },
      professional: "Maria Fernanda",
      status: "confirmado" as const,
      notes: "Alergia a óleos cítricos",
      color: "bg-green-100 text-green-800"
    }
  ];

  const calendarEvents = appointments.map(apt => ({
    id: apt.id,
    time: apt.time,
    title: apt.title,
    client: apt.client.name,
    duration: apt.duration,
    status: apt.status,
    color: apt.color
  }));

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmado':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Confirmado</Badge>;
      case 'pendente':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pendente</Badge>;
      case 'cancelado':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Cancelado</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleNewAppointment = (data: any) => {
    console.log('Novo agendamento:', data);
    // Aqui você implementaria a lógica para salvar o agendamento
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    console.log('Data selecionada:', date);
  };

  const handleEventClick = (event: any) => {
    console.log('Evento clicado:', event);
    // Aqui você poderia abrir um modal para editar o agendamento
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Agendamentos</h1>
          <p className="text-gray-600">Gerencie todos os agendamentos da sua agenda</p>
        </div>
        <div className="flex gap-3">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setView('calendar')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                view === 'calendar'
                  ? 'bg-white text-brand-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Grid className="w-4 h-4" />
              Calendário
            </button>
            <button
              onClick={() => setView('list')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                view === 'list'
                  ? 'bg-white text-brand-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <List className="w-4 h-4" />
              Lista
            </button>
          </div>
          <Button 
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-0 flex items-center gap-2"
            onClick={() => setShowNewAppointment(true)}
          >
            <Plus className="w-4 h-4" />
            Novo Agendamento
          </Button>
        </div>
      </div>

      {/* Filtros e Controles */}
      <Card className="border-0 shadow-lg">
        <CardContent className="pt-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
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

      {/* Conteúdo Principal */}
      {view === 'calendar' ? (
        <Calendar 
          events={calendarEvents}
          onDateSelect={handleDateSelect}
          onEventClick={handleEventClick}
        />
      ) : (
        <div>
          {/* Data Atual */}
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {selectedDate ? selectedDate.toLocaleDateString('pt-BR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              }) : new Date().toLocaleDateString('pt-BR', { 
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
              <Card key={appointment.id} className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl border-0 shadow-lg">
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
                        <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white border-0 flex-1 lg:flex-none">
                          Confirmar
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Modal de Novo Agendamento */}
      <AppointmentForm
        open={showNewAppointment}
        onOpenChange={setShowNewAppointment}
        onSubmit={handleNewAppointment}
      />

      {/* Empty State */}
      {appointments.length === 0 && (
        <Card className="border-0 shadow-lg">
          <CardContent className="pt-12 pb-12 text-center">
            <CalendarIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Nenhum agendamento encontrado
            </h3>
            <p className="text-gray-500 mb-6">
              Comece criando seu primeiro agendamento
            </p>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-0"
              onClick={() => setShowNewAppointment(true)}
            >
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
