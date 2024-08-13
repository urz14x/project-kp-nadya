import React from 'react'
import Welcome from './Welcome'

export default function Kegiatan({posts}) {
  return (
    <div className='flex flex-col p-5 gap-4'>
        {posts.map((post) => (
            <div key={post.id} className='p-2 space-y-5 border-2 rounded-md text-center flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold'>{post.title}</h1>
                <img src={'upload/'+post.name} className='w-[200px]' alt={post.name} />
                <p className='w-96 font-bold'>{post.description}</p>
            </div>

        ))}
    </div>
  )
}
Kegiatan.layout = page => <Welcome children={page} />
