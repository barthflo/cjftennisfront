import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Teaching_Team.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {BACK_URL} from '../../../http';


const Teaching_Team = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const fetchTeachers = () => {
            axios
                .get(`${BACK_URL}/teaching/team`)
                .then(res => setTeachers(res.data))
        }
        fetchTeachers();
    }, [])

    return (

        <>
{teachers
.filter((teacher) => teacher.picture_url === 'DESBROSSES_Gullaume.jpg')                         
.map((teacher) => <div class="card-group">
<div className="card">
  <img src={teacher.picture_url} className="card-img-top" alt={teacher.firsname} />
  <div className="card-body">
    <h5 className="card-title">titre</h5>
    <p className="card-text">commentaire</p>
  </div>
</div>
<div className="card">
  <img src={teacher.picture_url} className="card-img-top" alt={teacher.firsname}/>
  <div className="card-body">
    <h5 className="card-title">titre</h5>
    <p className="card-text">commentaire</p>
  </div>
</div>
<div className="card">
  <img src={teacher.picture_url} className="card-img-top" alt={teacher.firsname}/>
  <div className="card-body">
    <h5 className="card-title">titre</h5>
    <p className="card-text">commentaire</p>
  </div>
</div>
</div>
)}
        </>
    )
}


export default Teaching_Team;

