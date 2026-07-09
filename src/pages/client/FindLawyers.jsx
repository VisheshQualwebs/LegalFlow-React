import { useEffect, useState } from "react";

const FindLawyers = () => {
    const [lawyers, setLawyers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

        const approvedLawyers = registeredUsers.filter((user) =>
            user.role === "lawyer" &&
            user.status === "approved"
        );

        setLawyers(approvedLawyers);
    }, []);

    const filteredLawyers = lawyers.filter((lawyer) =>
        lawyer.name.toLowerCase().includes(search.toLowerCase()) ||
        lawyer.email.toLowerCase().includes(search.toLowerCase()) ||
        lawyer.specialization?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto px-8 py-8">

            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold">
                    Find Lawyers
                </h1>

                <input type="text" placeholder="Search Lawyer..." value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border rounded-lg px-4 py-3 w-80 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>

            <div className="grid grid-cols-3 gap-6">

                {filteredLawyers.length > 0 ? (
                    filteredLawyers.map((lawyer, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md p-6" >

                            <div className="flex justify-center">
                                <img src="#" alt="Lawyer" className="rounded-full" />
                            </div>
                            <h2 className="text-2xl font-bold text-center mt-4"> {lawyer.name} </h2>
                            <p className="text-center text-gray-500 mt-2">{lawyer.specialization || "General Lawyer"} </p>

                            <div className="mt-6 space-y-2">
                                <p> <strong>Email :</strong> {lawyer.email} </p>
                                <p> <strong>Phone :</strong> {lawyer.phone} </p>
                                <p> <strong>Experience :</strong>{" "} {lawyer.experience || "Not Added"} </p>
                            </div>

                            <button className="w-full bg-black text-white mt-6 py-3 rounded-lg hover:bg-gray-800">
                                Hire Lawyer
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="col-span-3 text-center py-10 text-gray-500 text-xl">
                        No Lawyers Found
                    </div>
                )}
            </div>
        </div>
    );
};

export default FindLawyers;