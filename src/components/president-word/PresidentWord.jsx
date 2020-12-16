import React, {useState, useEffect} from 'react';
import {FETCH} from './../../Fetch';
import "./presidentWord.css";


export default function PresidentWord() {
   
   const [presidetWord, setPresidentWord] = useState([]);

   useEffect(() => {
       fetch((`${FETCH}/club/president-word`))
            .then((res) => {
                return res.json(); 
            })
            .then((data) => {
                setPresidentWord(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

   

    return (
        <div>

            <h1>Le mot de la présidente</h1>
            
            {presidetWord.map((president) => (

                <div key = {president.id}>
                    <div className="president">
                        <img className="president_image" src= "http://localhost:3000/upload/photoPresident.jpg" alt={president.lastname}/>
                        
                        <h2 className="president_name">{president.firstname}{" "}{president.lastname}</h2>
                    </div>
                    <p className="president_word"> {president.description}</p>
            
               </div>
            ))}

            
        </div>
    );
}
