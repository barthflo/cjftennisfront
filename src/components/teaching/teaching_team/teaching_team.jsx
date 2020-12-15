import React from 'react';
import './Teaching_team.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FETCH } from './../Fetch';

 const Teaching_team = () => {
     const [teamLists, setTeamLists] = ([]);

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
            <h2>L'équpe Enseignate</h2>
            {teamLists.map((teamList) => (
                <div key={teamList.id}>
                    {teamList.firstname} {teamList.lastname} 
                </div>
            ))}
        </div>
    )
}
export default Teaching_team;