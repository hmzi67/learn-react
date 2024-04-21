import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function Form() {
  return (
    <form className='border border-slate-800 rounded-full py-2 px-4 gap-2 flex items-center'>
        <input 
        type="text" 
        className='focus:outline-none text-sm placeholder:text-sm'
        placeholder='Search for a country...'
        />
        <button><FaSearch fontSize={20} /></button>
    </form>
  )
}
