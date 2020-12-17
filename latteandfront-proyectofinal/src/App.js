import React from 'react';
// import data from 'utils/apiClient';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {HOME, CATEGORIES, LOGOUT, BOOKS} from './config/routes';

import Home from 'views/Home';
import Books from 'views/Books';
import Logout from 'views/Logout';
import Categories from 'views/Categories';

function App() {

  // const urlPOST = "https://reqres.in/api/users";
  // const urlGET = "https://reqres.in/api/users?page=2";

  // const user = {
  //   name: "Pedro",
  //   age: 23
  // };

  // async function handleClickPOST(urlPOST, user){
  //    const response = await data.post(urlPOST, user);
  //    return console.log(response);
  // }

  // async function handleClickGET(data) {
  //   const response = await data.get(urlGET);
  //   return console.log(response);
  // };

  // HELLO TRONCA
  // <button onClick={handleClickGET(data)}>GET</button>
  // <button onClick={handleClickPOST(urlPOST, user)}>POST</button>

  return (

    <Router>
      <Switch>
        <Route exact path={HOME}>
          <Home/>
        </Route>
        <Route path={BOOKS}>
          <Books/>
        </Route>
        <Route path={CATEGORIES}>
          <Categories/>
        </Route>
        <Route path={LOGOUT}>
          <Logout/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
