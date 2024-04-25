import React from 'react'

const SubHeader = ({ subNavLinks }) => {
  return (
    <header className='w-full h-10 sticky top-0 z-10 bg-white'>
      <nav className=" w-4/5 float-end bg-blue-50 text-blue-900 flex justify-between p-1 pr-8 mb-5 shadow-lg pl-8">
        {subNavLinks.map((link) => (
          <a
            href={link.href}
            key={link.id}
            className="hover:text-blue-600 hover:bg-white p-1 rounded-lg flex"
          >
            {<link.icon className="mr-3 mt-1" />}
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default SubHeader
