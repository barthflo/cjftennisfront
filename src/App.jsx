import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar/Navbar.jsx'



function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
