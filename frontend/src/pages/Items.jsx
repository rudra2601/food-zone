import React from 'react'
import Food from './MENU/Food';
import { useState } from 'react';
import Display from '../components/FoodDisplay/Display.jsx';

function Items() {

  const [category,setcategory] = useState("All");

  return (
    <div>
         <Food  category={category} setcategory={setcategory} ></Food>
        <Display category={category}/>
    </div>
  )
}

export default Items;