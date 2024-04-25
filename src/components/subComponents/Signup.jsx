import React from 'react'
import It from '/it.jpg';
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='fixed top-0 bottom-0 right-0 left-0 bg-white z-30 p-5 text-center overflow-y-auto'>
      <center className='w-full p-5'>
        <form className='self-center bg-blue-50 w-3/6 h-auto shadow-2xl relative p-6'>
          <img src={It} className='w-20 h-20 mb-2 -mt-12' alt='IT' />
          <p className='text-blue-950 text-xl font-semibold'>SIGNUP TO IT INFRA</p>
          <div className='text-left text-sm w-full p-2'>
            <label htmlFor="name" className='text-blue-900 text-xl block'>Username</label>
            <input type="text" id='name' required className='bg-slate-50 focus:bg-white outline-none p-2 w-full text-xl text-blue-950 rounded-lg border-b-2 border-blue-900' />
          </div>
          <div className='text-left text-sm w-full p-2'>
            <label htmlFor="email" className='text-blue-900 text-xl block'>Email</label>
            <input type="email" id='email' required className='bg-slate-50 focus:bg-white outline-none p-2 w-full text-xl text-blue-950 rounded-lg border-b-2 border-blue-900' />
          </div>
          <div className='text-left text-sm w-full p-2'>
            <label htmlFor="password" className='text-blue-900 text-xl block'>Password</label>
            <input type="password" id='password' required className='bg-slate-50 focus:bg-white outline-none p-2 w-full text-xl text-blue-950 rounded-lg border-b-2 border-blue-900' />
          </div>
          <div className='text-left text-sm w-full p-2'>
            <label htmlFor="birthdate" className='text-blue-900 text-xl block'>BirthDate</label>
            <input type="date" id='birthdate' required className='bg-slate-50 focus:bg-white outline-none p-2 w-full text-xl text-blue-950 rounded-lg border-b-2 border-blue-900' />
          </div>
          <div className='text-left text-sm w-full p-2'>
            <label htmlFor="location" className='text-blue-900 text-xl block'>Location</label>
            <select id="location"  required className='bg-slate-50 focus:bg-white outline-none p-2 w-full text-xl text-blue-950 rounded-lg border-b-2 border-blue-900'>
              <optgroup label='Africa'>
                <option value="Rwanda">Rwanda</option>
                <option value="Kenya">Kenya</option>
                <option value="South Africa">South Africa</option>
                <option value="Morocco">Morocco</option>
                <option value="Egypt">Egypt</option>
              </optgroup>
              <optgroup label='America'>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Brazil">Brazil</option>
                <option value="Argantina">Argantina</option>
                <option value="Chile">Chile</option>
              </optgroup>
              <optgroup label='Europe'>
                <option value="UK">UK</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Serbia">Serbia</option>
                <option value="Russia">Russia</option>
              </optgroup>
            </select>
          </div>
          <div className='text-left text-sm w-full p-2'>
            <label htmlFor="corporate" className='text-blue-900 text-xl block'>Company Or Individual</label>
            <select id="corporate" required className='bg-slate-50 focus:bg-white outline-none p-2 w-full text-xl text-blue-950 rounded-lg border-b-2 border-blue-900'>
              <option value="Individual">Individual</option>
              <option value="Campany">Campany</option>
            </select>
          </div>
          <div className='text-left text-sm w-full p-2'>
            <label htmlFor="id" className='text-blue-900 text-xl block'>ID Number</label>
            <input type="text" id='id' className='bg-slate-50 focus:bg-white outline-none p-2 w-full text-xl text-blue-950 rounded-lg border-b-2 border-blue-900' />
          </div>
          <div className='text-left text-sm w-full mb-2'>
            <p className='text-lg text-blue-950 text-center'>Already Have An Account? <Link to='../login' className='text-blue-800 hover:text-blue-600 font-semibold'>Login</Link> </p>
          </div>
          <div className='text-left text-sm w-full p-2'>
            <input type="submit" id='submit' value={'SignUp'} className='bg-slate-50 focus:bg-white outline-none p-2 w-full text-xl text-blue-950 rounded-lg border-b-2 border-blue-900' />
          </div>
        </form>
      </center>
    </div>
  )
}

export default Signup
