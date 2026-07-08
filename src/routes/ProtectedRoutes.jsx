import { Navigate } from "react-router-dom";

function ProtectedRoutes({ childern, allowedRole }) {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (user.role !== allowedRole) {
        return <Navigate to="/login" replace />;
    }

    return childern;
}

export default ProtectedRoutes;