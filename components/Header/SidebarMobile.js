// Hooks
import { useState } from 'react'

// Data
import data from './dataHeader'

// Icons
import menuIcon from '../../public/svg/menu-hamburguer.svg'
import closeIcon from '../../public/svg/close.svg'

// Components
import Image from 'next/image'
import {InputHeader} from './HeaderContent/InputHeader'
import { Categories } from './HeaderContent/Categories'


export const SidebarMobile = () => {
  const [ open, setOpen ] = useState(false)

  return (
    <>
      <div className="md:hidden w-6 flex items-center justify-center" onClick={() => setOpen(!open)}>
        <Image src={open ? closeIcon : menuIcon} alt="Imagem representando menu Hamburguer" className="hover:opacity-90 cursor-pointer" width={16} height={18}/>
      </div>

      <div className={`${open ? "right-0" : "-right-96"} w-3/4 h-screen rounded-b-lg duration-300 p-10 shadow-2xl fixed top-16 peer:transition ease-out delay-150 md:hidden bg-white`}>
        <div className="flex items-center w-full justify-center gap-8">
          <ul>
            <InputHeader />
            {data[1].map((item, index) => (
              <li className="flex items-center gap-4 p-4 mb-4 rounded-md bg-primary-dark" key={index}>
                <Image src={item.image} width={14} height={16} />
                <h1 className="text-white-custom">{item.title}</h1>
              </li>
            ))}
            <Categories />
            
          </ul>
        </div>
      </div>
    </>
  )
}