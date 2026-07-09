import { useEffect, useState } from "react";
import DashboardCard from "../../components/client/DashboardCard";

const AdminDashboard = () => {

    const [cases, setCases] = useState([]);

    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    useEffect(() => {
        const registerCase = JSON.parse(localStorage.getItem("registerCase")) || [];
        setCases(registerCase);
    }, []);

    const totalCase = cases.length;
    const activeCases = cases.filter((item) => item.status === "Active").length;
    const completedCases = cases.filter((item) => item.status === "Completed").length;
    const totalLawyers = registeredUsers.filter((user) => user.role === "lawyer").length;
    const totalClients = registeredUsers.filter((user) => user.role === "client").length;

    return (
        <div className="p-8">
            <div className="grid grid-cols-4 gap-6">
                <DashboardCard title="Total Cases" value={totalCase} />
                <DashboardCard title="Active Cases" value={activeCases} />
                <DashboardCard title="Completed Cases" value={completedCases} />
                <DashboardCard title="Total Lawyers" value={totalLawyers} />
                <DashboardCard title="Total Clients" value={totalClients} />
            </div>
        </div>
    );
}

export default AdminDashboard;