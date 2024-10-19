"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'

interface CarouselProps {
  data: { image: string }[]
}

const Carousel = ({ data }: CarouselProps) => {
  const [currentImg, setCurrentImg] = useState(0)

  const carouselSize = { width: 288, height: 288 }  // h-72 = 288px
  const carouselRef = useRef(null)

  return (
    <>
      <div className='w-72 h-72 rounded-md overflow-hidden relative'>
        <div
          ref={carouselRef}
          style={{
            left: -currentImg * carouselSize.width
          }}
          className='w-full h-full absolute flex transition-all duration-300'>
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

      {/* Navigation buttons */}
      <div className='flex justify-center mt-3'>
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
    </>
  )
}

export default Carousel