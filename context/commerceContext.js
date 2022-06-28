// Data
import data from '../utils/requests'

// Hooks
import { useState, useEffect, useContext, createContext, useRef } from 'react'


const CommerceContext = createContext()

export const CommerceProvider = ({children, value}) => {
  const [ allProducts, setAllProducts ] = useState(value.allProducts)
  const [ allCategories, setAllCategories ] = useState(value.allCategories);
  const [cart, setCart] = useState([])
  const [ selectedCategories, setSelectedCategories ] = useState()
  const [ booksCategory, setBooksCategory ] = useState({})
  const [ clothintCategory, setClothigCategory ] = useState({})
  const [ officeCategory, setOfficeCategory ] = useState({})
  const [ images, setImages ] = useState(data)
  const [ searchInput, setSearchInput ] = useState()
  const [ errorEmail, setErrorEmail ] = useState('')
  const [ errorUser, setErrorUser ] = useState('')

  const addItemToCart = (name, price) => {
    setCart([...cart, name])
  }

  // Search Filter
  const buscaFiltrada = allProducts.filter((product) => searchInput ? product.name.toLowerCase().includes(searchInput.toLowerCase()) : null)

  // Espalhar itens
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Provider all categories with 3+ products
  const getSelectedCategories = async () => {
    const newCategories = await allCategories.filter((category) => category.products.length > 3)
    setSelectedCategories({categories: {...newCategories}, images: {images}})
  }


  // Office Category Logical
  const getCategoryOffice = async () => {
    const office = allProducts.filter((office) => office.category_id == 2)
    const smartphone = allProducts.filter((smartphone) => smartphone.category_id == 6)
    const newCategorieOffice = [...office, ...smartphone]
    setOfficeCategory(shuffleArray(newCategorieOffice))
  }


  // Provider Home Categories
  const getProductsHome = () => {
    
    // Category Books
    const destaqueLivros = allProducts.filter((book) => book.category_id == 1)
    setBooksCategory(destaqueLivros)  

    // Category Clothing
    const destaqueVestuario = allProducts.filter((vestuario) => vestuario.category_id == 3)
    setClothigCategory(destaqueVestuario)
  }

  const validaEmail = (value) => {
    if(value.length === 0) {
      setErrorEmail("Preencha com algum valor")
      return false;
    } else if (/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/.test(value)) {
      setErrorEmail("Email inválido")
      return false;
    } else {
      setErrorEmail(null)
      return true
    }
  }

  const handleBlur = ({target}) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const validacao = regex.test(target.value)
    if(validacao) {
      setErrorEmail(null)
    } else {
      setErrorEmail("Email inválido")
    }
  }

  const handleBlurUser = ({target}) => {
    const validacao = target.value.length > 0
    if(validacao) {
      setErrorUser(null)
    } else {
      setErrorUser("Preencha algo")
    }
  }
  

  useEffect(() => {
    getSelectedCategories()
    getProductsHome()
    getCategoryOffice()
  }, [])
  
  
  return <CommerceContext.Provider value={{selectedCategories, getProductsHome, allProducts, officeCategory, booksCategory, clothintCategory, buscaFiltrada, searchInput, setSearchInput, validaEmail, handleBlur, handleBlurUser, errorUser, errorEmail, addItemToCart, cart}}>
    {children}
  </CommerceContext.Provider>
}

export const useCommerceValue = () => {
  return useContext(CommerceContext)
}