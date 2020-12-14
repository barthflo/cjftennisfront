import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import ProtectedRoute from './components/protected-route/ProtectedRoute';
import PublicRoute from './components/public-route/PublicRoute';
import Home from './components/pages/home/Home';
import Dashboard from './components/panel-admin/dashboard/Dashboard';
import LoginPage from './components/pages/login.page/LoginPage';

export const DOMAIN_URL = "http://localhost:3000";
export const BACK_URL = "http://localhost:8000/api";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <PublicRoute exact path='/' component={Home} />
            <PublicRoute path='/admin/login' component={LoginPage} />
            <ProtectedRoute path='/admin' component={Dashboard}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
