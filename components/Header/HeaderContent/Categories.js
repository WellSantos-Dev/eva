// Data
import data from '../dataHeader'

// Image
import setaBaixo from '../../../public/svg/seta-categorias.svg'

// Hooks
import { useState } from 'react'

// Components
import Image from 'next/image'


export const Categories = () => {
  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <div className="flex items-center justify-center rounded-md bg-primary-dark sm:bg-black sm:p-0 sm:m-0 cursor-pointer sm:justify-start" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex gap-2 w-full bg-primary-dark md:bg-black">
        <h1 className="text-sm text-white-custom text-center p-4 rounded-md bg-primary-dark md:p-0 md:bg-black md:text-base">Categorias</h1>
        <Image src={setaBaixo} width={9} height={5} />
      </div>
      <div className={`${isOpen ? "w-44" : "hidden"} absolute top-96 shadow-xl bg-white-custom rounded-md p-2 sm:top-66 md:top-[58px] md:shadow-none`}>
        <ul className="divide-y divide-white-800 w-full">
        {
          data[0].map((item, index) => (
              <li className="p-2" key={index}>
                <a href={item.url}>{item.title}</a>
              </li>
          ))
        }
        </ul>
        
      </div>
    </div>
  )
}