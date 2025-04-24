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
import AllUsers from "../Components/Dashboard/AllUsers";
import AddItems from "../Components/Dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Components/Dashboard/ManageItems";
import UpdateItem from "../Components/Dashboard/UpdateItem";
import Payment from "../Components/Dashboard/Payment/Payment";
import PaymentHistory from "../Components/Dashboard/Payment/PaymentHistory";

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
    element: <PraivateRoutes><Dashboard></Dashboard></PraivateRoutes>,
    children: [

      // normal user routes
      {
        path: "cart",
        element: <Cart></Cart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },

      // admin routes
      {
        path: "addItems",
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: "manageItems",
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: "updateItem/:id",
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: "allUsers",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>

      }
    ]
  }
]);
  
export default router;