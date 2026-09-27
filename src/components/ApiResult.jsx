import { useNavigate } from "react-router-dom"


const ApiResult = ({ meal }) => {
    const navigate = useNavigate();

    return (
        <div className="flex w-full  items-center justify-center flex-wrap gap-6  bg-[#FFF8E1]">
            {meal.map((list) => (
                <div className=" h-96 w-70 border-2 rounded flex items-center flex-col ">
                    <img src={list.strMealThumb} alt="" className="h-70 w-70 rounded" />
                    <h1>{list.strMeal}</h1>
                    <div className="text-4xl">
                        <i className="fa-solid fa-house"></i>
                        <i className="fa-solid fa-phone"></i>
                        <i className="fa-brands fa-github"></i>
                    </div>
                    <button onClick={()=>navigate(`/recipe/${list.idMeal}`)}>Rrecips</button>
                </div>
            ))}
        </div>
    )
}

export default ApiResult
