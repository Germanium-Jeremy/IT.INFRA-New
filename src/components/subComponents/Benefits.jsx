import React from 'react'

const Benefits = () => {
     const texts = [
          {
               id: 1,
               title: "Speeds up work processes",
               text: "Repeated and lenghtl tasks can take long hours of manual effort and huge resource costs. This IT INFRASTRUCTURE frees up resources to focus on other values-adiing activities."
          },
          {
               id: 2,
               title: "Standardizez work for fewer erros",
               text: "Manual allocation of technology resources leads to unpredicted human errors. Automation standardizes the allocation of resources while reducing the possibility of errors or delays."
          },
          {
               id: 3,
               title: "Ensures security and disaster recovery",
               text: "Human errors account for a good chunk of the security breach incidents within a business. infraIt eliminates humaninteraction to reduce the chance of unpredicted errors that cause security incidents."
          },
          {
               id: 4,
               title: "Resources Given",
               text: "We provide the Compute, Network, Workplace and Data PLatform needed To empower the users and rub the applications that run the business."
          },
          {
               id: 5,
               title: "Provision",
               text: "We provide On-Premises Data Centers, Hybrid Multi-Cloud, Edge Computing devices, all connected to enterprises and 5G Networks."
          }
     ]
  return (
    <div className='w-full h-fit' id='benefits'>
      <h1 className='text-blue-800 text-center p-2 mt-3 mb-5 font-bold'>BENEFITS</h1>
      <div className='w-full h-fit p-2 flex flex-col items-center'>
          {texts.map((oneText) => (
               <div className='w-full h-fit bg-slate-50 m-2 p-2 rounded-lg hover:bg-slate-200' id={oneText.id}>
                    <h2 className='text-blue-950 text-xl font-semibold'>{oneText.title}</h2>
                    <p className='text-lg text-blue-900'>{oneText.text}</p>
               </div>
          ))}
      </div>
    </div>
  )
}

export default Benefits