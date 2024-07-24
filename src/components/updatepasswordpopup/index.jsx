import React, {useState, useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import {
  UpdatePasswordContainer,
  UpdatePasswordForm,
  UpdatePasswordHeader,
  UpdatePasswordH1,
  UpdatePasswordClose,
  UpdatePasswordInputWrap,
  UpdatePasswordInput,
  UpdatePasswordSubmit
} from './elements'

const UpdatePassword = ({
  toggleUpdatePassword,
  $updatePasswordIsOpen,
  toggleMyAccount
}) => {

  const {changePassword} = useContext(StoreContext);

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
      password: updateInput.password,
      password_new: updateInput.password_new,
      password_new_confirmation: updateInput.password_new_confirmation,
    }
    changePassword(formData, toggleUpdatePassword, toggleMyAccount);
  }

  const handleClose = () => {
    toggleUpdatePassword();
    toggleMyAccount();
  }

  return (
    <>
      <UpdatePasswordContainer $updatePasswordIsOpen={$updatePasswordIsOpen ? 1 : 0}>
        <UpdatePasswordForm onSubmit={(e)=> handleSubmit(e)}>
          <UpdatePasswordHeader>
            <UpdatePasswordH1>Change Password</UpdatePasswordH1>
            <UpdatePasswordClose onClick={handleClose}/>
          </UpdatePasswordHeader>
          <UpdatePasswordInputWrap>
            <UpdatePasswordInput type='password' onChange={handleInput} name='password' placeholder='Enter old password' required/>
          </UpdatePasswordInputWrap>
          <UpdatePasswordInputWrap>
            <UpdatePasswordInput type='password' onChange={handleInput} name='password_new' placeholder='Enter new password' required/>
          </UpdatePasswordInputWrap>
          <UpdatePasswordInputWrap>
            <UpdatePasswordInput type='password' onChange={handleInput} name='password_new_confirmation' placeholder='Confirm new password' required/>
          </UpdatePasswordInputWrap>
          <UpdatePasswordInputWrap>
            <UpdatePasswordSubmit type='submit'>Save</UpdatePasswordSubmit>
          </UpdatePasswordInputWrap>
        </UpdatePasswordForm>
      </UpdatePasswordContainer>
    </>
  )
}

export default UpdatePassword
