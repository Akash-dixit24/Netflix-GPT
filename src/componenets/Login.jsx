import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
       const [isSignInFrom, setisSignInFrom] = useState(true)


       const toggleSignInForm = () =>{
              setisSignInFrom(!isSignInFrom);
       }


  return (
    <div className='flex justify-center '>
       <Header/>
      <div className='absolute'>
      <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"/>
      </div>
      <form className='absolute p-5 w-[23%] my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black bg-opacity-80'>
              <h1 className='font-semibold text-5xl  text-center mb-5 '>{isSignInFrom ? "Sign In" : "Sign Up"}</h1>
             {!isSignInFrom &&
              ( <input type='text' placeholder='Enter Name' className='p-3 my-3 w-full rounded-md bg-gray-700 opacity-95 text-xl'/>)
               }
              <input type='text' placeholder='Email Address' className='p-3 my-3 w-full rounded-md bg-gray-700 opacity-95 text-xl'/>
              <input type='password' placeholder='Password' className='p-3 my-3  w-full rounded-md bg-gray-700 opacity-95 text-xl'/>
              <button className='p-3 my-2 bg-red-600 w-full rounded-md text-xl font-semibold mb-8'>{isSignInFrom ? "Sign In" : "Sign Up"}</button>
              <div className='cursor-pointer'>
              {isSignInFrom ?  <p onClick={toggleSignInForm}>New to Netflix GPT ?  <strong className='text-blue-500 ' >Sign Up Now</strong> </p> : <p onClick={toggleSignInForm}>Already Registered</p>}
              </div>
             
      </form>
    </div>
  )
}

export default Login