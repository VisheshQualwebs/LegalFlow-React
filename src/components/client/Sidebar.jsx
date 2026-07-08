import { Link } from "react-router-dom";

const Sidebar = () => {

    return (
        <div className="w-64 bg-black text-white p-6">

            <h2 className="text-3xl font-bold mb-10">
                LegalFlow
            </h2>

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
        </div>
    );
};

export default Sidebar;