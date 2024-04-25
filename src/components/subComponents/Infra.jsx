import React from 'react'
import Image1 from '../../assets/imgs/infra1.jpg'
import Image2 from '../../assets/imgs/infra1.webp'
import Image3 from '../../assets/imgs/infra2.jpg'
import Image4 from '../../assets/imgs/infra3.jpeg'

const Infra = () => {
     const InfraDiv = [
          {
               id: 1,
               label: "We are one Campany That can help you to get your lincesses.",
               content: "We provide you with the software lincess you need to apen an application accordance to the manufacturer or help you to set your own software lincess for your programm.",
               img: Image1,
               alt: "image1"
          },
          {
               id: 2,
               label: "We help you to make, maintain and manage your cloud storage.",
               content: "We help you to make your own cloud storage, maintain, manage, update and real-time monitoring of your cloud storage. We also allow you to connect it to your clients.",
               img: Image2,
               alt: "image2"
          },
          {
               id: 3,
               label: "We help you to set your network configurations.",
               content: "You can set the desired network configurations for your network. You can grant or revoke permissions, block sites, manage the traffic on your network.",
               img: Image3,
               alt: "image3"
          },
          {
               id: 4,
               label: "We help you set, manage, maintain and monitir server logs.",
               content: "We help you to do powerful programms that can help you to make and manage the server logs for your network.",
               img: Image4,
               alt: "image4"
          }
     ]
     const styles = {animation: "grow infinite 10s"}
  return (
    <div className='text-center text-blue-950' id='infra'>
     <h1 className='text-blue-800 text-center p-2 mt-3 mb-5 font-bold'>INFRA.IT</h1>
      <div className='text-center items-center grid grid-cols-2 justify-between gap-5 pl-20'>
          {InfraDiv.map((divs) => (
               <div className='w-4/5 h-80 bg-slate-50 p-2 self-center shadow-md mb-5 hover:animate-pulse'>
                    <img src={divs.img} alt={divs.alt} title={divs.alt} className='w-full h-40 shadow-lg' />
                    <h3 className='text-lg text-blue-950 font-semibold mb-2'>{divs.label}</h3>
                    <p className='text-sm text-blue-900'>{divs.content}</p>
               </div>
          ))}
      </div>
    </div>
  )
}

export default Infra
