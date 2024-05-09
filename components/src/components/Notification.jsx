import React from 'react'

export default function Notification() {
  return (
    <div className='flex items-center gap-2 shadow-xl w-[24rem] rounded-md bg-slate-50 p-4 justify-center'>
      <img src="./icon.jpeg" alt="Icon" />
      <div className='flex flex-col'>
        <h1>You got a message from Code Hunts</h1>
        <div className='flex items-center gap-1 '>
          <img src="./history.jpeg" alt="history icon" />
          <p className='text-sm text-[#ccc9d4]'>Just now</p>
        </div>
      </div>
    </div>
  )
}
