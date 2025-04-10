
// step-13______________________________________________________________________2

import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import UseCart from "../Hooks/UseCart";


// step-14_______________________________________________________________________1
const FoodCard = ({item}) => {

    const { name, image, price, recipe, _id } = item;

    const {user} = UseAuth(); //step-28___________________________________________3
    const navigate = useNavigate();
    const location = useLocation();  //step-29____________________________________1
    const axiosSecure = UseAxiosSecure();
    const [, refetch] = UseCart();   //step-31-___________________________________6
    // step-27____________________________________________________________________1

    const handleAddToCart = (food) => {
        if(user && user.email){
          // send cart item to the server database
          const cartItem = {                //step-29______________________________2
             menuId: _id,
             email: user.email,
             name: food.name,
             image: food.image,
             price: food.price,
             
          }
          axiosSecure.post('/carts', cartItem)  //step-29____________3
          .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
              alert('Item Added Successfully');  
            }
            refetch();    //step-31-7
          })
         
        }
        else{
          alert('Please Login First');
          navigate('/login', {state: {from: location}});
        }
    }


    return (
        <div className="mt-10">

           <div className="card bg-base-100  shadow-sm">
             <figure className="px-10 pt-10">
               <img
                 src={image}
                 alt="Shoes"
                 className="rounded-xl" />
             </figure>
             <p className="text-white font-bold absolute top-13 right-15 bg-black px-2">${price}</p>
             <div className="card-body items-center text-center">
               <h2 className="card-title">{name}</h2>
               <p>{recipe}</p>
               
               <div className="card-actions">
                 <button onClick={() => handleAddToCart(item)} className="btn btn-primary">ADD TO CART</button>
               </div>
             </div>
           </div>
            
        </div>
    );
};

export default FoodCard;