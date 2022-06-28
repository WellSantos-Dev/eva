// Components
import { useCommerceValue } from "../../../context/commerceContext"
import { ProductRow } from "./ProductRow"

// Hooks
import { useState } from 'react'

export const ProductSection = () => {
  const { allProducts, officeCategory, booksCategory, clothintCategory } = useCommerceValue()
  
  if(allProducts == null || allProducts == undefined) {
    return <h1>Carregando</h1>
  } else {
    return (
      <div className="md:max-w-proudctRowSm lg:max-w-container my-0 mx-auto pl-4 lg:px-0">
        <ProductRow data={allProducts} text="Destaques"/>
        <ProductRow data={booksCategory} text="Destaques em livros" />
        <ProductRow data={officeCategory} text="Destaques em escritório" />
        <ProductRow data={clothintCategory} text="Destaques em vestuário" />
      </div>
    )
  }
}