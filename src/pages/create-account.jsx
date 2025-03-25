import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        companyName: "",
        isAgency: "yes",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <div className="flex justify-center items-center min-h-screen p-2">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold mb-4 text-center">Create your PopX account</h2>
                <form>
                    <label className="block mb-2 text-sm font-medium">Full Name*</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full p-2 h-[40px] border rounded-md mb-3"
                        placeholder="Enter your full name"
                    />

                    <label className="block mb-2 text-sm font-medium text-blue-600">Phone Number*</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full h-[40px] p-2 border rounded-md mb-3"
                        placeholder="Enter your phone number"
                    />

                    <label className="block mb-2 text-sm font-medium text-blue-600">Email Address*</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full h-[40px] p-2 border rounded-md mb-3"
                        placeholder="Enter your email"
                    />

                    <label className="block mb-2 text-sm font-medium text-blue-600">Password*</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full h-[40px] p-2 border rounded-md mb-3"
                        placeholder="Enter your password"
                    />

                    <label className="block mb-2 text-sm font-medium text-blue-600">Company Name</label>
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full h-[40px] p-2 border rounded-md mb-3"
                        placeholder="Enter your company name"
                    />

                    <label className="block mb-2 text-sm font-medium">Are you an Agency?*</label>
                    <div className="flex gap-4 mb-4">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="isAgency"
                                value="yes"
                                checked={formData.isAgency === "yes"}
                                onChange={handleChange}
                                className="w-4 h-4"
                            />
                            Yes
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="isAgency"
                                value="no"
                                checked={formData.isAgency === "no"}
                                onChange={handleChange}
                                className="w-4 h-4"
                            />
                            No
                        </label>
                    </div>

                    <button onClick={() => navigate('/setting')} className="w-full h-[40px] bg-purple-600 text-white py-4 rounded-md hover:bg-purple-700 transition">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateAccount
