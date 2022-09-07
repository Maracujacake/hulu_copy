import React from 'react'
import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/solid'
import { forwardRef } from 'react'

const Thumbnail = forwardRef(( {result}, ref ) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div ref={ref} className="cursor-pointer group p-2 transition duration-500 ease-in transform sm:hover:scale-105 hover:z-30">
        <Image layout='responsive'
               height={1080}
               width={1920} 
               src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.backdrop_path}`}
        />
        <div className='p-2'>
            <p className='truncate max-w-md'>{result.overview}</p>
            <h2 className="mt-1
                           text-2xl
                           text-white 
                           transition-all 
                           duration-100 
                           ease-in-out 
                           group-hover:font-bold
                           group-active:text-green-500">{result.title} || {result.original_name}
            </h2>
            <p className="flex 
                          items-center 
                          opacity-0 
                          group-hover:opacity-100
                          group-hover:text-green-500 
                          transition duration-700"> {result.media_type && `${result.media_type} `}{" "}
                {result.release_date || result.first_air_date} •
                <ThumbUpIcon className="h-5 mx-1" /> {result.vote_count}
            </p>
        </div>
    </div>
  )
})

Thumbnail.displayName = 'Thumbnail';
export default Thumbnail