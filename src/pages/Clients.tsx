import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Users, Search, Calendar, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";

const Clients = () => {
  // Mock data para demonstração
  const clients = [
    {
      id: 1,
      name: "Maria Silva",
      email: "maria.silva@email.com",
      phone: "(11) 99999-9999",
      lastVisit: "2024-01-10",
      totalAppointments: 15,
      totalSpent: 1200,
      status: "ativo",
      avatar: "",
      notes: "Cliente preferida, sempre pontual",
      favoriteServices: ["Corte Feminino", "Escova"],
      nextAppointment: "2024-01-20"
    },
    {
      id: 2,
      name: "João Santos",
      email: "joao.santos@email.com", 
      phone: "(11) 88888-8888",
      lastVisit: "2024-01-08",
      totalAppointments: 8,
      totalSpent: 480,
      status: "ativo",
      avatar: "",
      notes: "Alergia a produtos com sulfato",
      favoriteServices: ["Corte Masculino", "Barba"],
      nextAppointment: null
    },
    {
      id: 3,
      name: "Luciana Oliveira",
      email: "luciana@email.com",
      phone: "(11) 77777-7777", 
      lastVisit: "2024-01-12",
      totalAppointments: 25,
      totalSpent: 2100,
      status: "vip",
      avatar: "",
      notes: "Cliente VIP, desconto especial",
      favoriteServices: ["Manicure", "Pedicure", "Nail Art"],
      nextAppointment: "2024-01-18"
    },
    {
      id: 4,
      name: "Pedro Alves",
      email: "pedro.alves@email.com",
      phone: "(11) 66666-6666",
      lastVisit: "2023-12-15",
      totalAppointments: 3,
      totalSpent: 360,
      status: "inativo",
      avatar: "",
      notes: "Não compareceu nos últimos agendamentos",
      favoriteServices: ["Massagem Relaxante"],
      nextAppointment: null
    }
  ];

  const totalClients = clients.length;
  const activeClients = clients.filter(c => c.status === 'ativo' || c.status === 'vip').length;
  const vipClients = clients.filter(c => c.status === 'vip').length;
  const totalRevenue = clients.reduce((sum, c) => sum + c.totalSpent, 0);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ativo':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Ativo</Badge>;
      case 'vip':
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">VIP</Badge>;
      case 'inativo':
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Inativo</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Clientes</h1>
          <p className="text-gray-600">Gerencie sua base de clientes e histórico</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-0 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Novo Cliente
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total de Clientes
            </CardTitle>
            <Users className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{totalClients}</div>
            <p className="text-xs text-gray-500">{activeClients} ativos</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Clientes VIP
            </CardTitle>
            <Users className="w-4 h-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{vipClients}</div>
            <p className="text-xs text-gray-500">clientes especiais</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Receita Total
            </CardTitle>
            <Calendar className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">R$ {totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-gray-500">de todos os clientes</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Ticket Médio
            </CardTitle>
            <Clock className="w-4 h-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              R$ {Math.round(totalRevenue / totalClients)}
            </div>
            <p className="text-xs text-gray-500">por cliente</p>
          </CardContent>
        </Card>
      </div>

      {/* Filtros */}
      <Card className="border-0 shadow-lg">
        <CardContent className="pt-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Buscar clientes..." 
                className="pl-10"
              />
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                Todos os Status
              </Button>
              <Button variant="outline">
                Últimas Visitas
              </Button>
              <Button variant="outline">
                Ordenar por
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Clientes */}
      <div className="grid gap-6">
        {clients.map((client) => (
          <Card key={client.id} className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Informações Básicas */}
                <div className="flex items-start gap-4 flex-1">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={client.avatar} />
                    <AvatarFallback className="bg-brand-100 text-brand-600 text-lg font-medium">
                      {client.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {client.name}
                        </h3>
                        {getStatusBadge(client.status)}
                      </div>
                      <p className="text-gray-600">{client.email}</p>
                      <p className="text-gray-600">{client.phone}</p>
                    </div>

                    {/* Serviços Favoritos */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Serviços Favoritos:</h4>
                      <div className="flex flex-wrap gap-2">
                        {client.favoriteServices.map((service, index) => (
                          <Badge key={index} variant="outline" className="text-brand-600 border-brand-200">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Observações */}
                    {client.notes && (
                      <div className="bg-blue-50 rounded-lg p-3">
                        <span className="text-sm text-gray-700">
                          <strong>Observações:</strong> {client.notes}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Estatísticas */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 lg:w-64">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600 mb-1">Total Gasto</div>
                    <div className="font-semibold text-green-600">
                      R$ {client.totalSpent}
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600 mb-1">Agendamentos</div>
                    <div className="font-semibold text-blue-600">
                      {client.totalAppointments}
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600 mb-1">Última Visita</div>
                    <div className="font-semibold text-purple-600 text-xs">
                      {new Date(client.lastVisit).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600 mb-1">Próximo</div>
                    <div className="font-semibold text-orange-600 text-xs">
                      {client.nextAppointment 
                        ? new Date(client.nextAppointment).toLocaleDateString('pt-BR')
                        : 'Não agendado'
                      }
                    </div>
                  </div>
                </div>

                {/* Ações */}
                <div className="flex lg:flex-col gap-2 lg:w-32">
                  <Button size="sm" variant="outline" className="flex-1 lg:flex-none">
                    Ver Histórico
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 lg:flex-none">
                    Agendar
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 lg:flex-none">
                    Editar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {clients.length === 0 && (
        <Card className="border-0 shadow-lg">
          <CardContent className="pt-12 pb-12 text-center">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Nenhum cliente cadastrado
            </h3>
            <p className="text-gray-500 mb-6">
              Adicione clientes para começar a gerenciar agendamentos
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-0">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Cliente
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Clients;
