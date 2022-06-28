// Components
import Image from "next/image"
import iconInput from '../../../public/svg/busca.svg'
import { useCommerceValue } from "../../../context/commerceContext"
import Link from "next/link"

export const InputHeader = () => {
  const { buscaFiltrada, setSearchInput, searchInput } = useCommerceValue()
  return (
    <>
      <div className="flex border-2 rounded-md md:border-none my-12 md:my-0">
      <div className="right-72 shadow-md w-64 rounded-md absolute bg-white md:top-16 md:w-64 md:right-auto">
        {
          buscaFiltrada.map((busca, index) => (
            <Link href={`https://www.eva-test-api.plataformaeva.com/product/${busca.id}`} key={index}><h1 className="overflow-hidden whitespace-nowrap text-ellipsis px-4 py-2">{busca.name}</h1></Link>
          ))
        }
      </div>
        <input className="p-2 max-w-40 rounded-l-md focus:outline-none md:w-64 lg:w-input ease-in duration-300 bg-white"
        type="text"
        value={searchInput}
        onChange={(ev) => setSearchInput(ev.target.value ? ev.target.value : null)}
        />
        <div className="flex items-center justify-content-center w-6 rounded-r-lg sm:bg-white">
          <Image src={iconInput} height={14} width={16} alt="icon input" className="animate-pulse z-50 md:animate-none"/>
        </div>
      </div>
    </>
  )
}