import { Banner } from "./Banner/Banner";
import { Categories } from "./Categories/Categories";
import { Newsletter } from "./NewsLetter/Newsletter";
import { ProductSection } from "./ProductSection/ProductSection";
import { SalesForce } from "./SalesForce/SalesForce";

export const InitialPageContainer = () => {
  return (
  <>
      {/* Banner */}
    <div className="max-w-full">
      <Banner />
    </div>

    {/* Força de Vendas */}
    <div className="max-w-full">
      <SalesForce />
    </div>

    {/* Categorias */}
    <div className="max-w-full">
      <Categories/>
    </div>

    {/* Seção de Produtos */}
    <div className="max-w-full">
      <ProductSection />
    </div>

    {/* Newsletter */}
    <div className="max-w-full">
      <Newsletter />
    </div>
    
  </>
  )
}