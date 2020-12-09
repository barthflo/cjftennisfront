import Footer from './components/footer/Footer';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar/Navbar.jsx'



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
      <Footer />
    </div>
  );
}

export default App;
