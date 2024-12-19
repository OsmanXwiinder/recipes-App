
import { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "e89d5804f1df4364b5f664404ca904ca"
export default function Search({setFooddata}) {
    const [query, setQuery] = useState("")
    useEffect(()=>{
      async function fetchFood(){
       const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
       const data = await res.json()
       console.log(data.results);      
       setFooddata(data.results);
      }
      fetchFood();
    }, [query])
  return (
    <div className={styles.searchContainer}>
      <input className={styles.input} value={query} onChange={(e)=>setQuery(e.target.value)} type="text" placeholder="Search-recipe" />
    </div>
  )
}
Search.propTypes = {setFooddata: PropTypes.func.isRequired}