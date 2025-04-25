import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";


const useAdmin = () => {
   const { user, loading} = UseAuth();
   const axiosSecure = UseAxiosSecure();    //step-43________________________________2
   const {data: isAdmin, isPending: isAdminLoading} = useQuery({
       queryKey: [user?.email, 'isAdmin'],
       enabled: !loading && !!user?.email, //gpt
       queryFn: async () => {
           const res = await axiosSecure.get(`/users/admin/${user?.email}`); 
           console.log(res.data);
           return res.data?.admin;
       }
   })

   return [isAdmin, isAdminLoading];
};

export default useAdmin;