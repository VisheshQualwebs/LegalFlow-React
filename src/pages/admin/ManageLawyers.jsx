import { useEffect, useState } from "react";

function ManageLawyers() {

    const [lawyers, setLawyers] = useState([]);

    const loadLawyers = () => {
        const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
        const lawyerList = registeredUsers.filter((user) => user.role === "lawyer");
        setLawyers(lawyerList);
    }

    useEffect(() => {
        loadLawyers();
    }, []);

    const updateStatus = (email, status) => {
        const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

        const updatedUser = registeredUsers.map((user) => {
            if(user.email === email) {
                return {
                    ...user,
                    status,
                }
            }
            return user;
        });

        localStorage.setItem("registeredUsers", JSON.stringify(updatedUser));
        loadLawyers();
    }

    return (
        <div className="max-w-7xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">
                Manage Lawyers
            </h1>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <table className="w-full">
                    <thead className="bg-black text-white">
                        <tr>
                            <th className="p-4 text-left">Name</th>
                            <th className="p-4 text-left">Email</th>
                            <th className="p-4 text-left">Phone</th>
                            <th className="p-4 text-left">Status</th>
                            <th className="p-4 text-left">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {lawyers.length > 0 ? (
                            lawyers.map((lawyer) => (
                                <tr key={lawyer.email} className="border-b">
                                    <td className="p-4">{lawyer.fullName}</td>
                                    <td className="p-4">{lawyer.email}</td>
                                    <td className="p-4">{lawyer.phone}</td>
                                    <td className="p-4">{lawyer.status}</td>
                                    <td className="p-4">
                                        {lawyer.status === "pending" && (
                                            <>
                                                <button onClick={() => updateStatus(lawyer.email, "approved")}
                                                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                                                    Approve
                                                </button>

                                                <button onClick={() => updateStatus(lawyer.email, "rejected")}
                                                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                                                    Reject
                                                </button>
                                            </>
                                        )}
                                        {lawyer.status === "approved" && (
                                            <button onClick={() => updateStatus(lawyer.email, "suspended")}
                                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                                                Suspend
                                            </button>
                                        )}
                                        {lawyer.status === "suspended" && (
                                            <button onClick={() => updateStatus(lawyer.email, "approved")}
                                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                                                Activate
                                            </button>
                                        )}
                                        {lawyer.status === "rejected" && (
                                            <button onClick={() => updateStatus(lawyer.email, "approved")}
                                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                                                Approve
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center p-8">No Lawyers Found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageLawyers;