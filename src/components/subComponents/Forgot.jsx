import React from 'react'
import It from '/it.jpg';
import { Link } from 'react-router-dom'

const Forgot = () => {
  function disp() {
    var coded = 0
    var code = document.getElementById("code")
    code.style.display = "block"
  }

  return (
    <div className='fixed top-0 bottom-0 right-0 left-0 bg-white z-30 p-5 flex justify-center items-center'>
      <form className='self-center bg-blue-50 w-3/6 h-auto shadow-2xl relative flex flex-col items-center text-center p-6'>
        <img src={It} className='w-20 h-20 mb-2 -mt-12' alt='IT' />
        <p className='text-blue-950 text-xl font-semibold'>FORGOT PASSWORD FOR IT INFRA</p>
        <div className='text-left text-sm w-full p-2'>
          <label htmlFor="email" className='text-blue-900 text-xl block'>Email</label>
          <input type="email" id='email' required className='bg-slate-50 focus:bg-white outline-none p-2 w-full text-xl text-blue-950 rounded-lg border-b-2 border-blue-900' />
        </div>
        <div className='text-left text-sm w-full p-2 hidden' id='code'>
          <label htmlFor="code" className='text-blue-900 text-xl block'>Code</label>
          <input type="text" id='code' required className='bg-slate-50 focus:bg-white outline-none p-2 w-full text-xl text-blue-950 rounded-lg border-b-2 border-blue-900' />
        </div>
        <div className='text-left text-sm w-full mb-5 mt-4'>
          <p className='text-center text-blue-900 text-xl'>The <strong>Reset Password</strong> link was sent to your email</p>
        </div>
        <div className='text-left text-sm w-full p-2'>
          <input type="submit" id='submit' value={'Get Link'} className='bg-slate-50 hover:bg-white p-2 w-full text-xl text-blue-950 rounded-lg border-b-2 border-blue-900' onClick={disp} />
        </div>
      </form>
    </div>
  )
}

export default Forgot
