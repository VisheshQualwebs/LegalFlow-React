import Sidebar from "../../components/client/Sidebar";
import Navbar from "../../components/client/Navbar";
import DashboardCard from "../../components/client/DashboardCard";

const Dashboard = () => {

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <div className="p-8">
                    <div className="grid grid-cols-4 gap-6">
                        <DashboardCard title="Total Cases" value="0" />
                        <DashboardCard title="Pending Cases" value="0" />
                        <DashboardCard title="Active Cases" value="0" />
                        <DashboardCard title="Completed Cases" value="0" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;