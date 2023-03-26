import React, {useEffect, useContext} from 'react'
import ProductItem from '../../Components/ProductItem'
import { ProductContainer } from './style'
import Search from '../../Images/search.png'
import { SearchBar, SearchButton, SearchForm, PageLabel } from '../../Utils/style'
import { GlobalContext } from "../../Context/GlobalContext";

function ProductList() {
  const { getAllProducts, productList } = useContext(GlobalContext);

  useEffect(()=> {
    getAllProducts()
  }, [])

  return (
    <>
      <PageLabel>Search Functionality for Scrum Master and Developer Names</PageLabel>
      <SearchForm>
        <SearchBar/>
        <SearchButton src={Search}/>
      </SearchForm>
      <PageLabel>Product List</PageLabel>
      <ProductContainer>{
        productList?.map((product, index) => {
          return <ProductItem key={index} product={product}/>
        })}
      </ProductContainer>
    </>
    
  )
}

export default ProductList