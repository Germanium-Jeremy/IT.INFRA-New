import React from 'react'
import { Link } from 'react-router-dom'
import Infra from '/it.jpg'

const Footer = () => {
  const FooterLinks = [
    {
      id: 1,
      lable: "About",
      link: "/about"
    },
    {
      id: 2,
      lable: "Contacts",
      link: "/contacts"
    },
    {
      id: 3,
      lable: "Profile",
      link: "/profile"
    },
    {
      id: 4,
      lable: "Log out",
      link: "/logout"
    }
  ]
  return (
     <footer className='bg-slate-100 w-full h-fit p-3 z-10'>
      <div className='flex justify-between'>
        <img src={Infra} className='h-20 w-30 mr-10' />
        <p className='text-blue-900 text-1xl text-center font-semibold w-4/6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quidem necessitatibus debitis fugiat, ipsam accusamus Reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quidem necessitatibus quidem necessitatibus quidem necessitatibus.
        </p>
        <div className='grid gap-2 grid-cols-2 p-3 pr-10'>
          {FooterLinks.map((link) => (
            <Link
                to={link.link}
                key={link.id}
                className="hover:text-blue-500 text-blue-900 p-1"
            >    
                {link.lable}
            </Link>
          ))}
        </div>
      </div>
      <p className='text-1xl text-blue-950 text-center font-bold'>&copy; INFRA.IT 2024</p>
     </footer>
  )
}

export default Footer
