import React, {useEffect, useContext, useState} from 'react'
import ProductItem from '../../Components/ProductItem'
import { ProductContainer, ProductNotFound, ProductNotFoundImg } from './style'
import Search from '../../Images/search.png'
import Empty from '../../Images/empty.png'
import { SearchBar, SearchButton, SearchForm, PageLabel, AppSelect } from '../../Utils/style'
import { GlobalContext } from "../../Context/GlobalContext";

function ProductList() {
  const { getAllProducts, productList, search } = useContext(GlobalContext);
  const [selectedValue, setSelectedValue] = useState('SM');
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  
  useEffect(()=> {
    getAllProducts()
    window.scrollTo(0, 0);
  }, [])

  const onSearchClick = (e) => {
    e.preventDefault()
    if(searchTerm === '') getAllProducts()
    else search(searchTerm, selectedValue)
  }

  return (
    <>
      <PageLabel>Search Functionality for Scrum Master and Developer Names</PageLabel>
      <SearchForm onSubmit={onSearchClick}>
        <AppSelect
          isForSearch
          onChange={handleSelectChange}
          value={selectedValue}
        >
          <option value="SM">Scrum Master</option>
          <option value="D">Developer</option>
        </AppSelect>
        <SearchBar value={searchTerm} onChange={handleChange}/>
        <SearchButton src={Search} onClick={onSearchClick}/>
      </SearchForm>
      <PageLabel>Product List</PageLabel>
      {productList.length > 0 ? 
      (<ProductContainer>{
        productList?.map((product, index) => {
          return <ProductItem key={index} product={product}/>
        })}
      </ProductContainer>) : 
      <ProductNotFound>
          <ProductNotFoundImg src={Empty}/>
          <label>Product not found</label>
      </ProductNotFound>
      }
    </>
    
  )
}

export default ProductList