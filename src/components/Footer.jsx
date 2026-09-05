// import { Contact } from "lucide-react"
import { Phone, Mail, MapPin } from "lucide-react"
// import React from 'react'
const listInfo = {
  contact: 9696255752,
  email: "irfankhanofficial140@gmail.com",
  location: "Lucknow"

}

const Footer = () => {

  return (
    <div className=" flex items-center justify-between h-50 bg-blue-950" w-full py-40 p-20 >
      <div className=" flex items-start justify-center flex-col  w-70 h-50 border-2  "   >
        <div className="flex gap-3" >
          <Phone size={20} className="text-[#F59E0B]" />
          <span> {listInfo.contact} </span>
        </div>
        <div className="flex gap-3" >
          <Mail size={20}  className="text-[#F59E0B]"/>
          <span> {listInfo.email} </span>
        </div>
        <div className="flex gap-3" >
          < MapPin size={20} className="text-[#F59E0B]" />
          <span> {listInfo.location} </span>
        </div>
      </div>
      <div className=" flex items-start justify-center flex-col  w-70 h-50 border-2  "   >
        <div className="flex gap-3" >
          <Phone size={20} className="text-[#F59E0B]" />
          <span> {listInfo.contact} </span>
        </div>
        <div className="flex gap-3" >
          <Mail size={20}  className="text-[#F59E0B]"/>
          <span> {listInfo.email} </span>
        </div>
        <div className="flex gap-3" >
          < MapPin size={20} className="text-[#F59E0B]" />
          <span> {listInfo.location} </span>
        </div>
      </div>
      <div className=" flex items-start justify-center flex-col  w-70 h-50 border-2  "   >
        <div className="flex gap-3" >
          <Phone size={20} className="text-[#F59E0B]" />
          <span> {listInfo.contact} </span>
        </div>
        <div className="flex gap-3" >
          <Mail size={20}  className="text-[#F59E0B]"/>
          <span> {listInfo.email} </span>
        </div>
        <div className="flex gap-3" >
          < MapPin size={20} className="text-[#F59E0B]" />
          <span> {listInfo.location} </span>
        </div>
        <div className="flex gap-3" >
          < MapPin size={20} className="text-[#F59E0B]" />
          <span> {listInfo.location} </span>
        </div>
      
       
       
      
      </div>
     
    </div>
  )
}

export default Footer
