import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BACK_URL, DOMAIN_URL } from '../../../http';
import './Assistant_Teaching_Team.css'


const Assistant_Teaching_Team = () => {
  const [assistantTeachers, setAssistantTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = () => {
      axios
        .get(`${BACK_URL}/teaching/assistant_teaching_team`)
        .then(res => setAssistantTeachers(res.data))
    }
    fetchTeachers();
  }, [])

  return (
    <div className="card-group p-3 align-items-around justify-content-around justify-content-center team-card">
      {assistantTeachers.map((assistantTeacher) =>
        <div className="card d-flex flex-column align-items-center justify-content-center shadow p-5 mb-5 bg-white col-sm-3 card-teacher">
          <div className="card-header">
            <img src={`${DOMAIN_URL}/upload/${assistantTeacher.picture_url}`} className="card-img-top picture-teacher-team rounded-circle border border border-3" alt={assistantTeacher.firstname} />
          </div>
          <div className="card-body align-items-center justify-content-center">
            <h4 className="card-title name-text p-3 text-center">{assistantTeacher.firstname} {" "} {assistantTeacher.lastname}</h4>
            <p className="card-text font-weight-bold text-speciality text-center">{assistantTeacher.speciality}</p>
            <p className="card-text font-italic text-justify text-center font-weight-light">"{assistantTeacher.description}"</p>
          </div>
        </div>
      )}
    </div>

  )
}


export default Assistant_Teaching_Team;