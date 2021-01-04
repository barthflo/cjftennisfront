import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import ProtectedRoute from './components/protected-route/ProtectedRoute';
import PublicRoute from './components/public-route/PublicRoute';
import Dashboard from './components/panel-admin/dashboard/Dashboard';
import LoginPage from './pages/login.page/LoginPage';
import Home from "./pages/home/Home";
import AboutUs from "./pages/club/about-us/AboutUs"
import OurInfrastructures from "./pages/club/our-infrastructures/OurInfrastructures";
import Cotisation from "./pages/club/cotisation/Cotisation";
import Agenda from "./pages/club/agenda/Agenda";
import Gallery from "./pages/club/galerie/Gallery";
import Articles from './pages/club/articles/Articles';
import ArticleDetailsClub from './pages/article-details/ArticleDetailsClub';
import TeamTeaching from "./pages/enseignement/team-teaching/TeamTeaching";
import LessonForChildren from "./pages/enseignement/lesson-for-children/LessonForChildren";
import LessonForAdult from "./pages/enseignement/lesson-for-adult/LessonForAdult";
import Teams from "./pages/competition/teams/Teams";
import Tournaments from "./pages/competition/tournaments/Tournaments";
import Calendar from "./pages/competition/calendar/Calendar";
import Results from "./pages/competition/results/Results";
import TennisArmchair from "./pages/paratennis/tennis-armchair/TennisArmchair";
import CompetitionClubLeagueAndStage from "./pages/paratennis/competition-club-league-and-stage/CompetitionClubLeagueAndStage";
import Tournament from "./pages/paratennis/tournament/Tournament";
import DeafAndHardOfHearingTennis from "./pages/paratennis/deaf-and-hard-of-hearing-tennis/DeafAndHardOfHearingTennis";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PublicRoute exact path="/" component={Home}/>
          <PublicRoute path="/club/about-us" component={AboutUs} />
          <PublicRoute path="/club/our-infrastructures" component={OurInfrastructures}/>
          <PublicRoute path="/club/cotisation" component={Cotisation} />
          <PublicRoute path="/club/agenda" component={Agenda} />
          <PublicRoute path="/club/gallery" component={Gallery} />
          <PublicRoute exact path="/club/articles" component={Articles} />
          <PublicRoute path="/club/articles/article_club/id=:id" component={ArticleDetailsClub} />
          <PublicRoute path="/enseignement/team-teaching" component={TeamTeaching} />
          <PublicRoute path="/enseignement/lesson-for-children" component={LessonForChildren} />
          <PublicRoute path="/enseignement/lesson-for-adult" component={LessonForAdult} />
          <PublicRoute path="/competition/teams" component={Teams} />
          <PublicRoute path="/competition/tournaments" component={Tournaments} />
          <PublicRoute path="/competition/calendar" component={Calendar} />
          <PublicRoute path="/competition/results" component={Results} />
          <PublicRoute path="/paratennis/tennis-armchair" component={TennisArmchair} />
          <PublicRoute path="/paratennis/competition-club-league-and-stage" component={CompetitionClubLeagueAndStage} />
          <PublicRoute path="/paratennis/tournament" component={Tournament} />
          <PublicRoute path="/paratennis/deaf-and-hard-of-hearing-tennis" component={DeafAndHardOfHearingTennis} />
          <PublicRoute path='/admin/login' component={LoginPage} />
          <ProtectedRoute path='/admin' component={Dashboard}/>
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
