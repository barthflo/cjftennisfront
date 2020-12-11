import React, { Fragment } from 'react'
import BannerPhoto from '../../banner-photo/BannerPhoto';
import homeBannerImage from '../../../components/banner-photo/images-banner/terrain_terre_battue.jpg';
import SectionTitle from '../../section-title/SectionTitle';
import {Link} from 'react-router-dom';


const Home = () => {
    return (
       <Fragment>
            <BannerPhoto image={homeBannerImage} title={"Bienvenue au CJF"} subtitle={"Ici c'est Fleury!"}/>
            <SectionTitle title="Vie du club" color="white"/>
            <Link to='/admin' target="_blank">Admin Panel </Link>
       </Fragment>
    )
}

export default Home;
