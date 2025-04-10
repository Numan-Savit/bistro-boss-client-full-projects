import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";

// step-30_______________________________________________________2
const UseCart = () => {

    // tan stack query

    const axiosSecure = UseAxiosSecure();

    const { user } = UseAuth(); //step-31-5

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],  //step-31-3
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`); //step-31-4--?email=${user?.email}
            return res.data;
        }
    })

    return [cart, refetch];
    
};

export default UseCart;