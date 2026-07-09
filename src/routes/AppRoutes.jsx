import { Route, Routes } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";
import AuthLayout from "../layouts/AuthLayout";
import ClientLayout from "../layouts/ClientLayout";
import LawyerLayout from "../layouts/LawyerLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminPayments from "../pages/admin/AdminPayments";
import AssignLawyers from "../pages/admin/AssignLawyers";
import ManageCases from "../pages/admin/ManageCases";
import ManageClients from "../pages/admin/ManageClients";
import ManageLawyers from "../pages/admin/ManageLawyers";
import Reports from "../pages/admin/Reports";
import Settings from "../pages/admin/Settings";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ClientCases from "../pages/client/ClientCases";
import ClientDashboard from "../pages/client/ClientDashboard";
import ClientDocuments from "../pages/client/ClientDocuments";
import ClientPayments from "../pages/client/ClientPayments";
import ClientProfile from "../pages/client/ClientProfile";
import CreateCase from "../pages/client/CreateCase";
import FindLawyers from "../pages/client/Findlawyers";
import Clients from "../pages/lawyer/Clients";
import LawyerCases from "../pages/lawyer/LawyerCases";
import LawyerDashboard from "../pages/lawyer/LawyerDashboard";
import LawyerDocuments from "../pages/lawyer/LawyerDocuments";
import LawyerPayments from "../pages/lawyer/LawyerPayments";
import LawyerProfile from "../pages/lawyer/LawyerProfile";
import ProtectedRoutes from "./ProtectedRoutes";

function AppRoutes() {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Route>
            <Route path="/lawyer" element={
                <ProtectedRoutes allowedRole="lawyer">
                    <LawyerLayout />
                </ProtectedRoutes>}>
                <Route path="dashboard" element={<LawyerDashboard />} />
                <Route path="payments" element={<LawyerPayments />} />
                <Route path="my-cases" element={<LawyerCases />} />
                <Route path="documents" element={<LawyerDocuments />} />
                <Route path="clients" element={<Clients />} />
                <Route path="profile" element={<LawyerProfile />} />
            </Route>
            <Route path="/admin" element={
                <ProtectedRoutes allowedRole="admin">
                    <AdminLayout />
                </ProtectedRoutes>}>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="assign-lawyers" element={<AssignLawyers />} />
                <Route path="manage-lawyers" element={<ManageLawyers />} />
                <Route path="manage-cases" element={<ManageCases />} />
                <Route path="manage-clients" element={<ManageClients />} />
                <Route path="payments" element={<AdminPayments />} />
                <Route path="reports" element={<Reports />} />
                <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="/client" element={
                <ProtectedRoutes allowedRole="client">
                    <ClientLayout />
                </ProtectedRoutes>}>
                <Route path="dashboard" element={<ClientDashboard />} />
                <Route path="find-lawyers" element={<FindLawyers />} />
                <Route path="create-case" element={<CreateCase />} />
                <Route path="my-cases" element={<ClientCases />} />
                <Route path="documents" element={<ClientDocuments />} />
                <Route path="payments" element={<ClientPayments />} />
                <Route path="profile" element={<ClientProfile />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;