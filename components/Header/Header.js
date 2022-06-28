// Assets
import logoImg from '../../public/images/logo.png'

// Components
import Image from "next/image"

// Pages
import { SidebarDesktop } from "./SidebarDesktop"
import { SidebarMobile } from "./SidebarMobile"

export const Header = () => {

  return (
    <div className="fixed top-0 left-0 w-screen bg-black z-50 px-4 lg:px-0">
      <div className="max-w-container my-0 mx-auto py-4 flex justify-between sm:flex-row sm:justify-between md:items-center md:gap-8 md:flex-row">
        <div className="flex items-center justify-center">
          <Image src={logoImg} alt="Imagem representando logotipo" className="hover:opacity-90 cursor-pointer w-full" width={80} height={32}/>
        </div>
        <div className="flex items-center gap-8">
          <SidebarDesktop />
          <SidebarMobile />
        </div>
      </div>
    </div>
  )
}