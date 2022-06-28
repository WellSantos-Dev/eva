// Components
import Image from "next/image"


export const HeaderItems = ({text, icon, cart}) => {
  return (
    <div className="hidden sm:flex sm:justify-center sm:items-center sm:gap-2 sm:rounded-md text-white">
      <a href="#" className="text-sm md:text-base">{text}{' '}{cart}</a>
      <Image src={icon} height={14} width={16} alt="Icon" className="cursor-pointer"/>
    </div>
  )
}