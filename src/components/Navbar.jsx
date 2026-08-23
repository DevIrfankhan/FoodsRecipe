// import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full p-y-5 flex bg-gray-400 justify-around items-center">
      <h1>Navbar</h1>
      <div>
        <input type="text" placeholder="Search recipe" className=" h-full bg-amber-50 w-90 outline-0 border-0 placeholder:text-center" />
        <button>Search</button>
      </div>
   
    </div>
  )
}

export default Navbar
