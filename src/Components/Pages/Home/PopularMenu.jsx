// import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import UseMenu from "../../Hooks/UseMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {

    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === 'popular'); //step-11________________2

    // const [menu, setMenu] = useState([]);

    // useEffect(()=>{
    //     fetch('menu.json')                      //step-6_________________________2-menu.json
    //     .then(res => res.json())                //step-6____________________________________3
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setMenu(popularItems);
    //     })
    // }, [])

    return (
        <section>
            {/* step-6_________________________________________________________________________1 */}

            <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"}>

            </SectionTitle>

            {/* step-6__________________________________________________________________________4 */}

            <div className="grid md:grid-cols-2 gap-10 mx-auto">
                {
                    popular.map(item => <MenuItem //step-11_____________________________________3
                      key={item._id}
                      item={item}
                    ></MenuItem>)
                }
            </div>

           <div className="text-center mb-10">
              <Link to = "/menu"><button className="btn btn-outline border-0 border-b-4 hover:bg-amber-300">Vew Full Menu</button></Link>
            </div>
            
        </section>
    );
};

export default PopularMenu;