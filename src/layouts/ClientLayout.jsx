import { Outlet } from "react-router-dom";

const ClientLayout = () => {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    );
};

export default ClientLayout;