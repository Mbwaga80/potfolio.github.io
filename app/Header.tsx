import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className=' pt-2 text-bold bg-blue-400'>
        <Link className='px-2 py-1 bg-white-100 hover:bg-gray-400' href="/">home</Link>
        <div className="text-center" >am the header</div> </header>
  )
}

export default Header