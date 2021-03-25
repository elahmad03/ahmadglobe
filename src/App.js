import Navbar from './Navbar';
import Project from './Project';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Footer from './Footer';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Project">
          <Project />
        </Route>
      </Switch>     
    </div>
    <Footer />
    </Router>
    
  );
}

export default App;
