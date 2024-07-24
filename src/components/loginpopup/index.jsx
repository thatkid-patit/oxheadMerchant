import React,{ useContext, useState} from 'react'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom'
import {
  LoginContainer,
  LoginForm,
  LoginHeader,
  LoginH1,
  LoginInputWrap,
  LoginInput,
  LoginInputError,
  LoginSubmit,
  LoginFooter,
  LoginP,
  LoginSpan
} from './elements'

const Login = ({$loginIsOpen, toggleLogin, toggleSignup}) => {

  const {login} = useContext(StoreContext)
  const navigate = useNavigate();

  // login input config
  const [loginInput, setLoginInput] = useState({});
  const handleInput = (e) => {
      setLoginInput({...loginInput, [e.target.name]: e.target.value});
  }

  //login post config
  const handleSubmit = (e) => {
  e.preventDefault();
  const formData = {
      // use API key
      email: loginInput.email,
      password: loginInput.password,
  }
  login(formData, navigate);
  }

  // register login switch config
  const HandleClickClickHere = () => {
    toggleSignup();
    toggleLogin();
  }

  return (
    <>
      <LoginContainer $loginIsOpen={$loginIsOpen?1:0}>
        <LoginForm onSubmit={(e)=>handleSubmit(e)}>
          <LoginHeader>
            <LoginH1>Login</LoginH1>
          </LoginHeader>
          <LoginInputWrap>
            <LoginInput type='email' onChange={handleInput} name='email' placeholder='Your email' required/>
            <LoginInputError></LoginInputError>
          </LoginInputWrap>
          <LoginInputWrap>
            <LoginInput type='password' onChange={handleInput} name='password' placeholder='Your password' required/>
            <LoginInputError></LoginInputError>
          </LoginInputWrap>
          <LoginInputWrap>
            <LoginSubmit type='submit'>Login</LoginSubmit>
          </LoginInputWrap>
          <LoginFooter>
            <LoginP>Create new account? <LoginSpan onClick={HandleClickClickHere}>Click here</LoginSpan></LoginP>
          </LoginFooter>
        </LoginForm>
      </LoginContainer>
    </>
  )
}

export default Login
