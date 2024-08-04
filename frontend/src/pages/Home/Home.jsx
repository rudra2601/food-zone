import React, { useState } from "react";
import Carousal from "../../components/Carousal";
import Food from "../MENU/Food";
import './Home.css';
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

export default function Home() {
  const [category,setcategory] = useState("All");

  return (
    <>
      <div className="home">
        <Carousal></Carousal>
        <Food  category={category} setcategory={setcategory} ></Food>
        <FoodDisplay category={category}/>
    </div>
    </>
  );
}
