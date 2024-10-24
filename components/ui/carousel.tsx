"use client"
import Image from 'next/image'
import React, { useState } from 'react'

interface CarouselProps {
  data: { image: string, alt: string }[]
}

const Carousel = ({ data }: CarouselProps) => {
  const [currentImg, setCurrentImg] = useState(0)

  const carouselSize = { width: 320, height: 320 }  // h-80 = 320px

  return (
    <div className='flex flex-col items-center gap-3 w-full'>
      <div className='w-80 h-80 rounded-md overflow-hidden relative'>
        <div
          style={{
            left: -currentImg * carouselSize.width
          }}
          className='w-full h-full absolute flex transition-all duration-500'>
          {data.map((v, i) => (
            <div key={i} className='relative shrink-0 w-full h-full'>
              <Image
                className='pointer-events-none'
                alt={v.alt}
                fill
                src={v.image}
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>

      <div id="navigation-buttons" className='flex space-x-2'>
        <button
          disabled={currentImg === 0}
          onClick={() => setCurrentImg(prev => prev - 1)}
          className={`text-xs border-2 px-4 py-3 font-bold ${currentImg === 0 ? 'border-green-300' : 'opacity-50'}`}
        >
          FASE EXCÊNTRICA
        </button>
        <button
          disabled={currentImg === data.length - 1}
          onClick={() => setCurrentImg(prev => prev + 1)}
          className={`text-xs border-2 px-4 py-3 font-bold ${currentImg === data.length - 1 ? 'border-green-300' : 'opacity-50'}`}
        >
          FASE CONCÊNTRICA
        </button>
      </div>
    </div>
  )
}

export default Carousel