// Data
import data from './dataBanner'

// Hooks
import { useState, useRef } from 'react'
import { list } from 'postcss'

export const Banner = () => {
  const [ index, setIndex ] = useState(0)
  const [ banner, setBanner ] = useState(data[index])
  const [ cor, setCor ] = useState('bg-white')

  const setBannerIndex = (index) => {
    setBanner(data[index])
  }

  const ref = useRef()
  
  return (
    <div className="max-w-full">
      <div className=" max-w-full clip-path bg-cover bg-top mt-[64px]" style={{backgroundImage: `url(${banner.image})`, backgroundSize: 'cover', maxWidth: '100%', backgroundPosition: 'center'}}>
        <div className="mx-auto my-0 h-374" style={{background: 'linear-gradient(90.99deg, #000000 1.53%, rgba(32, 32, 32, 0.52) 56.83%, rgba(196, 196, 196, 0) 98.06%)'}}>
        </div>
      </div>
      <div className="max-w-container mx-auto my-0 px-4 lg:px-0">
      <div className="h-374 mx-auto my-0 absolute top-[96px] flex justify-center flex-col">
            <div>
              <h1 className="text-white-custom text-[42px] font-normal">{banner.title}</h1>
              <p className="text-2xl text-white-custom">{banner.paragraph}</p>
            </div>
          </div>
            <div className="left-1/2 flex items-center gap-2 absolute top-96 justify-center">
              <button className={`w-[12px] h-[12px] ${cor} rounded-xl cursor-pointer hover:bg-primary`} onClick={() =>  setBannerIndex(0)}></button>
              <button className={`w-[12px] h-[12px] ${cor} rounded-xl cursor-pointer hover:bg-primary`} onClick={() =>  setBannerIndex(1)}></button>
              <button className={`w-[12px] h-[12px] ${cor} rounded-xl cursor-pointer hover:bg-primary`} onClick={() =>  setBannerIndex(2)}></button>
              <button className={`w-[12px] h-[12px] ${cor} rounded-xl cursor-pointer hover:bg-primary`} onClick={() =>  setBannerIndex(3)}></button>
            </div>
      </div>
    </div>
  )
}