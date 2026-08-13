import { useEffect, useState } from "react"
import ApiResult from "./ApiResult"
// import Recipe from "./Recipe"


const ApiFile = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        
        let URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
        const FetchApi = async () => {
            let res = await fetch(URL)
            console.log(res)
            let pro = await res.json()
            // console.log(pro.meals)
            setMeals(pro.meals)
        }
        FetchApi()
    },[])
    console.log(meals)
  return (
      <div>
          <ApiResult meal={meals} />
          {/* <Recipe recipe={meals} /> */}
    </div>
  )
}

export default ApiFile
