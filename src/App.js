import React from 'react';
import Navbar from './components/layouts/Navbar';
import Display from './components/layouts/Display';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Lyrics from './components/tracks/Lyrics';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Display}></Route>
            <Route path="/lyrics/track/:id" component={Lyrics}></Route>
          </Switch>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
