import './IconsInfo.css';
import axios from 'axios';
import { AiOutlineIdcard } from 'react-icons/ai';
import { FiClock } from 'react-icons/fi';
import { CgTennis } from 'react-icons/cg';
import { useEffect, useState } from 'react';
import { BACK_URL } from '../../http';
 
export default function IconsInfo() {
    const [iconInfo, setIconInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
        .get(`${BACK_URL}/home/icons`)
        .then(res => {
            setIconInfo(res.data);
            setIsLoading(false);
        })
    })

    return(
        <section className="icons-info-container">
            <div className="icons-info-content">
                <div className="icon-info">
                    <FiClock className="icon" />
                    <p className="info">{isLoading? "Is loading" : iconInfo[0].body}</p>
                </div>
                <div className="icon-info">
                    <AiOutlineIdcard className="icon" />
                    <p className="info">{isLoading? "Is loading" : iconInfo[1].body}</p>
                </div>
                <div className="icon-info">
                    <CgTennis className="icon" />
                    <p className="info">{isLoading? "Is loading" : iconInfo[2].body}</p>
                </div>
            </div>
        </section>
    );
}