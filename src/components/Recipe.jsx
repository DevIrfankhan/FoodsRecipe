import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// impo/rt React from 'react'

const Recipe = () => {
    const [recipe,setRecipe] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        
        let URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        const fetchId = async () => {
            let res = await fetch(URL)
            let pro = await res.json()
            console.log(pro)
            setRecipe(pro.meals[0])
        }
        fetchId()
    },[id])
   
  return (
      <div className=" flex flex-col md:flex-row h-screen m-10  items-center justify-center ">
          <div className=" ">
              
          <img
              src={recipe?.strMealThumb}
              alt={recipe?.strMeal}
          />
          </div>
          <div className=" ">
              <p className="">{recipe?.strInstructions
 }</p>
          </div>
    </div>
  )
}

export default Recipe
