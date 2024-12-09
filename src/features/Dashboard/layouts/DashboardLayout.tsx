import React from 'react'
import SideBar from '../components/SideBar';
import Header from '../components/Header';

interface Props {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen w-full">
      <Header />
      <SideBar />
      <div className="w-full p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout