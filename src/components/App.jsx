import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./Pages/Home"
import Protected from './Routes/Protected';
import Products from "./Pages/Products"
import Product from './Pages/Product';
import Login from './Pages/Login';
import Public from './Routes/Public'
import Register from './Pages/Register'
import Page404 from './Pages/Page404'
import Header from './Organisms/Header';

const App=()=>(
  <Router>
    <Header />
    <Switch>
      <Protected path="/" exact component={Home} />      
      <Protected path="/products" exact component={Products} />
      <Protected path="/product/:id" component={Product} />

      <Public path="/login" exact component={Login} />
      <Public path="/register" exact component={Register} />

      <Route component={Page404} />
    </Switch>
  </Router>
)

export default App;
