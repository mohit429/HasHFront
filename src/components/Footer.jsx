import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="footer-links">
              <li><a href="#about" className="hover:text-gray-400 transition duration-300">About</a></li>
              <li><a href="#blog" className="hover:text-gray-400 transition duration-300">Blog</a></li>
              <li><a href="#contact" className="hover:text-gray-400 transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Social Media</h2>
            <div className="social-icons flex">
              <a href="#facebook" className="text-white hover:text-gray-400 transition duration-300 mx-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20.98,2H3.02C2.46,2,2,2.46,2,3.02V20.98C2,21.54,2.46,22,3.02,22H12v-7.16H9.96v-2.88H12V9.87 c0-2.65,1.62-4.09,3.98-4.09c1.13,0,2.1,0.08,2.38,0.12v2.76h-1.63c-1.28,0-1.53,0.61-1.53,1.5v1.97h3.05l-0.4,2.88h-2.65V22H20.98 c0.56,0,1.02-0.46,1.02-1.02V3.02C22,2.46,21.54,2,20.98,2z"
                  />
                </svg>
              </a>
              <a href="#twitter" className="text-white hover:text-gray-400 transition duration-300 mx-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M23.75,4.5c-0.83,0.39-1.72,0.65-2.65,0.77c0.95-0.57,1.68-1.48,2.02-2.57c-0.89,0.53-1.88,0.91-2.93,1.12 C20.75,3.16,21.85,2.5,22.75,1.62c-1.05,0.62-2.22,1.07-3.47,1.32C18.28,2.15,17.13,2,16,2c-3.61,0-6.55,2.94-6.55,6.55 c0,0.51,0.06,1.01,0.18,1.49C6.95,9.5,3.71,7.67,1.5,4.95C1.11,5.63,0.89,6.37,0.89,7.15c0,2.27,1.16,4.28,2.94,5.45 c-1.08-0.03-2.09-0.33-2.97-0.82c0,0.03,0,0.06,0,0.1c0,3.17,2.25,5.81,5.25,6.42c-0.55,0.15-1.14,0.23-1.74,0.23c-0.43,0-0.85-0.04-1.26-0.12 c0.85,2.67,3.32,4.61,6.25,4.66c-2.29,1.8-5.17,2.87-8.3,2.87c-0.54,0-1.07-0.03-1.59-0.09c2.96,1.9,6.47,3.02,10.25,3.02 c12.3,0,19.02-10.2,19.02-19.02c0-0.29,0-0.58-0.02-0.87C22.92,6.22,23.5,5.42,23.75,4.5z"
                  />
                </svg>
              </a>
              <a href="#instagram" className="text-white hover:text-gray-400 transition duration-300 mx-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12,2.09c3.2,0,3.58,0.01,4.84,0.07c1.25,0.06,2.11,0.29,2.88,0.61c0.77,0.32,1.4,0.75,2.04,1.39 s1.07,1.27,1.39,2.04c0.32,0.77,0.55,1.63,0.61,2.88C23.91,8.42,23.92,8.8,23.92,12c0,3.2-0.01,3.58-0.07,4.84 c-0.06,1.25-0.29,2.11-0.61,2.88c-0.32,0.77-0.75,1.4-1.39,2.04c-0.64,0.64-1.27,1.07-2.04,1.39c-0.77,0.32-1.63,0.55-2.88,0.61 C15.58,23.91,15.2,23.92,12,23.92c-3.2,0-3.58-0.01-4.84-0.07c-1.25-0.06-2.11-0.29-2.88-0.61c-0.77-0.32-1.4-0.75-2.04-1.39 c-0.64-0.64-1.07-1.27-1.39-2.04c-0.32-0.77-0.55-1.63-0.61-2.88C0.09,15.58,0.08,15.2,0.08,12c0-3.2,0.01-3.58,0.07-4.84 c0.06-1.25,0.29-2.11,0.61-2.88c0.32-0.77,0.75-1.4,1.39-2.04c0.64-0.64,1.27-1.07,2.04-1.39c0.77-0.32,1.63-0.55,2.88-0.61 C8.42,0.09,8.8,0.08,12,0.08C15.2,0.08,15.58,0.09,16.84,0.15c1.25,0.06,2.11,0.29,2.88,0.61c0.77,0.32,1.4,0.75,2.04,1.39 c0.64,0.64,1.07,1.27,1.39,2.04c0.32,0.77,0.55,1.63,0.61,2.88C23.91,8.42,23.92,8.8,23.92,12c0,3.2-0.01,3.58-0.07,4.84 c-0.06,1.25-0.29,2.11-0.61,2.88c-0.32,0.77-0.75,1.4-1.39,2.04c-0.64,0.64-1.27,1.07-2.04,1.39c-0.77,0.32-1.63,0.55-2.88,0.61 C15.58,23.91,15.2,23.92,12,23.92c-3.2,0-3.58-0.01-4.84-0.07c-1.25-0.06-2.11-0.29-2.88-0.61c-0.77-0.32-1.4-0.75-2.04-1.39 c-0.64-0.64-1.07-1.27-1.39-2.04c-0.32-0.77-0.55-1.63-0.61-2.88C0.09,15.58,0.08,15.2,0.08,12c0-3.2,0.01-3.58,0.07-4.84 C0.15,5.91,0.38,5.05,0.69,4.28c0.32-0.77,0.75-1.4,1.39-2.04c0.64-0.64,1.27-1.07,2.04-1.39C4.42,0.37,5.28,0.14,6.53,0.08 C7.79,0.02,8.17,0.01,12,0.01s4.21,0.01,5.47,0.07C18.21,0.14,19.07,0.37,19.84,0.69c0.77,0.32,1.4,0.75,2.04,1.39 c0.64,0.64,1.07,1.27,1.39,2.04c0.32,0.77,0.55,1.63,0.61,2.88C23.91,8.42,23.92,8.8,23.92,12c0,3.2-0.01,3.58-0.07,4.84 C23.85,17.95,23.62,18.81,23.31,19.58z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <form className="flex">
              <input type="email" placeholder="Your email address" className="w-full py-2 px-4 mb-2 mr-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500" />
              <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="text-center mt-8">
          <p> &copy; 2024 Your Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
