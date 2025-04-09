import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

// step-28________________________________________________________________4
const UseAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default UseAuth;