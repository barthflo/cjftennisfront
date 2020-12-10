import Footer from './components/footer/Footer';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar/Navbar.jsx';
import SectionTitle from './components/section-title/SectionTitle';
import BannerPhoto from './components/banner-photo/BannerPhoto';
import homeBannerImage from './components/banner-photo/images-banner/terrain_terre_battue.jpg';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <NavBar />
          <Switch>
          </Switch>
        </div>
      </Router>
      <BannerPhoto image={homeBannerImage} title="CJF Tennis" subtitle="Ici c'est Fleury !" />
      <SectionTitle title="Vie du club" color="white"/>
      <Footer />
    </div>
  );
}

export default App;
