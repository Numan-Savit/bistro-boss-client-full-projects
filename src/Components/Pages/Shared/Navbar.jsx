import othersImg from '../../../assets/others/profile.png';

import logo from '../../../assets/icon/canva-brown-and-white-simple-modern-professional-catering-logo-Dvz9NG3gqk0.jpg';


import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import UseCart from '../../Hooks/UseCart';
import useAdmin from '../../Hooks/useAdmin';



const Navbar = () => {
  
       

    const {user, logOut} = useContext(AuthContext);   //step-24__________________________1
    const [carts] = UseCart();  //step-30________________________________________________3

  
    const [isAdmin] = useAdmin(); //gpt
    const navigate = useNavigate();//gpt

  
    const handleLogOut = () => {
        logOut()
        .then(() => {
            // Sign-out successful.
            navigate('/');
        })
        .catch(error => console.log(error))
    }

   

    const navOptions = <>
 
        <li className="text-xl"><Link to ="/">HOME</Link></li>
        <li className=" text-xl"><Link to ="/menu">OUR MENU</Link></li>
        <li className=" text-xl"><Link to ="/order/salad">OUR SHOP</Link></li>

        {
          user && (
           <li className="text-xl">
            {
             isAdmin
              ? <Link to="/dashboard/adminhome">DASHBOARD</Link> 
              : <Link to="/dashboard/userhome">DASHBOARD</Link>
            }
          </li>
        )
      }
 
       
        <li className=''>
           <Link to ="/dashboard/cart">
            <div className=" text-center items-center">
               <div className="badge badge-sm badge-secondary text-white md:text-xl mt-1">+{carts.length}</div>
            </div>
            </Link>
        </li>

        {
          user ? <>
               <button onClick={handleLogOut} className=" text-xl">LOGOUT</button>
            </> : <>
              <li className="text-xl"><Link to ="/login">LOGIN</Link></li>
          </>
        }
     
    </>

   
    return (
        <div>

          <div className="navbar h-30 fixed z-8 top-0  md:w-7xl sm:text-black md:text-black  bg-white ">
            <div className="navbar-start">
              <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                  {navOptions}
                </ul>
              </div>
              
              <a className="btn btn-ghost text-xl "><img className='w-30 h-25 bg-white' src={logo} alt="" /></a>
              
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {navOptions}
              </ul>
            </div>
            <div className="navbar-end">

             <button className="">
               {
                user ? (
                   <span className="font-bold text-xl">{user.displayName}</span>
                ) : (
                    <img src={othersImg} alt="profile" className="w-15 md:w-20 h-10 md:h-15 rounded-full" />
                    )
                }

              </button>
               
            </div>
          </div>
            
        </div>
    );
};  

export default Navbar;