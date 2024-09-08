import React, { useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser  } from '../utils/userSlice';
import { useState } from 'react';
import {BG_URL } from '../utils/constants'
import { USER_AVATAR } from '../utils/constants';



const Login = () => {
       const [isSignInFrom, setisSignInFrom] = useState(true)
       const [errorMessage, seterrorMessage] = useState(null)
       const navigate = useNavigate()
       const dispatch = useDispatch()
       


       const email = useRef(null)
       const password = useRef(null)
       const name = useRef(null)


       const toggleSignInForm = () =>{
              setisSignInFrom(!isSignInFrom);
       }

       const handleBtnClick =()=>{
        //validate the form data
        const message =checkValidData(
          email.current.value , 
          password.current.value , 
          name.current.value 
        )
        seterrorMessage(message)

        if(message) return;

        if(!isSignInFrom){
          //sign Up logic
          createUserWithEmailAndPassword(
            auth,
            email.current.value, 
            password.current.value
          )
              .then((userCredential) => {
                  const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value ,
                        photoURL: USER_AVATAR
    }).then(() => {
       const {
          uid , 
          email, 
          displayName , 
          photoURL
        } = auth.currentUser;

      dispatch(
        addUser(
          {
            uid : uid , 
            email : email ,  
            displayName : displayName , 
            photoURL : photoURL
          })
        )
      navigate("/browse")
    }).catch((error) => {
     seterrorMessage(errorMessage)
    });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
          
        }
        else{
          signInWithEmailAndPassword(
            auth, 
            email.current.value, 
            password.current.value
          )
         
            .then(
              (
                userCredential
              ) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse")
    // ...
  }) 
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

    }   
 }






  return (
    <div className='flex justify-center'>
       <Header/>
      <div className='absolute'>
      <img
          src={BG_URL}
          alt="logo"/>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='absolute p-5 w-[23%] my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black bg-opacity-80'>
              <h1 className='font-semibold text-5xl  text-center mb-5 '>{isSignInFrom ? "Sign In" : "Sign Up"}</h1>
             {!isSignInFrom &&
              ( <input ref={name}  type='text' placeholder='Enter Name' className='p-3 my-3 w-full rounded-md bg-black opacity-80 text-xl'/>)
               }
              <input ref={email} type='text' placeholder='Email Address' className='p-3 my-3 w-full rounded-md  bg-black opacity-80 text-xl'/>
              <input ref={password} type='password' placeholder='Password' className='p-3 my-3  w-full rounded-md bg-black opacity-80 text-xl'/>
              <p className='text-red-500 text-center font-semibold text-xl pb-2'>{errorMessage}</p>
              <button className='p-3 my-2 bg-red-600 w-full rounded-md text-xl font-semibold mb-8' onClick={handleBtnClick}>{isSignInFrom ? "Sign In" : "Sign Up"}</button>
              <div className='cursor-pointer'>
              {isSignInFrom ?  <p onClick={toggleSignInForm}>New to Netflix GPT ?  <strong className='text-blue-500 ' >Sign Up Now</strong> </p> : <p onClick={toggleSignInForm}>Already Registered</p>}
              </div>
             
      </form>
    </div>
  )
}

export default Login