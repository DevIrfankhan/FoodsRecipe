// import React from 'react'

const Contact = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div className="w-full h-50  bg-gray-100">

      <div className="flex flex-col md:flex-row items-center gap-10 justify-around h-full">

        {/* box1 */}
        <div className="flex flex-col gap-2 items-start justify-center  h-full">
          <div className="flex items-center justify-center gap-3.5 text-xl text-gray-400 " >

            <i class="fa-solid fa-phone"></i>
            <span className="  flex gap-2 font-poppins"> 9696255752</span>
          </div>
          <div className="flex items-center justify-center gap-3.5 text-xl text-gray-400 " >
            <i class="fa-solid fa-envelope"></i>
            <span className="  flex gap-2 font-poppins" > irfankhanofficial140@gmail.com</span>
          </div>
          <div className="flex items-center justify-center gap-3.5 text-xl text-gray-400 " >

            <i class="fa-brands fa-whatsapp"></i>
            <span className="  flex gap-2 font-poppins"> Whatsapp</span>
          </div>
          <div className="flex items-center justify-center gap-3.5 text-xl text-gray-400 " >

            <i class="fa-solid fa-location-crosshairs"></i>
            <span className="  flex gap-2 font-poppins" > New Hider Ganj Lucknow Utter Pradesh</span>
          </div>
        </div>

        {/* box2 */}
        <div className="flex flex-col gap-2 items-start justify-center  h-full">

          <div className="flex items-center justify-center gap-3.5 text-xl text-gray-400 " >
            <i className="fa-brands fa-github text-3xl"></i>
            <a href="https://github.com/DevIrfankhan">gitHub</a>
          </div>
          <div className="flex items-center justify-center gap-3.5 text-xl text-gray-400 " >
            <i className="fa-brands fa-square-linkedin text-3xl"></i>
            <a href="https://www.linkedin.com/feed/">Linkedin</a>
          </div>
          <div className="flex items-center justify-center gap-3.5 text-xl text-gray-400 " >
            <i class="fa-brands fa-instagram text-3xl"></i>
            <a href="https://www.instagram.com/irfan__k.h.a.n?stkn=cTF1b2xuNHdyMmts">Instagram</a>
          </div>
        </div>
        {/* box3 */}
        <div>
          <i class="fa-solid fa-arrow-up-long"></i>
          <button onClick={scrollTop} className="outline-0 border-0 cursor-pointer"> top</button>


        </div>
      </div>
    </div>
  )
}

export default Contact
