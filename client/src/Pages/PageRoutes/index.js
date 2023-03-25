import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ProductForm from '../ProductForm';
import ProductList from '../ProductList';
import NoMatch from '../NoMatch'
import NavBar from '../../Components/NavBar';
import { PageContainer, BodyContainer } from './style'

function PageRoutes() {
  return (
    <PageContainer>
      <NavBar />
      <BodyContainer id="body-container">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductForm />} />
          <Route path="*" element={<NoMatch />} />
       </Routes>
      </BodyContainer>
    </PageContainer>
  )
}

export default PageRoutes