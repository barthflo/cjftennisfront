import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BACK_URL, DOMAIN_URL } from '../../../http';
import './Teaching_team.css'


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
    <div className="card-group p-4 m-2 align-items-around justify-content-around justify-content-center team-card">
      {teachers.map((teacher) =>
        <div className="card d-flex flex-column align-items-center justify-content-center shadow p-5 mb-5 bg-white col-sm-3 card-teacher">
          <div className="card-header">
            <img src={`${DOMAIN_URL}/upload/${teacher.picture_url}`} className="card-img-top picture-teacher-team rounded-circle border border-warning border border-3" alt={teacher.firstname} />
          </div>
          <div className="card-body align-items-center justify-content-center">
            <h4 className="card-title name-text p-3 text-center">{teacher.firstname} {" "} {teacher.lastname}</h4>
            <p className="card-text font-weight-bold text-speciality text-center">{teacher.speciality}</p>
            <p className="card-text font-italic text-justify text-center font-weight-light">"{teacher.description}"</p>
          </div>
        </div>
      )}
    </div>

  )
}


export default Teaching_Team;