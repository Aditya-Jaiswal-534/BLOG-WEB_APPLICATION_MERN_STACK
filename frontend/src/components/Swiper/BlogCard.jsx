import React from 'react';

const BlogCard = ({ title, imageUrl, _id }) => {
    return (
        <div
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            onClick={() => {
                window.location.href = `/blog?blogid=${_id}`;
            }}
        >
            <div
                className="w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-sm bg-gray-800 bg-opacity-75 rounded-lg px-2 py-1">Click to Read More</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
