import { Route, Routes } from "react-router-dom"
import Login from "../features/Auth/pages/Login"
import { DashboardRouter } from "../features/Dashboard/router/DashboardRouter"
import NotFound from "../pages/NotFound"
import ProtectedRoute from "./ProtectedRoute"
import { useAuthStore } from "../store/authStore"
import PublicRoute from "./PublicRoute"
import { routes } from './routesConfig';


export const AppRouter = () => {
    const isAuthenticated = useAuthStore(state => state.isAuthenticated)

    return (

        <Routes>

            <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
                <Route path="/" element={<Login />} />
            </Route>

            {/* {routes && routes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={
                        <ProtectedRoute roles={route.roles} isAuthenticated={isAuthenticated}/>
                    }
                >
                    <Route path={`/dashboard/${route.path}`} element={route.element} />
                </Route>
            ))} */}


            <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
                <Route path="/dashboard/*" element={<DashboardRouter />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}