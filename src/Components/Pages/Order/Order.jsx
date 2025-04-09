
// step-13_____________________________________________________________________________________1

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderImg from '../../../assets/shop/banner2.jpg';
import Cover from '../Shared/Cover';
import { useState } from 'react';
import UseMenu from '../../Hooks/UseMenu';
import OrderTabsHooks from '../../Hooks/OrderTabsHooks';
import { useParams } from 'react-router-dom';
const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']; //step-15_______________1

    const {category} = useParams();   //step-14___________________________________6
    
    const initialIndex = categories.indexOf(category); //step-15__________________________________2

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = UseMenu();

    

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>

            <Cover img={orderImg} title={"OUR SHOP"}></Cover>

            <div className=' md:w-7xl mx-auto my-10 '>
              <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
               <TabList>
                 <Tab>SALAD</Tab>
                 <Tab>PIZZA</Tab>
                 <Tab>SOUPS</Tab>
                 <Tab>DESSERT</Tab>
                 <Tab>DRINKS</Tab>
               </TabList>
               {/* step-14______________________________________________________________3 */}
               <TabPanel>
                  <OrderTabsHooks items={salad}></OrderTabsHooks>
               </TabPanel>
               <TabPanel>
                  <OrderTabsHooks items={pizza}></OrderTabsHooks>
               </TabPanel>
               <TabPanel>
                  <OrderTabsHooks items={soup}></OrderTabsHooks>
               </TabPanel>
               <TabPanel>
                  <OrderTabsHooks items={dessert}></OrderTabsHooks>
               </TabPanel>
               <TabPanel>
                  <OrderTabsHooks items={drinks}></OrderTabsHooks>
               </TabPanel>
               {/* step-14____________________________________________________________________3 */}
              </Tabs>
            </div>

            
        </div>
    );
};

export default Order;