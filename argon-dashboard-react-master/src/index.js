
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Login from "Login";
import Name from "components/Name";
import Reset from "components/ForgotPassword/Reset";
import Resetdemo from "components/Resetdemo"
import Register from "components/Name";
import Home from "components/Home";
import RegisterUser from "components/RegisterUser";
import Edit from './components/Edit';
import Details from './components/Details';
// import {Switch,Route} from "react-router-dom"
import ContextProvider from "./components/context/ContentProvider";



ReactDOM.render(
  <ContextProvider>
  <BrowserRouter>

    <Switch>

    {/* <Route exact path="/" component={Login} /> */}
    <Route exact path="/" component={Login} />
    <Route exact path="/registeruser" component={RegisterUser} />
   
    <Route exact path="/name" component={Name} />
    <Route exact path="/reset" component={Reset} />
    <Route exact path="/resetdemo" component={Resetdemo} />
    {/* <Route exact path="/edit" component={Edit} /> */}
    <Route exact path="/home" component={Home} />
    {/* <Route exact path="/details" component={Details} /> */}
    <Route exact path="/registeruser" component={RegisterUser} />
     {/* <Route exact path="/edit/:id" component={Edit} /> */}
    {/* <Route exact path="/edit" component={Edit} /> */}
      {/* <Route exact path="/view/:id" component={Details} />  */}

      <Route exact path="/admin/edit/:id" component={Edit} />
      <Route exact path="/admin/view/:id" component={Details} />
      
      {/* <Route exact path="/details" component={Details} /> */}


    {/* <Route exact path="/passres" component={PassRes} /> */}
    {/* <Route path="/passres/:id/:token" element={<PassRes />} /> */}
    
    {/* <Route exact path="/forgot" component={Forgot} /> */}

  
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      {/* <Redirect from="/" to="/admin/index" /> */}
    </Switch>
  </BrowserRouter>
   </ContextProvider>,
  document.getElementById("root")
);
