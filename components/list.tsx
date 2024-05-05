"use client";
import { useEffect } from "react";
import { useState } from 'react';

const List = () => {
    const items = [{
        id: 0,
        name: 'Cats',
      }, {
        id: 1,
        name: 'Games',
      }, {
        id: 2,
        name: 'Art & Drawing',
      },
    ];

    const [reverseOrder, setReverseOrder] = useState<boolean>(false);
    
    const itemsListed = items.map(listItem => 
        <li key={listItem.id}>
            {listItem.name}
        </li>
    )

    useEffect(() => {
        const keyHandler = (event:any) => {
          if(event.key == " ") {
            event.preventDefault();
            setReverseOrder(!reverseOrder)
          }
        };
    
        window.addEventListener('keydown', keyHandler);
    
        return()=> {
          window.removeEventListener('keydown', keyHandler);
        }
    });
    
  return (
    <>
        <div className='max-container grid lg:grid-cols-2 py-20 gap-10'>
            <p className='flex flex-col text-right'>
                A few things that interest me that<br/> 
                may influence what I post on here are:
            </p>
            <ul className={`list-inside flex ${reverseOrder ? 'flex-col-reverse' : 'flex-col'} list-disc ml-32 text-[#713f12]`}>
                {itemsListed}
            </ul>
        </div>
        
        <div className='flex flex-col justify-center items-center'>
            <button 
                className="flexCenter gap-3 rounded-full bg-amber-400 px-8 py-4 text-white transition-all hover:bg-amber-500"
                onClick={() => setReverseOrder(!reverseOrder)}>

                <label className="bold-16 whitespace-nowrap">
                    Reorder List
                </label>

            </button>
            <div className="text-[#713f12]">
              (Can be pushed by pressing the Spacebar)
            </div>
        </div>
        
    </>
  )
}

export default List