
// step-13___________________________________________________________________________________2

import { useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";



// step-14_____________________________________________________________________________________1
const FoodCard = ({item}) => {

    const { name, image, price, recipe } = item;

    const {user} = UseAuth(); //step-28___________________________________________3
    const navigate = useNavigate();
    // step-27___________________________________________________________________________________1

    const handleAddToCart = (food) => {
        if(user && user.email){
          // send cart item to the database
         
        }
        else{
          alert('Please Login First');
          navigate('/login');
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