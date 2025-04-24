import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";


const PaymentHistory = () => {

    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`); 
            return res.data;
        }

    })

    return (
        <div>
            <h2 className="text-3xl ml-10 mt-20">Total Payment : {payments?.length}</h2>

            <div className="overflow-x-auto mt-10 ml-10">
               <table className="table">
                 {/* head */}
                 <thead>
                   <tr>
                     <th>#</th>
                     <th>Price</th>
                     <th>Transaction Id</th>
                     <th>Email</th>
                     <th>Status</th>
                   </tr>
                 </thead>
                 <tbody>
                   {payments.map((payment, index)=>
                      <tr key={payment._id}>
                      <th>{index + 1}</th>
                      <td>${payment.price}</td>
                      <td>{payment.transactionId}</td>
                      <td>{payment.email}</td>
                      <td>{payment.status}</td>
                    </tr>
                   )}
                   
                 </tbody>
               </table>
            </div>

        </div>
    );
};

export default PaymentHistory;