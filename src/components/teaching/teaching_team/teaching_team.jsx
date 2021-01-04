import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Teaching_Team.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FETCH } from '../Fetch';
import Teacher from './Teacher'

 const Teaching_Team = () => {
     const [teachers, setTeachers] = useState([]);

     useEffect(() => {
         const fetchTeachers = () => {
             axios
             .get(`${FETCH}/teaching/team`)
             .then(res => setTeachers(res.data))
         }
         fetchTeachers();
     }, [])
    return (
        
  <div>
             
            <h2>L'éqipe de Formateur</h2>
            {teachers
                    .filter((teacher) => teacher.firsname.VALUES[0])
                    .map((teacher) => (
                       <div key={teacher.id}>
                           <Teacher teacher={teacher} />

                       </div> 
                    ) )}
            
            
            
        </div>
    )
 }
    

export default Teaching_Team;

