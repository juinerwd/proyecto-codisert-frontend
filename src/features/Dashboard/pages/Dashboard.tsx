import RevenueCard from "../components/RevenueCard"
import DashboardLayout from "../layouts/DashboardLayout"


const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <RevenueCard title="Usuarios registrados" value="12,345" text="Total de usuarios registrados activos" />
        <RevenueCard title="Total de equipos" value="12,345" text="Total de equipos registrados activos" />
        <RevenueCard title="Total de administradores" value="10" text="Total de administradores registrados activos" />
      </div>
    </DashboardLayout>
  )
}

export default Dashboard