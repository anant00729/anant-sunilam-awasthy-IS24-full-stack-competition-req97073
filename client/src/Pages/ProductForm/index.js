import React,{ useState } from 'react'
import { ProductFormContainer, ProductFormWrapper } from './style'
import { AppFormLabel, AppInput } from '../../Utils/style'

function ProductForm() {
  const [productName, setProductName] = useState("");
  const [scrumMaster, setScrumMaster] = useState("");
  const [productOwner, setProductOwner] = useState("");
  return (
    <ProductFormContainer>
      <ProductFormWrapper>
          <AppFormLabel>Product Name</AppFormLabel>
          <AppInput
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
            type="text"
          />
          <AppFormLabel>Scrum Master</AppFormLabel>
          <AppInput
            onChange={(e) => setScrumMaster(e.target.value)}
            value={scrumMaster}
            type="text"
          />
          <AppFormLabel>Product Owner</AppFormLabel>
          <AppInput
            onChange={(e) => setProductOwner(e.target.value)}
            value={productOwner}
            type="text"
          />
          <AppFormLabel>Methodology</AppFormLabel>
          <AppInput
            onChange={(e) => setProductOwner(e.target.value)}
            value={productOwner}
            type="text"
          />
      </ProductFormWrapper>
    </ProductFormContainer>
    
  )
}

export default ProductForm