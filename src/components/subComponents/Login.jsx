import React from 'react';
import It from '/it.jpg';
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='fixed top-0 bottom-0 right-0 left-0 bg-white z-30 p-5 flex justify-center items-center'>
      <form className='self-center bg-blue-50 w-3/6 h-auto shadow-2xl relative flex flex-col items-center text-center p-6'>
        <img src={It} className='w-20 h-20 mb-2 -mt-12' alt='IT' />
        <p className='text-blue-950 text-xl font-semibold'>LOGIN TO IT INFRA</p>
        <div className='text-left text-sm w-full p-2'>
          <label htmlFor="email" className='text-blue-900 text-xl block'>Email</label>
          <input type="email" id='email' required className='bg-slate-50 focus:bg-white outline-none p-2 w-full text-xl text-blue-950 rounded-lg border-b-2 border-blue-900' />
        </div>
        <div className='text-left text-sm w-full p-2'>
          <label htmlFor="password" className='text-blue-900 text-xl block'>Password</label>
          <input type="password" id='password' required className='bg-slate-50 focus:bg-white outline-none p-2 w-full text-xl text-blue-950 rounded-lg border-b-2 border-blue-900' />
        </div>
        <div className='text-left text-sm w-full p-2'>
          <input type="checkbox" id='remember' className='mr-10 w-5 h-5' />
          <label htmlFor="remember" className='text-blue-900 text-xl'>Remember Me</label>
        </div>
        <div className='text-left text-sm w-full mb-2'>
          <p className='text-lg text-blue-950 text-center'>Don't Have An Account? <Link to='../signup' className='text-blue-800 hover:text-blue-600 font-semibold'>SignUp</Link> </p>
        </div>
        <div className='text-left text-sm w-full mb-2'>
          <p className='text-center'><Link to='../forgot' className='text-blue-800 text-lg hover:text-blue-600 font-semibold'>Forgot Password</Link> </p>
        </div>
        <div className='text-left text-sm w-full p-2'>
          <input type="submit" id='submit' value={'Login'} className='bg-slate-50 hover:bg-white p-2 w-full text-xl text-blue-950 rounded-lg border-b-2 border-blue-900' />
        </div>
      </form>
    </div>
  );
};

export default Login;
