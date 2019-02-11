import React from 'react'
import {Route} from 'react-router-dom'
import Trip from '../components/Trip'
import Place from '../components/Place'


const ReactRouter = () => {
    return (
        <React.Fragment>
            <Header/>
            <Route exact path="/2018-2019/dcs/dev_278" component={ }/> {/* home page */}

            <Route path="/2018-2019/dcs/dev_278" component={ }/> {/* register/ login */}

            <Route path="/2018-2019/dcs/dev_278" component={ }/> {/* get all trips */}
            <Route path="/2018-2019/dcs/dev_278" component={ }/> {/* get trip by id */}
            <Route path="/2018-2019/dcs/dev_278" component={ }/> {/* create new trip */}
            <Route path="/2018-2019/dcs/dev_278" component={ }/> {/* delete trip by id */}

            <Route path="/2018-2019/dcs/dev_278" component={ }/> {/* get all places in the system */}            
            <Route path="/2018-2019/dcs/dev_278" component={ }/> {/* get all places on trip */}
            <Route path="/2018-2019/dcs/dev_278" component={ }/> {/* get place by trip type */}
            <Route path="/2018-2019/dcs/dev_278" component={ }/> {/* get place document by google api ??? */}
            <Route path="/2018-2019/dcs/dev_278" component={ }/> {/* add new place */}
            <Route path="/2018-2019/dcs/dev_278" component={ }/> {/* delete place */}


        </React.Fragment>
    )
}

export default ReactRouter