import BannerVideo from '../../components/banner-video/BannerVideo';
import AccessClub from '../../components/access-club/AccessClub';
import IconsInfo from '../../components/icons-info/IconsInfo';
import Partner from '../../components/partner/Partner';

function Home() {
  return (
    <div className="Home">
        <BannerVideo />
        <IconsInfo />
        <AccessClub />
        <Partner />
    </div>
  );
}

export default Home;
        