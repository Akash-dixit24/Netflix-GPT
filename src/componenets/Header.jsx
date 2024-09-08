import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";
import { addUser ,  removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants'






const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user =  useSelector(store =>  store.user)
  




  const handlesignOut = () => {
    signOut(auth)
      .then(() => { 
    })
    .catch((error) => {
      //An Error hanppen
      navigate("/error")
    }); 
  }


  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
           if (user) {
             const {uid , email, displayName , photoURL} = user;
           dispatch
              (addUser
                ({
                  uid : uid ,
                  email : email ,
                  displayName : displayName ,
                  photoURL : photoURL,
                })
              );
              navigate("/browse");
          
           } else {
                  dispatch(removeUser());
                  navigate("/")
                  
           }
         });
         //unsubscribe when component will unmount
          return () => unsubscribe();
  },[])






  return (
    <div className='absolute flex justify-between f px-8 py-2 bg-gradient-to-b from-black w-full z-10 '>
       <img
       className='w-44'
        src= {LOGO}
       alt='logo'
       />
      { user && <div className='p-2 flex justify-center items-center'>
        <img className='w-10 h-10 rounded-md'
          src={user?.photoURL}
        />
        <button onClick={handlesignOut} className='font-semibold text-white bg-red-600 ml-3 rounded-md w-[75px] h-[40px]'>Sign Out</button>
       </div>}
    </div>
  )
}

export default Header 