import { Calendar, Users, Settings, User, Clock, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader } from "@/components/ui/sidebar";
const menuItems = [{
  title: "Dashboard",
  url: "/app",
  icon: Home
}, {
  title: "Agendamentos",
  url: "/app/appointments",
  icon: Calendar
}, {
  title: "Profissionais",
  url: "/app/professionals",
  icon: User
}, {
  title: "Serviços",
  url: "/app/services",
  icon: Clock
}, {
  title: "Clientes",
  url: "/app/clients",
  icon: Users
}, {
  title: "Configurações",
  url: "/app/settings",
  icon: Settings
}];
export function AppSidebar() {
  const location = useLocation();
  return <Sidebar className="border-r bg-white">
      <SidebarHeader className="p-6 bg-slate-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
            <Calendar className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">BookingPro</h2>
            <p className="text-xs text-gray-500">Gestão de Agendamentos</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-slate-50">
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map(item => <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url} className="transition-colors hover:bg-brand-50 hover:text-brand-600 data-[active=true]:bg-brand-100 data-[active=true]:text-brand-700">
                    <Link to={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>;
}