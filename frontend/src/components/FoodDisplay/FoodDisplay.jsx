import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Function to filter and limit the number of items per category
  const getFilteredFoodItems = () => {
    // Initialize an object to store items by category
    const itemsByCategory = {};

    // Populate the itemsByCategory object
    food_list.forEach(item => {
      if (category === 'All' || category === item.category) {
        if (!itemsByCategory[item.category]) {
          itemsByCategory[item.category] = [];
        }
        itemsByCategory[item.category].push(item);
      }
    });

    // Initialize array to store limited items
    const limitedItems = [];

    // Loop through each category in itemsByCategory
    Object.keys(itemsByCategory).forEach(category => {
      // Add 2 to 3 items from each category to limitedItems
      limitedItems.push(...itemsByCategory[category].slice(0, 2)); // Change 2 to the number of items you want to display per category
    });

    return limitedItems;
  };

  const filteredFoodItems = getFilteredFoodItems();

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {filteredFoodItems.map((item, index) => (
          <FoodItem
            key={index}
            _id={item._id}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            rating={item.rating} 
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
