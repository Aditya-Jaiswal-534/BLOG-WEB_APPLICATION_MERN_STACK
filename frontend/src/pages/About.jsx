import React from 'react';
import Navbar from '../components/Navbar';
const About = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-purple-900 tracking-tight">
            About Us
          </h1>
          <p className="mt-4 text-xl text-gray-800 max-w-3xl mx-auto">
            Discover the story behind our blog, our mission, and the team that brings it all together.
          </p>
          <div className="mt-6">
            <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-24 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16 bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition duration-300">
          <h2 className="text-4xl font-semibold text-purple-800 hover:text-indigo-600 transition duration-300">
            Our Mission
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Our mission is to provide valuable insights, stories, and resources to our readers, empowering them with knowledge and inspiration. We strive to create a space where ideas are shared, creativity flourishes, and communities are built.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold text-purple-800 hover:text-pink-600 transition duration-300">
            Meet the Team
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Jane Doe', 'John Smith', 'Emily Johnson'].map((name, index) => (
              <div key={index} className="group bg-white shadow-lg rounded-lg p-8 transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 text-center">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-500 group-hover:scale-110 transition duration-300"
                  src={`https://via.placeholder.com/150?text=${name.split(' ')[0]}`}
                  alt="Team Member"
                />
                <h3 className="text-xl font-bold text-purple-800 group-hover:text-indigo-600">
                  {name}
                </h3>
                <p className="text-purple-600">
                  {index === 0 ? 'Co-Founder & Editor' : index === 1 ? 'Lead Developer' : 'Content Strategist'}
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  {index === 0
                    ? 'Jane is passionate about storytelling and brings years of editorial experience to the team.'
                    : index === 1
                    ? 'John is the tech wizard behind the scenes, ensuring our blog runs smoothly.'
                    : 'Emily curates and plans content to keep our readers engaged and informed.'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-purple-800 hover:text-green-600 transition duration-300">
            Join Our Community
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Whether you’re a reader, a writer, or just someone who loves to learn, we invite you to join our community. Subscribe to our newsletter, follow us on social media, and be part of the conversation.
          </p>
          <div className="mt-8">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 transition duration-300 transform hover:scale-105">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Decorative Section Divider */}
        <div className="mt-16">
          <div className="h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 w-full mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
