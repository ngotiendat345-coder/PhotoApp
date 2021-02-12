import React from 'react'
import Main from './Pages/Main'
import AddEditPage from './Pages/AddEditPage'

import { useRouteMatch, 
    BrowserRouter as Router,
    Switch,
    Route} from 'react-router-dom';
import NotFound from '../../Component/NotFound/NotFound';


function Photos(){
    const match = useRouteMatch();

    return(
        <Switch>
            <Route exact path={match.url} component={Main}/>
            <Route path={`${match.url}/add`} component={AddEditPage} />
            <Route path={`${match.url}/:id`} component={AddEditPage} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Photos;