// Icons
import imgEmail from '../../../public/svg/newsletter.svg'

// Components
import Image from 'next/image'
import { Input } from './Input'
import { useCommerceValue } from '../../../context/commerceContext'
import { useState, useEffect } from 'react'

export const Newsletter = () => {

  const { errorEmail, handleBlur, handleBlurUser, errorUser } = useCommerceValue()
  const [ email, setEmail ] = useState('')
  const [ user, setUser ] = useState('')
  const [ stateData, setStateData ] = useState('')

  const enviaDados = () => {
    if(user && email) {
      setStateData("Os dados foram enviados com sucesso!")
    } else {
      setStateData("Arrume os erros para continuar")
    }
  }

  return (
    <div className="h-[500px] bg-black-800 sm:h-[368px] mt-[80px]" >
      <div className="max-w-container mx-auto my-0 flex items-center justify-center flex-col p-12">
        <Image src={imgEmail} width={50} height={40} alt="img"/>
        <h1 className="text-white-custom pt-4 text-2xl mb-4 md:mb-12 text-center">Receba nossas novidades, descontos e muito mais</h1>

        <div>
          <form className="flex items-center justify-between flex-col" onSubmit={enviaDados}>
            <div className="flex gap-4 mb-12 items-end flex-col w-full sm:flex-row">
              <div className="">
                {errorUser && <h1 className="text-white-custom">{errorUser}</h1>}
                <Input
                id="username"
                type="text"
                placeholder="Digite seu Nome"
                value={user}
                setValue={setUser}
                onBlur={handleBlurUser}
                />
              </div>

              <div>
                {errorEmail && <h1 className="text-white-custom">{errorEmail}</h1>}
                <Input
                id="email" 
                type="email"
                value={email}
                setValue={setEmail}
                onBlur={handleBlur}
                placeholder="Digite seu Email"
                />
              </div>
            </div>
            <button className="text-white-custom py-[12px] px-[32px] bg-primary rounded-lg">Receber novidades</button>
            {stateData && <h1 className="text-white">{stateData}</h1>}
          </form>
        </div>
      </div>
    </div>
  )
}