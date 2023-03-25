import React from 'react'
import ProductItem from '../../Components/ProductItem'
import { ProductContainer } from './style'
import Search from '../../Images/search.png'
import { SearchBar, SearchButton, SearchForm } from '../../Utils/style'

function ProductList() {
  return (
    <>
      <SearchForm>
        <SearchBar/>
        <SearchButton src={Search}/>
      </SearchForm>
      <ProductContainer>{
        [1,123,12,3,123,1,23,123,12,31].map((product, index) => {
          return <ProductItem key={index} product={product}/>
        })}
      </ProductContainer>
    </>
    
  )
}

export default ProductList