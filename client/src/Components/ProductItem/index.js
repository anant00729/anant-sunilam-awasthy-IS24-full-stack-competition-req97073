import React from 'react'
import { ProductContainer, ItemContainer, EditButton, TopItemGroup } from './style'
import { useNavigate } from 'react-router-dom';



function ProductItem({product}) {

  const navigate = useNavigate();

  const handleEditClick = (productId) => {
    navigate(`/product/${productId}`);
  }

  return (
    <ProductContainer>
      <TopItemGroup>
        <ItemContainer isTopLabel>
          <label>Product Id: {product?.productId}</label>
        </ItemContainer>
        <EditButton onClick={() => handleEditClick(product?.productId)}>Edit Product</EditButton>
      </TopItemGroup>
      
      <ItemContainer isTopLabel>
        <label>Product Name: {product?.productName}</label>
      </ItemContainer>
      <ItemContainer>
        <label>Product Owner Name: {product?.productOwnerName}</label>
      </ItemContainer>
      <ItemContainer>
          <label>Developers: {product?.developers?.join(', ')}</label>
      </ItemContainer>
      <ItemContainer>
        <label>Scrum Master Name: {product?.scrumMasterName}</label>
      </ItemContainer>
      <ItemContainer>
        <label>Start Date: {product?.startDate}</label>
      </ItemContainer>
      <ItemContainer>
        <label>Methodology: {product?.methodology}</label>
      </ItemContainer>
      
    </ProductContainer>
  )
}

export default ProductItem