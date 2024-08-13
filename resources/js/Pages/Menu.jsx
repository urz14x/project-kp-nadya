import React from 'react'
import Welcome from './Welcome'

export default function Menu() {
  return (
    <div className='bg-[#148F77] min-h-screen flex items-center justify-center flex-col'>
        <img src="/img/logo1.jpg" loading='lazy' className='border-2 border-[#148F77]/70 w-72 h-72 rounded-md mb-4' />
        <h2 className='text-2xl font-semibold text-white'>SDN Gambir 042 </h2>
    </div>
  )
}
Menu.layout = page => <Welcome children={page} />
