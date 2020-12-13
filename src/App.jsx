import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar/Navbar.jsx'



function App() {
  return (
    <div className="App">
    <Router>
        <NavBar />
        <Switch>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
