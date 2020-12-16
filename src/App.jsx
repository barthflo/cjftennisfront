import Footer from './components/footer/Footer';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import BannerVideo from './components/banner-video/BannerVideo';
import PresidentWord from './components/president-word/PresidentWord';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch></Switch>
      </Router>

      {/* <BannerVideo source="http://localhost:3000/upload/tennis_intro.mp4" title="CJF Tennis" subtitle="Ici c'est Fleury" /> */}

      <PresidentWord />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
