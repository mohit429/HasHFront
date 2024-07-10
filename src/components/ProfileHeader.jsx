import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/home");
  };

  return (
    <header className="bg-gradient-to-r from-stone-400 via-lime-200 to-cyan-500 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold ml-5">LOGO</h1>
        <ul className="flex items-center space-x-4">
          <li>
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-gray-600 p-3 rounded-full hover:bg-gray-700 transition flex items-center"
            >
              <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
              Dashboard
            </button>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="bg-gray-600 p-3 rounded-full hover:bg-gray-700 transition flex items-center mr-5"
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
