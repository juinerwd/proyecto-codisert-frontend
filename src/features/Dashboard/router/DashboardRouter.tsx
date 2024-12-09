import { Route, Routes } from "react-router-dom"

import Dashboard from "../pages/Dashboard"
import Beneficiario from "../pages/Beneficiario"



export const DashboardRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="beneficiario" element={<Beneficiario />} />
        

    </Routes>
  )
}