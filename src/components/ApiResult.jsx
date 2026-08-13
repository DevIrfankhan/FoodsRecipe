import { useNavigate } from "react-router-dom"


const ApiResult = ({ meal }) => {
    const navigate = useNavigate();

    return (
        <div className="flex w-full h-screen items-center justify-center flex-wrap gap-6 m-10">
            {meal.map((list) => (
                <div className=" h-96 w-70 border-2 rounded flex items-center flex-col ">
                    <img src={list.strMealThumb} alt="" className="h-70 w-70 rounded" />
                    <h1>{list.strMeal}</h1>
                    <button onClick={()=>navigate(`/recipe/${list.idMeal}`)}>Rrecips</button>
                </div>
            ))}
        </div>
    )
}

export default ApiResult
