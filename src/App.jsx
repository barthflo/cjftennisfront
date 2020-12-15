import Footer from './components/footer/Footer';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import BannerVideo from './components/banner-video/BannerVideo';
import IconsInfo from './components/icons-info/IconsInfo';
import AccessClub from './components/access-club/AccessClub';
import ArticleCard from './components/articles/article/ArticleCard';

const article_example = {
  image: "https://s1.lprs1.fr/images/2020/03/18/8283240_44043684-6952-11ea-b604-93f43f7ff50b-1.jpg",
  title: "Open de Tennis de Lacanau",
  desc: "De nombreux adeptes de la petite balle jaune viennent s’affronter au cœur de la pinède pour nous offrir un beau spectacle. Comme chaque année, le Lacanau Tennis Club organise son rituel tournoi d’été, ouvert à tous du 27 juillet au 12 août 2020. Venez nombreux vous inscrire dans l’une des catégories. Comme chaque année, de nombreux matches et du beau jeu en perspective, avec la présence de numérotés français. Mercredi 12 août : journée des finales et cocktail de clôture.",
  link: "https://www.lacanau.fr/evenement/tournoi-tennis-lacanau/"
}

function App() {
  return (
    <div className="App">
      <Router>
          <Switch></Switch>
      </Router>

      <BannerVideo source="http://localhost:3000/upload/tennis_intro.mp4" title="CJF Tennis" subtitle="Ici c'est Fleury" />
      <IconsInfo />
      <ArticleCard article={article_example} side="left" />
      <AccessClub />
      <Footer />
    </div>
  );
}

export default App;
