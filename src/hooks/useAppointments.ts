
import { useState } from "react";

export interface Appointment {
  id: string;
  clientName: string;
  clientPhone: string;
  clientEmail?: string;
  serviceId: string;
  serviceName: string;
  servicePrice: number;
  serviceDuration: number;
  professionalId: string;
  professionalName: string;
  date: string;
  time: string;
  status: 'confirmado' | 'pendente' | 'cancelado';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  category: string;
  status: 'ativo' | 'inativo';
}

export interface Professional {
  id: string;
  name: string;
  email: string;
  phone: string;
  specialties: string[];
  status: 'ativo' | 'inativo' | 'férias';
  workingHours: string;
}

export interface Client {
  id: string;
  name: string;
  email?: string;
  phone: string;
  notes?: string;
  lastVisit?: string;
  totalAppointments: number;
}

export const useAppointments = () => {
  // Mock data - em uma aplicação real viria de uma API/Supabase
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: "1",
      clientName: "Maria Silva",
      clientPhone: "(11) 99999-9999",
      clientEmail: "maria@email.com",
      serviceId: "1",
      serviceName: "Corte e Escova",
      servicePrice: 80,
      serviceDuration: 60,
      professionalId: "1",
      professionalName: "Ana Costa",
      date: "2024-01-15",
      time: "09:00",
      status: "confirmado",
      notes: "Cliente preferida corte mais curto",
      createdAt: "2024-01-10T10:00:00Z",
      updatedAt: "2024-01-10T10:00:00Z"
    },
    {
      id: "2",
      clientName: "João Santos",
      clientPhone: "(11) 88888-8888",
      serviceId: "2",
      serviceName: "Barba e Cabelo",
      servicePrice: 60,
      serviceDuration: 45,
      professionalId: "2",
      professionalName: "Carlos Lima",
      date: "2024-01-15",
      time: "10:30",
      status: "pendente",
      createdAt: "2024-01-12T14:00:00Z",
      updatedAt: "2024-01-12T14:00:00Z"
    }
  ]);

  const [services] = useState<Service[]>([
    {
      id: "1",
      name: "Corte Feminino",
      description: "Corte de cabelo personalizado para mulheres",
      duration: 60,
      price: 80,
      category: "Cabelo",
      status: "ativo"
    },
    {
      id: "2",
      name: "Corte Masculino",
      description: "Corte moderno para homens",
      duration: 45,
      price: 50,
      category: "Cabelo",
      status: "ativo"
    },
    {
      id: "3",
      name: "Manicure",
      description: "Cuidados completos para unhas das mãos",
      duration: 45,
      price: 35,
      category: "Unhas",
      status: "ativo"
    },
    {
      id: "4",
      name: "Massagem Relaxante",
      description: "Massagem corporal para relaxamento",
      duration: 90,
      price: 120,
      category: "Bem-estar",
      status: "ativo"
    }
  ]);

  const [professionals] = useState<Professional[]>([
    {
      id: "1",
      name: "Ana Costa",
      email: "ana@clinica.com",
      phone: "(11) 99999-1111",
      specialties: ["Cabelo"],
      status: "ativo",
      workingHours: "08:00 - 18:00"
    },
    {
      id: "2",
      name: "Carlos Lima",
      email: "carlos@barbearia.com",
      phone: "(11) 99999-2222",
      specialties: ["Barba", "Cabelo"],
      status: "ativo",
      workingHours: "09:00 - 19:00"
    },
    {
      id: "3",
      name: "Beatriz Rocha",
      email: "beatriz@clinica.com",
      phone: "(11) 99999-3333",
      specialties: ["Unhas"],
      status: "ativo",
      workingHours: "08:30 - 17:30"
    },
    {
      id: "4",
      name: "Maria Fernanda",
      email: "maria@spa.com",
      phone: "(11) 99999-4444",
      specialties: ["Massagem"],
      status: "ativo",
      workingHours: "10:00 - 18:00"
    }
  ]);

  const createAppointment = (appointmentData: Omit<Appointment, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newAppointment: Appointment = {
      ...appointmentData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    setAppointments(prev => [...prev, newAppointment]);
    return newAppointment;
  };

  const updateAppointment = (id: string, updates: Partial<Appointment>) => {
    setAppointments(prev => 
      prev.map(appointment => 
        appointment.id === id 
          ? { ...appointment, ...updates, updatedAt: new Date().toISOString() }
          : appointment
      )
    );
  };

  const deleteAppointment = (id: string) => {
    setAppointments(prev => prev.filter(appointment => appointment.id !== id));
  };

  const getAppointmentsByDate = (date: string) => {
    return appointments.filter(appointment => appointment.date === date);
  };

  const getAppointmentsByProfessional = (professionalId: string) => {
    return appointments.filter(appointment => appointment.professionalId === professionalId);
  };

  const getAppointmentStats = () => {
    const today = new Date().toISOString().split('T')[0];
    const todayAppointments = appointments.filter(apt => apt.date === today);
    
    return {
      total: appointments.length,
      today: todayAppointments.length,
      confirmed: appointments.filter(apt => apt.status === 'confirmado').length,
      pending: appointments.filter(apt => apt.status === 'pendente').length,
      cancelled: appointments.filter(apt => apt.status === 'cancelado').length
    };
  };

  return {
    appointments,
    services,
    professionals,
    createAppointment,
    updateAppointment,
    deleteAppointment,
    getAppointmentsByDate,
    getAppointmentsByProfessional,
    getAppointmentStats
  };
};
