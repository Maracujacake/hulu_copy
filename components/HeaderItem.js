import React from 'react'

function HeaderItem( {title, Icon} ) {
  return (
    <div className='flex flex-col items-center cursor-pointer group w-12
    sm:w-20 hover:text-white
    '>
        <Icon className="h-8 mb-1 text-green-400 group-hover:animate-bounce"/>
        <p className='opacity-0 group-hover:opacity-100 group-hover:duration-500 tracking-widest'>{title}</p>
    </div>
  )
}

export default HeaderItem