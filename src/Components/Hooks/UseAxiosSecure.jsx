

import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'  //step-29______________________________4
})
const UseAxiosSecure = () => {

    const navigate = useNavigate();  //step-42
    const {logOut} = UseAuth(); //step-42

    // step-42 start______________________2

    // request interceptors to add authorization header for every request
    // secure call to the api

    axiosSecure.interceptors.request.use(function(config) {
    const token = localStorage.getItem('access-token');
    console.log('use axios secure', token);
    config.headers.authorization = `Bearer ${token}`;
  
    return config;

   }, function(error){
    return Promise.reject(error);
   });

   // response intercepts 401 and 403 staus
    
    axiosSecure.interceptors.response.use(function(response) {
        return response;
    }, async (error) => {
        // const status = error.response.status;
        if(error.response.status === 401 || error.response.status === 403){
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
    });

//    step-42 end__________________________2

   return axiosSecure;
};

export default UseAxiosSecure;