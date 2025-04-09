
// step-13___________________________________________________________________________________2
// step-14_____________________________________________________________________________________1
const FoodCard = ({item}) => {

    const { name, image, price, recipe } = item;

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
                 <button className="btn btn-primary">ADD TO CART</button>
               </div>
             </div>
           </div>
            
        </div>
    );
};

export default FoodCard;