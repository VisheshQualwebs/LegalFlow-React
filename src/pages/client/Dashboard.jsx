import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
    const user = localStorage.getItem("user");
    const logout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };
    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-5">

            <h1 className="text-4xl font-bold">
                Dashboard
            </h1>

            <h2 className="text-2xl">
                Welcome {user?.email}
            </h2>

            <button onClick={logout} className="bg-red-500 text-white px-6 py-3 rounded">
                Logout
            </button>

        </div>
    );
}

export default Dashboard;