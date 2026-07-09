import { Route, Routes } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import ClientLayout from "../layouts/ClientLayout";
import AdminDashboard from "../pages/admin/Dashboard";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import CreateCase from "../pages/client/CreateCase";
import Dashboard from "../pages/client/Dashboard";
import Documents from "../pages/client/Documents";
import FindLawyers from "../pages/client/Findlawyers";
import Payments from "../pages/client/Payments";
import Profile from "../pages/client/Profile";
import LawyerDashboard from "../pages/lawyer/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import MyCases from "../pages/client/MyCases";

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
            <Route path="/client" element={
                <ProtectedRoutes allowedRole="client">
                    <ClientLayout />
                </ProtectedRoutes>}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="find-lawyers" element={<FindLawyers />} />
                <Route path="create-case" element={<CreateCase />} />
                <Route path="my-cases" element={<MyCases />} />
                <Route path="documents" element={<Documents />} />
                <Route path="payments" element={<Payments />} />
                <Route path="profile" element={<Profile />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;