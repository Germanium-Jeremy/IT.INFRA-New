import React from 'react'

const Infrastructure = () => {
     const accordion = () =>{
          const accContent = document.getElementById("accContent")
          if (accContent.style.height == "fit-content"){
               accContent.style.height = "0px"
          }else{
               accContent.style.height = "fit-content"
          }
     }
  return (
    <div className='text-center p-2' id='infrastructure'>
     <h1 className='text-blue-800 text-center p-2 mb-5 font-bold'>IT INFRASTRUCTURE</h1>
     <details className='text-left p-2'>
          <summary className='p-1 bg-slate-100 cursor-pointer'>WHAT IS IT INFRASTRUCTURE?</summary>
          <p className='relaive overflow-hidden overflow-y-auto shadow-lg p-2'>
               It provides the COMPUTE, NETWORK, WORKPLACE and DATA PLATFORM
               capabilities needed to empower the users and run the application that run the business.Traditional
               Infrastructure include expensive hardware, data centers and servers all requiring manual intervation.
          </p>
     </details>
     <details className='text-left p-2'>
          <summary className='p-1 bg-slate-100 cursor-pointer'>HOW DOES IT INFRASTRUCTURE WORK?</summary>
          <p className='relaive overflow-hidden overflow-y-auto shadow-lg p-2'>
               To maximise the value of cloud, campanies must modernise to a software-defined and intelligent
               Infrastructure. Modern Infrastructure includes a mix of : on-premises data centers, hybrid multi-cloud
               environments and edge computing devicec, all connected by Enterprises and 5G Networks.
               Increasingly, Infrastructure is code that can be automatically managed and monitored.
               Resources are automatically privisioned. No more manual configurations required.
               IT Infr
          </p>
     </details>
    </div>
  )
}

export default Infrastructure
