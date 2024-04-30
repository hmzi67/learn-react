import React from 'react'

export default function Card() {
  return (
    <card className='flex flex-col w-96 border border-slate-900 shadow-lg'>
      <section>
        <img src="./code.png" alt="logo" className='w-full' />
      </section>
      <section className='flex items-center gap-2'>
        <img src="./code.png" alt="" className='w-16 rounded-full border-2 border-slate-300'/>
        <div>
            <h1>Card Title</h1>
            <p>Lorem, ipsum  </p>
        </div>
      </section>
      <section>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum praesentium
        </p>
      </section>
      <section className='flex justify-between'>
        <div className='gap-2 flex'>
            <button>button</button>
            <button>button</button>
        </div>
        <div className='gap-2 flex'>
        <button>button</button>
            <button>button</button>
        </div>
      </section>
    </card>
  )
}
