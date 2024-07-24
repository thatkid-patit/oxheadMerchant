import React,{useContext, useState} from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

import {
    AddProductContainer,
    AddProductform,
    AddProductHeader,
    AddProductH1,
    AddProductClose,
    AddProductInputWrap,
    AddProductInputWrap2,
    AddProductInput,
    AddProductSelect,
    AddProductInputLabel,
    AddProductOption,
    AddProductSubmit
} from './elements'

const AddProduct = ({$addProductIsOpen, toggleAddProduct}) => {

    const {addProducts} = useContext(StoreContext)

    // add Product input config
    const [productInput, setProductInput] = useState({});
    const handleInput = (e) => {
        setProductInput({...productInput, [e.target.name]: e.target.value});
    }

    // add product image
    const [productImage, setProductImage] = useState([]);
    const handleImage = (e) => {
        setProductImage({image: e.target.files[0]});
    }

    //add Product post config
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', productImage.image);
        formData.append('name', productInput.name);
        formData.append('category', productInput.category);
        formData.append('description', productInput.description);
        formData.append('price', productInput.price);
        addProducts(formData, toggleAddProduct);
    }

  return (
    <>
    <AddProductContainer $addProductIsOpen={$addProductIsOpen ? 1 : 0}>
        <AddProductform encType='multipart/form-data' onSubmit={handleSubmit}>
            <AddProductHeader>
                <AddProductH1>Add Product</AddProductH1>
                <AddProductClose onClick={toggleAddProduct}/>
            </AddProductHeader>
            <AddProductInputWrap>
                <AddProductInput type='text' onChange={handleInput} name='name' placeholder='Enter product name' required/>
            </AddProductInputWrap>
            <AddProductInputWrap>
                <AddProductSelect name='category' onChange={handleInput} required>
                    <AddProductOption value="">--Select category--</AddProductOption>
                    <AddProductOption value={1}>Beef</AddProductOption>
                    <AddProductOption value={2}>Pork</AddProductOption>
                    <AddProductOption value={3}>Chicken</AddProductOption>
                    <AddProductOption value={4}>Seafood</AddProductOption>
                    <AddProductOption value={5}>Dessert</AddProductOption>
                    <AddProductOption value={6}>Beverage</AddProductOption>
                </AddProductSelect>
            </AddProductInputWrap>
            <AddProductInputWrap>
                <AddProductInput type='text' onChange={handleInput} name='description' placeholder='Enter description' required/>
            </AddProductInputWrap>
            <AddProductInputWrap>
                <AddProductInput type='number' onChange={handleInput} name='price' placeholder='Enter price' required/>
            </AddProductInputWrap>
            <AddProductInputWrap2>
                <AddProductInputLabel>Upload product image</AddProductInputLabel>
                <AddProductInput type='file' onChange={handleImage} name='image' placeholder='Upload image' required/>
            </AddProductInputWrap2>
            <AddProductInputWrap>
                <AddProductSubmit>Submit Product</AddProductSubmit>
            </AddProductInputWrap>
        </AddProductform>
    </AddProductContainer>
    </>
  )
}

export default AddProduct
