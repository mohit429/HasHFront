import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import imge from '../assets/dsktp.png';

export const Home = () => {
    const navigate = useNavigate(); 
    const handleonclick = ()=> {
      navigate("/signup");
    }
    return (
        <div className="bg-gradient-to-r from-blue-400 via-green-300 to-purple-500 min-h-screen flex flex-col">
            <Header />
            <div className="bg-transparent container mx-auto px-5 lg:px-20 py-10 lg:py-20 flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 flex justify-center  lg:ml-28">
                    <img src={imge} alt="img" className="m-5 lg:m-14 lg:w-3/4" />
                </div>
                <div className="lg:w-1/2 w-full text-center lg:text-left">
                    <h1 className="text-4xl font-bold text-white mb-4">Welcome to HasH</h1>
                    <p className="text-lg text-white mb-6">Explore the latest articles and insights.</p>
                    <button onClick={handleonclick}className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700">Get Started</button>
                </div>
            </div>
            <div className="container mx-auto px-5 lg:px-20 py-10">
                <div className="bg-white bg-opacity-80 rounded-lg p-8 shadow-md">
                    <AboutSection />
                </div>
            </div>
            <div className="container mx-auto px-5 lg:px-20 py-10">
                <div className="bg-white bg-opacity-80 rounded-lg p-8 shadow-md">
                    <ContactSection />
                </div>
            </div>
            <Footer />
        </div>
    );
};
