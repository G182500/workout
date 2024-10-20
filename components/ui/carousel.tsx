"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'

interface CarouselProps {
  data: { image: string }[]
}

const Carousel = ({ data }: CarouselProps) => {
  const [currentImg, setCurrentImg] = useState(0)

  const carouselSize = { width: 320, height: 320 }  // h-80 = 320px
  const carouselRef = useRef(null)

  return (
    <div className='flex flex-col items-center gap-3 w-full'>
      <div className='w-80 h-80 rounded-md overflow-hidden relative'>
        <div
          ref={carouselRef}
          style={{
            left: -currentImg * carouselSize.width
          }}
          className='w-full h-full absolute flex transition-all duration-500'>
          {data.map((v, i) => (
            <div key={i} className='relative shrink-0 w-full h-full'>
              <Image
                className='pointer-events-none'
                alt={`carousel-image-${i}`}
                fill
                src={v.image}
              />
            </div>
          ))}
        </div>
      </div>

      <div id="navigation-buttons" className='flex space-x-2'>
        <button
          disabled={currentImg === 0}
          onClick={() => setCurrentImg(prev => prev - 1)}
          className={`border px-4 py-2 font-bold ${currentImg === 0 && 'opacity-50'}`}
        >
          {"<"}
        </button>
        <button
          disabled={currentImg === data.length - 1}
          onClick={() => setCurrentImg(prev => prev + 1)}
          className={`border px-4 py-2 font-bold ${currentImg === data.length - 1 && 'opacity-50'}`}
        >
          {">"}
        </button>
      </div>
    </div>
  )
}

export default Carousel