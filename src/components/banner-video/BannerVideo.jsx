import './BannerVideo.css';
import axios from 'axios';
import { BACK_URL, DOMAIN_URL } from '../../http';
import { useEffect, useState } from 'react';

export default function BannerVideo(){
    const [videoIntro, setVideoIntro] = useState([]);

    useEffect(() => {
        axios
        .get(`${BACK_URL}/home/intro`)
        .then(res => setVideoIntro(res.data[0]))
    }, [])
    console.log(videoIntro);

    return(
        <section className="banner-video">
            <div className="content-video">
                <video className="video" src={`${DOMAIN_URL}/upload/${videoIntro.video_url}`} autoPlay muted loop />
            </div>
            <div className="content">
                <h1 className="main-title">{videoIntro.title}</h1>
                <p className="desc">{videoIntro.body}</p>
            </div>
        </section>
    );
}