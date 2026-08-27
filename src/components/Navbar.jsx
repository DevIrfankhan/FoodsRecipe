// import React from 'react'
import { Search } from "lucide-react"

import { useState } from "react"

const Navbar = ({ inputValue }) => {
  const [value, setValue] = useState("")

  return (
    <div className="fixed z-50 top-0 flex-col md:flex-row  w-full py-5 h-40 md:h-20 flex bg-[#1E293B] justify-around items-center">
      <h1>Navbar</h1>
      <div></div>
      <div className="h-10 w-auto flex ">
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search recipe" className="  rounded-l-lg h-full bg-amber-50 w-40 md:w-90 outline-0 border-0 text-center
         placeholder:text-center" />
        <button onClick={() => inputValue(value)} className=" flex items-center justify-center bg-amber-600 h-full w-20 rounded-r-lg outline-0 border-0 "><Search size={20} /></button>
      </div>

    </div>
  )
}

export default Navbar
