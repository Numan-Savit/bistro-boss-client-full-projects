
// step-33______________________________________________________________________________1

import { RiDeleteBin6Line } from "react-icons/ri";
import UseCart from "../Hooks/UseCart";
import Swal from "sweetalert2";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {

    const [cart, refetch] = UseCart();
    const axiosSecure = UseAxiosSecure(); //step-34___________________________________3

    const handleDelete = id => {

        // step-34_______________________________________________________________________1

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

              axiosSecure.delete(`/carts/${id}`)

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
        <div className="mt-10 md:mt-20 md:ml-5">
            <div className="text-center md:flex md:justify-evenly font-bold">
                <h3 className="text-xl md:text-3xl">Total Items: {cart.length}</h3>
                <h3 className="text-xl md:text-3xl">Total Price : ${cart.reduce((a, c) => a + c.price, 0)}</h3>

                { cart.length?                      //step-52______________________________2
                  <Link to={'/dashboard/payment'}>
                   <button className="btn btn-primary text-2xl">Pay</button>
                  </Link>
                  :
                  <button className="btn btn-primary text-2xl" disabled>Pay</button>

                }

            </div>

            <div className="overflow-x-auto mt-15">
                <table className="table ">
                   {/* head */}
                   <thead className="bg-sky-700 text-xl rounded-2xl w-full text-white">
                     <tr>
                       <th>
                         #
                       </th>
                       <th>Image</th>
                       <th>Name</th>
                       <th>Price</th>
                       <th>Action</th>
                     </tr>
                   </thead>
                   <tbody>

                     {
                       cart.map((item, index) => <tr key={item._id}>
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
                          <button onClick={()=>handleDelete(item._id)} className="btn text-2xl bg-red-800 text-white"><RiDeleteBin6Line /></button>
                        </th>
                      </tr>
                      
                     )}
                                         
                   </tbody>
                   
                </table>
            </div>

        </div>
    );
};

export default Cart;