import React from 'react';
import './App.css';
import { Nav } from './components/Nav';

import { APIContextProvider } from './context/GlobalContext';
import { Home } from './screens/Home';
import { News } from './screens/News';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <APIContextProvider >
        <div className="App">
          {/* <Nav /> */}
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/:title" component={News} />
          </main>
        </div>
      </APIContextProvider>
    </Router>
  );
}

export default App;
