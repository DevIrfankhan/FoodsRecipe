 import { Routes,Route } from "react-router-dom"
import ApiFile from "./components/ApiFile"
import Recipe from "./components/Recipe"
import Navbar from "./components/Navbar"
import { useState } from "react"
import Footer from "./components/Footer"

function App() {
  const [search,setSearch] = useState("chicken")
  return (
    <>
<div className="flex flex-col h-full bg-amber-950  border-2">
      <Navbar inputValue={ setSearch} />
        <div className="flex-1 pt-20 border-2 h-full bg-amber-300">


      <Routes>
        < Route path="/" element={<ApiFile search={search} />} />
        < Route path="/recipe/:id" element={ <Recipe/>} />
      </Routes>
        </div>
      <Footer/>
      </div>
    </>
  )
}

export default App
