import { Route, Routes } from "react-router-dom"
import Login from "../features/Auth/pages/Login"
import { DashboardRouter } from "../features/Dashboard/router/DashboardRouter"
import NotFound from "../pages/NotFound"


export const AppRouter = () => {
    return (

        <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/dashboard/*" element={<DashboardRouter />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}