import React from 'react'
import Card from './Card'
import { motion } from "framer-motion";


function Foreground() {
    

    const data =[
        {desc:"Hey this is Satish Kumar. And I am a Web Developer.",
            filesize:".9mb",
            close:true, 
            tag:{isOpen: true, tagTitle:"Download Now", tagColor:"blue"}
    },

    {desc:"This is a simple a practise on reactjs and in this we use Tailwind css to make this docs. ",
        filesize:".9mb",
        close:false, 
        tag:{isOpen: true, tagTitle:"Download Now", tagColor:"green"}
},

{desc:"Hurray, This project are done , I will make many projects on the web devlopment very soon. ",
    filesize:".9mb",
    close:false, 
    tag:{isOpen: true, tagTitle:"Upload", tagColor:"blue"}
},

    ];
  return (
    <div className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5 '>
        {data.map((item,index)=>(
            <Card data={item}/>
        ))}
    </div>
  );
}

export default Foreground