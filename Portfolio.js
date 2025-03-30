import React from "react";

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Profile Image */}
      <img
        src="https://via.placeholder.com/150" // Replace with your image URL
        alt="Profile"
        className="w-40 h-40 rounded-full shadow-lg border-4 border-blue-500"
      />

      {/* Name & Title */}
      <h1 className="text-3xl font-bold mt-4 text-gray-800">Kamaliga</h1>
      <p className="text-lg text-gray-600">Web developer</p>

      {/* About Section */}
      <p className="mt-4 text-center max-w-md text-gray-700">
        I am a passionate web developer with experience in React, Tailwind CSS, and backend technologies. I love building beautiful and efficient web applications.
      </p>

      {/* Social Links */}
      <div className="mt-4 flex gap-4">
        <a href="https://github.com" target="_blank" className="text-blue-600 hover:text-blue-800">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" className="text-blue-600 hover:text-blue-800">
          LinkedIn
        </a>
        <a href="https://twitter.com" target="_blank" className="text-blue-600 hover:text-blue-800">
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
