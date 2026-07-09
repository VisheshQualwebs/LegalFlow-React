import { Link } from "react-router-dom";

const Sidebar = () => {

    const user = JSON.parse(localStorage.getItem("user")) || [];
    if (!user) return null;

    return (
        <div className="w-64 bg-black text-white p-6">

            <h2 className="text-3xl font-bold mb-10">
                LegalFlow
            </h2>

            {user.role === "client" && (
                <nav className="space-y-5">
                    <Link to="/client/dashboard" className="block hover:text-gray-400">
                        Dashboard
                    </Link>

                    <Link to="/client/find-lawyers" className="block hover:text-gray-400">
                        Find Lawyers
                    </Link>

                    <Link to="/client/create-case" className="block hover:text-gray-400">
                        Create Case
                    </Link>

                    <Link to="/client/my-cases" className="block hover:text-gray-400">
                        My Cases
                    </Link>

                    <Link to="/client/documents" className="block hover:text-gray-400">
                        Documents
                    </Link>

                    <Link to="/client/payments" className="block hover:text-gray-400">
                        Payments
                    </Link>

                    <Link to="/client/profile" className="block hover:text-gray-400">
                        Profile
                    </Link>
                </nav>
            )}

            {user.role === "lawyer" && (
                <nav className="space-y-5">
                    <Link to="/lawyer/dashboard" className="block hover:text-gray-400">
                        Dashboard
                    </Link>

                    <Link to="/lawyer/my-cases" className="block hover:text-gray-400">
                        My Cases
                    </Link>

                    <Link to="/lawyer/clients" className="block hover:text-gray-400">
                        Clients
                    </Link>

                    <Link to="/lawyer/documents" className="block hover:text-gray-400">
                        Documents
                    </Link>

                    <Link to="/lawyer/payments" className="block hover:text-gray-400">
                        Payments
                    </Link>

                    <Link to="/lawyer/profile" className="block hover:text-gray-400">
                        Profile
                    </Link>
                </nav>
            )}

            {user.role === "admin" && (
                <nav className="space-y-5">
                    <Link to="/admin/dashboard" className="block hover:text-gray-400">
                        Dashboard
                    </Link>

                    <Link to="/admin/manage-lawyers" className="block hover:text-gray-400">
                        Manage Lawyers
                    </Link>

                    <Link to="/admin/manage-clients" className="block hover:text-gray-400">
                        Manage Clients
                    </Link>

                    <Link to="/admin/manage-cases" className="block hover:text-gray-400">
                        Manage Cases
                    </Link>

                    <Link to="/admin/assign-lawyers" className="block hover:text-gray-400">
                        Assign Lawyers
                    </Link>

                    <Link to="/admin/reports" className="block hover:text-gray-400">
                        Reports
                    </Link>

                    <Link to="/admin/payments" className="block hover:text-gray-400">
                        Payments
                    </Link>

                    <Link to="/admin/settings" className="block hover:text-gray-400">
                        Settings
                    </Link>
                </nav>
            )}
        </div>
    );
};

export default Sidebar;