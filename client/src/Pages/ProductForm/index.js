import React, {useContext, useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { ProductFormContainer, ProductFormWrapper, AddDeveloperWrapper, DeveloperChip, DeveloperChipGroup, Cross, DevLabel,PageTitle } from './style';
import { AppFormLabel, AppInput, AppButton, AppSelect, CustomeDatePicker } from '../../Utils/style';
import { GlobalContext } from '../../Context/GlobalContext';
import CrossIcon from '../../Images/cross.png';
import { useNavigate, useParams } from 'react-router-dom';

function ProductForm() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('');
  const [developers, setDevelopers] = useState([]);
  const [newDeveloper, setNewDeveloper] = useState('');
  const { productId } = useParams();

  const { addProduct } = useContext(GlobalContext);

  useEffect(() => {
    if(productId){

    }
  }, []) 

  console.log('productId', productId)

  const onSubmit = (data) => {
    data = {
      ...data, developers, startDate
    }
    addProduct(data,navigate)
    console.log(data);
  };

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

  return (
    <ProductFormContainer>
        <PageTitle>{productId ? 'Edit' : 'Add'} Product</PageTitle>  
        <ProductFormWrapper onSubmit={handleSubmit(onSubmit)}>
          <AppFormLabel>Product Name</AppFormLabel>
          <AppInput
            type="text"
            {...register('productName', { required: true })}
          />
          {errors.productName && (
            <span className="error">Please enter a product name</span>
          )}
          <AppFormLabel>Scrum Master</AppFormLabel>
          <AppInput
            type="text"
            {...register('scrumMasterName', { required: true })}
          />
          {errors.scrumMasterName && (
            <span className="error">Please enter a scrum master name</span>
          )}
          <AppFormLabel>Product Owner</AppFormLabel>
          <AppInput
            type="text"
            {...register('productOwnerName', { required: true })}
          />
          {errors.productOwnerName && (
            <span className="error">Please enter a product owner name</span>
          )}
          <AppFormLabel>Methodology</AppFormLabel>
          <AppSelect {...register('methodology')}>
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
            <p>Maximum limit of developers reached!</p>
          )}
          <AppFormLabel>Start Date: </AppFormLabel>
          <CustomeDatePicker
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
            disabled={
              !isValid || 
              developers?.length === 0 || 
              startDate == null ||
              startDate?.length === 0
              }>
            Save
          </AppButton>
      </ProductFormWrapper>
    </ProductFormContainer>
  );
}

export default ProductForm;
