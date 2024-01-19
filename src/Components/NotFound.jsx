// import React from 'react'
import { RiContactsBook2Line } from "react-icons/ri";

const NotFound = () => {
  return (
    <div className="m-auto pt-[30%] flex text-white items-center gap-2 justify-center "> 
        <RiContactsBook2Line className="text-3xl text-white"/>
        <h3 className="text-xl font-semibold">Contact Not Found </h3>
    </div>
  )
}

export default NotFound