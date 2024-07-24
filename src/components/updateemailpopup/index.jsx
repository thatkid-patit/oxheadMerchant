import React, {useState, useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import {
  UpdateEmailContainer,
  UpdateEmailForm,
  UpdateEmailHeader,
  UpdateEmailH1,
  UpdateEmailClose,
  UpdateEmailInputWrap,
  UpdateEmailInput,
  UpdateEmailSubmit
} from './elements'

const UpdateEmail = ({
  toggleUpdateEmail,
  $updateEmailIsOpen,
  toggleMyAccount
}) => {

  const {updateEmail} = useContext(StoreContext);

  // update input config
  const [updateInput, setUpdateInput] = useState({});
  const handleInput = (e) => {
    setUpdateInput({...updateInput, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      // use API key
      email: updateInput.email,
      password: updateInput.password,
    }
    updateEmail(formData, toggleUpdateEmail, toggleMyAccount);
  }

  const handleClose = () => {
    toggleUpdateEmail();
    toggleMyAccount();
  }

  return (
    <>
      <UpdateEmailContainer $updateEmailIsOpen={$updateEmailIsOpen ? 1 : 0}>
        <UpdateEmailForm onSubmit={(e)=> handleSubmit(e)}>
          <UpdateEmailHeader>
            <UpdateEmailH1>Update Email</UpdateEmailH1>
            <UpdateEmailClose onClick={handleClose}/>
          </UpdateEmailHeader>
          <UpdateEmailInputWrap>
            <UpdateEmailInput type='email' onChange={handleInput} name='email' placeholder='Your email' required/>
          </UpdateEmailInputWrap>
          <UpdateEmailInputWrap>
            <UpdateEmailInput type='password' onChange={handleInput} name='password' placeholder='Confirm password to save' required/>
          </UpdateEmailInputWrap>
          <UpdateEmailInputWrap>
            <UpdateEmailSubmit type='submit'>Save</UpdateEmailSubmit>
          </UpdateEmailInputWrap>
        </UpdateEmailForm>
      </UpdateEmailContainer>
    </>
  )
}

export default UpdateEmail
