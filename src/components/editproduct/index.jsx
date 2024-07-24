import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import {
    EditProductContainer,
    EditProductform,
    EditProductHeader,
    EditProductH1,
    EditProductClose,
    EditProductInputWrap,
    EditProductInputWrap2,
    EditProductInput,
    EditProductSelect,
    EditProductInputLabel,
    EditProductOption,
    EditProductSubmit,
    EditProductSubmit2
} from './elements'
import { StoreContext } from '../../context/StoreContext'

const EditProduct = ({$editProductIsOpen, toggleEditProduct}) => {

    const {productToEdit, updateProduct} = useContext(StoreContext);

    // edit Product input config
    const [productInput, setProductInput] = useState({});
    const handleInput = (e) => {
        setProductInput({...productInput, [e.target.name]: e.target.value});
    }

    // change product image
    const [productImage, setProductImage] = useState([]);
    const handleImage = (e) => {
        setProductImage({image: e.target.files[0]});
    }

    //update Product post config
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', productImage.image==undefined?"":productImage.image);
        formData.append('name', productInput.name==undefined?"":productInput.name);
        formData.append('category', productInput.category==undefined?"":productInput.category);
        formData.append('description', productInput.description==undefined?"":productInput.description);
        formData.append('price', productInput.price==undefined?"":productInput.price);
        updateProduct(formData, toggleEditProduct);
    }

  return (
    <>
    <EditProductContainer $editProductIsOpen={$editProductIsOpen ? 1 : 0}>
        <EditProductform encType='multipart/form-data' onSubmit={handleSubmit}>
            <EditProductHeader>
                <EditProductH1>Edit Product</EditProductH1>
                <EditProductClose onClick={toggleEditProduct}/>
            </EditProductHeader>
            <EditProductInputWrap>
                <EditProductInput type='text' name='name'  onChange={handleInput} defaultValue={productToEdit.name} required/>
            </EditProductInputWrap>
            <EditProductInputWrap>
                <EditProductSelect name='category' onChange={handleInput} defaultValue={productToEdit.categpry}>
                    <EditProductOption value="">--Select category--</EditProductOption>
                    <EditProductOption value={1}>Beef</EditProductOption>
                    <EditProductOption value={2}>Pork</EditProductOption>
                    <EditProductOption value={3}>Chicken</EditProductOption>
                    <EditProductOption value={4}>Seafood</EditProductOption>
                    <EditProductOption value={5}>Dessert</EditProductOption>
                    <EditProductOption value={6}>Beverage</EditProductOption>
                </EditProductSelect>
            </EditProductInputWrap>
            <EditProductInputWrap>
                <EditProductInput type='text' name='description' onChange={handleInput} defaultValue={productToEdit.description}  required/>
            </EditProductInputWrap>
            <EditProductInputWrap>
                <EditProductInput type='number' name='price' onChange={handleInput} defaultValue={productToEdit.price}  required/>
            </EditProductInputWrap>
            <EditProductInputWrap2>
                <EditProductInputLabel>Upload new product image</EditProductInputLabel>
                <EditProductInput type='file' name='image' onChange={handleImage} />
            </EditProductInputWrap2>
            <EditProductInputWrap>
                <EditProductSubmit type="submit">Save Changes</EditProductSubmit>
            </EditProductInputWrap>
            <EditProductInputWrap>
                <EditProductSubmit2>Delete Product</EditProductSubmit2>
            </EditProductInputWrap>
        </EditProductform>
    </EditProductContainer>
    </>
  )
}

export default EditProduct
