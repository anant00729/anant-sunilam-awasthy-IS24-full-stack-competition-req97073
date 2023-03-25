import React from 'react'
import { ProductContainer, ItemContainer, EditButton, TopItemGroup } from './style'
import { useNavigate } from 'react-router-dom';



function ProductItem() {

  const navigate = useNavigate();

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


const handleEditClick = () => {
  navigate(`/product/${123123}`);
}

  return (
    <ProductContainer>
      <TopItemGroup>
        <ItemContainer isTopLabel>
          <label>{product?.productId}</label>
        </ItemContainer>
        <EditButton onClick={handleEditClick}>Edit Product</EditButton>
      </TopItemGroup>
      
      <ItemContainer isTopLabel>
        <label>{product?.productName}</label>
      </ItemContainer>
      <ItemContainer>
        <label>{product?.productOwnerName}</label>
      </ItemContainer>
      <ItemContainer>{product?.developers?.map((d, i) => {
          return <label key={i}>{d}</label>
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