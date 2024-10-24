import React from 'react'
import './Navbar.css';
import { Link ,useNavigate} from 'react-router-dom';
import { UserAuth } from '../../context/Authcontext';

const Navbar = () => {
 
  const {user, logOut} = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () =>{
    try{
      await logOut()
      navigate('/')
    }catch(error)
    {
      console.log(error)
    }
  };

  return (
    <>

<div className='Navigation'>
  
      <Link to='/'>
      <h1 className='heading'><span>Flictionary</span></h1>
      </Link>
      {user?.email?(
        <div>
        <button onClick = {handleLogOut} className='logoutbtn'>LogOut</button>
        
      </div>
      ):(
        <div>
        <Link to='/Login'>
        <button className='logg'>Sign In</button>
        </Link>
        <Link to='/signup'>
        <button className='signn'>Sign Up</button>
        </Link>
        
      </div>
      )}
    </div>
      
    </>
  )
}

{/* <header className="center-max-size header">
                <h1 className="h1t"><span className={"brand"}>FluxV1</span></h1>
                <form className="form" onSubmit={fetchMovies}>
                    <input className="search" type="text" id="search"
                           onInput={(event) => setSearchKey(event.target.value)}/>
                    <button className="submit-search" type="submit"><i className="fa fa-search"></i></button>
                </form>
            </header> */}

export default Navbar;
