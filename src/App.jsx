import Footer from './components/footer/Footer';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar/Navbar.jsx';
import SectionTitle from './components/section-title/SectionTitle';

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
      <SectionTitle title="Vie du club" color="white"/>
      <Footer />
    </div>
  );
}

export default App;
