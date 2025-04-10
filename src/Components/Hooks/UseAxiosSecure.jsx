

import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'  //step-29______________________________4
})
const UseAxiosSecure = () => {
   return axiosSecure;
};

export default UseAxiosSecure;