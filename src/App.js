import { Home } from './Components/Home/Home';
import { About } from './Components/About/About';
import { Resume } from './Components/Resume/Resume';

import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DarkModeToggle from './Components/Toggles/DarkModeToggle';
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jared Anderson's Portfolio</title>
      </Helmet>
      <div>
        <nav className='navbar'>
          <span className='link-container'>
            <span>
              <Link to='/'>Home</Link>
            </span>
            <span>
              <Link to='/resume'>Resume</Link>
            </span>
            <span>
              <Link to='/about'>About</Link>
            </span>
          </span>
          <DarkModeToggle />
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className='main-container'>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/resume'>
              <Resume />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
