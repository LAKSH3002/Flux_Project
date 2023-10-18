import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../components/context/Authcontext';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, SetError] = useState('')
  const {user, LogIn} = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault()
    SetError('')
    try{
      await LogIn(email,password)
      navigate('/')
    }catch(error){
      console.log(error)
      SetError(error.message)
    }
  }

  return (
    <>
      <div className='w-ful h-screen'>

<div className='bg-black/100 fixed top-0 left-0 w-full h-screen'></div>

<div className=''>
    <div className=''>
    <div className=''>
      <h1 className=''>Log In</h1><br></br>
      {error?<p className='p-3 bg-red-400 my-2'>{error}</p>:null}

      <form onSubmit= {handleSubmit}className=' flex flex-col py-4'>
        <input onChange = {(e)=> setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded w-400px' type="email" placeholder='Enter Your Email' autoComplete='email'></input><br></br>
        <input onChange = {(e)=> setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded w-400px' type="password" placeholder='Enter Your Password' autoComplete='current-password'/>
        <button className='bg-red-600 py-3 my-8 rounded font-bold text-xl'>Log In To FluxV1</button>

        <div className='flex justify-between items-center my-10  text-gray-300 text-1xl'>
      <p><input className='mr-3' type="checkbox"/>Remeber Me</p>
      <p>Need Help?</p>
      </div>

      <p className='py-4 text-xl mx-30'><span className='text-pink-400'>
      New To Netflix?
      </span>{' '}
      <Link to='/signup'> Sign Up</Link>
      </p>
      </form>
      
    </div>
    </div>
</div>  

</div>
    </>
  )
}

export default Login
