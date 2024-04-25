import { defaults } from "autoprefixer";
import React from "react";
import Login from "./subComponents/Login";
import Forgot from "./subComponents/Forgot";
import Signup from "./subComponents/Signup";
import Reset from "./subComponents/Reset";
import { Routes, Route, Link } from 'react-router-dom'
import It from '/it.jpg'
// import Google from '../assets/imgs/google.png'
import { FaGoogle, FaAppStore, FaMicrosoft, FaApple} from 'react-icons/fa'
import Apple from '../assets/imgs/apple-logo.png'

const Auth = () => {
  return (
    <main>
      <div className='fixed top-0 bottom-0 right-0 left-0 bg-white z-30 text-center flex items-center justify-center'>
        <div className="w-3/5 h-full self-center bg-slate-50 shadow-2xl">
          <div className="text-center justify-center flex mt-5"><img src={It} className="w-20 h-20 rounded-full shadow-xl" /></div>
          <div className="w-full h-full p-2">
            <h1 className="font-bold text-blue-900 text-2xl">IT INFRA</h1>
            <div className="flex justify-evenly w-full p-6">
              <Link to='login' className="w-1/5 rounded-lg font-semibold p-3 bg-blue-100 text-blue-950 text-xl hover:bg-white hover:shadow-md">Login</Link>
              <Link to='signup' className="w-1/5 rounded-lg font-semibold p-3 bg-blue-900 text-blue-50 text-xl hover:bg-blue-700 hover:shadow-md">Signup</Link>
            </div>
            <h2 className="font-bold text-blue-900 text-xl mt-5">SIGNUP WITH</h2>
            <div className="flex flex-col p-2 mt-10">
              <Link to="#" className="w-full h-10 bg-blue-100 p-1 rounded-lg hover:bg-white hover:shadow-xl flex justify-evenly mb-5">
                <FaGoogle className="w-1/3 h-full text-blue-700"></FaGoogle>
                <p className="text-2xl text-blue-950 font-semibold">GooGle</p>
              </Link>
              <Link to="#" className="w-full h-10 bg-blue-100 p-1 rounded-lg hover:bg-white hover:shadow-xl flex justify-evenly mb-5">
                <FaApple className="w-1/3 h-full text-gray-600"></FaApple>
                <p className="text-2xl text-blue-950 font-semibold">Apple</p>
              </Link>
              <Link to="#" className="w-full h-10 bg-blue-100 p-1 rounded-lg hover:bg-white hover:shadow-xl flex justify-evenly mb-5">
                <FaMicrosoft className="w-1/3 h-full text-blue-500"></FaMicrosoft>
                <p className="text-2xl text-blue-950 font-semibold">Gmail</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/forgot" exact element={<Forgot />} />
        <Route path="/reset" exact element={<Reset />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
      </Routes>
    </main>
  )
}
export default Auth;