import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import BannerVideo from '../../components/banner-video/BannerVideo';
import AccessClub from '../../components/access-club/AccessClub';
import IconsInfo from '../../components/icons-info/IconsInfo';

function Home() {
  return (
    <div className="Home">
        <BannerVideo source="http://localhost:3000/upload/tennis_intro.mp4" title="CJF Tennis" subtitle="Fleury-les-Aubrais" />
        <IconsInfo />
        <AccessClub />     
    </div>
  );
}

export default Home;
        