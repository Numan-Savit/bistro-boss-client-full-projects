
// step-52___________________________________________________1

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div >
           <h2 className="text-3xl text-center mt-60">PAYMENT</h2>
           <div className="ml-90">
               <Elements stripe={stripePromise}>
                  <CheckOutForm></CheckOutForm>
               </Elements>
           </div>
        </div>
    );
};

export default Payment;