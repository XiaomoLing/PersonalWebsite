import logo from './logo.svg';
import React from 'react';
import './App.css';
import { DatePicker } from 'antd';
import connect from 'redux-connect-decorator'
import AppLayout from './pages/layout';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './pages/about'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path=''>
          <About/>
        </Route>
        <Route exact path='/applayout'>
          <AppLayout/>
        </Route>

        {/* <Route><AppLayout/></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
