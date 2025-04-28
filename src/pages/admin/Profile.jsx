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
      <div className="p-4 md:p-8 space-y-8">
        <h1 className="text-2xl md:text-3xl font-bold">Overview</h1>
        <div className="bg-gray-900 p-4 md:p-6 rounded-2xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className=" rounded-full ">
            <img className="rounded-full w-18  h-18" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAACUCAMAAADmiEg1AAAAMFBMVEXk5ueutLfg4uSnrrHn6eqqsbSxt7rS1dfW2dva3d7Hy82/xMa7wMPKztDq7O3CxskpgEGPAAAETElEQVR4nO2c25KkIAxAuQQExOb//3bRvk1v28olEqzyPM1O1VadoWKIkMjYxcXFxcXFxcXFxcUFHQDUBlkAE8KayYUQ3DQZK8QJ/gAAMTivlVQPJNfeDZ2rw80ErZXiH8R/+9H0aw5gNP+JNn2KAzNa/tbmXGpD7bgCWK+2rOd4kcF2t+aT3tOezfXQmfi4L33H36hV/yBSFvu55ILa9oVNlV7QvQT5VvZbXfE+xG2e9iJO7RwRmdYL1NKR5CfyL57amo1F3jzQWsNUZB1jfCDVzn4m31B6s92a5PeCE26cMGwWgNtIuroWyq05YU6BqThKFshqwyrrGOE0FVZxDqRe8PJk8ljwkcIaTO1yc04SKJVP5bzgE4G28PXrrQkC3FbsOU9ke21Ws1e+vNtnFKjNJgtj8yIFMLS5bl9cIYQJJ8iEBse7dVFYW1M9af1g3gKOt2vtjbDrzIzn9FbNvctfiD+8/Tm9+eXd1Lt9nCDlk+beyRcj27TOJ+Bw9p2ptfdwzn3+rHXVaevYurPBJ+3fG6DwouEDFdq/75z0vZhZhPWmOIeoPh7k7XfLhfo3NUlxObXZ3JMIzQF49TkyzSXmac/toS5QaI7tWX1tRXYvVbfgJEnw7l1TFErK7pnyIoWiNHlT3FegNKH1/GiWrjdpH0cULzzfdLTahTlF0fcpMZbe8/jSprj/+8LmiistevDObVbqpe8xs4Wwk9VegIxQ8V0NDITExW5+obOHSetb727IAUSQO+ZKun5C+83OhINSvkdrtszB+K/hnae0HnvJfitEc+f5//GiJPfOdpVGvgAQZhi1ko9BLymlHgfb+ZzXGzFMk1vG6qhNMoCFW+T+E7XPHoujEMJaY4Y7xtiIYL3qx+UFYQcXRu+91vNQ4ML8o/Z+DG4wgt36ko/OdhpnQz67rqXB+ZfxD3BGxOCh9mXzFGDc4p2Xe3vl6w+IOXEQ9/9HJx1DY/rO1/vu87qTqQNb22RS3X2gGd69senXpp6ornUwjWN9rkQw7ouVbnmMAmLYnsjNQGpn20R6tPZlQb2OiubHiwNMviaq182DPfiQE+MyahV3aLBYjxXX/6P4cJQ5MMeRI+TD3B8T5kipb0NcTwcsORy62A9z9DdnyJg0rxFHbpAAi537foF7xFJ9M5wO4tQaJB7+IYljHTPjTI7kmOOIt9aO4ginn6K9Nsq3aSi068+bUbrtisyrsgqEo+qoQ8WxhnSKKL+aPazYTqP4KrxNTfKbws9GlbYMoFEW4lUfUcDxLutkIrbmZW2/WAMMVeR/Mwryvu10ECr/dpn6obyTW9MSp+4XKjeJ9xDdM5kRXvRRqiPIaxEnLUw+yWrFquw0xiSrHRXj2w9IqIxPGnQUJjznQ1dYw6w4pL+ydZNNFpL3zPJm3SNIH1UHR+36QfLBG9lL/DrpNQrSzDMSyWcpFR/nO4TEt4dYesuuSJ6dFp2xovgPOvI9e4LYmyIAAAAASUVORK5CYII=" alt="" srcset="" />
          </div>
          <div className="text-center  md:text-left">
            <h2 className="text-lg md:text-xl flex justify-center md:justify-start gap-4 items-center font-semibold">
              Mr Adnan <SiTicktick className="text-green-400" />
            </h2>
            <div className="flex justify-items-center gap-2">
              <p className="text-sm clear-bothf;ex ">Co-Founder & CEO @Vertx</p>
              <img className="w-4 h-4" src="/img2.png" alt=""  />
            </div>
            <span className="inline-block mt-1 px-2 py-0.5 bg-gray-700 text-xs rounded">Entrepreneur</span>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <Linkedin className="w-5 h-5 cursor-pointer" />
              <X className="w-5 h-5 cursor-pointer" />
              <Mail className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-4 md:p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4">Founded Companies</h3>
            <div className="text-3xl md:text-[64px] font-bold mb-4">02</div>
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex space-x-4">
                  <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center">
                    <img src="/img2.png" alt="Vertx Logo" className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-semibold flex items-center">
                      Vertx
                      <span className="ml-2 bg-green-700 text-green-200 text-xs px-2 py-0.5 rounded-md">CEO</span>
                    </h4>
                    <p className="text-sm text-gray-400">Founded in 2025. in <span className="font-semibold">Fintech</span>.</p>
                  </div>
                </div>
                <button className="text-xs text-gray-400 hover:text-white transition-all mt-2">View Profile</button>
              </div>
              <div className="flex items-start justify-between">
                <div className="flex space-x-4">
                  <div className="w-10 h-10 rounded-md bg-gray-700 flex items-center justify-center">
                    <FaRegBuilding className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold flex items-center">
                      Company
                      <span className="ml-2 bg-blue-700 text-blue-200 text-xs px-2 py-0.5 rounded-md">PROPRIETOR</span>
                    </h4>
                    <p className="text-sm text-gray-400">Details/Information like acquired /exit/m&a</p>
                  </div>
                </div>
                <button className="text-xs text-gray-400 hover:text-white transition-all mt-2">View Profile</button>
              </div>
            </div>
          </div>
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