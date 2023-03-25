import React from 'react'
import { ProductContainer, ItemContainer, EditButton, TopItemGroup } from './style'
import Search from '../../Images/search.png'



function ProductItem() {

  const product = {
    productId: 'IBM IBMIBMIBMIBMIBMIBMIBMIBMIBMIBM',
    productName: 'IBM IBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBMIBM',
    productOwnerName: 'Anant',
    developers: [
     "aa",
     "bb",
     "cc",
     "dd",
     "ee"
    ],
    scrumMasterName: 'Hello',
    startDate: "YYYY/MM/DD",
    methodology: 'Waterfall'
}


console.log('product?.productId', product?.productId)

  return (
    <ProductContainer>
      <TopItemGroup>
        <ItemContainer isTopLabel>
          <label>{product?.productId}</label>
        </ItemContainer>
        <EditButton>Edit Product</EditButton>
      </TopItemGroup>
      
      <ItemContainer isTopLabel>
        <label>{product?.productName}</label>
      </ItemContainer>
      <ItemContainer>
        <label>{product?.productOwnerName}</label>
      </ItemContainer>
      <ItemContainer>{product?.developers?.map(d => {
          return <label>{d}</label>
        })}
      </ItemContainer>
      <ItemContainer>
        <label>{product?.scrumMasterName}</label>
      </ItemContainer>
      <ItemContainer>
        <label>{product?.startDate}</label>
      </ItemContainer>
      <ItemContainer>
        <label>{product?.methodology}</label>
      </ItemContainer>
      
    </ProductContainer>
  )
}

export default ProductItem