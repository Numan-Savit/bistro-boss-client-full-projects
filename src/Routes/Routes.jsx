import { createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Components/Pages/Home/Home";
import Menu from "../Components/Pages/Menu/Menu";
import Order from "../Components/Pages/Order/Order";
import Login from "../Components/Pages/Login/SignUp";
import SignUp from "../Components/Pages/Login/Login";
import Secret from "../Components/Pages/Shared/Secret";
import PraivateRoutes from "./PraivateRoutes";
import Dashboard from "../Components/Dashboard/Dashboard";
import Cart from "../Components/Dashboard/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>
      },
      {
        path: "order/:category",  //step-14___________________________________________4
        element: <Order></Order>
      },
      {
        path: "/login",
        element:<SignUp></SignUp>
      },
      {
        path: "/signup",
        element:<Login></Login>
      },
      {
        path: "/secret",
        element:<PraivateRoutes><Secret></Secret></PraivateRoutes>    //step-25____________3
      }
    ],
  },
  
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>
      }
    ]
  }
]);
  
export default router;