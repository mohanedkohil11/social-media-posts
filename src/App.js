import React, { useReducer } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Home from './pages/home/Home';
import PostDetails from './pages/postDetails.js/PostDetails';

import * as PostReducer from "./store/reducers/postsReducer";
import Context from "./utils/context";
import createBrowserHistory from "./utils/History";

import './styles/main.scss'

function App() {

  const [store, dispatch] = useReducer(
    PostReducer.PostReducer,
    PostReducer.initialState
  );

  return (
    <Context.Provider
      value={{
        store: store,
        dispatch: dispatch
      }}
    >

      <Router history={createBrowserHistory}>

        <div className='app'>
          <Header />
          <div className='appBody'>
            <Switch>
              <Route
                path="/"
                exact
                render={() => <Home />}
              />
              <Route
                path="/post/:id"
                exact
                render={() => <PostDetails />}
              />
            </Switch>
          </div>
          <Footer />
        </div>

      </Router>
    </Context.Provider>



  );
}

export default App;
