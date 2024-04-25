import React from 'react'
import SubHeader from "./subComponents/SubHeader";
import SideContent from "./subComponents/SideContent";
import { FaBuilding, FaBusinessTime, FaGoodreads, FaReadme } from "react-icons/fa";


const Network = () => {
     const homeSubNavLinks = [
          {
              id: 1,
              label: "IT INFRASTRUCTURE",
              icon: FaBuilding,
              href: '#infrastructure'
         },
          {
              id: 2,
              label: "IT.INFRA",
              icon: FaBusinessTime,
              href: '#infra'
         },
          {
              id: 3,
              label: "BENEFITS",
              icon: FaGoodreads,
              href: '#benefits'
         },
          {
              id: 4,
              label: "REVIEWS",
              icon: FaReadme,
              href: '#reviews'
         }
     ]
  return (
     <div className="w-full h-fit p-0 m-0">
          <SubHeader subNavLinks={homeSubNavLinks} />
          <SideContent />
          <main className='w-5/6 h-full mt-10 p-3 flex justify-center'>
               <h1 className='text-center text-blue-950 text-3xl font-semibold self-center mb-28'>
                    I REALLY DON'T KNOW WHAT SHOULD BE HERE BUT I'LL PUT OTHER THINGS DEPENDING ON MY RESEARCH. I DON'T UNDERSTAND THE TERM <strong>NETWORK CONFIGURATIONS</strong>
               </h1>
          </main>
     </div>
  )
}

export default Network
