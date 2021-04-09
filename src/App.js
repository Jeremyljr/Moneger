import './App.css';
import Navbar from './containers/homePage/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeroSection from './containers/homePage/HeroSection';

// import { softShadow } from "drei"

// softShadow(); 

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
