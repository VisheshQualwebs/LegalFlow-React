import { Link } from "react-router-dom";

const Sidebar = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) return null;

    const menus = [
        {
            title: "Dashboard",
            url: `/${user.role}/dashboard`,
            visible_roles: ["admin", "lawyer", "client"],
        },
        {
            title: "Find Lawyers",
            url: "/client/find-lawyers",
            visible_roles: ["client"],
        },
        {
            title: "Create Case",
            url: "/client/create-case",
            visible_roles: ["client"],
        },
        {
            title: "My Cases",
            url: `/${user.role}/my-cases`,
            visible_roles: ["client", "lawyer"],
        },
        {
            title: "Clients",
            url: "/lawyer/clients",
            visible_roles: ["lawyer"],
        },
        {
            title: "Payments",
            url: `/${user.role}/payments`,
            visible_roles: ["client", "lawyer", "admin"],
        },
        {
            title: "Profile",
            url: `/${user.role}/profile`,
            visible_roles: ["client", "lawyer"],
        },

        {
            title: "Manage Lawyers",
            url: "/admin/manage-lawyers",
            visible_roles: ["admin"],
        },
        {
            title: "Manage Clients",
            url: "/admin/manage-clients",
            visible_roles: ["admin"],
        },
        {
            title: "Manage Cases",
            url: "/admin/manage-cases",
            visible_roles: ["admin"],
        },
        {
            title: "Assign Lawyers",
            url: "/admin/assign-lawyers",
            visible_roles: ["admin"],
        },
        {
            title: "Reports",
            url: "/admin/reports",
            visible_roles: ["admin"],
        },
        {
            title: "Settings",
            url: "/admin/settings",
            visible_roles: ["admin"],
        },
    ];

    return (
        <div className="w-64 bg-black text-white p-6 min-h-screen">
            <h2 className="text-3xl font-bold mb-10">
                LegalFlow
            </h2>

            <nav className="space-y-5">
                {menus.filter((menu) =>
                    menu.visible_roles.includes(user.role)
                ).map((menu) => (
                    <Link key={menu.title} to={menu.url} className="block hover:text-gray-400">
                        {menu.title}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;