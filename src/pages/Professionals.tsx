import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, User, Calendar, Clock, Settings } from "lucide-react";

const Professionals = () => {
  // Mock data para demonstração
  const professionals = [
    {
      id: 1,
      name: "Ana Costa",
      email: "ana@clinica.com",
      phone: "(11) 99999-1111",
      specialties: ["Corte", "Escova", "Coloração"],
      status: "ativo",
      avatar: "",
      workingHours: "08:00 - 18:00",
      appointmentsToday: 8,
      nextAppointment: "14:30"
    },
    {
      id: 2,
      name: "Carlos Lima", 
      email: "carlos@barbearia.com",
      phone: "(11) 99999-2222",
      specialties: ["Barba", "Cabelo Masculino", "Sobrancelha"],
      status: "ativo",
      avatar: "",
      workingHours: "09:00 - 19:00",
      appointmentsToday: 6,
      nextAppointment: "15:00"
    },
    {
      id: 3,
      name: "Beatriz Rocha",
      email: "beatriz@clinica.com", 
      phone: "(11) 99999-3333",
      specialties: ["Manicure", "Pedicure", "Nail Art"],
      status: "ativo",
      avatar: "",
      workingHours: "08:30 - 17:30",
      appointmentsToday: 10,
      nextAppointment: "16:00"
    },
    {
      id: 4,
      name: "Maria Fernanda",
      email: "maria@spa.com",
      phone: "(11) 99999-4444",
      specialties: ["Massagem", "Relaxamento", "Drenagem"],
      status: "inativo",
      avatar: "",
      workingHours: "10:00 - 18:00",
      appointmentsToday: 0,
      nextAppointment: null
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ativo':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Ativo</Badge>;
      case 'inativo':
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Inativo</Badge>;
      case 'férias':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Férias</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Profissionais</h1>
          <p className="text-gray-600">Gerencie sua equipe e suas especialidades</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-0 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Novo Profissional
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total de Profissionais
            </CardTitle>
            <User className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {professionals.length}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Ativos Hoje
            </CardTitle>
            <Calendar className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {professionals.filter(p => p.status === 'ativo').length}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Agendamentos Hoje
            </CardTitle>
            <Clock className="w-4 h-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {professionals.reduce((total, p) => total + p.appointmentsToday, 0)}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Especialidades
            </CardTitle>
            <Settings className="w-4 h-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {[...new Set(professionals.flatMap(p => p.specialties))].length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Profissionais */}
      <div className="grid gap-6">
        {professionals.map((professional) => (
          <Card key={professional.id} className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Informações Básicas */}
                <div className="flex items-start gap-4 flex-1">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={professional.avatar} />
                    <AvatarFallback className="bg-brand-100 text-brand-600 text-lg font-medium">
                      {professional.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {professional.name}
                        </h3>
                        {getStatusBadge(professional.status)}
                      </div>
                      <p className="text-gray-600">{professional.email}</p>
                      <p className="text-gray-600">{professional.phone}</p>
                    </div>

                    {/* Especialidades */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Especialidades:</h4>
                      <div className="flex flex-wrap gap-2">
                        {professional.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="text-brand-600 border-brand-200">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Estatísticas do Dia */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 lg:w-64">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-sm text-gray-600 mb-1">Horário de Trabalho</div>
                    <div className="font-semibold text-blue-600">{professional.workingHours}</div>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-sm text-gray-600 mb-1">Agendamentos Hoje</div>
                    <div className="font-semibold text-green-600">{professional.appointmentsToday}</div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <div className="text-sm text-gray-600 mb-1">Próximo Atendimento</div>
                    <div className="font-semibold text-purple-600">
                      {professional.nextAppointment || 'Livre'}
                    </div>
                  </div>
                </div>

                {/* Ações */}
                <div className="flex lg:flex-col gap-2 lg:w-32">
                  <Button size="sm" variant="outline" className="flex-1 lg:flex-none">
                    Ver Agenda
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 lg:flex-none">
                    Editar
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 lg:flex-none">
                    Configurar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {professionals.length === 0 && (
        <Card className="border-0 shadow-lg">
          <CardContent className="pt-12 pb-12 text-center">
            <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Nenhum profissional cadastrado
            </h3>
            <p className="text-gray-500 mb-6">
              Adicione profissionais à sua equipe para começar
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-0">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Profissional
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Professionals;
