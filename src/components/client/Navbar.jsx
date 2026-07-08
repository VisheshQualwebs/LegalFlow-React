const Navbar = () => {
    
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="bg-white shadow p-5 flex justify-between items-center">
            <h1 className="text-3xl font-bold">
                Welcome, {user.fullName}
            </h1>

            <button className="bg-red-600 text-white px-5 py-2 rounded">
                Logout
            </button>
        </div>
    );
};

export default Navbar;