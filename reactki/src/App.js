import React from 'react';
import './App.css';
import Navibar from './components/Navbar'
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
        <Router>
            <Navibar />
            <Switch>
                <Route path = '/' exact />
            </Switch>
        </Router>
    </>
  );
}
   
/// ??? git hub


export default App;
 