import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BACK_URL, DOMAIN_URL} from './../../http';
import "./PresidentWord.css";
import SectionTitle from "../section-title/SectionTitle";

export default function PresidentWord() {
   const [presidentWord, setPresidentWord] = useState([]); 
   
   useEffect(() => {
        const fetchPresidentWord = () => {
           axios
           .get(`${BACK_URL}/club/president-word`)
           .then(res => setPresidentWord(res.data[0]))
        }
        fetchPresidentWord()   
    }, []);

    return (
        <div  className="presidetWord-container">
            <SectionTitle className="section-title" title = "Le mot de la présidente" />       
                <div className="president">
                    <img className="president_image" src={`${DOMAIN_URL}/upload/${presidentWord.picture_url}`} alt={presidentWord.lastname}/>    
                    <div className="president-word"> 
                        <h2 className="president-name">{presidentWord.firstname}{" "}{presidentWord.lastname} <br/> Présidente du CJF Tennis</h2>
                        <p className="description"> <span className="president-title">{presidentWord.title}</span><br/><br/>"{presidentWord.description}" </p>
                    </div>
               </div>              
        </div>
    );
}
