import lojaImg from '../../../public/svg/loja.svg'
import mapaImg from '../../../public/svg/mapa.svg'
import contatoImg from '../../../public/svg/loja.svg'
import whatsImg from '../../../public/svg/whatsapp.svg'
import emailImg from '../../../public/svg/email.svg'

import Image from 'next/image'

export const Footer = () => {
  return (
    <div className="max-w-container text-white mx-auto my-0 p-8">
      <h1 className="text-primary text-2xl font-bold pb-2">Eva Shop</h1>
      <div className="gap-4 flex flex-wrap sm:gap-[99px] before:content-[''] before:absolute before:w-[100px] before:h-[2px] before:bg-white before:z-50">
        <div className="pt-4 sm:pt-[18px]">
          <ul className="list-none">
            <Image src={lojaImg} width={21} height={18} alt="logo"/>
            <li>Quem somos</li>
            <li>Politicas de privacidade</li>
            <li>Feedbacks de clientes</li>
            <li>Trocas e devoluções</li>
          </ul>
        </div>

        <div className="pt-4 sm:pt-[18px]">
          <ul>
            <Image src={mapaImg} width={21} height={18} alt="logo"/>
            <li>Rua Av. Rio Negro, 1100</li>
            <li>Jardim Roselandia</li>
            <li>14406-005</li>
            <li>Franca / SP</li>
          </ul>
        </div>

        <div className="pt-4 sm:pt-[18px]">
          <ul>
            <Image src={contatoImg} width={21} height={18} alt="logo"/>
            <div className="flex items-center gap-2">
              <Image src={whatsImg} width={14} height={14} />
              <li>(16) 9 98179-7325</li>
            </div>

            <div className="flex items-center gap-2">
              <Image src={emailImg} width={14} height={14} />
              <li>contato@evacommerce.com.br</li>
            </div>

          </ul>
        </div>
      </div>
    </div>
  )
}