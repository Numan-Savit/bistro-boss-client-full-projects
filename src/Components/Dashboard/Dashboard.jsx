import { NavLink, Outlet } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FaAddressBook, FaHouseDamage} from "react-icons/fa";
import { FaBlenderPhone, FaPrescriptionBottle } from "react-icons/fa6";
import { SiReverbnation } from "react-icons/si";
import { IoMenu } from "react-icons/io5";
import { MdRestaurantMenu } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { RiContactsBookFill } from "react-icons/ri";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

    const [isAdmin] = useAdmin();

    return (
        <div className="flex">

            

            <div className="w-40 md:w-64 min-h-screen bg-orange-600">
                   <h2 className="text-center text-xl md:text-3xl font-bold text-white mt-10">BISTRO BOSS</h2>
                   <p className="text-center text-sm md:text-xl font-bold text-white mb-10">R E S T A U R A N T</p>
                  

                <ul className="menu text-white text-15 md:text-xl font-bold">
                     
                      {/* admin nav link */}

                      {/* step-38___________________________________________________________________________1 */}

                      {
                        isAdmin ? <>
                             <li>
                               <NavLink to="/dashboard/adminHome"><FaHouseDamage /> Admin Home </NavLink>
                             </li>
                             <li>
                                <NavLink to="/dashboard/addItems"><MdRestaurantMenu /> Add Items </NavLink>
                             </li>
                             <li>
                                <NavLink to="/dashboard/manageItems"><TfiMenuAlt /> Manage Items </NavLink>
                             </li>
                           
                             <li>
                                <NavLink to="/dashboard/bookings"><RiContactsBookFill /> Manage Bookings</NavLink>
                             </li>
                           
                             <li>
                                <NavLink to="/dashboard/allUsers"><FaAddressBook /> All Users</NavLink>
                             </li>
                        </>
                        :
                        <>
                          <li>
                             <NavLink to="/dashboard/userHome"><FaHouseDamage /> User Home </NavLink>
                          </li>
                          <li>
                             <NavLink to="/dashboard/paymentHistory"><FaPrescriptionBottle /> Payment History </NavLink>
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
                        </>
                      }

                      {/* shared nav link */}

                     <div className="divider md:w-60"></div> 

                     <li>
                        <NavLink to="/"><FaHouseDamage /> Home </NavLink>
                    </li>

                    <li>
                        <NavLink to="/order/salad"><IoMenu /> Menu </NavLink>
                       
                    </li>
                    <li>
                        <NavLink to="/order/contact"><FaBlenderPhone />Contact </NavLink>
                       
                    </li>
                   
                   
                </ul>
                  

            </div>

            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;