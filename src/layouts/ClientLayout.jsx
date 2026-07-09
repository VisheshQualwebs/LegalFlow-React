import { Outlet } from "react-router-dom";
import Sidebar from "../components/client/Sidebar";
import Navbar from "../components/client/Navbar";

const ClientLayout = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <div className="flex-1">
                <Navbar />
                <div className="p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ClientLayout;