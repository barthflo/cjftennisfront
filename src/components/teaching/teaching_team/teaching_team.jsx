import React from 'react';
import './Teaching_Team.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FETCH } from '../Fetch';

 const Teaching_Team = () => {
     const [teamLists, setTeamLists] = useState([]);

     useEffect(() => {
         const fetchTeamLists = () => {
             axios
             .get(`${FETCH}/teaching/team`)
             .then(res => setTeamLists(res.data))
         }
         fetchTeamLists();
     }, [])
    return (
        
  <div>
      <>        
            <h2>L'éqipe de Formateur</h2>
            {teamLists.map((teamList) => (
              
                <div key={teamList.id}>
                  
                    <ul>
                        <li>{teamList.firstname}</li>
                        <li>{teamList.lastname}</li>
                        <li>{teamList.descriptor}</li>
                    </ul>
                    
                </div>
                
                
            ))}
            </>
            <div>

            </div>
        </div>
    )
 }
    

export default Teaching_Team;

