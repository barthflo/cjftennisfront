import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {DOMAIN_URL} from '../../../http';
import {TiUser} from 'react-icons/ti';
import {BiExit} from 'react-icons/bi';
import {GoSettings} from 'react-icons/go';
import {HiOutlineUserAdd} from 'react-icons/hi';
import AuthService from '../../../services/auth.service';
import './NavbarAdmin.css';

const NavbarAdmin = () => {

    const history = useHistory();
    const [open, setOpen] = useState(false);

    const logout = () =>{
        AuthService.logout();
        history.push('/admin/login');
    }

    return (
        <header className="NavAdmin position-relative">
            <nav className="navbar fixed-top d-flex justify-content-between align-items-center py-0 pr-0 pl-2" style={{background:"var(--main-color"}}>
                <figure style={{width:"50px", height:"50px", margin:"0"}}>
                    <Link to ='/'>
                        <img 
                        className="w-100 h-100"
                        src={`${DOMAIN_URL}/upload/logo_cjf_tennis.jpg`} 
                        alt="logo"
                        />
                    </Link>
                </figure>
                <div className="d-flex justify-content-around align-items-center m-0 nav-icons">
                    <div onClick = {e => setOpen(!open)} className="user-profile d-flex align-items-center pr-2 border-right">
                        <TiUser color={"white"} size={"1.6em"} className="mr-1"/>
                        <p className="mb-0 text-light mr-2">{AuthService.getUser().name}</p>
                    </div>
                    <div className="logout-icon d-flex justify-content-center">
                        <BiExit color={"white"} size={"1.5em"} className="logout mr-2" onClick={logout}/>
                    </div>
                </div>
            </nav>
            <div className={"user-profile-menu position-fixed py-2 py-sm-1 justify-content-around d-flex flex-wrap flex-sm-nowrap" + (open ? " " : " user-profile-close")}>
                <div className="d-flex align-items-center justify-content-end w-100 px-3 mb-1 mb-sm-0">
                    <GoSettings size={"1.3em"} className="mr-2 user-menu-icons" />
                    <Link to={`/admin/id=${AuthService.getUser().id}`} onClick={e => setOpen(false)}><p className="m-0">Modifier les paramètres du compte</p></Link>
                </div>
                {AuthService.getUser().role === "superadmin" &&
                <div className="d-flex align-items-center justify-content-end w-100 px-3">
                    <HiOutlineUserAdd size={"1.3em"} className="mr-2 user-menu-icons" />
                    <Link to='/admin/user/new' onClick={e => setOpen(false)}><p className="m-0">Ajouter un nouvel utilisateur</p></Link>
                </div>
                }
            </div>
        </header>
        
    )
}

export default NavbarAdmin
