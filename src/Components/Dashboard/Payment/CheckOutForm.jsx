
// // step-53______________________________________________________________________1

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import UseCart from "../../Hooks/UseCart";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
// import { data } from "react-router-dom";



const CheckOutForm = () => {

    const [error, setError] = useState(''); //step-54_______________________1

    const [clientSecret, setClientSecret] = useState('');

    const [transactionId, setTransactionId] = useState(''); //step-56______________________2
  
    const stripe = useStripe();
    const elements = useElements();

    const {user} = UseAuth();

    const [cart, refetch] = UseCart();  //step-55_______________________2
    const totalPrice = cart.reduce((total, item) => total + item.price, 0); //step-55_____________________3

    const axiosSecure = useAxiosSecure(); //step-55________________________1

    useEffect(()=>{
       if(totalPrice > 0){
        axiosSecure.post('/create-payment-intent', {price: totalPrice})  //step-55_____________________4
       .then(res => {
         console.log(res.data.clientSecret);
         setClientSecret(res.data.clientSecret);
       }
    
       )
       }
       
    },[axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
          // Stripe.js has not yet loaded.
          // Make sure to disable form submission until Stripe.js has loaded.
          return;
        }

       const card = elements.getElement(CardElement);

       if (card == null) {
         return;
       }

       const {error, paymentMethod} = await stripe.createPaymentMethod({
        type:'card',
        card
       });

       if(error){
        console.log('Payment error',error);
        setError(error.message);
       }
       else{
        console.log('Payment method',paymentMethod)
        setError('');
       }

      //  confirm payment
      //  step-56______________________________1

      const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'anonymous',
            email: user?.email || 'anonymous'
          },
        }
      })

      if(confirmError){
        console.log('confirm error');
      }
      else{
        console.log('payment intent', paymentIntent);
        if(paymentIntent.status === 'succeeded'){
          console.log('payment success', paymentIntent.id);
          setTransactionId(paymentIntent.id);

          // now save the payment in the database
          // step-57__________________________________________________1

          const payment = {
            email: user.email,
            price: totalPrice,
            transactionId: paymentIntent.id,
            data: new Date(),
            cartIds: cart.map(item => item._id),
            menuItemIds: cart.map(item => item.menuId),
            status: 'service pending',   
          }
          const res = await axiosSecure.post('/payments', payment);
          console.log(res.data);
          refetch();
          if(res.data?.paymentResult?.insertedId){
            Swal.fire({
              title: "Payment Successful",
              text: "Thank you for your payment",
              icon: "success",
              draggable: true
           });
          }

        }
      }
    };

    return (
        <form  className=" mt-20 w-96 " onSubmit={handleSubmit}>
            
            <CardElement
            
               options={{
                 style: {
                   base: {
                     fontSize: '16px',
                     color: '#424770',
                     '::placeholder': {
                       color: '#aab7c4',
                     },
                   },
                   invalid: {
                     color: '#9e2146',
                   },
                 },
               }}
            />
           
            <button className="btn btn-primary text-center mt-10" type="submit" disabled={!stripe || !clientSecret}>
               Pay
            </button>
            <p className="text-red-600">{error}</p>
            {/* step-56________________________3 */}
            {transactionId && <p className="text-green-700"> Transaction Id: {transactionId}</p>} 
        </form>
    );
};

export default CheckOutForm;





