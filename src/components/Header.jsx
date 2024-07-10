import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignInAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-stone-400 via-lime-200 to-cyan-500 text-white py-4 sticky top-0 w-full ">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-bold ml-5">HasH</h1>
          <ul className="flex">
            <li className="ml-4">
              <a href="/Signup" className="flex items-center text-white hover:text-lg hover:shadow-lg hover:rounded-full">
                <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> Signup
              </a>
            </li>
            <li className="ml-4">
              <a href="/Signin" className="flex items-center text-white hover:text-lg hover:shadow-lg hover:rounded-full">
                <FontAwesomeIcon icon={faSignInAlt} className="mr-2" /> Signin
              </a>
            </li>
            <li className="ml-4">
              <a href="#contact" className="flex items-center text-white mr-5 hover:text-lg hover:shadow-lg hover:rounded-full">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
