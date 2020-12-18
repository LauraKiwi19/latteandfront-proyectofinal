import React from 'react';
// import data from 'utils/apiClient';
import {BrowserRouter, Switch} from "react-router-dom";

import PrivateRoute from 'router/PrivateRoute';
import PublicRoute from 'router/PublicRoute';

import {HOME, BOOKS} from 'config/routes';

import Home from 'views/Home';
import Books from 'views/Books';

import AuthcontextProvider from 'contexts/authContext';

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
  // <button onClick={handleClickGET}>GET</button>
  // <button onClick={handleClickPOST}>POST</button>

  return (
    <AuthcontextProvider>
      <BrowserRouter>
        <Switch>
          <PrivateRoute path={BOOKS} component={Books}/>
          <PublicRoute path={HOME} component={Home} exact/>
        </Switch>
      </BrowserRouter>
    </AuthcontextProvider>


  );
}

export default App;
