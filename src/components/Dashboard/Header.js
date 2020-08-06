import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { MenuContext } from "react-flexible-sliding-menu";

function Header() {
    const { toggleMenu } = useContext(MenuContext);
    return (

        <nav className="navbar navbar-expand-lg navbar-primary bg-light">
            <button className='btn ' onClick={toggleMenu}><i className="fas fa-bars"></i></button>

            <img src="/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />

            <h4 className='flex-grow-1 text-center d-none d-md-block text-dark'>Welcome Walmart Inc</h4>
            <Link to='/' className="nav-item nav-link text-dark" >Sign Out</Link>
        </nav>


    )
}

export default Header