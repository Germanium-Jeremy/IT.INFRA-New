import React from 'react'
import It from '/it.jpg'

const Reset = () => {
  return (
    <div className='fixed top-0 bottom-0 right-0 left-0 bg-white z-30 p-5 flex justify-center items-center'>
      <form className='self-center bg-blue-50 w-3/6 h-auto shadow-2xl relative flex flex-col items-center text-center p-6'>
        <img src={It} className='w-20 h-20 mb-2 -mt-12' alt='IT' />
        <p className='text-blue-950 text-xl font-semibold'>RESET YOUR PASSWORD FOR IT INFRA</p>
        <div className='text-left text-sm w-full p-2'>
          <label htmlFor="password" className='text-blue-900 text-xl block'>Change Password</label>
          <input type="password" id='password' required className='bg-slate-50 focus:bg-white outline-none p-2 w-full text-xl text-blue-950 rounded-lg border-b-2 border-blue-900' />
        </div>
        <div className='text-left text-sm w-full p-2'>
          <label htmlFor="comfirmPassword" className='text-blue-900 text-xl block'>Comfirm Password</label>
          <input type="password" id='confirmPassword' required className='bg-slate-50 focus:bg-white outline-none p-2 w-full text-xl text-blue-950 rounded-lg border-b-2 border-blue-900' />
        </div>
        <div className='text-left text-sm w-full p-2'>
          <input type="submit" id='submit' value={'Reset Password'} className='bg-slate-50 hover:bg-white p-2 w-full text-xl text-blue-950 rounded-lg border-b-2 border-blue-900' />
        </div>
      </form>
    </div>
  )
}

export default Reset
