import { Link } from "react-router-dom";
import MenuItem from "../Shared/MenuItem";
import Cover from "../Shared/Cover";


const Menucategory = ({items, title, img}) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
             <div className="grid md:grid-cols-2 gap-10 mx-auto my-15">
                {
                    items.map(item => <MenuItem //step-12_____________________________________1
                      key={item._id}
                      item={item}
                    ></MenuItem>)
                }
              </div>

              {/* step-14_______________________________________5 */}
              
              <Link to = {`/order/${title}`}>
                <div className="text-center mb-10"> <button className="btn btn-outline border-0 border-b-4 hover:bg-amber-300">ORDER YOUR FAVORITE FOOD</button></div>
              </Link>
            
        </div>
    );
};

export default Menucategory;