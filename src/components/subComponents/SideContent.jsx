import React from 'react'
import Image1 from '../../assets/imgs/infra.jpg'
import Image2 from '../../assets/imgs/infra.png'
import Image3 from '../../assets/imgs/infra.webp'
import Image4 from '../../assets/imgs/infra5.png'
const SideContent = () => {
     const SideView = [
          {
               id: 1,
               label: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
               imglink: Image1
          },
          {
               id: 2,
               label: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
               imglink: Image2
          },
          {
               id: 3,
               label: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
               imglink: Image3
          },
          {
               id: 4,
               label: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
               imglink: Image4
          },
          {
               id: 5,
               label: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
               imglink: Image4
          },
          {
               id: 6,
               label: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
               imglink: Image4
          },
          {
               id: 7,
               label: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
               imglink: Image4
          }
     ]
  return (
    <div className='fixed right-0 top-14 w-52 bottom-2 bg-slate-50 flex flex-col p-4 overflow-hidden overflow-y-auto'>
     {SideView.map((side) => (
          <div className="w-full h-fit pt-4 text-center relative">
               <img src={side.imglink} alt="Image" className='w-fit h-fit overflow-hidden' />
               <p className='absolute top-2 left-1 right-1 bottom-1 text-white font-semibold flex items-center'>
                    {side.label}
               </p>
          </div>
     ))}
    </div>
  )
}
export default SideContent