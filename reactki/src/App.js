import React from 'react';
import Navibar from './components/Navbar'
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';


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
 