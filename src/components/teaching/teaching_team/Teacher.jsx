import {useState} from 'react';

const Teacher = (props) => {
    const {teacher} = props;

    return (
        <div>
            
           
            <img src={teacher.picture_url} alt={teacher.firsname}/>
            
        </div>
    )
}

export default Teacher;
