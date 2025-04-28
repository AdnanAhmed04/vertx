import React from "react";
import { Mail, Linkedin, X } from "lucide-react"; // using lucide icons
import { FaRegBuilding } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";


const Profile = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-center md:justify-between p-0 border-b border-gray-900 overflow-x-auto">
        <div className="flex">
          {['Overview', 'Portfolio', 'Experience', 'Media'].map((item, idx) => (
            <button
              key={item}
              className={`flex-1 text-white text-sm md:text-base py-3 px-4 hover:bg-gray-800 ${item === 'More' ? 'hidden md:block' : ''} ${idx !== 0 ? 'border-l border-gray-700' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="hidden md:block">
          <p className="px-8">More</p>

        </div>
      </nav>

      {/* Content */}
      <div className="p-4 md:p-8 space-y-8">
        {/* Overview Title */}
        <h1 className="text-2xl md:text-3xl font-bold">Overview</h1>

        {/* Profile Card */}
        <div className="bg-gray-900 p-4 md:p-6 rounded-2xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="bg-gray-700 rounded-full w-16 h-16"></div>
          <div className="text-center  md:text-left">
          <h2 className="text-lg md:text-xl flex justify-center md:justify-start gap-4 items-center font-semibold">
  Mr Adnan <SiTicktick className="text-green-400" />
</h2>
         <div className="flex justify-items-center gap-2">
         <p className="text-sm clear-bothf;ex ">Co-Founder & CEO @Vertx</p>
         <img className="w-4 h-4" src="../../../public/img2.png" alt="" srcset="" />
          
         </div>
          
            <span className="inline-block mt-1 px-2 py-0.5 bg-gray-700 text-xs rounded">Entrepreneur</span>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <Linkedin className="w-5 h-5 cursor-pointer" />
              <X className="w-5 h-5 cursor-pointer" />
              <Mail className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Founded Companies and Experience */}
        

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {/* Founded Companies */}
  <div className="bg-gray-900 p-4 md:p-6 rounded-2xl">
    <h3 className="text-lg font-semibold mb-4">Founded Companies</h3>
    <div className="text-3xl md:text-[64px] font-bold mb-4">02</div>
    <div className="space-y-6">
      
      {/* First Company */}
      <div className="flex items-start justify-between">
        <div className="flex space-x-4">
          {/* Logo */}
          <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center">
            <img src="/path/to/vertex-logo.png" alt="Vertx Logo" className="w-8 h-8" />
          </div>
          {/* Company Details */}
          <div>
            <h4 className="font-semibold flex items-center">
              Vertx
              <span className="ml-2 bg-green-700 text-green-200 text-xs px-2 py-0.5 rounded-md">CEO</span>
            </h4>
            <p className="text-sm text-gray-400">Founded in 2025. in <span className="font-semibold">Fintech</span>.</p>
          </div>
        </div>
        {/* View Profile */}
        <button className="text-xs text-gray-400 hover:text-white transition-all mt-2">View Profile</button>
      </div>

      {/* Second Company */}
      <div className="flex items-start justify-between">
        <div className="flex space-x-4">
          {/* Logo */}
          <div className="w-10 h-10 rounded-md bg-gray-700 flex items-center justify-center">
            <FaRegBuilding className="text-white w-5 h-5" />
          </div>
          {/* Company Details */}
          <div>
            <h4 className="font-semibold flex items-center">
              Company
              <span className="ml-2 bg-blue-700 text-blue-200 text-xs px-2 py-0.5 rounded-md">PROPRIETOR</span>
            </h4>
            <p className="text-sm text-gray-400">Details/Information like acquired /exit/m&a</p>
          </div>
        </div>
        {/* View Profile */}
        <button className="text-xs text-gray-400 hover:text-white transition-all mt-2">View Profile</button>
      </div>

    </div>
  </div>

  {/* Experience Section */}
  <div className="bg-gray-900 p-4 md:p-6 rounded-2xl">
    <h3 className="text-lg font-semibold mb-4">Experience</h3>
    <div className="text-3xl md:text-[64px] font-bold mb-4">03</div>
    <div className="space-y-6">
      {['Company 1', 'Company 2', 'Company 3'].map((company, idx) => (
        <div key={idx} className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-md bg-gray-700 flex items-center justify-center">
              <FaRegBuilding className="text-white w-4 h-4" />
            </div>
            <span>{company}</span>
          </div>
          {/* View Profile */}
          <button className="text-xs text-gray-400 hover:text-white transition-all">View Profile</button>
        </div>
      ))}
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Profile;