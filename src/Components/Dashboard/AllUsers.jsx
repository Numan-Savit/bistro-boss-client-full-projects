
// ,{
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem('access-token')}`  //step-41____________________3
//    }
//   }

import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

// step-38______________________________________________________________2
const AllUsers = () => {

    const axiosSecure = UseAxiosSecure();  //step-38____________________5

    const {data: users = [], refetch} = useQuery({     //step-38_________________4
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');            
            return res.data;
        }
    });

    const handleMakeAdmin = user => {             //step-40____________________1
      axiosSecure.patch(`/users/admin/${user._id}`) 
      .then(res => {
         console.log(res.data);
         if(res.data.modifiedCount > 0){
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now`,
            showConfirmButton: false,
            timer: 1500
          });
         }
      })
    }

    const handleDeleteUser = user => {  //step-39____________________2
       Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) { 
          axiosSecure.delete(`/users/${user._id}`) 
          .then(res => {
            if(res.data.deletedCount > 0){
                Swal.fire({
                   title: "Deleted!",
                   text: "Your file has been deleted.",
                   icon: "success"
                 });
                 
                 refetch();
            }
          })
        }
      }); 
    }
    
    return (
        <div>
           <div className=" text-3xl mt-15 font-bold ml-10">    
              <h2>Total Users : {users.length}</h2>
           </div>

           <div>
             <div className="overflow-x-auto mt-10 ml-10">
                <table className="table">
                  {/* head */}
                  <thead className="bg-cyan-950 text-white">
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    {/* step-38______________________________________________6 */}

                    {
                     users.map((user, index) =>  <tr key={user._id}> 
                     <th>{index + 1}</th>
                     <td>{user.name}</td>
                     <td>{user.email}</td>

                     <td>
                      {/* step-40_____________________________________________________________2 */}

                       { user.role === 'admin' ? 'Admin' : <button onClick={()=>handleMakeAdmin(user)} className="btn text-2xl bg-green-800 text-white">
                        <FaUsers />
                       </button>}

                     </td>

                     <td>
                        <button onClick={()=>handleDeleteUser(user)} className="btn text-2xl bg-red-800 text-white">
                          <RiDeleteBin6Line />
                        </button>
                     </td>
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

export default AllUsers;