import * as React from "react"

// import { SearchForm } from "./search-form"
import logo from "/images/logo-codisert-con-slogan-azul.png";
import logoCodisertBlanco from "/images/logo-codisert-blanco-slogan.png";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarFooter,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "./ui/sidebar"
// import { Label } from "./ui/label"
import { NavUser } from "./nav-user"
import { Link } from "react-router-dom"
import { HomeIcon, Users } from "lucide-react"


// This is sample data.
const data = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navLinks: [
    {
      title: "Dashboard",
      isActive: true,
      url: "/dashboard",
      icon: HomeIcon,
    },
    {
      title: "Gestión de Usuarios",
      icon: Users,
      items: [
        {
          title: "Lista de usuarios",
          url: "/dashboard/beneficiario",
          icon: Users,
        },
        {
          title: "Crear usuario",
          url: "/dashboard/create-user",
          icon: Users,
        },
      ]
    },
    {
      title: "Administración Avanzada",
      items: [
        {
          title: "Gestión de Administradores",
          url: "/dashboard/administradores",
          icon: Users,
        },
        {
          title: "Roles y permisos",
          url: "#",
          icon: Users,
        },
      ]
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex justify-center h-24 shadow-gray-400 shadow-sm">
        {/* <Label className="text-2xl font-extrabold">Dashboard</Label> */}
        <img src={logo} alt="Logo" className="w-40 h-auto block dark:hidden" />
        <img src={logoCodisertBlanco} alt="Logo Codisert" className="w-40 h-auto hidden dark:block" />
      </SidebarHeader>
      <SidebarContent className="pt-10">
        {/* <NavMain items={data.navLinks} /> */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navLinks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {item.url ? <Link to={item.url} className="font-medium">
                      {item.title}
                    </Link>: <span className="font-medium">{item.title}</span>}
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub>
                      {item.items.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton asChild>
                            <Link to={item.url}>{item.title}</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
