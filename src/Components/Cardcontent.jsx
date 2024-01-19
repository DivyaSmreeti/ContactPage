// import React from 'react'
// import { HiOutlineUserCircle } from 'react-icons/hi';
// import useDisclouse from '../Hooks/useDisclose';
// import { RiEditCircleLine } from 'react-icons/ri';
// import { IoMdTrash } from 'react-icons/io';

// const Cardcontent = ({j,deleteContact}) => {
//     const {isOpen,onClose,onOpen} = useDisclouse();
//   return (
//     <div
//             key={j.id}
//             className="bg-yellow flex justify-between items-center p-2 rounded-lg"
//           >
//             <div className="flex gap-1">
//               <HiOutlineUserCircle className="text-orange text-4xl" />
//               <div className="">
//                 <h2 className="font-medium">{j.name}</h2>
//                 <p className="text-sm">{j.email}</p>
//               </div>
//             </div>
//             <div className="flex text-3xl">
//               <RiEditCircleLine onClick={onOpen} className="cursor-pointer"/>
//               <IoMdTrash className="text-orange cursor-pointer" onClick={()=>deleteContact(j.id)} />
//             </div>
//           </div>
//   )
// }

// export default Cardcontent