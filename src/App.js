import React, { useEffect, useReducer, useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Home from './pages/home/Home';
import PostDetails from './pages/postDetails/PostDetails';
import FullPageSpinner from './components/reusableComponents/fullPageSpinner';
import EditPost from './pages/editPost/EditPost';

import * as PostReducer from "./store/reducers/postsReducer";
import Context from "./utils/context";
import history from "./utils/History";

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
      {store.spinnerHandle && <FullPageSpinner />}
      <Router history={history}>

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
              <Route
                path="/edit-post/:id"
                exact
                render={() => <EditPost />}
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
