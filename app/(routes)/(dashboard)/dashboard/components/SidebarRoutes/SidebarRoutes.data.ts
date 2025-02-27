import { Calendar, Car, Heart, SquareGanttChart } from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: Car,
    label: "Carros",
    href: "/dashboard",
  },
  {
    icon: Calendar,
    label: "Reservas de Carros",
    href: "/reserves",
  },
  {
    icon: Heart,
    label: "Carros Favoritos",
    href: "/loved-cars",
  },
];

export const dataAdminSidebar = [
  {
    icon: SquareGanttChart,
    label: "Gestión de carros",
    href: "/dashboard/admin/cars-manager",
  },
  {
    icon: Calendar,
    label: "Todas las reservas",
    href: "/dashboard/admin/reserves-admin",
  },
];
