import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Patinage from './Patinage';
import VideoPlayer from './VideoPlayer';
import Lancers from './Lancers';
import Maniement from './Maniement';
import Strategies from './Strategies';
import HorsGlace from './HorsGlace';
import Reservation from './Reservation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/patinage">
              <Patinage />
            </Route>
            <Route path="/lancers">
              <Lancers />
            </Route>
            <Route path="/maniement">
              <Maniement />
            </Route>
            <Route path="/strategies">
              <Strategies />
            </Route>
            <Route path="/horsglace">
              <HorsGlace />
            </Route>
            <Route path="/reserver">
              <Reservation />
            </Route>
            <Route path="/video/:id">
              <VideoPlayer />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
