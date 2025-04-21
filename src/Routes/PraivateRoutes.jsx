// step-25_____________________________________________________________________1

// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Components/Hooks/UseAuth";

const PraivateRoutes = ({children}) => {

    const {user, loading} = UseAuth();
    const location = useLocation();                  //step-25_________________3

    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PraivateRoutes;