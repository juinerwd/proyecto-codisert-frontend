import { Route, Routes } from "react-router-dom"

import Dashboard from "../pages/Dashboard"
import Beneficiario from "../pages/Beneficiario"
import Admin from "../pages/Admin"
import CreateUser from "../pages/CreateUser"
import Account from "../pages/Account"



export const DashboardRouter = () => {
  
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="beneficiario" element={<Beneficiario />} />
        <Route path="create-user" element={<CreateUser />} />
        <Route path="administradores" element={<Admin />} />
        <Route path="account" element={<Account />} />
    </Routes>
  )
}