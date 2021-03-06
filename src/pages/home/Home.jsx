import BannerVideo from '../../components/banner-video/BannerVideo';
import AccessClub from '../../components/access-club/AccessClub';
import ArticlesClub from '../../components/articles/articles-club/ArticlesClub';
import ArticlesSport from '../../components/articles/articles-sport/ArticlesSport';
import ArticlesPress from '../../components/articles/articles-press/ArticlesPress';
import IconsInfo from '../../components/icons-info/IconsInfo';
import Partner from '../../components/partner/Partner';
import OurClub from '../../components/our-club/OurClub';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="Home">
        <BannerVideo />
        <IconsInfo />
        <OurClub />
        <ArticlesClub />
        <ArticlesSport />
        <ArticlesPress />
        <AccessClub />
        <Partner />
    </div>
  );
}

export default Home;
        