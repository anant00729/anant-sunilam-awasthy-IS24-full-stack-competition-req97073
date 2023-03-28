import React, {useEffect, useContext, useState} from 'react'
import ProductItem from '../../Components/ProductItem'
import { ProductContainer } from './style'
import Search from '../../Images/search.png'
import { SearchBar, SearchButton, SearchForm, PageLabel, AppSelect } from '../../Utils/style'
import { GlobalContext } from "../../Context/GlobalContext";

function ProductList() {
  const { getAllProducts, productList } = useContext(GlobalContext);
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(()=> {
    getAllProducts()
  }, [])

  return (
    <>
      <PageLabel>Search Functionality for Scrum Master and Developer Names</PageLabel>
      <SearchForm>
        <AppSelect
          isForSearch
          onChange={handleSelectChange}
          value={selectedValue}
        >
          <option value="Scrum Master">Scrum Master</option>
          <option value="Developer">Developer</option>
        </AppSelect>
        <SearchBar/>
        <SearchButton src={Search}/>
      </SearchForm>
      <PageLabel>Product List</PageLabel>
      <ProductContainer>{
        productList?.map((product, index) => {
          return <ProductItem key={index} product={product}/>
        })}
      </ProductContainer>
    </>
    
  )
}

export default ProductList