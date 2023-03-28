import React, {useContext, useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { ProductFormContainer, ProductFormWrapper, AddDeveloperWrapper, DeveloperChip, DeveloperChipGroup, Cross, DevLabel,PageTitle } from './style';
import { AppFormLabel, AppInput, AppButton, AppSelect, CustomeDatePicker, ErrorLabel, ErrorBox } from '../../Utils/style';
import { GlobalContext } from '../../Context/GlobalContext';
import CrossIcon from '../../Images/cross.png';
import { useNavigate, useParams } from 'react-router-dom';

// Component is used to Add or Update the product
function ProductForm() {
  
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('');
  const [developers, setDevelopers] = useState([]);
  const [newDeveloper, setNewDeveloper] = useState('');
  const { productId } = useParams();

  const { addProduct, getSingleProductDetails, selectedProduct, updateProduct } = useContext(GlobalContext);

  const { register, handleSubmit, formState: { errors, isValid }, setValue, trigger } = useForm({
    mode: 'onChange', 
    defaultValues: {}
  });

  // get the product details for the Edit Product Page
  useEffect(() => {
    if(productId){
      getSingleProductDetails(productId)
    }
    window.scrollTo(0, 0);
  }, []) 

  // On Edit Product the values are auto filled using the 
  // following hook
  useEffect(() => {
    if (Object.keys(selectedProduct).length) {
      const { productName, scrumMasterName, productOwnerName, methodology, startDate, developers : dev } = selectedProduct;
      setValue('productName', productName, true);
      setValue('scrumMasterName', scrumMasterName, true);
      setValue('productOwnerName', productOwnerName, true);
      setValue('methodology', methodology, true);
      if(startDate) setStartDate(new Date(startDate));
      if (dev?.length)setDevelopers(dev);
      trigger()
    }
  }, [selectedProduct, setValue]);


  const onSubmit = (data) => {
    data = {
      ...data, developers, startDate
    }
    // checks if the form is for Add product or 
    // edit product and based on that It calls 
    // seperate APIs ie. addProduct or updateProduct
    if(productId) {
      data = {...data, productId}
      updateProduct(data,navigate)
    }
    else {
      addProduct(data,navigate)
    }
      
  };

  // adds developer to the deevelopers list 
  const handleAddDeveloper = (event) => {
    event.preventDefault();
    if (developers.length < 5 && newDeveloper.trim() !== '') {
      setDevelopers([...developers, newDeveloper]);
      setNewDeveloper('');
    }
  };

  const handleNewDeveloperChange = (event) => {
    setNewDeveloper(event.target.value);
  };

  // used to disable or enable the Save button
  const saveButtonStatus = !isValid || 
  developers?.length === 0 || 
  startDate === null ||
  startDate?.length === 0

  return (
    <ProductFormContainer>
        <PageTitle>{productId ? 'Edit' : 'Add'} Product</PageTitle>  
        <ProductFormWrapper onSubmit={handleSubmit(onSubmit)}>
          <AppFormLabel>Product Name</AppFormLabel>
          <AppInput
            type="text"
            {...register('productName', { required: true })}
            isFromForm
            isError={errors?.productName}
          />
          {errors?.productName && (
            <ErrorBox>
              <ErrorLabel>Please enter a product name</ErrorLabel>
            </ErrorBox>
          )}
          <AppFormLabel>Scrum Master</AppFormLabel>
          <AppInput
            type="text"
            {...register('scrumMasterName', { required: true })}
            isFromForm
            isError={errors?.scrumMasterName}
          />
          {errors.scrumMasterName && (
            <ErrorBox>
              <ErrorLabel>Please enter a scrum master name</ErrorLabel>
            </ErrorBox>
          )}
          <AppFormLabel>Product Owner</AppFormLabel>
          <AppInput
            type="text"
            {...register('productOwnerName', { required: true })}
            isFromForm
            isError={errors?.scrumMasterName}
          />
          {errors.productOwnerName && (
            <ErrorBox>
              <ErrorLabel>
                Please enter a product owner name
              </ErrorLabel>
            </ErrorBox>
          )}
          <AppFormLabel>Methodology</AppFormLabel>
          <AppSelect {...register('methodology')} 
            onChange={(e) => {
              setValue('methodology', e.target.value);
            }}>
            <option value="Agile">Agile</option>
            <option value="Waterfall">Waterfall</option>
          </AppSelect>
          <AppFormLabel>Add Developer:</AppFormLabel>
          <AddDeveloperWrapper>
            <AppInput
              isForDeveloper
              type="text"
              value={newDeveloper}
              onChange={handleNewDeveloperChange}
            />
            <AppButton onClick={handleAddDeveloper}>Add</AppButton>
          </AddDeveloperWrapper>
          {developers.length !== 0 ? (
            <DeveloperChipGroup>
              {developers.map((developer, index) => (
                <DeveloperChip key={index}>
                    <DevLabel>{developer}</DevLabel>
                    <Cross src={CrossIcon} onClick={() => setDevelopers(developers.filter((d, i) => i !== index))}/>
                </DeveloperChip>
              ))}
            </DeveloperChipGroup>
          ) : null}
          {developers.length === 5 && (
            <p>
              <label>The product team can have a maximum of 5 developers.</label></p>
          )}
          <AppFormLabel>Start Date: </AppFormLabel>
          <CustomeDatePicker
            {...register('startDate')} 
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MMMM d, yyyy"
            shouldCloseOnSelect={true}
            showMonthDropdown
            clickableMonthYearDropdown
          />
          <AppButton 
            isFromForm 
            type="submit" 
            disabled={saveButtonStatus}>
            Save
          </AppButton>
      </ProductFormWrapper>
    </ProductFormContainer>
  );
}

export default ProductForm;
