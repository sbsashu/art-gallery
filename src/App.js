import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './assets/css/page.css'
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Routes from './routing/Routes'
function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
              <Route component={Routes}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
