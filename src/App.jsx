import Footer from './components/footer/Footer';
import './App.css';
import { Switch, Route, } from 'react-router-dom';
import BannerVideo from './components/banner-video/BannerVideo';
import IconsInfo from './components/icons-info/IconsInfo';
import AccessClub from './components/access-club/AccessClub';
import Teaching_Team from './components/teaching/teaching_team/Teaching_Team';
import Navbar from './components/navbar/Navbar'


function App() {
  return (
    <div className="App">
      <Route>
          <Switch></Switch>
      </Route>
      <Navbar/>
      <BannerVideo source="http://localhost:3000/upload/tennis_intro.mp4" title="CJF Tennis" subtitle="Ici c'est Fleury" />
      <IconsInfo/>
      <AccessClub/>
      <Teaching_Team/>
      <Footer/>
    </div>
  );
}

export default App;
