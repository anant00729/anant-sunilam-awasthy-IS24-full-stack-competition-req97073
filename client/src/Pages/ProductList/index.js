import React from 'react'
import ProductItem from '../../Components/ProductItem'
import { ProductContainer } from './style'

function ProductList() {
  return (
    <ProductContainer>{
      [1,123,12,3,123,1,23,123,12,31].map((product, index) => {
        return <ProductItem key={index} product={product}/>
      })}
    </ProductContainer>
  )
}

export default ProductList