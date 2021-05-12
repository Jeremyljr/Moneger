import './App.css';
import Navbar from './containers/homePage/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './containers/login/Register';
import Homepage from './containers/homePage/Homepage';
import login from './containers/login/login';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component= {Homepage} />
          <Route path='/Moneger' exact component= {Homepage} />
          <Route path='/signup' component= {Register} />
          <Route path='/login' component= {login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
