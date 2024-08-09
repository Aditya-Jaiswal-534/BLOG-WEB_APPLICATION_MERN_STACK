import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

const UserProfile = ({ user }) => {
    useEffect(() => {

    }, [user]);

    return (
        <div className="wrapper bg-slate-500">
            <Navbar />
            <div className="max-w-2xl mx-auto mt-12 p-8 bg-gray-800 rounded-lg shadow-2xl">
                <div className="flex items-center mb-8">
                    {/* Left Side: Hardcoded Profile Picture */}
                    <div className="relative w-28 h-28 mr-6">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full border-4 border-indigo-500 shadow-lg"
                        />
                        <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-400 rounded-full border-2 border-gray-800"></div>
                    </div>
                    {/* Right Side: User Info */}
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">{user.name}</h2>
                        <p className="text-lg text-gray-300">{user.email}</p>
                    </div>
                </div>
                {/* List of Blogs */}
                <div className="mt-8">
                    <h3 className="text-2xl font-semibold text-white mb-6">Blogs</h3>
                    <div className="space-y-4">
                        {user.blogs.length > 0 ? (
                            user.blogs.map((blog, index) => (
                                <div
                                    key={index}
                                    className="p-4 bg-gray-700 rounded-lg shadow-md hover:bg-indigo-600 transition-all duration-300 ease-in-out"
                                >
                                    <h4 className="text-xl text-white font-semibold">{blog.name}</h4>
                                    <p className="text-gray-300 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No blogs available.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
