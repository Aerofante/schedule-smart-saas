import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const PublicBooking = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedProfessional, setSelectedProfessional] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  // Mock data
  const company = {
    name: "Clínica Estética Beleza",
    logo: "",
    address: "Rua das Flores, 123 - Centro",
    phone: "(11) 3456-7890",
    description: "Cuidados especializados em estética e bem-estar"
  };
  const services = [{
    id: 1,
    name: "Limpeza de Pele",
    description: "Limpeza profunda com extração de cravos",
    duration: 90,
    price: 120,
    category: "Facial"
  }, {
    id: 2,
    name: "Massagem Relaxante",
    description: "Massagem corporal para relaxamento",
    duration: 60,
    price: 100,
    category: "Corporal"
  }, {
    id: 3,
    name: "Drenagem Linfática",
    description: "Técnica para redução de inchaço",
    duration: 60,
    price: 110,
    category: "Corporal"
  }, {
    id: 4,
    name: "Peeling Químico",
    description: "Renovação celular da pele",
    duration: 45,
    price: 150,
    category: "Facial"
  }];
  const professionals = [{
    id: 1,
    name: "Dra. Ana Paula",
    specialties: ["Facial", "Corporal"],
    avatar: "",
    experience: "5 anos de experiência"
  }, {
    id: 2,
    name: "Terapeuta Maria",
    specialties: ["Corporal"],
    avatar: "",
    experience: "8 anos de experiência"
  }, {
    id: 3,
    name: "Esteticista Sofia",
    specialties: ["Facial"],
    avatar: "",
    experience: "3 anos de experiência"
  }];
  const availableTimes = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"];
  const handleServiceSelect = (service: any) => {
    setSelectedService(service);
    setStep(2);
  };
  const handleProfessionalSelect = (professional: any) => {
    setSelectedProfessional(professional);
    setStep(3);
  };
  const handleDateTimeSelect = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setStep(4);
  };
  const nextWeekDays = Array.from({
    length: 7
  }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });
  const renderStepIndicator = () => <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4].map(stepNum => <div key={stepNum} className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= stepNum ? 'bg-brand-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
            {step > stepNum ? <Check className="w-4 h-4" /> : stepNum}
          </div>
          {stepNum < 4 && <div className={`w-16 h-1 mx-2 ${step > stepNum ? 'bg-brand-500' : 'bg-gray-200'}`} />}
        </div>)}
    </div>;
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{company.name}</h1>
              <p className="text-gray-600">{company.description}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {renderStepIndicator()}

        {/* Etapa 1: Seleção de Serviço */}
        {step === 1 && <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Escolha seu serviço
              </h2>
              <p className="text-gray-600">
                Selecione o tratamento que deseja realizar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map(service => <Card key={service.id} onClick={() => handleServiceSelect(service)} className="hover-lift cursor-pointer border-0 shadow-lg transition-all hover:shadow-xl bg-slate-50">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{service.name}</CardTitle>
                        <Badge variant="outline" className="border-blue ">
                          {service.category}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-brand-600">
                          R$ {service.price}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {service.duration}min
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>)}
            </div>
          </div>}

        {/* Etapa 2: Seleção de Profissional */}
        {step === 2 && <div className="space-y-6">
            <div className="text-center mb-8">
              <Button variant="ghost" onClick={() => setStep(1)} className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Escolha o profissional
              </h2>
              <p className="text-gray-600">
                Selecione quem irá realizar seu {selectedService?.name}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionals.filter(prof => prof.specialties.includes(selectedService?.category)).map(professional => <Card key={professional.id} className="hover-lift cursor-pointer border-0 shadow-lg transition-all hover:shadow-xl text-center" onClick={() => handleProfessionalSelect(professional)}>
                  <CardHeader>
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src={professional.avatar} />
                      <AvatarFallback className="bg-brand-100 text-brand-600 text-xl">
                        {professional.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-lg">{professional.name}</CardTitle>
                    <CardDescription>{professional.experience}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {professional.specialties.map((specialty, index) => <Badge key={index} variant="outline">
                          {specialty}
                        </Badge>)}
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>}

        {/* Etapa 3: Seleção de Data e Hora */}
        {step === 3 && <div className="space-y-6">
            <div className="text-center mb-8">
              <Button variant="ghost" onClick={() => setStep(2)} className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Escolha data e horário
              </h2>
              <p className="text-gray-600">
                Disponibilidade para {selectedProfessional?.name}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calendário */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Selecione a data
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2">
                    {nextWeekDays.map((date, index) => <button key={index} onClick={() => setSelectedDate(date.toISOString().split('T')[0])} className={`p-3 rounded-lg text-left transition-colors ${selectedDate === date.toISOString().split('T')[0] ? 'bg-brand-500 text-white' : 'bg-gray-50 hover:bg-gray-100'}`}>
                        <div className="font-medium">
                          {date.toLocaleDateString('pt-BR', {
                      weekday: 'long'
                    })}
                        </div>
                        <div className="text-sm opacity-75">
                          {date.toLocaleDateString('pt-BR')}
                        </div>
                      </button>)}
                  </div>
                </CardContent>
              </Card>

              {/* Horários */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Horários disponíveis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedDate ? <div className="grid grid-cols-3 gap-2">
                      {availableTimes.map(time => <button key={time} onClick={() => handleDateTimeSelect(selectedDate, time)} className="p-2 rounded-lg border text-center hover:bg-brand-50 hover:border-brand-200 transition-colors">
                          {time}
                        </button>)}
                    </div> : <p className="text-gray-500 text-center py-8">
                      Selecione uma data primeiro
                    </p>}
                </CardContent>
              </Card>
            </div>
          </div>}

        {/* Etapa 4: Dados pessoais e confirmação */}
        {step === 4 && <div className="space-y-6">
            <div className="text-center mb-8">
              <Button variant="ghost" onClick={() => setStep(3)} className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Confirme seu agendamento
              </h2>
              <p className="text-gray-600">
                Preencha seus dados para finalizar
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Formulário */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Seus dados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo *
                    </label>
                    <Input placeholder="Digite seu nome" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail *
                    </label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone *
                    </label>
                    <Input placeholder="(11) 99999-9999" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Observações (opcional)
                    </label>
                    <Textarea placeholder="Alguma informação importante para o atendimento..." rows={3} />
                  </div>
                </CardContent>
              </Card>

              {/* Resumo */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Resumo do agendamento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Serviço:</span>
                      <span className="font-medium">{selectedService?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Profissional:</span>
                      <span className="font-medium">{selectedProfessional?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Data:</span>
                      <span className="font-medium">
                        {selectedDate && new Date(selectedDate + 'T00:00:00').toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Horário:</span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duração:</span>
                      <span className="font-medium">{selectedService?.duration} minutos</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-brand-600">R$ {selectedService?.price}</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full gradient-brand border-0 mt-6">
                    <Check className="w-4 h-4 mr-2" />
                    Confirmar Agendamento
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Você receberá uma confirmação por e-mail
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>}
      </div>
    </div>;
};
export default PublicBooking;