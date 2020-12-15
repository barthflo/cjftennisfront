import Home from "./pages/home/Home";
import './App.css';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/club/about-us/AboutUs"
import OurInfrastructures from "./pages/club/our-infrastructures/OurInfrastructures";
import Cotisation from "./pages/club/cotisation/Cotisation";
import Agenda from "./pages/club/agenda/Agenda";
import Gallery from "./pages/club/galerie/Gallery";
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
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>

          <Route path="/club/about-us" component={AboutUs} />
          <Route path="/club/our-infrastructures" component={OurInfrastructures}/>
          <Route path="/club/cotisation" component={Cotisation} />
          <Route path="/club/agenda" component={Agenda} />
          <Route path="/club/gallery" component={Gallery} />

          <Route path="/enseignement/team-teaching" component={TeamTeaching} />
          <Route path="/enseignement/lesson-for-children" component={LessonForChildren} />
          <Route path="/enseignement/lesson-for-adult" component={LessonForAdult} />

          <Route path="/competition/teams" component={Teams} />
          <Route path="/competition/tournaments" component={Tournaments} />
          <Route path="/competition/calendar" component={Calendar} />
          <Route path="/competition/results" component={Results} />

          <Route path="/paratennis/tennis-armchair" component={TennisArmchair} />
          <Route path="/paratennis/competition-club-league-and-stage" component={CompetitionClubLeagueAndStage} />
          <Route path="/paratennis/tournament" component={Tournament} />
          <Route path="/paratennis/deaf-and-hard-of-hearing-tennis" component={DeafAndHardOfHearingTennis} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
