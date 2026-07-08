import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../../assets/images/google.png";
import leftImage from "../../assets/images/left-side.jpeg";
import { ADMIN } from "../../utils/admin";

const Login = () => {

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
        if (formData.email === ADMIN.email && formData.password === ADMIN.password) {
            localStorage.setItem("user", JSON.stringify(ADMIN));
            alert("Admin Login Successful");
            navigate("/admin/dashboard");
            return;
        }
        const user = registeredUsers.find((item) =>
            item.email.toLowerCase() === formData.email.toLowerCase() && item.password === formData.password
        )
        if (!user) {
            alert("Invalid Email or Password");
            return;
        }
        if (user.role === "lawyer") {
            if (user.status === "pending") {
                alert("Waiting for admin Approval.");
                return;
            }

            if (user.status === "rejected") {
                alert("Your account has been rejected.");
                return;
            }

            if (user.status === "suspended") {
                alert("Your account has been suspended.");
                return;
            }
        }

        localStorage.setItem("user", JSON.stringify(user));
        alert("Login Successful");
        if (user.role === "client") {
            alert("admin dashboard open")
            navigate("/client/dashboard");
        } else if (user.role === "lawyer") {
            navigate("/lawyer/dashboard");
        }
    };

    return (
        <div className="bg-gray-200 min-h-screen flex items-center justify-center">

            <div className="w-[1200px] h-[700px] rounded-[30px] overflow-hidden shadow-2xl border border-gray-400 grid grid-cols-2">

                <div className="bg-white flex flex-col items-center justify-center px-16">

                    <img
                        src={leftImage}
                        alt="Image"
                        className="w-96 mb-8"
                    />

                    <h1 className="text-5xl font-bold mb-6">
                        Welcome!
                    </h1>

                    <p className="text-center text-gray-600 text-lg leading-8 max-w-md">
                        Optimize legal operations with our comprehensive platform,
                        empowering you to automate document creation, efficiently
                        manage contracts, and mitigate risk, all in one streamlined
                        solution.
                    </p>

                </div>


                <div className="bg-black text-white flex items-center justify-center">

                    <div className="w-[430px]">

                        <h2 className="text-5xl font-bold text-center mb-12">
                            LegalFlow
                        </h2>

                        <h3 className="text-3xl font-semibold text-center mb-2">
                            Login
                        </h3>

                        <p className="text-center text-gray-400 mb-10">
                            Welcome back! Please enter your login credentials
                        </p>

                        <form onSubmit={handleSubmit}>

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-transparent border border-gray-500 rounded-lg py-4 px-5 mb-5 text-white placeholder:text-gray-500 focus:outline-none focus:border-white"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mb-4">
                                    {errors.email}
                                </p>
                            )}

                            <div className="relative mb-4">

                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border border-gray-500 rounded-lg py-3 px-5 pr-12 text-white placeholder:text-gray-500 focus:outline-none focus:border-white"
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm mb-4">
                                        {errors.password}
                                    </p>
                                )}

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2"
                                >
                                    {showPassword ? "👁" : "👁"}
                                </button>

                            </div>

                            <div className="flex justify-between items-center mb-8">

                                <label className="flex items-center gap-2 text-sm text-gray-300">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        checked={formData.remember}
                                        onChange={handleChange}
                                        className="accent-white"
                                    />
                                    Remember me
                                </label>

                                <Link
                                    to="/forgot-password"
                                    className="text-sm underline"
                                >
                                    Forgot Password?
                                </Link>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-black font-semibold py-4 rounded-lg hover:bg-gray-300"
                            >
                                Login
                            </button>
                        </form>

                        <button
                            className="w-full border border-gray-500 rounded-lg py-4 mt-6 flex items-center justify-center gap-3 hover:bg-gray-900"
                        >
                            <img
                                src={googleLogo}
                                alt="Google"
                                className="w-6"
                            />
                            <span>Sign in with Google</span>
                        </button>

                        <p className="text-center mt-8 text-gray-400">
                            Don't have an account?{" "}
                            <Link
                                to="/signup"
                                className="text-white underline"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;