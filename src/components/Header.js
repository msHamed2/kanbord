import React from 'react'

function Header() {
    return (
        <div className="flex flex-1  absolute z-50 w-full h-16 bg-blue-300 opacity-60 items-center justify-start space-y-4 rounded-sm ">
        <div className='flex flex-1 justify-start  '>
          <h1 className="  border border-zinc-50 mx-2 "> This is Toillo app logo </h1>
          <input type="text" className='w-1/3 rounded' />
        </div>
      </div>
    )
}

export default Header
