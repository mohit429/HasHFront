import axios from "axios";
import { useNavigate } from "react-router-dom";
import HeaderDash from "../components/HeaderDash";
import BlogDash from "../components/BlogDash";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import { useEffect } from "react";


export const Dashboard = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        if (!localStorage.getItem("token")) {
            navigate('/home');
            return;
        }
    })
    return(
        <div>
           <HeaderDash/>
           <BlogDash/>
        </div>
)}