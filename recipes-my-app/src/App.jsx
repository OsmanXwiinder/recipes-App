import FoodList from "./components/FoodList"
import Nav from "./components/Nav"
import Search from "./components/Search"
import "./App.css";
import { useState } from "react"
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetailes from "./components/FoodDetailes";
function App() {
    const [fooddata, setFooddata] = useState([])
    const [foodId, setfoodId] = useState("715415");
  return (
    <div className="App">
      <Nav/>
    <Search fooddata={fooddata} setFooddata= {setFooddata}/>
    <Container>

      <InnerContainer>
      <FoodList setfoodId = {setfoodId} fooddata={fooddata}/>
      </InnerContainer>

      <InnerContainer>
        <FoodDetailes foodId = {foodId}/>
      </InnerContainer>
    </Container>
    
    
    </div>
  )
}

export default App
