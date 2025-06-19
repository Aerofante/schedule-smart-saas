import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Clock, Settings, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Services = () => {
  // Mock data para demonstração
  const categories = [
    {
      id: 1,
      name: "Cabelo",
      services: [
        {
          id: 1,
          name: "Corte Feminino",
          description: "Corte de cabelo personalizado para mulheres",
          duration: 60,
          price: 80,
          status: "ativo"
        },
        {
          id: 2,
          name: "Corte Masculino", 
          description: "Corte moderno para homens",
          duration: 45,
          price: 50,
          status: "ativo"
        },
        {
          id: 3,
          name: "Escova Progressiva",
          description: "Tratamento para alisar cabelos",
          duration: 180,
          price: 200,
          status: "ativo"
        }
      ]
    },
    {
      id: 2,
      name: "Unhas",
      services: [
        {
          id: 4,
          name: "Manicure",
          description: "Cuidados completos para unhas das mãos",
          duration: 45,
          price: 35,
          status: "ativo"
        },
        {
          id: 5,
          name: "Pedicure",
          description: "Cuidados completos para unhas dos pés",
          duration: 60,
          price: 40,
          status: "ativo"
        },
        {
          id: 6,
          name: "Nail Art",
          description: "Decoração artística para unhas",
          duration: 90,
          price: 60,
          status: "inativo"
        }
      ]
    },
    {
      id: 3,
      name: "Bem-estar",
      services: [
        {
          id: 7,
          name: "Massagem Relaxante",
          description: "Massagem corporal para relaxamento",
          duration: 90,
          price: 120,
          status: "ativo"
        },
        {
          id: 8,
          name: "Drenagem Linfática",
          description: "Técnica para redução de inchaço",
          duration: 60,
          price: 100,
          status: "ativo"
        }
      ]
    }
  ];

  const allServices = categories.flatMap(cat => cat.services);
  const totalServices = allServices.length;
  const activeServices = allServices.filter(s => s.status === 'ativo').length;
  const averagePrice = allServices.reduce((sum, s) => sum + s.price, 0) / totalServices;
  const averageDuration = allServices.reduce((sum, s) => sum + s.duration, 0) / totalServices;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ativo':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Ativo</Badge>;
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
          <h1 className="text-3xl font-bold text-gray-900">Serviços</h1>
          <p className="text-gray-600">Gerencie os serviços oferecidos pelo seu negócio</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Categorias
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-0 flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Novo Serviço
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total de Serviços
            </CardTitle>
            <Settings className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{totalServices}</div>
            <p className="text-xs text-gray-500">{activeServices} ativos</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Categorias
            </CardTitle>
            <Settings className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{categories.length}</div>
            <p className="text-xs text-gray-500">diferentes tipos</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Preço Médio
            </CardTitle>
            <Clock className="w-4 h-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">R$ {averagePrice.toFixed(0)}</div>
            <p className="text-xs text-gray-500">por serviço</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Duração Média
            </CardTitle>
            <Clock className="w-4 h-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{averageDuration.toFixed(0)}min</div>
            <p className="text-xs text-gray-500">por atendimento</p>
          </CardContent>
        </Card>
      </div>

      {/* Filtros */}
      <Card className="border-0 shadow-lg">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Buscar serviços..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              Todos os Status
            </Button>
            <Button variant="outline">
              Todas as Categorias
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Serviços por Categoria */}
      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category.id}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">{category.name}</h2>
              <Badge variant="outline">{category.services.length} serviços</Badge>
            </div>
            
            <div className="grid gap-4">
              {category.services.map((service) => (
                <Card key={service.id} className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
                      {/* Informações do Serviço */}
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {service.name}
                          </h3>
                          {getStatusBadge(service.status)}
                        </div>
                        <p className="text-gray-600">{service.description}</p>
                      </div>

                      {/* Detalhes */}
                      <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:w-48">
                        <div className="bg-blue-50 rounded-lg p-3 text-center">
                          <div className="text-sm text-gray-600 mb-1">Duração</div>
                          <div className="font-semibold text-blue-600">
                            {service.duration} min
                          </div>
                        </div>
                        
                        <div className="bg-green-50 rounded-lg p-3 text-center">
                          <div className="text-sm text-gray-600 mb-1">Preço</div>
                          <div className="font-semibold text-green-600">
                            R$ {service.price}
                          </div>
                        </div>
                      </div>

                      {/* Ações */}
                      <div className="flex gap-2 lg:w-32">
                        <Button size="sm" variant="outline" className="flex-1 lg:flex-none">
                          Editar
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 lg:flex-none">
                          {service.status === 'ativo' ? 'Desativar' : 'Ativar'}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {totalServices === 0 && (
        <Card className="border-0 shadow-lg">
          <CardContent className="pt-12 pb-12 text-center">
            <Settings className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Nenhum serviço cadastrado
            </h3>
            <p className="text-gray-500 mb-6">
              Adicione serviços para começar a receber agendamentos
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-0">
              <Plus className="w-4 h-4 mr-2" />
              Criar Primeiro Serviço
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Services;
