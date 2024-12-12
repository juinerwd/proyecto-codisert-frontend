import React from 'react'
import Header from '../components/Header';
import { AppSidebar } from "../../../components/app-sidebar"

import {
    SidebarInset,
    SidebarProvider,
} from "../../../components/ui/sidebar"

interface Props {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Header />
                <div className="flex flex-1 flex-col gap-4 py-10 px-4">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    </>
  )
}

export default DashboardLayout