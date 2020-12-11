import React, { Fragment } from 'react'
import BannerVideo from '../../banner-video/BannerVideo';
import SectionTitle from '../../section-title/SectionTitle';
import {HOST_URL} from '../../../App';


const Home = () => {
    return (
       <main>
            <BannerVideo source={`${HOST_URL}/upload/tennis_intro.mp4`} title="CJF Tennis" subtitle="Ici c'est Fleury" />
            <SectionTitle title="Vie du club" color="white"/>
       </main>
    )
}

export default Home;
