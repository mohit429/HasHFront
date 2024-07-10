import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem('email');
    navigate("/home");
  };

  return (
    <>
      <header className="bg-gradient-to-r from-stone-400 via-lime-200 to-cyan-500 text-white py-4 top-0 w-full shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold ml-5">HasH</h1>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center bg-gray-600 p-3 rounded-full hover:bg-gray-700 transition mr-3"
            >
              <FontAwesomeIcon icon={faUserCircle} className="text-lg" />
            </button>
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white text-gray-700 rounded-md shadow-lg mr-3">
                <li
                  onClick={() => navigate("/profile")}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  Profile
                </li>
                <li
                  onClick={handleLogout}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
