import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="NavbarContainer d-flex justify-content-around align-items-center bg-light" id="Navbar">
            <div className="NavbarLeftbBox">
                <div className="NavbarLogo" style={{width:"75px", height:"75px"}}>
                    <img src="http://localhost:3000/upload/logo_cjf_tennis.jpg" alt="logo" className="w-100 h-100"/>
                </div>
            </div>
            <div className="NavbarRightBox col-8">
                <ul className="navbarList d-flex justify-content-between mb-0">
                    <Link className="NavbarTitle text-dark" to="/" >Accueil</Link>
                    <Link className="NavbarTitle text-dark" to="/club" >Le Club</Link>
                    <Link className="NavbarTitle text-dark" to="/enseignement" >Enseignement</Link>
                    <Link className="NavbarTitle text-dark" to="/enseignement" >Paratennis</Link>
                    <Link className="NavbarTitle text-dark" to="/admin" target="_blank">Admin</Link>
                </ul>
            </div>
        </div>
    )
};
    
    
    
export default Navbar;
    