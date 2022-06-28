import Image from "next/image"
import starFull from '../../../public/svg/estrela-cheia.svg'
import star from '../../../public/svg/estrela.svg'
import { useState, useEffect } from 'react'
import { useCommerceValue } from "../../../context/commerceContext"

export const Product = ({product}) => {
  const [ img, setImg ] = useState()
  const [ priceWithDiscount, setPriceWithDiscount ] = useState()
  const {cart, addItemToCart} = useCommerceValue()

  // Tive que fazer isso pois o NextJS não estava aceitando a imagem..
  const image = Object.entries(product.images_product).map((product) => (
    Object.entries(product[1])[1][1]
  ))
  
  // Price Format
  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  
  useEffect(() => {
    image.map((url) => {
      setImg(url.toString())
    })
  }, [])

    
    

    return (
      <div className="cursor-pointer transition ease-in-out duration-300 w-230 h-452 group hover:border rounded-md hover:border-primary-dark flex flex-col ml-4 mr-4">
        <div className="flex p-img">
          <Image src={img ? img : 'https://images.unsplash.com/photo-1652077859695-de2851a95620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'} className="-z-50" width={200} height={200}/>
        </div>
        
        <div className="h-8 mt-2 mb-2 flex items-center">
          <h1 className="text-sm font-light px-8 overflow-hidden whitespace-nowrap text-ellipsis">{product.name}</h1>
        </div>
        <div className="flex items-center justify-center pb-2 gap-1">
          {[...Array(product.stars)].map((eachStar, index) => {
            return <Image src={starFull} width={14} height={14} className="-z-50" key={index} alt="Img"/>
          })}
          {[...Array(5 - product.stars)].map((item, index) => (
            <Image src={star} width={14} height={14} className="-z-50" key={index} alt="Img"/>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-end h-14 justify-end group">
            {product.promotional_price === null ? <h1 className="text-3xl text-primary text-center font-bold">{formatter.format(product.price)}</h1> : <h1 className="line-through text-xs text-black-900 pb-1">{formatter.format(product.price)}</h1>}
            {product.promotional_price ? <h1 className="text-3xl text-primary text-center font-bold">{formatter.format(product.promotional_price)}</h1> : ''}
          </div>
          <div>
            {product.category_id == 1 && product.promotional_price && <h1 className="text-[10px]">Ou {formatter.format((product.promotional_price) - ((product.promotional_price * 10) / 100))} com 10% off no boleto</h1>}
            {product.category_id == 1 && !product.promotional_price && <h1 className="text-[10px]">Ou {formatter.format((product.price) - ((product.price * 10) / 100))} com 10% off no boleto</h1>}

            {product.category_id == 2 && product.promotional_price && <h1 className="text-[10px]">Ou {formatter.format((product.promotional_price) - ((product.promotional_price * 15) / 100))} com 15% off no boleto</h1>}
            {product.category_id == 2 && !product.promotional_price && <h1 className="text-[10px]">Ou {formatter.format((product.price) - ((product.price * 15) / 100))} com 15% off no boleto</h1>}

            {product.category_id == 3 && product.promotional_price && <h1 className="text-[10px]">Ou {formatter.format((product.promotional_price) - ((product.promotional_price * 5) / 100))} com 5% off no boleto</h1>}
            {product.category_id == 3 && !product.promotional_price && <h1 className="text-[10px]">Ou {formatter.format((product.price) - ((product.price * 5) / 100))} com 5% off no boleto</h1>}

            {product.category_id == 4 && product.promotional_price && <h1 className="text-[10px]">Ou {formatter.format((product.promotional_price) - ((product.promotional_price * 10) / 100))} com 10% off no boleto</h1>}
            {product.category_id == 4 && !product.promotional_price && <h1 className="text-[10px]">Ou {formatter.format((product.price) - ((product.price * 10) / 100))} com 10% off no boleto</h1>}

            {product.category_id == 5 && product.promotional_price && <h1 className="text-[10px]">Ou {formatter.format((product.promotional_price) - ((product.promotional_price * 5) / 100))} com 5% off no boleto</h1>}
            {product.category_id == 5 && !product.promotional_price && <h1 className="text-[10px]">Ou {formatter.format((product.price) - ((product.price * 5) / 100))} com 5% off no boleto</h1>}

            {product.category_id == 6 && product.promotional_price && <h1 className="text-[10px]">Ou {formatter.format((product.promotional_price) - ((product.promotional_price * 15) / 100))} com 15% off no boleto</h1>}
            {product.category_id == 6 && !product.promotional_price && <h1 className="text-[10px]">Ou {formatter.format((product.price) - ((product.price * 15) / 100))} com 15% off no boleto</h1>}
            
          </div>
          <button className="lg:hidden group-hover:flex text-white bg-primary rounded-lg px-20 py-3 mt-4" onClick={() => addItemToCart(product.name, product.price)}>Comprar</button>
        </div>

      </div>
    )
}