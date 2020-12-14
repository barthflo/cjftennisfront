import {useState } from 'react';
import {Link} from 'react-router-dom';
import './SidebarAdmin.css';
import {FaHome} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi';
import {BiHandicap, BiNews} from 'react-icons/bi';
import {IoMdPhotos} from 'react-icons/io';

const SidebarAdmin = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <aside className={"side-bar d-flex flex-column align-items-end px-2" + (isOpen ? ' open' : '')}>
            <div className="side-icons d-flex flex-column align-items-center">
                <div className="menu-icon d-flex flex-column align-items-center my-2">
                    <GiHamburgerMenu size={"1.7em"} onClick={toggleOpen}/>
                    <small>Menu</small>
                </div>
                <div className="d-flex flex-column align-items-center mb-2">
                    <Link to='/admin/home'><FaHome size={"1.7em"} /></Link>
                    <small>Accueil</small>
                </div>
                <div className="d-flex flex-column align-items-center mb-2">
                    <Link to='/admin/paratennis'><BiHandicap size={"1.7em"} /></Link>
                    <small>ParaTennis</small>
                </div>
                <div className="d-flex flex-column align-items-center mb-2">
                    <Link to='/admin/paratennis'><IoMdPhotos size={"1.7em"} /></Link>
                    <small>Gallerie</small>
                </div>
                <div className="d-flex flex-column align-items-center mb-2">
                    <Link to='/admin/paratennis'><BiNews size={"1.7em"} /></Link>
                    <small>Articles</small>
                </div>
            </div>
            
        </aside>
    )
}

export default SidebarAdmin
