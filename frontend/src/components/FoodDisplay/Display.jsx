import React, { PureComponent, useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'

const Display = ({category}) => {

    const {items_detail} = useContext(StoreContext)

    return (
      <div className='food-display' id='food-display'>
        <h2>All dishes near you</h2>
        <div className="food-display-list">
          {items_detail.map((item,index)=>{
            if (category==="All" || category===item.category) {
            return <FoodItem key={index} _id={item._id} image={item.image} name={item.name} description={item.description} price={item.price} rating={item.Image}/>
            }
          })}
        </div>
      </div>
    )
  }

export default Display;