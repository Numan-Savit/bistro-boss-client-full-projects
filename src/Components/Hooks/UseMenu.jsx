
// step-11_____________________________________________________________________________________1

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

// import { useEffect, useState } from "react";

const UseMenu = () => {

    const axiosPublic = useAxiosPublic(); //step-50________________________________________________3

    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(()=>{
    //         fetch('http://localhost:5000/menu')                      
    //         .then(res => res.json())               
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false);
    //         });
    //     }, [])

    const {data: menu = [], isPending: loading, refetch} = useQuery({    //step-50_________________3
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu'); 
            return res.data;
        }
    })

    return [menu, loading, refetch];
    
};

export default UseMenu;