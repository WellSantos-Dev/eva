// Data
import data from './dataHeader'

// Icon
import userImg from '../../public/svg/usuario.svg'
import cartImg from '../../public/svg/carrinho.svg'

// Components
import { HeaderItems } from './HeaderContent/HeaderItems'
import { InputHeader } from './HeaderContent/InputHeader'
import { Categories } from './HeaderContent/Categories'
import { useCommerceValue } from '../../context/commerceContext'

export const SidebarDesktop = () => {
  const {cart} = useCommerceValue()
  
  if(cart == null) {
    return (
      <div className="p-4 hidden px-4 md:flex md:gap-4 md:whitespace-nowrap lg:gap-8 sm:p-0">
        <Categories/>
        <InputHeader/>
        <HeaderItems text="Minha conta" icon={userImg}/>
        <HeaderItems text="Carrinho" icon={cartImg}/>
       </div>
    )
  } else {
    return (
      <div className="p-4 hidden px-4 md:flex md:gap-4 md:whitespace-nowrap lg:gap-8 sm:p-0">
        <Categories/>
        <InputHeader/>
        <HeaderItems text="Minha conta" icon={userImg}/>
        <HeaderItems text="Carrinho" icon={cartImg} cart={cart.length}/>
       </div>
    )
  }
}