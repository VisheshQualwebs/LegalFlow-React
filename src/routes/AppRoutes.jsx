import { Route, Routes } from "react-router-dom";

import ProtectedRoutes from "../components/ProtectedRoutes";
import AuthLayout from "../layouts/AuthLayout";
import AdminDashboard from "../pages/admin/Dashboard";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Dashboard from "../pages/client/Dashboard";

function AppRoutes() {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Route>
            <Route path="/lawyer/dashboard" element={
                <ProtectedRoutes allowedRole="lawyer">
                    <Dashboard />
                </ProtectedRoutes>
            } />
            <Route path="/admin/dashboard" element={
                <ProtectedRoute allowedRole="admin">
                    <AdminDashboard />
                </ProtectedRoute>
            } />
            <Route path="/client/dashboard" element={
                <ProtectedRoute allowedRole="client">
                    <ClientDashboard />
                </ProtectedRoute>
            } />
        </Routes>
    )
}

export default AppRoutes;