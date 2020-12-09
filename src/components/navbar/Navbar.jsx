import React from 'react';
import './Navbar.css';
import { Switch, Route, Link } from 'react-router-dom';


class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }

    render() {

        return (
                <div className="NavbarContainer" id="Navbar">
                    <div className="NavbarLeftbBox">
                        <div className="NavbarLogo">

                        </div>
                    </div>
                    <div className="NavbarRightBox">
                        <ul className="navbarList">
                            <Link className="NavbarTitle" to="/" >Accueil</Link>
                            <Link className="NavbarTitle" to="/club" >Le Club</Link>
                            <Link className="NavbarTitle" to="/enseignement" >Enseignement</Link>
                        </ul>
                    </div>
                   
                </div>

            )
        }
    };
    
    
    
    export default Navbar;
    