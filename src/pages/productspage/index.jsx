import React from 'react'
import {Body} from './elements'
import ProductsTable from '../../components/productstable'
import ScrollTop from '../../components/scrolltop'

const ProductsPage = ({toggleAddProduct, toggleEditProduct}) => {
  return (
    <Body>
      <ProductsTable toggleAddProduct={toggleAddProduct} toggleEditProduct={toggleEditProduct}/>
      <ScrollTop/>
    </Body>
  )
}

export default ProductsPage
