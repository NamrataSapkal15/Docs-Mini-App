import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"




const Card = ({data,referance}) => {
    return (
        < motion.div drag dragConstraints={referance} whileDrag={{scale:1.1}}  dragElastic={.1} dragTransition={{bounceStifness:600,bounceDamping:30}}  className=' p-5 flex-shrink-0 relative w-60 h-72 bg-zinc-900/90 rounded-[44px] text-white py-10 px-8  overflow-hidden'>

            <FaRegFileAlt />
            <p className='text-sm mt-5 font-semibold leading-tight '>{data.desc}</p>
            <div className='footer absolute bottom-0  w-full   py-3 left-0  '>
                <div className='flex items-center justify-between mb-3 px-8'>
                    <h5>{data.filesize}</h5>
                    
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center '>
                       
                       {
                        data.close ? <IoMdClose />  : <GoDownload size=".7em" color='#fff' /> } 
                    

                    </span>

                </div>
                {
                    data.tag.isOpen && ( <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" :'bg-green-600'} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagtitle}</h3>
                </div> 

                    ) 
                }
                
            </div>

        </ motion.div>
    )
}

export default Card