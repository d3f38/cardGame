import React from 'react';
import { Switch, Route, withRouter, HashRouter } from 'react-router-dom';
import IndexPage from './pages/index/index';
import  Game   from '../src/components/Game/Game';
import { Provider } from 'react-redux';
import  reducers  from './redux-files/reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={IndexPage}/>
                        <Route exact path='/game' component={Game}/>
                    </Switch>
                </HashRouter>
            </Provider>
        );
    }
}