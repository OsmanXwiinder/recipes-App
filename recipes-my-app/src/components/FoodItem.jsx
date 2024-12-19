/* eslint-disable react/prop-types */

import styles from "./fooditem.module.css";
export default function FoodItem({food, setfoodId}) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.ButtonContainer}>
      <button onClick={()=>{console.log(food);
      setfoodId(food.id)
      }} 
      className={styles.itembutton}>View Recipe</button>
      </div>
      
    </div>
  )
}
