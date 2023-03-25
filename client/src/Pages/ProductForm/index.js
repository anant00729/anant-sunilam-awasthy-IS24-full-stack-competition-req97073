import React,{ useState, useContext } from 'react'
import { ProductFormContainer, ProductFormWrapper } from './style'
import { AppFormLabel, AppInput, AppButton } from '../../Utils/style'
import { GlobalContext } from "../../Context/GlobalContext";

function ProductForm() {
  const [productName, setProductName] = useState("");
  const [scrumMaster, setScrumMaster] = useState("");
  const [productOwner, setProductOwner] = useState("");

  const { setAlert } = useContext(GlobalContext);

  const handleLoginClick = (e) => {
    e.preventDefault();
    setAlert('Hello all');

    // if (!inputEmail?.length) {
    //   setAlert("Please enter your email.");
    //   return;
    // } else if (!validateEmail(inputEmail)) {
    //   setAlert("Please enter valid email address.");
    //   return;
    // } else if (!inputPassword?.length) {
    //   setAlert("Please enter your password.");
    //   return;
    // }

    // axios({
    //   method: "POST",
    //   url: "/v1/auth/login",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   data: {
    //     email: inputEmail,
    //     password: inputPassword,
    //   },
    // })
    //   .then((res) => {
    //     if (res?.data?.status) {
    //       storeAuth(
    //         res?.data?.token,
    //         res?.data?.user?.id,
    //         res?.data?.user?.username
    //       );
    //       history.push(HOME_ROUTE);
    //     } else {
    //       setAlert(res?.data?.message);
    //     }
    //   })
    //   .catch((error) => {
    //     setAlert(error?.message);
    //   });
  };


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
          <AppButton 
            isFromForm
            onClick={(e) => handleLoginClick(e)}>
            Add Product
          </AppButton>
      </ProductFormWrapper>
    </ProductFormContainer>
  )
}

export default ProductForm