import { useParams } from "react-router-dom"

// impo/rt React from 'react'

const Recipe = () => {
    const { id } = useParams()
    console.log(id)
  return (
    <div>
          <h1 className="text-5xl">recipe</h1>
          <p>Recipe ID: {id}</p>
    </div>
  )
}

export default Recipe
