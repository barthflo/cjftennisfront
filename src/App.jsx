import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import ProtectedRoute from './components/protected-route/ProtectedRoute';
import PublicRoute from './components/public-route/PublicRoute';
import Home from './components/pages/home/Home';
import Dashboard from './components/panel-admin/dashboard/Dashboard';

export const HOST_URL = "http://localhost:3000";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <PublicRoute exact path='/' component={Home} />
            <ProtectedRoute path='/admin' component={Dashboard}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
