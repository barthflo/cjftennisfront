import React from 'react';
import {useHistory} from 'react-router-dom';
import {DOMAIN_URL} from '../../../http';
import {TiUser} from 'react-icons/ti';
import {AiOutlinePoweroff} from 'react-icons/ai';
import {BiExit} from 'react-icons/bi';
import AuthService from '../../../services/auth.service';
import './NavbarAdmin.css';

const NavbarAdmin = () => {

    const history = useHistory();

    const logout = () =>{
        AuthService.logout();
        history.push('/admin/login');
    }

    return (
        <header className="NavbarAdmin">
            <nav className="navbar fixed-top d-flex justify-content-between align-items-center py-0 pr-0" style={{background:"var(--main-color"}}>
                <figure style={{width:"50px", height:"50px", margin:"0"}}>
                    <img 
                        className="w-100 h-100"
                        src={`${DOMAIN_URL}/assets/logo_cjf_tennis.jpg`} 
                        alt="logo"
                    />
                </figure>
                <div className="d-flex justify-content-around align-items-center m-0 nav-icons">
                    <div className="user-profile d-flex align-items-center pr-2 border-right">
                        <TiUser color={"white"} size={"1.6em"} className="mr-1"/>
                        <p className="mb-0 text-light mr-2">{AuthService.getUser().user.name}</p>
                    </div>
                    <div className="logout-icon d-flex justify-content-center">
                        <BiExit color={"white"} size={"1.5em"} className="logout mr-2" onClick={logout}/>
                    </div>
                </div>
            </nav>
        </header>
        
    )
}

export default NavbarAdmin
