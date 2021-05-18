import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home/Home';
import BeLevel from './components/pages/Services/BeLevel';
import Navbar1 from './components/Navbar1';
import AdLevel from './components/pages/Services/AdLevel';
import ProLevel from './components/pages/Services/ProLevel';

const App=() => {
  return (
    <Router>
      <Navbar1 />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/belevel' component={BeLevel} />
        <Route path='/adlevel' component={AdLevel} />
        <Route path='/prolevel' component={ProLevel} />
      </Switch>
    </Router>
  );
}

export default App;
