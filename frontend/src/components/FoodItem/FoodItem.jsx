import React, { useContext } from "react";
import "./FoodItem.css";
import { icon1 } from "../../Collection/collection";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({_id,name, price, description, image,rating}) => {

    const {cartItems,addTocart,removeFromcart,url} = useContext(StoreContext);
      
  return (
      <div className="food-item" style={{ width: "18rem", maxHeight: "100%" }}>
        <div className="food-item-img-container">
          <img className="food-item-image" src={url+"/images/"+image} alt={name} />
          {!cartItems[_id]
              ?<img className="add" onClick={()=>addTocart(_id)} src={icon1.add_icon} 
              alt=""/>
              :<div className="food-item-container"> 
              <img onClick={()=>removeFromcart(_id)} src={icon1.remove_icon} alt=""/>
              <p>{cartItems[_id]}</p>
              <img onClick={()=>addTocart(_id)} src={icon1.add_icon} alt=""/>
              </div>
          }
        </div>
        <div className="food-item-info ">
          <div className="food-item-name-rating text-align-centre">
            <p>{name}</p>
            <img src={icon1.rating_icon} style={{ width: "7rem", Height: "100%" }} alt="rating"/>
          </div>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">₹{price}</p>
        </div>
      </div>
  );
};

export default FoodItem;
