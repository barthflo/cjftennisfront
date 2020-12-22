import {useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './SidebarAdmin.css';
import {useHistory} from 'react-router-dom';
import {FaHome} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi';
import {BiHandicap, BiNews} from 'react-icons/bi';
import {IoMdPhotos} from 'react-icons/io';

const SidebarAdmin = (props) => {

    const history = useHistory();
    const[activePage, setActivePage] = useState(history.location.pathname)
    useEffect(() => {
        setActivePage(history.location.pathname);
    }, [history.location.pathname])
    
    return (
        <aside className={"side-bar d-flex flex-row-reverse align-items-start px-2" + (props.open ? ' open' : '')}>
            <div className="side-icons d-flex flex-column align-items-center">
                <div className="menu-icon d-flex flex-column align-items-center my-2">
                    <GiHamburgerMenu size={"1.7em"} onClick={props.toggleOpen}/>
                    <small>Menu</small>
                </div>
                <div className={"d-flex flex-column align-items-center mb-2" + (activePage === "admin" || activePage.includes("admin/edit") ? ' active' : '')}>
                    <Link to='/admin'><FaHome size={"1.7em"} className={(activePage === "admin" || activePage.includes("admin/edit")) && 'active'} /></Link>
                    <small>Accueil</small>
                </div>
                <div className={"d-flex flex-column align-items-center mb-2" + (activePage.includes("paratennis") ? ' active' : '')}>
                    <Link to='/admin/paratennis'><BiHandicap size={"1.7em"} className={activePage.includes("paratennis") && 'active'}/></Link>
                    <small>ParaTennis</small>
                </div>
                <div className={"d-flex flex-column align-items-center mb-2" + (activePage.includes("gallery") ? ' active' : '')}>
                    <Link to='/admin/gallery'><IoMdPhotos size={"1.7em"} className={activePage.includes("gallery") && 'active'}/></Link>
                    <small>Gallerie</small>
                </div>
                <div className="d-flex flex-column align-items-center mb-2">
                    <Link to='/admin/paratennis'><BiNews size={"1.7em"} /></Link>
                    <small>Articles</small>
                </div>
            </div>
            {props.open && 
            <div>Submenu</div>
            }
        </aside>
    )
}

export default SidebarAdmin
