import { useState } from "react";
import Navbar from "../../components/client/Navbar";
import Sidebar from "../../components/client/Sidebar";
import { Link, useNavigate } from "react-router-dom";

const CreateCase = () => {

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        name: "",
        title: "",
        caseType: "",
        court: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.caseType.trim()) {
            newErrors.caseType = "Case Type is Required";
        }

        return newErrors;
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});

        const user = JSON.parse(localStorage.getItem("user"));
        const registerCase = JSON.parse(localStorage.getItem("registerCase")) || [];
        const caseData = {
            id: Date.now(),
            clientId: user.email,
            clientName: user.fullName,
            status: "Pending",
            ...formData,
        };
        registerCase.push(caseData);
        localStorage.setItem("registerCase", JSON.stringify(registerCase));
        alert("Case Registered Successfully");
        navigate("/client/dashboard");
    };

    return (

        <div className="max-w-5xl mx-auto mt-10 mb-10">
            <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center mb-8">Add New Case</h2>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-6">

                        <div>
                            <label className="font-semibold">Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange}
                                className="w-full mt-2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black" />
                        </div>

                        <div>
                            <label className="font-semibold">Title</label>
                            <input type="text" required name="title" value={formData.title} onChange={handleChange}
                                className="w-full mt-2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black" />
                        </div>

                        <div>
                            <label className="font-semibold">Case Type</label>
                            <select name="caseType" value={formData.caseType} onChange={handleChange}
                                className="w-full mt-2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black">
                                <option>Select Type</option>
                                <option>Civil</option>
                                <option>Criminal</option>
                                <option>Property</option>
                                <option>Family</option>
                                <option>Corporate</option>
                            </select>
                        </div>

                        <div>
                            <label className="font-semibold">Court Name</label>
                            <input type="text" name="court" value={formData.court} onChange={handleChange}
                                className="w-full mt-2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black" />
                        </div>
                        
                        <div className="col-span-2">
                            <label className="font-semibold">Case Description</label>
                            <textarea rows="5" name="description" value={formData.description} onChange={handleChange}
                                className="w-full mt-2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter case details..."></textarea>
                        </div>

                    </div>

                    <div className="flex justify-end gap-4 mt-8">

                        <Link to="/client/dashboard"
                            className="bg-gray-300 px-6 py-3 rounded-lg hover:bg-gray-400">
                            Cancel
                        </Link>

                        <button type="submit"
                            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
                            Save Case
                        </button>
                    </div>
                </form>
            </div >
        </div >
    )
};

export default CreateCase;