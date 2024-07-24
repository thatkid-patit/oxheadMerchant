import React, {useState, useContext } from 'react'
import {
  UpdateNameContainer,
  UpdateNameForm,
  UpdateNameHeader,
  UpdateNameH1,
  UpdateNameClose,
  UpdateNameInputWrap,
  UpdateNameInput,
  UpdateNameSubmit
} from './elements'
import { StoreContext } from '../../context/StoreContext';

const UpdateName = ({
  toggleUpdateName,
  $updateNameIsOpen,
  toggleMyAccount
}) => {

  const {updateProfile} = useContext(StoreContext);

  // update input config
  const [updateInput, setUpdateInput] = useState({});
  const handleInput = (e) => {
    setUpdateInput({...updateInput, [e.target.name]: e.target.value});
  }

  //update post config
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      // use API key
      firstname: updateInput.firstname,
      lastname: updateInput.lastname,
      password: updateInput.password,
    }
    updateProfile(formData, toggleUpdateName, toggleMyAccount);
  }

  const handleClose = () => {
    toggleUpdateName();
    toggleMyAccount();
  }

  return (
    <>
      <UpdateNameContainer $updateNameIsOpen={$updateNameIsOpen ? 1 : 0}>
        <UpdateNameForm onSubmit={(e)=> handleSubmit(e)}>
          <UpdateNameHeader>
            <UpdateNameH1>Update Name</UpdateNameH1>
            <UpdateNameClose onClick={handleClose}/>
          </UpdateNameHeader>
          <UpdateNameInputWrap>
            <UpdateNameInput type='text' onChange={handleInput} name='firstname' placeholder='Your first name' required/>
          </UpdateNameInputWrap>
          <UpdateNameInputWrap>
            <UpdateNameInput type='text' onChange={handleInput} name='lastname' placeholder='Your last name' required/>
          </UpdateNameInputWrap>
          <UpdateNameInputWrap>
            <UpdateNameInput type='password' onChange={handleInput} name='password' placeholder='Confirm password to save' required/>
          </UpdateNameInputWrap>
          <UpdateNameInputWrap>
            <UpdateNameSubmit type='submit'>Save</UpdateNameSubmit>
          </UpdateNameInputWrap>
        </UpdateNameForm>
      </UpdateNameContainer>
    </>
  )
}

export default UpdateName
