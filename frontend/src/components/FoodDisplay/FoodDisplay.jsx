import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";
import FoodItem from "./FoodItem";
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishs near you</h2>
      <div className="food-display-list">
        {food_list.map((items, index) => {
          if (category === "All" || category === items.category) {
            return (
              <FoodItem
                key={index}
                id={items._id}
                name={items.name}
                description={items.description}
                price={items.price}
                image={items.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
