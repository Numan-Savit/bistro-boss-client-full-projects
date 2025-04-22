
// step-49_________________________________________________________________________1

import { RiDeleteBin6Line } from "react-icons/ri";
import UseMenu from "../Hooks/UseMenu";
import SectionTitle from "../Pages/Shared/SectionTitle";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {

    const [menu, , refetch] = UseMenu();
    const axiosSecure = UseAxiosSecure();
    const handleDeleteItem = (item) => {
        Swal.fire({                                //step-50_______________________1
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.delete(`/menu/${item._id}`); 
                // console.log(res.data);

                if(res.data.deletedCount > 0){
                    refetch();
                    
                     Swal.fire({
                          title: "Deleted!",
                          text: `Your ${item.name} has been deleted.`,
                          icon: "success"
                        });
                }

            
            }
          });
    }

    return (
        <div>

            <SectionTitle heading={"Manage Items"} subHeading={"Hurry Up"}></SectionTitle>

            <div className="ml-10">
              <div className="overflow-x-auto">
                 <table className="table">
                   {/* head */}
                   <thead>
                     <tr>
                       <th>
                         #
                       </th>
                       <th>Items Image</th>
                       <th>items Name</th>
                       <th>Price</th>
                       <th>Update</th>
                       <th>Delete</th>
                     </tr>
                   </thead>
                   <tbody>
                     
                     {
                        menu.map((item, index) => 
                            <tr key={item._id}>
                               <th>
                                 {index + 1}
                               </th>
                               <td>
                                 <div className="flex items-center gap-3">
                                   <div className="avatar">
                                     <div className="mask mask-squircle h-12 w-12">
                                       <img
                                         src={item.image}
                                         alt="Avatar Tailwind CSS Component" />
                                     </div>
                                   </div>
                                   
                                 </div>
                               </td>
                               <td>
                                 {item.name}
                               </td>
                               <td>${item.price}</td>
                               <th>
                                 <Link to={`/dashboard/updateItem/${item._id}`}>
                                    <button className="btn text-2xl bg-green-800 text-white">
                                      <FaUsers />
                                    </button>
                                 </Link>
                               </th>
                               <th>
                                 <button
                                  onClick={()=>handleDeleteItem(item)} 
                                  className="btn text-2xl bg-red-800 text-white">
                                    <RiDeleteBin6Line />
                                 </button>
                               </th>
                         </tr>
                        )
                     }
                     
                   </tbody>
                   
                 </table>
              </div>
             </div>

        </div>
    );
};

export default ManageItems;