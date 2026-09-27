import { useNavigate } from "react-router-dom"
import Loding from "./Loding";


const ApiResult = ({ meal }) => {
    const navigate = useNavigate();

    return (
        <div className="flex w-full  items-center justify-center flex-wrap gap-6  bg-[#e8e8e8]">
            { meal && meal.length > 0 ? (
                meal.map((list) => (
                    <div className=" h-96 w-70  rounded flex items-center flex-col shadow-2xl hover:-translate-y-2 transition duration-300 ">
                        <img src={list.strMealThumb} alt="" className="h-70 w-70 rounded" />
                        <h1>{list.strMeal}</h1>

                        <button onClick={() => navigate(`/recipe/${list.idMeal}`)}>Rrecips</button>
                    </div>
                ))
            ) : <Loding/>}
        </div>
    )
}

export default ApiResult
