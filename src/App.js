import React, { Suspense } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Header from './Component/Header/Header'
//import Photos from './features/Photo';
import NotFound from './Component/NotFound/NotFound'
import Loading from './Component/Loading/Loading'
import 'bootstrap/dist/css/bootstrap.min.css';

  function App(){
    const Photo = React.lazy(()=>import('./features/Photo'))
    return(
        <>
        <Suspense fallback={<Loading/>}>
          <Router>
            <Header />
            <Switch>
              <Redirect exact from="/" to="/photos" />
              <Redirect exact from="/PhotoApp/" to="/photos"/>
              <Route path="/photos" component={Photo} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </Suspense>
        </>
    )
  }

  export default App;