import React from 'react'

interface Props {
  children: React.ReactNode
}

const DashboardLayout = ({children}:Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        { children }
      </div>
    </div>
  )
}

export default DashboardLayout