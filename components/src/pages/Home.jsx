import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Link to={'/signup'}><button>SignUp</button></Link>
    </div>
  )
}
