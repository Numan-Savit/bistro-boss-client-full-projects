// step-12____________________________________________________________________2

import Cover from "../Shared/Cover";
import menuimg from '../../../assets/menu/banner3.jpg';
import coverimg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaimg from '../../../assets/menu/pizza-bg.jpg';
import saladimg from '../../../assets/menu/salad-bg.jpg';
import soupimg from '../../../assets/menu/soup-bg.jpg';
import UseMenu from "../../Hooks/UseMenu";
import SectionTitle from "../Shared/SectionTitle";
import Menucategory from "./Menucategory";

const Menu = () => {

    const [menu] = UseMenu(); //custom hook_____________UseMenu.jsx

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');      
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Cover img={menuimg} title={"OUR MENU"}></Cover>

            <SectionTitle heading={"Today's Offer"} subHeading={"Don't miss"}></SectionTitle>

            <Menucategory items={drinks} title={"drinks"} img={menuimg}></Menucategory>

            {/* <Cover img={coverimg} title={"DESSERT MENU"}></Cover> */}

            <Menucategory items={dessert} title="dessert" img={coverimg}></Menucategory>

            {/* <Cover img={pizzaimg} title={"PIZZA MENU"}></Cover> */}

            <Menucategory items={pizza} title={"pizza"} img={pizzaimg}></Menucategory>

            {/* <Cover img={saladimg} title={"SALAD MENU"}></Cover> */}

            <Menucategory items={salad} title={"salad"} img={saladimg}></Menucategory>

            {/* <Cover img={soupimg} title={"SOUP MENU"}></Cover> */}
            
            <Menucategory items={soup} title={"soup"} img={soupimg}></Menucategory>

            

        </div>
    );
};

export default Menu;