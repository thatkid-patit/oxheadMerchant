import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar';
import HomePage from './pages/homepage'
import ProductsPage from './pages/productspage'
import Sidebar from './components/sidebar'
import CompletedOrdersPage from './pages/completedorderspage'
import Footer from './components/footer';
import VouchersPage from './pages/voucherspage';
import AddProduct from './components/addproduct';
import EditProduct from './components/editproduct';
import AddVoucher from './components/addvoucher'
import EditVoucher from './components/editvoucher';
import Login from './components/loginpopup'
import Signup from './components/signuppopup'
import MyAccount from './components/myaccountpopup';
import UpdateName from './components/updatenamepopup';
import UpdateEmail from './components/updateemailpopup';
import UpdatePassword from './components/updatepasswordpopup';
import axios from 'axios';

axios.defaults.baseURL = "https://oxheadapi.wd99p.com";
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.get['Accept'] = 'application/json';

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function(config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
})

const App = () => {

  var auth = "";
  if(!localStorage.getItem('auth_token')) {
    auth = true;
  } else {
    auth = false;
  }

  const [signupIsOpen, setSignupIsOpen] = useState(false);
  const toggleSignup = () => {
    setSignupIsOpen(!signupIsOpen);
  }

  const [loginIsOpen, setLoginIsOpen] = useState(auth);
  const toggleLogin = () => {
    setLoginIsOpen(!loginIsOpen);
  }

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  }

  const [addProductIsOpen, setAddProductIsOpen] = useState(false);
  const toggleAddProduct = () => {
    setAddProductIsOpen(!addProductIsOpen);
  }

  const [editProductIsOpen, setEditProductIsOpen] = useState(false);
  const toggleEditProduct = () => {
    setEditProductIsOpen(!editProductIsOpen);
  }

  const [addVoucherIsOpen, setAddVoucherIsOpen] = useState(false);
  const toggleAddVoucher = () => {
    setAddVoucherIsOpen(!addVoucherIsOpen);
  }

  const [editVoucherIsOpen, setEditVoucherIsOpen] = useState(false);
  const toggleEditVoucher = () => {
    setEditVoucherIsOpen(!editVoucherIsOpen);
  }

  const [myAccountIsOpen, setMyAccountIsOpen] = useState(false);
  const toggleMyAccount = () => {
    setMyAccountIsOpen(!myAccountIsOpen);
  }

  const [updateNameIsOpen, setUpdateNameIsOpen] = useState(false);
  const toggleUpdateName = () => {
    setUpdateNameIsOpen(!updateNameIsOpen);
  }

  const [updateEmailIsOpen, setUpdateEmailIsOpen] = useState(false);
  const toggleUpdateEmail = () => {
    setUpdateEmailIsOpen(!updateEmailIsOpen);
  }

  const [updatePasswordIsOpen, setUpdatePasswordIsOpen] = useState(false);
  const toggleUpdatePassword = () => {
    setUpdatePasswordIsOpen(!updatePasswordIsOpen);
  }

  let navbar = '';
  if(window.location.pathname == '/login' || window.location.pathname == '/signup') {
    navbar = <></>
  } else {
    navbar = <Navbar
      toggleSidebar={toggleSidebar} 
      toggleMyAccount={toggleMyAccount}
      />
  }

  return (
    <BrowserRouter>
      {navbar}
      <Sidebar 
        $sidebarIsOpen={sidebarIsOpen?1:0} 
        toggleSidebar={toggleSidebar} 
        toggleMyAccount={toggleMyAccount}
        />

      <Login 
        $loginIsOpen={loginIsOpen?1:0} 
        toggleLogin={toggleLogin} 
        toggleSignup={toggleSignup} 
        />
      <Signup 
        $signupIsOpen={signupIsOpen?1:0} 
        toggleSignup={toggleSignup} 
        toggleLogin={toggleLogin}
        />
      
      <AddProduct 
        $addProductIsOpen={addProductIsOpen?1:0} 
        toggleAddProduct={toggleAddProduct}
        />
      <EditProduct 
        $editProductIsOpen={editProductIsOpen?1:0} 
        toggleEditProduct={toggleEditProduct}
        />

      <AddVoucher 
        $addVoucherIsOpen={addVoucherIsOpen?1:0} 
        toggleAddVoucher={toggleAddVoucher}
        />
      <EditVoucher 
        $editVoucherIsOpen={editVoucherIsOpen?1:0} 
        toggleEditVoucher={toggleEditVoucher}
        />

      <MyAccount 
        $myAccountIsOpen={myAccountIsOpen?1:0} 
        toggleMyAccount={toggleMyAccount} 
        toggleUpdateName={toggleUpdateName} 
        toggleUpdateEmail={toggleUpdateEmail} 
        toggleUpdatePassword={toggleUpdatePassword}
        />
      <UpdateName 
        $updateNameIsOpen={updateNameIsOpen?1:0} 
        toggleUpdateName={toggleUpdateName} 
        toggleMyAccount={toggleMyAccount}
        />
      <UpdateEmail 
        $updateEmailIsOpen={updateEmailIsOpen?1:0} 
        toggleUpdateEmail={toggleUpdateEmail} 
        toggleMyAccount={toggleMyAccount}
        />
      <UpdatePassword 
        $updatePasswordIsOpen={updatePasswordIsOpen?1:0} 
        toggleUpdatePassword={toggleUpdatePassword} 
        toggleMyAccount={toggleMyAccount}
        />

      <Routes>
        <Route 
          path='/' 
          element={<HomePage/>}
          />
        <Route 
          path='/completedorders' 
          element={<CompletedOrdersPage/>}
          />
        <Route
          path='/products'
          element={
            <ProductsPage 
              toggleAddProduct={toggleAddProduct} 
              toggleEditProduct={toggleEditProduct}
            />}
          />
        <Route
          path='/vouchers' 
          element={
            <VouchersPage 
              toggleAddVoucher={toggleAddVoucher} 
              toggleEditVoucher={toggleEditVoucher}
            />}
          />
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
