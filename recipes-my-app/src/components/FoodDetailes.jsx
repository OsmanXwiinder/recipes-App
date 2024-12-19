import { useEffect, useState } from "react"

import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";
// eslint-disable-next-line react/prop-types
export default function FoodDetailes({foodId}) {
  const [food, setfood] = useState({});
  const [isLoding, setisLoding] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
  const API_KEY = "e89d5804f1df4364b5f664404ca904ca"
  useEffect(()=>{
    async function fetchFood(){
    const res = await fetch(`${URL}?apiKey=${API_KEY}`);
   const data = await res.json();
   console.log(data);
   setfood(data);
   setisLoding(false);
    }
    fetchFood();
  },[foodId])
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
      
      <img className={styles.recipeImage} src={food.image} alt="" />

    {/* recipe details */}
      <div className={styles.recipeDetails}>
      <span>
        <strong>⏰{food.readyInMinutes} Minutes</strong>
      </span>
    <span>
      👪 <strong>Serves{food.servings}</strong>
    </span>
      <span><strong>{food.vegetarian ? "🍠 Vegetarian": "🍖 Non-Vegetarian"}</strong></span>
      <span><strong>{food.vegan ? "🕊Vegan" : ""}</strong></span>
      </div>
      <div>
      $<span><strong>{food.pricePerServing/100} Per Serving</strong></span>
      </div>

      </div>
       {/* this is a intruction div */}
       <h2>Ingrediants</h2>
        <ItemList food = {food} isLoding = {isLoding}/>
      <h2>Instructions</h2>
      <div className = {styles.recipeInstructions}>
       <ol>
        {isLoding? <p>Loading...</p>: food.analyzedInstructions[0].steps.map((step)=>(<li key={step}>{step.step}</li>))}
        </ol>
      </div>
    </div>
  )
}
