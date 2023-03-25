import React from 'react'
import ProductItem from '../../Components/ProductItem'
import { ProductContainer } from './style'
import Search from '../../Images/search.png'
import { SearchBar, SearchButton, SearchForm, PageLabel } from '../../Utils/style'

function ProductList() {
  return (
    <>
      <PageLabel>Search Functionality for Scrum Master and Developer Names</PageLabel>
      <SearchForm>
        <SearchBar/>
        <SearchButton src={Search}/>
      </SearchForm>
      <PageLabel>Product List</PageLabel>
      <ProductContainer>{
        [1,123,12,3,123,1,23,123,12,31].map((product, index) => {
          return <ProductItem key={index} product={product}/>
        })}
      </ProductContainer>
    </>
    
  )
}

export default ProductList