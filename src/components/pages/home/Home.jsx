import React, { Fragment } from 'react'
import BannerVideo from '../../banner-video/BannerVideo';
import SectionTitle from '../../section-title/SectionTitle';
import {Link} from 'react-router-dom';


const Home = () => {
    return (
       <main>
            <BannerVideo source="http://localhost:3000/upload/tennis_intro.mp4" title="CJF Tennis" subtitle="Ici c'est Fleury" />
            <SectionTitle title="Vie du club" color="white"/>
       </main>
    )
}

export default Home;
