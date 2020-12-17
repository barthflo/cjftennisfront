import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {FETCH} from './../../Fetch';
import "./PresidentWord.css";
import SectionTitle from "../section-title/SectionTitle";



export default function PresidentWord() {
   
   const [presidetWord, setPresidentWord] = useState([]);
    useEffect(() => {
        const fetchPresidentWord = () => {
           axios
           .get(`${FETCH}/club/president-word`)
           .then(res => setPresidentWord(res.data))
        }
        fetchPresidentWord()   
     }, []);

   

    return (
        <div  className="presidetWord-container">
            <SectionTitle className="section-title" title = "Le mot de la présidente" />       
            {presidetWord.map((president) => (

                <div key = {president.id} className="president">
                        <img className="president_image" src= "http://localhost:3000/upload/photoPresident.jpg" alt={president.lastname}/>
                        
                        <div className="president-word"> 
                            <h2 className="president-name">{president.firstname}{" "}{president.lastname} <br/> Présidente de la CJF Tennis</h2>
                    
                            <p className="description"> "{president.description}." </p>
                        </div>
               </div>
            ))}        
        </div>
    );
}
