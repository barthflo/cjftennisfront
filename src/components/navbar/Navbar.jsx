import './Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import {DOMAIN_URL} from '../../http';
import {useState, useEffect} from 'react';
import { BsFillLockFill } from 'react-icons/bs';
import { ImCross } from 'react-icons/im'
import { act } from 'react-dom/test-utils';


function Navbar () {

    const [openClub, setOpenClub]= useState(false) 
    const changeOpenClub=()=>setOpenClub(true)
    const changeCloseClub =() =>setOpenClub(false)

    const [openEns, setOpenEns]= useState(false) 
    const changeOpenEns=()=>setOpenEns(true)
    const changeCloseEns =() =>setOpenEns(false)

    const [openComp, setOpenComp]= useState(false) 
    const changeOpenComp=()=>setOpenComp(true)
    const changeCloseComp =() =>setOpenComp(false)

    const [openPara, setOpenPara]= useState(false) 
    const changeOpenPara=()=>setOpenPara(true)
    const changeClosePara =() =>setOpenPara(false)

    const [openMenu, setOpenMenu]= useState(false)
    const changeOpenMenu=() =>setOpenMenu(!openMenu)

    const [openClubResp, setOpenClubResp]=useState(false)
    const changeOpenClubResp=() => {
        setOpenClubResp(!openClubResp);
        setOpenEnsResp(false);
        setOpenCompResp(false);
        setOpenParaResp(false);
    }

    const [openEnsResp, setOpenEnsResp]=useState(false)
    const changeOpenEnsResp=() => {
        setOpenEnsResp(!openEnsResp);
        setOpenClubResp(false);
        setOpenCompResp(false);
        setOpenParaResp(false);
    }

    const [openCompResp, setOpenCompResp]=useState(false)
    const changeOpenCompResp=() => {
        setOpenCompResp(!openCompResp);
        setOpenClubResp(false);
        setOpenEnsResp(false);
        setOpenParaResp(false);
    }

    const [openParaResp, setOpenParaResp]=useState(false)
    const changeOpenParaResp=() => {
        setOpenParaResp(!openParaResp);
        setOpenClubResp(false);
        setOpenEnsResp(false);
        setOpenCompResp(false);
    }

    const [logo, setLogo]=useState(false);
    const changeLogo = () =>{
        if(window.scrollY>= 50) {
            setLogo(true)
        }else{
            setLogo(false)
        }
    }
    window.addEventListener('scroll', changeLogo);
    
    const history = useHistory()
    const[activePage, setActivePage] = useState(history.location.pathname)
    useEffect(() => {
        setActivePage(history.location.pathname);
    }, [history.location.pathname])

    return (
        <div className="Navbar" id="Navbar">
            <div className="NavbarContainer">
                <div className="NavbarLeftbBox">
                    <Link to="/"><img className={logo ?"Logo" : "Logo active"} src={`${DOMAIN_URL}/upload/logo_cjf_tennis.jpg`} alt="logo"/></Link>
                </div>
                <div className="NavbarRightBox">
                    <Link className={"NavbarHome" + (activePage === '/' ? ' Nav-item-active Nav-item-text-active' : '' )}to="/" >Accueil</Link>
                    <div className={"NavbarClub"+ (activePage.includes('club') ? ' Nav-item-active Nav-item-text-active' : '' )}  onMouseEnter={changeOpenClub} onMouseLeave={changeCloseClub}>Club
                        <div className={openClub? "club-open" : "club-close"}>
                            <Link className="NavLinks" to="/club/about-us" >Qui sommes-nous ?</Link>
                            <hr/>
                            <Link className="NavLinks" to ="/club/our-infrastructures" >Nos Infrastructures</Link>
                            <hr/>
                            <Link className="NavLinks" to ="/club/cotisation" >Cotisations</Link>
                            <hr/>
                            <Link className="NavLinks" to="/club/agenda" >Agenda</Link>
                            <hr/>
                            <Link className="NavLinks" to="/club/gallery" >Galerie</Link>
                            <hr/>
                            <Link className="NavLinks" to="/club/articles" >Articles</Link>
                        </div>
                    </div>
                    <div className={"NavbarLearn"+ (activePage.includes('enseignement') ? ' Nav-item-active Nav-item-text-active' : '' )}  onMouseEnter={changeOpenEns} onMouseLeave={changeCloseEns}>Enseignement
                        <div className={openEns? "ens-open" : "ens-close"}>
                            <Link className="NavLinks" to="/enseignement/team-teaching" >Équipe Enseignante</Link>
                            <hr/>
                            <Link className="NavLinks" to="/enseignement/lesson-for-children">Cours pour Enfants</Link>
                            <hr/>
                            <Link className="NavLinks" to="/enseignement/lesson-for-adult" >Cours pour Adultes</Link>
                        </div>
                    </div>
                    <div className={"NavbarCompet"+ (activePage.includes('competition') ? ' Nav-item-active Nav-item-text-active' : '' )}  onMouseEnter={changeOpenComp} onMouseLeave={changeCloseComp}  >Compétition
                        <div className={openComp? "comp-open" : "comp-close"}>
                            <Link className="NavLinks" to="/competition/teams" >Équipes</Link>
                            <hr/>
                            <Link className="NavLinks" to="/competition/tournaments" >Tournois</Link>
                            <hr/>
                            <Link className="NavLinks" to="/competition/calendar">Calendrier</Link>
                            <hr/>
                            <Link className="NavLinks" to="/competition/results" >Résultats</Link>
                        </div>
                    </div>
                    <div className={"NavbarPara" + (activePage.includes('paratennis') ? ' Nav-item-active Nav-item-text-active' : '' )}  to="/paratennis"  onMouseEnter={changeOpenPara} onMouseLeave={changeClosePara} >Paratennis
                        <div className={openPara? "para-open" : "para-close"}>
                            <Link className="NavLinks" to="/paratennis/tennis-armchair" >Tennis Fauteuil</Link>
                            <hr/>
                            <Link className="NavLinks" to="/paratennis/compet-league-and-stage" >Compétitions et Stages</Link>
                            <hr/>
                            <Link className="NavLinks" to="/paratennis/tournament" >Tournois</Link>
                            <hr/>
                            <Link className="NavLinks" to="/paratennis/deaf-and-hard-of-hearing-tennis">Sourd et Malentendant</Link>
                        </div>
                    </div>
                    <Link className="NavbarAdmin" to="/admin" target="_blank" ><BsFillLockFill className="LockIcon"/></Link>
                </div>
            </div>

            {/* MENU RESPONSIVE */}
            <div className="NavbarResponsive">
                <div className="LogoContainer">
                    <Link to="/"><img className="LogoResp" src={`${DOMAIN_URL}/upload/logo_cjf_tennis.jpg`} alt="logo"/></Link>
                </div>      
                <div className="NavbarMenu-Burger" id="#Burger" onClick={changeOpenMenu} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={openMenu? "menu-open" : "menu-close"}>
                <div className="CrossContainer"  onClick={changeOpenMenu} to="/"><ImCross className="Cross"/></div>
                <Link className="HomeResponsive" to="/" onClick={changeOpenMenu}>
                    {!activePage.charAt(1) ? 
                        (
                        <div className="resp-nav-name">
                            <div>
                                <div className="ball"></div>
                                <div className="shadow"></div>
                            </div>
                            Accueil
                        </div>
                        )
                        :
                        <div>Accueil</div>
                    }
                </Link>
                <div className="ClubResp" onClick={changeOpenClubResp} >
                    {activePage.includes('club') ? 
                        (
                        <div className="resp-nav-name">
                            <div>
                                <div className="ball"></div>
                                <div className="shadow"></div>
                            </div>
                            Club
                        </div>
                        )
                        :
                        <div>Club</div>
                    }
                    <div className={openClubResp? "RespLinksClubContainerOpen" : "RespLinksClubContainerClose"}>
                        <hr/>
                        <Link className="RespLinksClub" to="/club/about-us" onClick={changeOpenMenu}>Qui sommes-nous ?</Link>
                        <hr/>
                        <Link className="RespLinksClub" to="/club/our-infrastructures" onClick={changeOpenMenu}>Nos Infrastructures</Link>
                        <hr/>
                        <Link className="RespLinksClub" to ="/club/cotisation" onClick={changeOpenMenu}>Cotisations</Link>
                        <hr/>
                        <Link className="RespLinksClub" to="/club/agenda" onClick={changeOpenMenu}>Agenda</Link>
                        <hr/>
                        <Link className="RespLinksClub" to="/club/gallery" onClick={changeOpenMenu}>Galerie</Link>
                        <hr/>
                        <Link className="RespLinksClub" to="/club/articles" onClick={changeOpenMenu}>Articles</Link>
                        <hr/>
                    </div>
                </div>
                <div className="EnsResp" onClick={changeOpenEnsResp}>
                    {activePage.includes('teaching') ? 
                        (
                        <div className="resp-nav-name">
                            <div>
                                <div className="ball"></div>
                                <div className="shadow"></div>
                            </div>
                            Enseignement
                        </div>
                        )
                        :
                        <div>Enseignement</div>
                    }
                    <div className={openEnsResp? "RespLinksEnsContainerOpen" : "RespLinksEnsContainerClose"}>
                        <hr/>
                        <Link className="RespLinksEns" to="/enseignement/team-teaching" onClick={changeOpenMenu}>Équipe Enseignante</Link>
                        <hr/>
                        <Link className="RespLinksEns" to="/enseignement/lesson-for-children" onClick={changeOpenMenu}>Cours pour Enfants</Link>
                        <hr/>
                        <Link className="RespLinksEns" to="/enseignement/lesson-for-adult" onClick={changeOpenMenu}>Cours pour Adultes</Link>
                        <hr/>
                    </div>
                </div>
                <div className="CompResp" onClick={changeOpenCompResp}>
                    {activePage.includes('competition') ? 
                        (
                        <div className="resp-nav-name">
                            <div>
                                <div className="ball"></div>
                                <div className="shadow"></div>
                            </div>
                            Compétitions
                        </div>
                        )
                        :
                        <div>Compétitions</div>
                    }
                    <div className={openCompResp? "RespLinksCompContainerOpen" : "RespLinksCompContainerClose"}>
                        <hr/>
                        <Link className="RespLinksComp" to="/competition/teams" onClick={changeOpenMenu}>Équipes</Link>
                        <hr/>
                        <Link className="RespLinksComp" to="/competition/tournaments" onClick={changeOpenMenu}>Tournois</Link>
                        <hr/>
                        <Link className="RespLinksComp" to="/competition/calendar" onClick={changeOpenMenu}>Calendrier</Link>
                        <hr/>
                        <Link className="RespLinksComp" to="/competition/results" onClick={changeOpenMenu}>Résultats</Link>
                        <hr/>
                    </div>
                </div>
                <div className="ParaResp" onClick={changeOpenParaResp}>
                    {activePage.includes('paratennis') ? 
                        (
                        <div className="resp-nav-name">
                            <div>
                                <div className="ball"></div>
                                <div className="shadow"></div>
                            </div>
                            Paratennis
                        </div>
                        )
                        :
                        <div>Paratennis</div>
                    }
                    <div className={openParaResp? "RespLinksParaContainerOpen" : "RespLinksParaContainerClose"}>
                        <hr/>
                        <Link className="RespLinksPara" to="/paratennis/tennis-armchair" onClick={changeOpenMenu}>Tennis Fauteuil</Link>
                        <hr/>
                        <Link className="RespLinksPara" to="/paratennis/competition-club-league-and-stage" onClick={changeOpenMenu}>Compétitions et Stages</Link>
                        <hr/>
                        <Link className="RespLinksPara" to="/paratennis/tournament" onClick={changeOpenMenu}>Tournois</Link>
                        <hr/>
                        <Link className="RespLinksPara" to="/paratennis/deaf-and-hard-of-hearing-tennis" onClick={changeOpenMenu}>Sourd et Malentendant</Link>
                        <hr/>
                    </div>
                </div>
                <Link className="AdminResp" to='/admin' target='_blank' onClick={changeOpenMenu}>Administration</Link>
            </div>
        </div>
    )
}
   
export default Navbar;
    
