import Footer from './components/footer/Footer';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import BannerVideo from './components/banner-video/BannerVideo';
import IconsInfo from './components/icons-info/IconsInfo';
import AccessClub from './components/access-club/AccessClub';
import Teaching_team from './components/teaching/teaching_team/teaching_team';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch></Switch>
      </Router>

      <BannerVideo source="http://localhost:3000/upload/tennis_intro.mp4" title="CJF Tennis" subtitle="Ici c'est Fleury" />
      <IconsInfo />
      <Teaching_team/>
      <AccessClub />
      <Footer />
    </div>
  );
}

export default App;
