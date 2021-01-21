import {useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './SidebarAdmin.css';
import {useHistory} from 'react-router-dom';
import {FaHome, FaRegFileArchive, FaAward} from 'react-icons/fa'
import {GiTennisRacket} from 'react-icons/gi';
import {BiHandicap, BiNews} from 'react-icons/bi';
import {IoMdPhotos} from 'react-icons/io';
import {BsCalendar} from 'react-icons/bs';
import {RiTeamFill} from 'react-icons/ri';

const SidebarAdmin = (props) => {

    const history = useHistory();
    const[activePage, setActivePage] = useState(history.location.pathname)
    useEffect(() => {
        setActivePage(history.location.pathname);
    }, [history.location.pathname])

    return (
        <aside 
            className={"side-bar d-flex flex-row-reverse align-items-start px-2" + (props.open ? ' open' : ' ')}
            style={{
                height:"calc(100vh - 50px)", 
                borderLeft:"1px solid var(--main-color)", 
                borderBottom:"1px solid var(--main-color)", 
                boxShadow:"1px 5px 5px black",
                minWidth:"78px",
                width:"78px",
                position:"fixed",
                background:"var(--light-color)",
                zIndex:"10"
            }}
        >
            <div className="side-icons d-flex flex-column align-items-center justify-content-around w-100 h-100">
                <div className={"d-flex flex-column align-items-center mt-3 mb-2" + (activePage === "/admin" || activePage.includes("admin/edit") ? ' active' : '')}>
                    <Link to='/admin'><FaHome size={"1.7em"} className={(activePage === "/admin" || activePage.includes("admin/edit")) && 'active'} /></Link>
                    <small>Accueil</small>
                </div>
                <div className={"d-flex flex-column align-items-center mb-2" + (activePage.includes("galleries") ? ' active' : '')}>
                    <Link to='/admin/galleries'><IoMdPhotos size={"1.7em"} className={activePage.includes("galleries") && 'active'}/></Link>
                    <small>Galeries</small>
                </div>
                <div className={"d-flex flex-column align-items-center mb-2" + (activePage.includes("articles") ? ' active' : '')}>
                    <Link to='/admin/articles'><BiNews size={"1.7em"} className={activePage.includes("articles") && 'active'}/></Link>
                    <small>Articles</small>
                </div>
                <div className={"d-flex flex-column align-items-center mb-2" + (activePage.includes("agendas") ? ' active' : '')}>
                    <Link to='/admin/agendas'><BsCalendar size={"1.5em"} className={activePage.includes("agendas") && 'active'} /></Link>
                    <small>Documents</small>
                </div>
                <div className={"d-flex flex-column align-items-center mb-2" + (activePage.includes("teams") ? ' active' : '')}>
                    <Link to='/admin/teams'><RiTeamFill size={"1.7em"} className={activePage.includes("teams") && 'active'} /></Link>
                    <small>Equipes</small>
                </div>
                <div className={"d-flex flex-column align-items-center mb-2" + (activePage.includes("teachings") ? ' active' : '')}>
                    <Link to='/admin/teachings'><GiTennisRacket size={"1.7em"} className={activePage.includes("teachings") && 'active'} /></Link>
                    <small>Cours</small>
                </div>
                <div className={"d-flex flex-column align-items-center mb-2" + (activePage.includes("competitions") ? ' active' : '')}>
                    <Link to='/admin/competitions'><FaAward size={"1.7em"} className={activePage.includes("competitions") && 'active'} /></Link>
                    <small>Competitions</small>
                </div>
                <div className={"d-flex flex-column align-items-center mb-2" + (activePage.includes("paratennis") ? ' active' : '')}>
                    <Link to='/admin/paratennis'><BiHandicap size={"1.7em"} className={activePage.includes("paratennis") && 'active'}/></Link>
                    <small>ParaTennis</small>
                </div>
                <div className={"d-flex flex-column align-items-center mb-2" + (activePage.includes("archives") ? ' active' : '')}>
                    <Link to='/admin/archives'><FaRegFileArchive size={"1.7em"} className={activePage.includes("archives") && 'active'} /></Link>
                    <small>Archives</small>
                </div>
            </div>
            {props.open && 
            <div>Submenu</div>
            }
        </aside>
    )
}

export default SidebarAdmin
