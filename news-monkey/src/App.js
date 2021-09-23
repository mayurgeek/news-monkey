import React from "react";
import { useState } from 'react'
import Navbar from "./Navbar";
import News from "./News";

import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const apikey = process.env.REACT_APP_NEWS_API

  const [progress, setprogress] = useState(0)
  const progresshandle = (a) => {
    setprogress(progress + a)
  }

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={4}
          transitionTime={200}
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Switch>
          <Route exact path="/"><News progresshandle={progresshandle} apikey={apikey} key="general" pageSize={9} country="in" category="general" /></Route>
          <Route exact path="/business"><News progresshandle={progresshandle} apikey={apikey} key="business" pageSize={9} country="in" category="business" /></Route>
          <Route exact path="/health"><News progresshandle={progresshandle} apikey={apikey} key="health" pageSize={9} country="in" category="health" /></Route>
          <Route exact path="/sports"><News progresshandle={progresshandle} apikey={apikey} key="sports" pageSize={9} country="in" category="sports" /></Route>
          <Route exact path="/technology"><News progresshandle={progresshandle} apikey={apikey} key="technology" pageSize={9} country="in" category="technology" /></Route>
          <Route exact path="/science"><News progresshandle={progresshandle} apikey={apikey} key="science" pageSize={9} country="in" category="science" /></Route>
          <Route exact path="/entertainment"><News progresshandle={progresshandle} apikey={apikey} key="entertainment" pageSize={9} country="in" category="entertainment" /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
