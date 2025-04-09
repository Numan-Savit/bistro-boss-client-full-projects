
// step-14_______________________________________________________________________________2
import FoodCard from "../FoodCard/FoodCard";

const OrderTabsHooks = ({items}) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default OrderTabsHooks;
