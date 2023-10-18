import React from 'react'
import './Navbar.css';


const Navbar = () => {
    
  return (
    <>

    <div className="navbarc">
    <h1 className="h1t"><span>FluxV1</span></h1>

    <form className="form" >
                    <input className="search" type="text" id="search"/>
                    <button className="submit-search" type="submit"><i className="fa fa-search"></i></button>
                </form>
      <button className='navbar_b1'>Sign In</button>

      <button className='navbar_b2'>Sign Up</button>
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

export default Navbar
