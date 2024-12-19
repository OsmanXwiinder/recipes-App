/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import FoodItem from './FoodItem'

export default function FoodList({fooddata,setfoodId}) {
  return (
    <div>
      {fooddata.map((food)=>(
      <FoodItem setfoodId = {setfoodId} key={food.id} food = {food}/>
    ))}
    </div>
  )
}


FoodList.prototype = {fooddata: PropTypes.func.isRequired}