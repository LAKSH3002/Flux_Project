import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../components/context/Authcontext';

const Signup = () => {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('')
  const {user, SignUp} = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try
    {
      await SignUp(email,password)
      navigate('/')
    }catch(error)
    {
      console.log(error)
    }
  }
  return (
    <>
    <div className='w-ful h-screen'>

    <div className='bg-black/100 fixed top-0 left-0 w-full h-screen'></div>

    <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[550px] h-[600px] mx-auto bg-green-300 text-white rounded'>
        <div className='max-w-[440px] mx-12 py-10'>
          <h1 className='text-3xl font-bold text-red-800'>Sign Up</h1><br></br>

          <form onSubmit={handleSubmit}  className=' flex flex-col py-4'>
            <input onChange={(e)=> setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded w-400px' type="email" placeholder='Enter Your Email' autoComplete='email'></input><br></br>
            <input onChange={(e)=> setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded w-400px' type="password" placeholder='Create Password' autoComplete='current-password'/>
            <button onSubmit={handleSubmit} className='bg-red-600 py-3 my-6 rounded font-bold text-xl'>Sign Up to FluxV1</button>

            <div className='flex justify-between items-center  text-gray-600 text-1xl'>
          <p><input className='mr-2' type="checkbox"/>Remeber Me</p>
          <p>Need Help?</p>
          </div>

          <p className='py-4 text-xl'><span className='text-gray-600'>
          Already Subscribed To FluxV1??
          </span>{' '}
          <Link to='/login'>Sign In</Link>
          </p>
          </form>
          
        </div>
        </div>
    </div>  
    
    </div>
    </>
    
  )
}

export default Signup
