import { NavLink, Outlet } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FaAddressBook, FaHouseDamage} from "react-icons/fa";
import { FaPrescriptionBottle } from "react-icons/fa6";
import { SiReverbnation } from "react-icons/si";


const Dashboard = () => {
    return (
        <div className="flex">

            

            <div className="w-40 md:w-64 min-h-screen bg-orange-600">
                   <h2 className="text-center text-xl md:text-3xl font-bold text-white mt-10">BISTRO BOSS</h2>
                   <p className="text-center text-sm md:text-xl font-bold text-white mb-10">R E S T A U R A N T</p>
                  

                <ul className="menu text-white text-15 md:text-2xl font-bold">
                    <li>
                        <NavLink to="/dashboard/userHome"><FaHouseDamage /> User Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation"><FaPrescriptionBottle /> Reservation </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart"><CiShoppingCart /> My Cart </NavLink>
                    </li>
                   
                    <li>
                        <NavLink to="/dashboard/review"><SiReverbnation /> Add Review</NavLink>
                    </li>
                   
                    <li>
                        <NavLink to="/dashboard/booking"><FaAddressBook /> My Booking</NavLink>
                    </li>
                     <div className="divider w-60"></div>
                   
                   
                </ul>
                  

            </div>

            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;