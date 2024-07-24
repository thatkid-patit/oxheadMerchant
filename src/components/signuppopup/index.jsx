import React,{useContext, useState} from 'react'
import { StoreContext } from '../../context/StoreContext'
import {
    SignupContainer,
    Signupform,
    SignupHeader,
    SignupH1,
    SignupInputWrap,
    SignupInput,
    SignupSubmit,
    SignupFooter,
    SignupP,
    SignupSpan
} from './elements'


const Signup = ({$signupIsOpen, toggleLogin, toggleSignup}) => {

    const {signUp} = useContext(StoreContext)

    // register input config
    const [registerInput, setRegisterInput] = useState({});
    const handleInput = (e) => {
        setRegisterInput({...registerInput, [e.target.name]: e.target.value});
    }

    //register post config
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            // use API key
            firstname: registerInput.firstname,
            lastname: registerInput.lastname,
            email: registerInput.email,
            password: registerInput.password,
            password_confirmation: registerInput.password_confirmation
        }
        signUp(formData, toggleSignup, toggleLogin);
    }

    // register login switch config
    const HandleClickLoginHere = () => {
        toggleSignup();
        toggleLogin();
    }

  return (
    <>
    <SignupContainer $signupIsOpen={$signupIsOpen ? 1 : 0}>
        <Signupform onSubmit={(e)=>handleSubmit(e)}>
            <SignupHeader>
                <SignupH1>Sign up</SignupH1>
            </SignupHeader>
            <SignupInputWrap>
                <SignupInput type='text' onChange={handleInput} name='firstname' placeholder='Your first name' required/>
                <SignupInput type='text' onChange={handleInput} name='lastname' placeholder='Your last name' required/>
            </SignupInputWrap>
            <SignupInputWrap>
                <SignupInput type='email' onChange={handleInput} name='email' placeholder='Your email' required/>
            </SignupInputWrap>
            <SignupInputWrap>
                <SignupInput type='password' onChange={handleInput} name='password' id='password1' placeholder='Your password' required/>
                <SignupInput type='password' onChange={handleInput} name='password_confirmation' id='password2' placeholder='Confirm password' required/>
            </SignupInputWrap>
            <SignupInputWrap>
                <SignupSubmit type="submit">Create Account</SignupSubmit>
            </SignupInputWrap>
            <SignupFooter>
                <SignupP>Already have an account? <SignupSpan onClick={HandleClickLoginHere}>Login here</SignupSpan></SignupP>
            </SignupFooter>
        </Signupform>
    </SignupContainer>
    </>
  )
}

export default Signup
