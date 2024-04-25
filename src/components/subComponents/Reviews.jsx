import React from 'react'
import Image1 from '../../assets/imgs/infra.jpg'
import Image2 from '../../assets/imgs/infra.png'
import Image3 from '../../assets/imgs/infra.webp'
import Image4 from '../../assets/imgs/infra1.jpg'
import Image5 from '../../assets/imgs/infra2.jpg'
import Image6 from '../../assets/imgs/infra3.jpeg'
import Image7 from '../../assets/imgs/infra4.jpg'

const Reviews = () => {
     const Reviews = [
          {
               id: 1,
               profilePic: Image1,
               profileName: "Jeremy",
               content: "I really like this website because it really helped me manage my Network."
          },
          {
               id: 2,
               profilePic: Image2,
               profileName: "Jeremy",
               content: "I really like this website because it really helped me manage my Network."
          },
          {
               id: 3,
               profilePic: Image3,
               profileName: "Jeremy",
               content: "I really like this website because it really helped me manage my Network."
          },
          {
               id: 4,
               profilePic: Image4,
               profileName: "Jeremy",
               content: "I really like this website because it really helped me manage my Network."
          },
          {
               id: 5,
               profilePic: Image5,
               profileName: "Jeremy",
               content: "I really like this website because it really helped me manage my Network."
          },
          {
               id: 6,
               profilePic: Image6,
               profileName: "Jeremy",
               content: "I really like this website because it really helped me manage my Network."
          },
          {
               id: 7,
               profilePic: Image7,
               profileName: "Jeremy",
               content: "I really like this website because it really helped me manage my Network."
          },
          {
               id: 8,
               profilePic: Image1,
               profileName: "Jeremy",
               content: "I really like this website because it really helped me manage my Network."
          },
          {
               id: 9,
               profilePic: Image2,
               profileName: "Jeremy",
               content: "I really like this website because it really helped me manage my Network."
          },
     ]
  return (
    <div className='w-full h-fit' id='reviews'>
      <h1 className='text-blue-800 text-center p-2 mt-3 mb-5 font-bold'>REVIEWS</h1>
      <div className='w-full h-fit grid grid-flow-col overflow-hidden overflow-x-auto'>
          <div className='m-2 p-2 bg-slate-50 hover:bg-slate-100 w-48 h-72'>
               <textarea cols="30" rows="5" placeholder='Your Comment' className='w-full h-48 min-h-48 max-h-48 outline-none p-3'></textarea>
               <button className='w-full relative bottom-0 p-2 mt-4 bg-blue-900 hover:bg-blue-800 text-blue-100'>Post Comment</button>
          </div>
          {Reviews.map((review) => (
               <div className='m-2 p-2 bg-slate-50 hover:bg-slate-100 hover:shadow-md hover:transition-shadow w-40 h-72 flex flex-col'>
                    <img src={review.profilePic} className='w-2/3 h-24 rounded-full border-4 border-blue-900 self-center' />
                    <h3 className='text-center text-xl text-blue-950 font-semibold mb-2'>{review.profileName}</h3>
                    <p className='text-sm text-center text-blue-900 font-light'>{review.content}</p>
               </div>
          ))}
      </div>
    </div>
  )
}

export default Reviews
