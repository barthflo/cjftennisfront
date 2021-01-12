import React, {Fragment, useState, useEffect, createRef} from 'react';
import {BACK_URL, DOMAIN_URL} from '../../http';
import Axios from 'axios';
import SectionTitle from '../section-title/SectionTitle';



const SportCalendar = (props) => {

    const [datas, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = () => {
            Axios.get(`${BACK_URL}/competitions/sport/calendar`)
                 .then(res => {
                     if(datas.length < res.data.length){
                        setDatas(res.data.filter(data => data.archived === 0));
                        setIsLoading(false);
                     }
                 });
        }
        fetchData();
    }, [datas]);

    return (
       <section style={{minHeight:"200px", backgroundColor:"white", display: "flex", alignItems:"center", justifyContent:"center"}}>
           {!isLoading && 
        <Fragment> 
            { datas.length === 0 ? 
                
                <p className="no-article">Calendrier indisponible.</p>
                
            : 
            <Fragment>
                <SectionTitle title={datas[0].title} color="white"/>
                <div className="container-image-calendar">
                        {datas.map((data, index) => {
                            return(
                                <div key={index} className="calendar-image">
                                    <img className="calendarComp" src={`${DOMAIN_URL}/upload/${data.picture_url}`}/>
                                </div> 
                            )
                        }
                                
                        )}
                </div>
          </Fragment>
        }
        </Fragment> }
       </section>
    )
}

export default SportCalendar;
