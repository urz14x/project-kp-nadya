import React from 'react'
import Welcome from './Welcome'

export default function Vision() {
  return (
    <div className='w-full flex items-center justify-center mt-10'>
        <section className='w-1/2'><img src="img/akreditasi.jpg" alt="akreditasi" /></section>
        <section className='w-1/2 p-8'>
            <div>
                <h1 className='font-bold text-3xl text-[#148F77] mb-5'>Visi dan misi</h1>
                <h1 className='text-xl font-bold text-[#148F77]'>
                 SDN 042 GAMBIR BANDUNG
                </h1>
                <p>Menghasilkan lulusan yang unggul, siap kerja dan SMART (Sukses, Mandiri, Akhlakul Karimah, Religius dan Terampil)</p>

                <h1 className='mt-5 mb-5 text-[#148F77] font-semibold'>Visi</h1>
                <p>Menghasilkan lulusan yang unggul, siap kerja dan SMART (Sukses, Mandiri, Akhlakul Karimah, Religius dan Terampil)</p>

                <h1 className='mt-5 mb-5 text-[#148F77] font-semibold'>Misi</h1>
                <ul className='list-decimal'>
                    <li>Mewujudkan lulusan yang berakhlakul karimah</li>
                    <li>Mewujudkan lulusan yang terampil dalam teknologi</li>
                    <li>Mewujudkan lulusan yang siap mengisi dunia industri dan dunia usaha</li>
                    <li>Mewujudkan lulusan yang memiliki kemampuan mandiri</li>
                </ul>
            </div>
        </section>
    </div>
  )
}
Vision.layout = page => <Welcome children={page} />
