/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Login from "Login";
import Edit from "Edit";
import Name from "components/Name";
// import ForgotPassword from "components/ForgotPassword";
import Reset from "components/ForgotPassword/Reset";
// import PassRes from "components/PasswordReset/PassRes";
import Resetdemo from "components/Resetdemo"
import Register from "components/Name";
// import Forgot from "components/Forgot";



ReactDOM.render(
  <BrowserRouter>

    <Switch>

    <Route exact path="/" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/edit" component={Edit} />
    <Route exact path="/name" component={Name} />
    <Route exact path="/reset" component={Reset} />
    <Route exact path="/resetdemo" component={Resetdemo} />
    {/* <Route exact path="/passres" component={PassRes} /> */}
    {/* <Route path="/passres/:id/:token" element={<PassRes />} /> */}
    
    {/* <Route exact path="/forgot" component={Forgot} /> */}

  
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      {/* <Redirect from="/" to="/admin/index" /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
