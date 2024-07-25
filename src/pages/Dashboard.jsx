import { useNavigate } from "react-router-dom";
import HeaderDash from "../components/HeaderDash";
import BlogDash from "../components/BlogDash";
import { useEffect } from "react";


export const Dashboard = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        if (!localStorage.getItem("token")) {
            navigate('/');
            return;
        }
    })
    return(
        <div>
           <HeaderDash/>
           <BlogDash/>
        </div>
)}