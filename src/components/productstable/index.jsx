import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import {
    ProductsTableContainer,
    ProductsTableContent,
    ProductsTableButtonWrap,
    ProductsTableAdd,
    ProductsTableWrap,
    ProductsTableMain,
    ProductsTableHeadRow,
    ProductsTableTh,
    ProductsTableBodyRow,
    ProductsTableTd,
    ProductsTableImage,
    ProductsTableEdit
} from './elements'

const ProductsTable = ({toggleAddProduct, toggleEditProduct}) => {

    const {products, getProductToEdit} = useContext(StoreContext);


    const handleClickEdit = (product) => {
        getProductToEdit(product, toggleEditProduct);
    }

  return (
    <>
        <ProductsTableContainer>
            <ProductsTableContent>
                <ProductsTableButtonWrap>
                    <ProductsTableAdd onClick={toggleAddProduct}>Add New Product</ProductsTableAdd>
                </ProductsTableButtonWrap>
                <ProductsTableWrap>
                    <ProductsTableMain>
                        <thead>
                            <ProductsTableHeadRow>
                                <ProductsTableTh>Image</ProductsTableTh>
                                <ProductsTableTh>Name</ProductsTableTh>
                                <ProductsTableTh>Price</ProductsTableTh>
                                <ProductsTableTh>Description</ProductsTableTh>
                                <ProductsTableTh>Action</ProductsTableTh>
                            </ProductsTableHeadRow>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => {
                                    return (
                                        <ProductsTableBodyRow key={index}>
                                            <ProductsTableTd>
                                                <ProductsTableImage src={`https://oxheadapi.wd99p.com/${product.image}`}/>
                                            </ProductsTableTd>
                                            <ProductsTableTd>{product.name}</ProductsTableTd>
                                            <ProductsTableTd>Php {product.price}</ProductsTableTd>
                                            <ProductsTableTd>{product.description}</ProductsTableTd>
                                            <ProductsTableTd>
                                                <ProductsTableEdit onClick={()=> handleClickEdit(product)}>Edit</ProductsTableEdit>
                                            </ProductsTableTd>
                                        </ProductsTableBodyRow>                           
                                    )
                                })
                            }

                        </tbody>
                    </ProductsTableMain>
                </ProductsTableWrap>
            </ProductsTableContent>
        </ProductsTableContainer>
    </>     
  )
}

export default ProductsTable
