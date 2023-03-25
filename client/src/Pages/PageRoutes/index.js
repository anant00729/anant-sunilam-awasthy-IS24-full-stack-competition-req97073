import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ProductForm from '../ProductForm';
import ProductList from '../ProductList';
import NoMatch from '../NoMatch'
import NavBar from '../../Components/NavBar';
import Alert from '../../Components/Alert';
import { PageContainer  } from './style'
import { BodyContainer } from '../../Utils/style'

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
      <Alert />
    </PageContainer>
  )
}

export default PageRoutes