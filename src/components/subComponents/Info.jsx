import React from 'react'
import Image from '../../assets/imgs/infra6.jpg'

const Info = () => {
     const UpdatePhoto = (
          <form className='w-3/6 h-screen bg-slate-50 fixed flex justify-center items-center p-3'>
               <div>
                    <img src={Image} className='w-4/5 h-4/6' />
               </div>
               <div className='flex justify-evenly p-2 items-center'>
                    <button className='p-2 bg-blue-800 text-white hover:bg-blue-600'>Change Photo</button>
                    <input type="submit" value={'Apply Changes'}  className='p-2 bg-blue-100 text-blue-950 shadow-lg hover:bg-slate-50' />
               </div>
          </form>
     );
  return (
    <div className='w-full h-fit p-1' id='yourInfo'>
      <h1 className='text-blue-800 text-center p-2 mb-5 font-bold'>MY INFO</h1>
      <div className='w-full h-fit p-3 relative'>
          <div className='flex flex-col relative'>
               <div className='absolute -top-10 left-16 w-40 h-40 rounded-full border-4 border-blue-800 flex justify-center items-center p-1'>
                    <div className='h-full w-full border-4 border-blue-600 rounded-full overflow-hidden'>
                         <img src={Image} className='w-full h-full rounded-full' />
                    </div>
               </div>
               <button className='absolute top-32 left-14 w-1/5 bg-blue-800 hover:bg-blue-600 text-white p-2 rounded-lg shadow-lg'> Change Profile</button>
          </div>
          <form>
               <div className='ml-72 text-lg mb-5'>
                    <label htmlFor="name" className='text-blue-950 font-semibold pb-2 block'>UserName Or CampanyName</label>
                    <input type="text" className='text-blue-950 p-1 pl-4 border-b-blue-950 border-2 outline-none w-full' value={'Username'} />
               </div>
               <div className='ml-72 text-lg mb-5'>
                    <label htmlFor="email" className='text-blue-950 font-semibold pb-2block'>Email</label>
                    <input type="email" className='text-blue-950 p-1 pl-4 border-b-blue-950 border-2 outline-none w-full' value={'Email@gmail.com'} />
               </div>
               <div className='ml-72 text-lg mb-5'>
                    <label htmlFor="birthdate" className='text-blue-950 font-semibold pb-2 block'>BirthDate</label>
                    <input type="date" className='text-blue-950 p-1 pl-4 border-b-blue-950 border-2 outline-none w-full' />
               </div>
               <div className='ml-72 text-lg mb-5'>
                    <label htmlFor="birthdate" className='text-blue-950 font-semibold pb-2'>Location</label>
                    <p className='text-blue-950 p-1 pl-4 border-b-blue-950 border-2'>London, UK</p>
               </div>
               <div className='ml-72 text-lg mb-5'>
                    <label htmlFor="corporate" className='text-blue-950 font-semibold pb-2'>Corporate</label>
                    <p className='text-blue-950 p-1 pl-4 border-b-blue-950 border-2'>Individual</p>
               </div>
               <div className='ml-72 text-lg mb-5'>
                    <label htmlFor="id" className='text-blue-950 font-semibold pb-2'>ID number</label>
                    <p className='text-blue-950 p-1 pl-4 border-b-blue-950 border-2'>uwrgf no77v r8</p>
               </div>
               <div className='ml-72 text-lg mb-5'>
                   <input type="submit" value={'Save'} id='submit' className='w-full p-2 text-center text-blue-900 bg-slate-100 hover:bg-blue-100 hover:text-blue-900 rounded-lg shadow-md' />
               </div>
          </form>
      </div>
    </div>
  )
}

export default Info