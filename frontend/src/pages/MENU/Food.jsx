import React, { useContext } from "react";
import "./Food.css";
import { StoreContext } from "../../Context/StoreContext";
import { food_list, menu_list } from "../../Collection/collection";

const Food = ({category,setcategory}) => {

  const {food_list} = useContext(StoreContext)
  return (
    <>
    <div>
      <div className="food-menu" id="food-menu">
        <h1>Explore our Menu</h1>
        <h4>
          <p className="food-text">
            Explore our menu filled with exquisite flavors and tantalizing
            options to satisfy every dishes.
          </p>
        </h4>
        <div className="expolore-menu-list">
          {menu_list.map((item, index) => {
            return (
              <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                 <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
      </div> 
    </div>
    </>
  );
};

export default Food;
