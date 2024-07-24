import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import Swal from 'sweetalert2'
import { 
    category,
    vouchers
 } from '../assets/test'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const axiosConfigA = {
        headers: {"Content-Type": "application/json", 'Access-Control-Allow-Origin' : '*'}
    };

    const axiosConfigB = {
        headers: {"Content-Type": "multipart/form-data", 'Access-Control-Allow-Origin' : '*'}
    };

    //signup POST
    const signUp = (formData, toggleSignup, toggleLogin) => {
        axios.get('/sanctum/csrf-cookie').then(res=> {
            axios.post(`/api/merchantv2/register`, formData, axiosConfigA).then(res => {
                if(res.data.status === true) {
                    Swal.fire({
                        icon: "success",
                        title: "Awesome",
                        text: res.data.message,
                    })
                    toggleSignup();
                    toggleLogin();
                    window.location.reload();
                } else {
                    if(res.data.validation_errors.email) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops",
                            text: res.data.validation_errors.email,
                        })
                    }
                    if(res.data.validation_errors.password) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops",
                            text: res.data.validation_errors.password,
                        })
                    }
                }         
            });
        })
    }

    //login POST
    const login = (formData, navigate) => {
        axios.get('/sanctum/csrf-cookie').then(res=> {
            axios.post(`/api/merchantv2/login`, formData, axiosConfigA).then(res => {
                if(res.data.status === true) {
                    localStorage.setItem('auth_token', res.data.token);
                    Swal.fire({
                        icon: "success",
                        title: "Awesome",
                        text: res.data.message,
                    })
                    window.location.reload();
                    navigate('/');
                    return;
                }  
                if(res.data.status === false) {
                    //credential errors
                    Swal.fire({
                      icon: "warning",
                      title: "Oops",
                      text: res.data.message,
                    })
                } else {
                    //validation errors
                    if(res.data.validation_errors.email) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops",
                            text: res.data.validation_errors.email,
                        })
                    }
                    if(res.data.validation_errors.password) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops",
                            text: res.data.validation_errors.password,
                        })
                    }
                  }         
              });
            })
    }

    //logout GET
    const logout = () => {
        axios.get(`/api/merchantv2/logout`).then(res => {
            if(res.data.status === true) {
                localStorage.removeItem('auth_token');
                Swal.fire({
                    icon: "success",
                    title: "Awesome",
                    text: res.data.message,
                    showConfirmButton: false,
                })
                setTimeout(()=>{
                    window.location.reload();
                }, 1500)
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops",
                    text: "Unable to logout",
                })
            }
        })
    }

    //profile GET
    const [profile, setProfile] = useState({});
    const showProfile = (toggleMyAccount) => {
        axios.get(`/api/merchantv2/profile`).then(res => {
            if(res.data.status === true) {
                setProfile(res.data.profile);
                toggleMyAccount();
            } else {
                console.log(res.data.message);
            }
        })

    }

    //update profile POST
    const updateProfile = (formData, toggleUpdateName, toggleMyAccount) => {
        axios.get('/sanctum/csrf-cookie').then(res => {
            axios.post(`api/merchantv2/update/${profile.id}?_method=put`, formData, axiosConfigA).then(res=> {
                if(res.data.status === true) {
                    Swal.fire({
                        icon: "success",
                        title: "Awesome",
                        text: res.data.message,
                        showConfirmButton: false,
                    })
                    toggleUpdateName();
                    toggleMyAccount();
                    window.location.reload();
                }
                if(res.data.status === false) {
                    //credential errors
                    Swal.fire({
                      icon: "warning",
                      title: "Oops",
                      text: res.data.message,
                    })
                } else {
                    //validation errors
                    if(res.data.validation_errors.password) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops",
                            text: res.data.validation_errors.password,
                        })
                    }
                  }
            })
        })
    }

    //update email POST
    const updateEmail = (formData, toggleUpdateEmail, toggleMyAccount) => {
        axios.get('/sanctum/csrf-cookie').then(res => {
            axios.post(`api/merchantv2/e/update/${profile.id}?_method=put`, formData, axiosConfigA).then(res=> {
                if(res.data.status === true) {
                    Swal.fire({
                        icon: "success",
                        title: "Awesome",
                        text: res.data.message,
                        showConfirmButton: false,
                    })
                    toggleUpdateEmail();
                    toggleMyAccount();
                    window.location.reload();
                }
                if(res.data.status === false) {
                    //credential errors
                    Swal.fire({
                      icon: "warning",
                      title: "Oops",
                      text: res.data.message,
                      showConfirmButton: false,
                    })
                } else {
                    //validation errors
                    if(res.data.validation_errors.password) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops",
                            text: res.data.validation_errors.password,
                        })
                    }
                  }
            })
        })
    }

    //change password POST
    const changePassword = (formData, toggleUpdatePassword, toggleMyAccount) => {
        axios.get('/sanctum/csrf-cookie').then(res => {
            axios.post(`api/merchantv2/p/change/${profile.id}?_method=put`, formData, axiosConfigA).then(res=> {
                if(res.data.status === true) {
                    Swal.fire({
                        icon: "success",
                        title: "Awesome",
                        text: res.data.message,
                        showConfirmButton: false,
                    })
                    toggleUpdatePassword();
                    toggleMyAccount();
                    localStorage.removeItem('auth_token');
                    setTimeout(()=>{
                        window.location.reload();
                    }, 1500);
                }
                if(res.data.status === false) {
                    //credential errors
                    Swal.fire({
                      icon: "warning",
                      title: "Oops",
                      text: res.data.message,
                    })
                } else {
                    //validation errors
                    if(res.data.validation_errors.password) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops",
                            text: res.data.validation_errors.password,
                        })
                    }
                    if(res.data.validation_errors.password_new) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops",
                            text: res.data.validation_errors.password_new,
                        })
                    }
                  }
            })
        })
    }

    // add product POST
    const addProducts = (formData, toggleAddProduct) => {
        axios.get('/sanctum/csrf-cookie').then(res=> {
            axios.post(`/api/productv2/store`, formData, axiosConfigB).then(res => {
                if(res.data.status === true) {
                    Swal.fire({
                        icon: "success",
                        title: "Awesome",
                        text: res.data.message,
                        showConfirmButton: false,
                    })
                    toggleAddProduct();
                    setTimeout(()=>{
                        window.location.reload();
                    },1500);
                } else {
                    console.log(res.data);
                    if(res.data.validation_errors) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops",
                            text: res.data.validation_errors.messages,
                        })  
                    }
                }         
            });
        })
    }

    // show products GET
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get(`/api/productv2/index`).then(res => {
            if(res.data.status === true) {
                setProducts(res.data.products);
            } else {
                console.log(res.data.message);
            }
        })
    },[]);

    const [productToEdit, setProductToEdit] = useState({});
    const getProductToEdit = (product, toggleEditProduct) => {
        toggleEditProduct();
        setProductToEdit(product);
    }

    // update products POST
    const updateProduct = (formData, toggleEditProduct) => {
        axios.get('/sanctum/csrf-cookie').then(res => {
            axios.post(`api/productv2/update/${productToEdit.id}?_method=put`, formData, axiosConfigB).then(res => {
                if(res.data.status === true) {
                    Swal.fire({
                        icon: "success",
                        title: "Awesome",
                        text: res.data.message,
                        showConfirmButton: false,
                    })
                    toggleEditProduct();
                    setTimeout(()=>{
                        window.location.reload();
                    },1500);
                } else {
                    console.log(res.data);
                    if(res.data.validation_errors) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops",
                            text: res.data.validation_errors.messages,
                        })  
                    }
                }         
            });
        })
    }



    const [voucherToEdit, setVoucherToEdit] = useState({});
    const getVoucherToEdit = object => {
        setVoucherToEdit(object);
    }
        
    const contextValue = {
        signUp,
        login,
        logout,

        showProfile,
        profile,
        updateProfile,
        updateEmail,
        changePassword,

        category,
        addProducts,
        products,
        getProductToEdit,
        productToEdit,
        updateProduct,

        vouchers,
        getVoucherToEdit,
        voucherToEdit
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider