 import { Routes,Route } from "react-router-dom"
import ApiFile from "./components/ApiFile"
import Recipe from "./components/Recipe"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
        <Navbar/>
      <Routes>
        < Route path="/" element={<ApiFile />} />
        < Route path="/recipe/:id" element={ <Recipe/>} />
     
    </Routes>
    </>
  )
}

export default App
