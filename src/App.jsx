import NavBar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import BannerVideo from './components/banner-video/BannerVideo';
import AccessClub from './components/access-club/AccessClub';

function App() {
  return (
    <div className="App">

      <Router>
          <Switch></Switch>
     
      <NavBar />
      <BannerVideo source="http://localhost:3000/upload/tennis_intro.mp4" title="CJF Tennis" subtitle="Ici c'est Fleury" />
      <AccessClub />
      <Footer />
      </Router>

    </div>
  );
}

export default App;
