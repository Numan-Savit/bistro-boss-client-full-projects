import othersImg from '../../../assets/others/profile.png';

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);   //step-24__________________________1
    
    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error))
    }

    const navOptions = <>
 
        <li className="font-bold"><Link to ="/">HOME</Link></li>
        <li className="font-bold"><Link>DASHBOARD</Link></li>
        <li className="font-bold"><Link to ="/menu">OUR MENU</Link></li>
        <li className="font-bold"><Link to ="/order/salad">OUR SHOP</Link></li>
        <li className="font-bold"><Link to ="/secret">SECRET</Link></li>

        {
          user ? <>
               <button onClick={handleLogOut} className=" text-white font-bold text-10">LOGOUT</button>
            </> : <>
              <li className="font-bold"><Link to ="/login">LOGIN</Link></li>
          </>
        }
     
    </>

    return (
        <div>

          <div className="navbar fixed z-10  md:w-7xl sm:text-black md:text-white opacity-95 bg-cyan-950 bg-opacity-80  ">
            <div className="navbar-start">
              <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                  {navOptions}
                </ul>
              </div>
              
              <a className="btn btn-ghost text-xl text-white md:text-white">BISTRO BOSS</a>
              
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {navOptions}
              </ul>
            </div>
            <div className="navbar-end">
             <button className=" text-white">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={othersImg} />
                  </div>
                </div>
              </button>
               
            </div>
          </div>
            
        </div>
    );
};  

export default Navbar;