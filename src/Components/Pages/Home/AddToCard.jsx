

import SectionTitle from "../Shared/SectionTitle";
import addimg from '../../../assets/menu/salad-bg.jpg';


const AddToCard = () => {
    return (
        <div className="">

            <SectionTitle heading={'CHEF RECOMMENDS'} subHeading={'Should Try'}></SectionTitle>
             
        <div className="md:flex mx-auto md:gap-5 mb-10">

            {/* cart-1 */}
                
            <div className="card bg-base-100 shadow-sm">  
              <figure className="px-10 pt-10">
                <img
                  src={addimg}
                  alt="Shoes"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Caeser Salad</h2>
                <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <div className="card-actions">
                  <button className="btn btn-primary">ADD TO CART</button>
                </div>
              </div>
            </div>

            {/* cart-2 */}

            <div className="card bg-base-100  shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src={addimg}
                  alt="Shoes"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Caeser Salad</h2>
                <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <div className="card-actions">
                  <button className="btn btn-primary">ADD TO CART</button>
                </div>
              </div>
            </div>

            {/* cart-3 */}

            <div className="card bg-base-100 shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src={addimg}
                  alt="Shoes"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Caeser Salad</h2>
                <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <div className="card-actions">
                  <button className="btn btn-primary">ADD TO CART</button>
                </div>
              </div>
            </div>

        </div>
            
        </div>
    );
};

export default AddToCard;