import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
 
  return (
    <>

<div className=''>
      <Link to='/'>
      <h1 className=''>FLUXV1</h1>
      </Link>
        <div>
        <Link to='/Login'>
        <button className='logg'>Sign In</button>
        </Link>
        <Link to='/signup'>
        <button className='signn'>Sign Up</button>
        </Link>
        
      </div>
      
      
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
