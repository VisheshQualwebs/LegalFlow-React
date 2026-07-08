import { Route, Routes } from "react-router-dom";

import ProtectedRoutes from "./ProtectedRoutes";
import AuthLayout from "../layouts/AuthLayout";
import AdminDashboard from "../pages/admin/Dashboard";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ClientDashboard from "../pages/client/Dashboard";
import LawyerDashboard from "../pages/lawyer/Dashboard"

function AppRoutes() {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Route>
            <Route path="/lawyer/dashboard" element={
                <ProtectedRoutes allowedRole="lawyer">
                    <LawyerDashboard />
                </ProtectedRoutes>
            } />
            <Route path="/admin/dashboard" element={
                <ProtectedRoutes allowedRole="admin">
                    <AdminDashboard />
                </ProtectedRoutes>
            } />
            <Route path="/client/dashboard" element={
                <ProtectedRoutes allowedRole="client">
                    <ClientDashboard />
                </ProtectedRoutes>
            } />
        </Routes>
    )
}

export default AppRoutes;