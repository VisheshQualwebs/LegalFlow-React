import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyCases = () => {

    const [cases, setCases] = useState([]);
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        const registerCase = JSON.parse(localStorage.getItem("registerCase")) || [];
        setCases(registerCase);
    }, []);

    const filteredCases = cases.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.caseType.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <div className="max-w-7xl mx-auto px-8 mt-10 flex justify-between items-center">
                <h2 className="text-4xl font-bold">Cases</h2>
                <Link to="/client/create-case" className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800">
                    + Add Case
                </Link>
            </div>

            <div>
                <input type="text" value={search} onChange={handleChange} placeholder="Search Cases..."
                    className="w-full mt-2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>

            <div className="max-w-7xl mx-auto px-8 mt-8 mb-10">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="p-4 text-left">Name</th>
                                <th className="p-4 text-left">Title</th>
                                <th className="p-4 text-left">Case Type</th>
                                <th className="p-4 text-left">Court</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredCases.length > 0 ? (
                                filteredCases.map((item) => (
                                    <tr key={item.id} className="border-b">
                                        <td className="p-4">
                                            {item.name}
                                        </td>

                                        <td className="p-4">
                                            {item.title}
                                        </td>

                                        <td className="p-4">
                                            {item.caseType}
                                        </td>

                                        <td className="p-4">
                                            {item.court}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center p-5">No Cases Found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCases;