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

  useEffect(() => {
    var direction = localStorage.getItem("direction");
    setDirection(direction || 'ltr')
  }, []);

  const [direction, setDirection] = useState('ltr');

  const [store, dispatch] = useReducer(
    PostReducer.PostReducer,
    PostReducer.initialState
  );

  const handleDirection = () => {
    let newDirection = direction == 'ltr' ? 'rtl' : 'ltr'
    localStorage.setItem("direction", newDirection);
    setDirection(newDirection)
  }

  return (
    <Context.Provider
      value={{
        store: store,
        dispatch: dispatch
      }}
    >
      {store.spinnerHandle && <FullPageSpinner />}
      <Router history={history}>

        <div className='app' dir={direction}>
          <Header directionHandle={handleDirection} />
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
