import React, { useState } from 'react'
import Card from './Card'
import { useRef } from 'react';


export const Foreground = () => {

const ref =useRef(null);

    const data = [
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing. ',
            filesize: ".9mb",
            close: true,
            tag: { isOpen: false, tagtitle:'Downlaod Now', tagColor :'green'}
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing. ',
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagtitle:'Downlaod Now', tagColor :'green'}
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing. ',
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagtitle:'Upload', tagColor :'blue'}
        },
    ];

    return (
        <div ref={ref} className='fixed  top-0 left-0  z-[3] w-full h-full flex gap-10 flex-wrap mt-5'>
{
    data.map((item,index) => (
        <Card data={item} referance={ref}/>
    ))
}

        </div>
    )
}
