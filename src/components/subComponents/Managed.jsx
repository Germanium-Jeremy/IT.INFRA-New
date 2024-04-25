import React from 'react'

const Managed = ( {/* allNetworks */} ) => {
  return (
    <section className='w-full h-fit p-3 text-blue-950 items-center self-center' id='managed'>
      <div className='relative p-1'>
          <table className='border-2 border-blue-800 p-2'>
          <caption className=' w-full font-semibold text-xl text-center bg-blue-50 p-1'>Managed Networks</caption>
               <thead className='border-2 border-b-blue-800'>
                    <tr className='border-2 border-b-blue-800'>
                         <th className='p-4'>Configure Networks</th>
                         <th className='p-4'>Network Name</th>
                         <th className='p-4'>Network Ip Type</th>
                         <th className='p-4'>Number of Users</th>
                         <th className='p-4'>Network Location</th>
                         <th className='p-4'>Network Owner</th>
                         <th className='p-4'>Delete Network</th>
                         <th className='p-4'>Additional Features</th>
                    </tr>
               </thead>
               <tbody className='border-2 border-b-blue-800'>
                    <tr className='border-2 border-b-blue-800'>
                         <td colSpan={8} className='text-center p-4'>No Network Added Yet</td>
                         {/* <th className="text-center p-4 font-lighter"></th>
                         <th className="text-center p-4 font-lighter"></th>
                         <th className="text-center p-4 font-lighter"></th>
                         <th className="text-center p-4 font-lighter"></th>
                         <th className="text-center p-4 font-lighter"></th>
                         <th className="text-center p-4 font-lighter"></th>
                         <th className="text-center p-4 font-lighter"></th>
                         <th className="text-center p-4 font-lighter"></th> */}
                    </tr>
               </tbody>
               <tfoot className='border-2 border-b-blue-800'>
                    <tr className='border-2 border-b-blue-800 p-4'>
                         <td colSpan={8} className='text-center justify-center items-center'><button className='w-1/5 p-2 rounded-lg bg-blue-900 text-white hover:bg-blue-700 self-center'>Add Network</button></td>
                    </tr>
               </tfoot>
          </table>
      </div>
    </section>
  )
}

export default Managed