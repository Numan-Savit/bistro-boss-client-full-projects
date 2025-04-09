import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Pages/Shared/Footer";
import Navbar from "../Components/Pages/Shared/Navbar";


const Main = () => {

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login');  //step-18______________________________1
    const signupNoHeaderFooter = location.pathname.includes('signup');
    return (
        <div>
           
            {(!noHeaderFooter && !signupNoHeaderFooter) && <Navbar></Navbar>}  
            <Outlet></Outlet>
            {(!noHeaderFooter && !signupNoHeaderFooter) && <Footer></Footer>}
            
        </div>
    );
};

export default Main; 