// Components
import { Product } from './Product'
import { useRef } from 'react'
import Image from 'next/image'

// icons
import leftArrow from '../../../public/svg/arrowLeft.svg'
import rightArrow from '../../../public/svg/arrowRight.svg'

export const ProductRow = ({data, text}) => {
  const handleRightClick = (e) => {
    e.preventDefault();
    carrouselRef.current.scrollLeft += (carrouselRef.current.offsetWidth)
  }

  const handleLeftClick = (e) => {
    e.preventDefault();
    carrouselRef.current.scrollLeft -= (carrouselRef.current.offsetWidth)
  }


  const carrouselRef = useRef()

  if(data == undefined) {
    <h1>Loading...</h1>
  } else {
    return (
      <>
      <div className="pt-16">
        <h1 className="text-black-custom font-bold text-2xl pb-[42px] before:content-[''] before:absolute before:bg-pink-600 before:w-16 before:h-1 before:-z-50">{text}</h1>
        <div className="flex">
        <div className="flex overflow-x-scroll scroll-smooth scrollbar-hide" ref={carrouselRef}>
          {
            Object.entries(data).map((item, index) => (
              <div key={index}>
                <Product product={item[1]}/>
              </div>
            ))
          }
        </div>
        </div>
          <button onClick={handleLeftClick}><Image src={leftArrow} width={32} height={32} /></button>
          <button onClick={handleRightClick}><Image src={rightArrow} width={32} height={32} /></button>
      </div>
      </>
    )

  }

}

// name, stars, price, promotional_price