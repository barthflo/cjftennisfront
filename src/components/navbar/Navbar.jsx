import './Navbar.css';
import { Switch, Route, Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { BsFillLockFill } from 'react-icons/bs';
import { ImCross } from 'react-icons/im'
// import {Logo} from '../../../public/upload/logo_cjf_tennis.jpg'


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
const changeOpenClubResp=() => setOpenClubResp(!openClubResp)
const [openEnsResp, setOpenEnsResp]=useState(false)
const changeOpenEnsResp=() => setOpenEnsResp(!openEnsResp)
const [openCompResp, setOpenCompResp]=useState(false)
const changeOpenCompResp=() => setOpenCompResp(!openCompResp)
const [openParaResp, setOpenParaResp]=useState(false)
const changeOpenParaResp=() => setOpenParaResp(!openParaResp)




    return (
            <div className="Navbar" id="Navbar">
                <div className="NavbarContainer">
                    <div className="NavbarLeftbBox">
                        <Link to="/"><img className="Logo" src="http://localhost:3000/upload/logo_cjf_tennis.jpg"/></Link>
                    </div>
                    <div className="NavbarRightBox">
                       
                            <Link className="NavbarHome" to="/" >Accueil</Link>
                            <div className="NavbarClub"  onMouseEnter={changeOpenClub} onMouseLeave={changeCloseClub}>Club
                                <div className={openClub? "club-open" : "club-close"}>
                                    <Link className="NavLinks" to="/club/about-us">Qui sommes-nous ?</Link>
                                    <hr/>
                                    <Link className="NavLinks" to ="/club/our-infrastructures">Nos infrastructures</Link>
                                    <hr/>
                                    <Link className="NavLinks" to ="/club/cotisation">Cotisations</Link>
                                    <hr/>
                                    <Link className="NavLinks" to="/club/agenda">Agenda</Link>
                                    <hr/>
                                    <Link className="NavLinks" to="/club/gallery">Galerie</Link>
                                </div>
                            </div>
                            <div className="NavbarLearn"  onMouseEnter={changeOpenEns} onMouseLeave={changeCloseEns}  >Enseignement
                            <div className={openEns? "ens-open" : "ens-close"}>
                                    <Link className="NavLinks" to="/enseignement/team-teaching">Equipe enseignante</Link>
                                    <hr/>
                                    <Link className="NavLinks" to="/enseignement/lesson-for-children">Cours pour enfants</Link>
                                    <hr/>
                                    <Link className="NavLinks" to="/enseignement/lesson-for-adult">Cours pour adultes</Link>
                                </div>
                            </div>
                            <div className="NavbarCompet" onMouseEnter={changeOpenComp} onMouseLeave={changeCloseComp}  >Compétition
                            <div className={openComp? "comp-open" : "comp-close"}>
                                    <Link className="NavLinks" to="/competition/teams">Equipes</Link>
                                    <hr/>
                                    <Link className="NavLinks" to="/competition/tournaments">Tournois</Link>
                                    <hr/>
                                    <Link className="NavLinks" to="/competition/calendar">Calendrier</Link>
                                    <hr/>
                                    <Link className="NavLinks" to="/competition/results">Résultats</Link>
                                </div>
                            </div>
                            <div className="NavbarPara" to="/paratennis"  onMouseEnter={changeOpenPara} onMouseLeave={changeClosePara} >Paratennis
                            <div className={openPara? "para-open" : "para-close"}>
                                    <Link className="NavLinks" to="/paratennis/tennis-armchair">Tennis Fauteuil</Link>
                                    <hr/>
                                    <Link className="NavLinks" to="/paratennis/competition-club-league-and-stage">Competitions Club Ligue et Stage</Link>
                                    <hr/>
                                    <Link className="NavLinks" to="/paratennis/tournament">Tournois</Link>
                                    <hr/>
                                    <Link className="NavLinks" to="/paratennis/deaf-and-hard-of-hearing-tennis">Tennis sourd et mal entendant</Link>
                                </div>
                            </div>
                            <Link className="NavbarAdmin" to="/admin" ><BsFillLockFill className="LockIcon"/></Link>
                        </div>
                    </div>
                    <div className="NavbarResponsive">
                    <div className="LogoContainer">
                        <Link to="/"><img className="LogoResp" src="http://localhost:3000/upload/logo_cjf_tennis.jpg"/></Link>
                       
                    </div>      

                        <a className="NavbarMenu-Burger" id="#Burger" href="#" onClick={changeOpenMenu} >
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                     

                   
                    </div>
                    <div className={openMenu? "menu-open" : "menu-close"}>
                            <div className="CrossContainer"  onClick={changeOpenMenu} to="/"><ImCross className="Cross"/></div>
                            <Link className="HomeResponsive" to="/">Accueil</Link>
                            <div className="ClubResp" onClick={changeOpenClubResp} >Club
                                <div className={openClubResp? "RespLinksClubContainerOpen" : "RespLinksClubContainerClose"}>
                                    <Link className="RespLinksClub" to="/club/about-us">Qui sommes nous ?</Link>
                                    <Link className="RespLinksClub" to="/club/our-infrastructures">Nos infrastructures</Link>
                                    <Link className="RespLinksClub" to ="/club/cotisation">Cotisations</Link>
                                    <Link className="RespLinksClub" to="/club/agenda">Agenda</Link>
                                    <Link className="RespLinksClub" to="/club/gallery">Galerie</Link>
                                </div>
                            </div>
                            <div className="EnsResp" onClick={changeOpenEnsResp}>Enseignement
                                <div className={openEnsResp? "RespLinksEnsContainerOpen" : "RespLinksEnsContainerClose"}>
                                    <Link className="RespLinksEns" to="/enseignement/team-teaching">Equipe enseignante</Link>
                                    <Link className="RespLinksEns" to="/enseignement/lesson-for-children">Cours pour enfants</Link>
                                    <Link className="RespLinksEns" to="/enseignement/lesson-for-adult">Cours pour Adultes</Link>
                                </div>
                            </div>
                            <div className="CompResp" onClick={changeOpenCompResp}>Competitions
                                <div className={openCompResp? "RespLinksCompContainerOpen" : "RespLinksCompContainerClose"}>
                                    <Link className="RespLinksComp" to="/competition/teams">Equipes</Link>
                                    <Link className="RespLinksComp" to="/competition/tournaments">Tournois</Link>
                                    <Link className="RespLinksComp" to="/competition/calendar">Calendrier</Link>
                                    <Link className="RespLinksComp" to="/competition/results">Résultats</Link>
                                </div>
                            </div>
                            <div className="ParaResp" onClick={changeOpenParaResp}>ParaTennis
                                <div className={openParaResp? "RespLinksParaContainerOpen" : "RespLinksParaContainerClose"}>
                                    <Link className="RespLinksPara" to="/paratennis/tennis-armchair">Tennis Fauteuil</Link>
                                    <Link className="RespLinksPara" to="/paratennis/competition-club-league-and-stage">Compétitions Club Ligue et Stage</Link>
                                    <Link className="RespLinksPara" to="/paratennis/tournament">Tournois</Link>
                                    <Link className="RespLinksPara" to="/paratennis/deaf-and-hard-of-hearing-tennis">Tennis sourd et mal entendant</Link>
                                </div>
                            </div>
                            
                            <Link className="AdminResp">Administration</Link>
                            
                        </div>

                </div>
                
            )
        }
   
    
    
    export default Navbar;
    
