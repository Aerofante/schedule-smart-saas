
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Settings as SettingsIcon, Clock, Users, Calendar, Bell, Link } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Configurações</h1>
        <p className="text-gray-600">Gerencie as configurações da sua empresa</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Configurações Principais */}
        <div className="lg:col-span-2 space-y-6">
          {/* Dados da Empresa */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SettingsIcon className="w-5 h-5" />
                Dados da Empresa
              </CardTitle>
              <CardDescription>
                Informações básicas do seu negócio
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome da Empresa
                  </label>
                  <Input defaultValue="Clínica Estética Beleza" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CNPJ
                  </label>
                  <Input defaultValue="12.345.678/0001-90" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Endereço
                </label>
                <Input defaultValue="Rua das Flores, 123 - Centro" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <Input defaultValue="(11) 3456-7890" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <Input defaultValue="contato@clinica.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descrição
                </label>
                <Textarea 
                  defaultValue="Cuidados especializados em estética e bem-estar"
                  rows={3}
                />
              </div>
              <Button className="gradient-brand border-0">
                Salvar Alterações
              </Button>
            </CardContent>
          </Card>

          {/* Horário de Funcionamento */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Horário de Funcionamento
              </CardTitle>
              <CardDescription>
                Configure os horários de atendimento
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { day: "Segunda-feira", open: "08:00", close: "18:00", active: true },
                { day: "Terça-feira", open: "08:00", close: "18:00", active: true },
                { day: "Quarta-feira", open: "08:00", close: "18:00", active: true },
                { day: "Quinta-feira", open: "08:00", close: "18:00", active: true },
                { day: "Sexta-feira", open: "08:00", close: "18:00", active: true },
                { day: "Sábado", open: "08:00", close: "14:00", active: true },
                { day: "Domingo", open: "08:00", close: "14:00", active: false },
              ].map((schedule, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-32">
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                  </div>
                  <Switch checked={schedule.active} />
                  {schedule.active && (
                    <>
                      <Input 
                        type="time" 
                        defaultValue={schedule.open}
                        className="w-32"
                      />
                      <span className="text-gray-500">até</span>
                      <Input 
                        type="time" 
                        defaultValue={schedule.close}
                        className="w-32"
                      />
                    </>
                  )}
                  {!schedule.active && (
                    <span className="text-gray-500">Fechado</span>
                  )}
                </div>
              ))}
              <Button className="gradient-brand border-0">
                Salvar Horários
              </Button>
            </CardContent>
          </Card>

          {/* Notificações */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notificações
              </CardTitle>
              <CardDescription>
                Configure como deseja receber avisos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <span className="font-medium text-gray-900">Novos agendamentos</span>
                  <p className="text-sm text-gray-500">Receber e-mail para cada novo agendamento</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <span className="font-medium text-gray-900">Cancelamentos</span>
                  <p className="text-sm text-gray-500">Ser notificado quando clientes cancelarem</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <span className="font-medium text-gray-900">Lembretes</span>
                  <p className="text-sm text-gray-500">Enviar lembretes 24h antes dos agendamentos</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <span className="font-medium text-gray-900">Relatórios semanais</span>
                  <p className="text-sm text-gray-500">Resumo semanal por e-mail</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar de Informações */}
        <div className="space-y-6">
          {/* Link de Agendamento */}
          <Card className="border-0 shadow-lg gradient-brand text-white">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Link className="w-5 h-5" />
                Link de Agendamento
              </CardTitle>
              <CardDescription className="text-blue-100">
                Compartilhe com seus clientes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white/20 rounded p-3 mb-4">
                <code className="text-sm text-blue-100">
                  bookingpro.com/clinica-beleza
                </code>
              </div>
              <div className="space-y-2">
                <Button variant="secondary" size="sm" className="w-full">
                  Copiar Link
                </Button>
                <Button variant="secondary" size="sm" className="w-full">
                  Compartilhar QR Code
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Estatísticas Rápidas */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Resumo do Sistema
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Agendamentos hoje</span>
                <Badge className="bg-blue-100 text-blue-800">12</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Clientes ativos</span>
                <Badge className="bg-green-100 text-green-800">248</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Profissionais</span>
                <Badge className="bg-purple-100 text-purple-800">4</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Serviços</span>
                <Badge className="bg-orange-100 text-orange-800">15</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Plano Atual */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Plano Atual
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-3">
                <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
                  Plano Professional
                </Badge>
                <p className="text-2xl font-bold text-gray-900">R$ 99/mês</p>
                <p className="text-sm text-gray-500">
                  Até 1000 agendamentos por mês
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Gerenciar Plano
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Suporte */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Precisa de Ajuda?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" size="sm" className="w-full">
                Central de Ajuda
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                Chat de Suporte
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
