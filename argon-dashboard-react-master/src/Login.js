// import React from 'react'
// import { useEffect,useState } from 'react'
// import axios from 'axios'
// // import { Link } from 'react-router-dom'
// import { Link,useNavigate} from "react-router-dom"



// // import '../../App.css'


// export default function Login() {

//     // const Navigate  = useNavigate();
//     const [username,setUsername]=useState('')
//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')
    


//     const handleUserName= (e)=>{
//         console.log(e.target.value)
//         setEmail(e.target.value)
//     }


//     const handleusername =(e)=>{

//         setUsername(e.target.value)
//     }

//     const handlePassword =(e)=>{

//         setPassword(e.target.value)
//     }

//     const handleSubmit = (e)=>{
//         e.preventDefault()
//         console.log("submitted form")
//         axios.post('' , 
//         {
//             username:username,
//             email:email,
//             password:password
//         })
//         .then((response)=>{
//             console.log(response.data );
             
//         })
//         .catch((err )=> {
//             console.log(err)
//             console.log(err.response)

//         })
//         // Navigate.push("/admin/index")
//     }
//     return (
//         <div className="text-center m-5-auto">
//             <h2>Sign in to us</h2>
//             <form onSubmit={handleSubmit}>

//             <p>
//                     <label>Username </label><br/>
//                     <input type="text"  value={username} onChange={handleusername} name="first_name"   required />
//                 </p>
//                 <p>
//                     <label>Username or email address</label><br/>
//                     <input type="text" name="first_name" value={email} onChange={handleUserName} required />
//                 </p>
//                 <p>
//                     <label>Password</label>
//                     <Link to="/forgot"><label className="right-label">Forget password?</label></Link>
//                     <br/>
//                     <input type="password" value={password} onChange={handlePassword} name="password" required />
//                 </p>
//                 <p>
//                     <button id="sub_btn" type="submit">Login</button>
//                 </p>

//                 <Link to="/admin/index">Testing..</Link>
//             </form>
//             <footer>
//                 <p>First time? <Link to="/sign">Create an account</Link>.</p>
//                 {/* <p><Link to="/">Back to Homepage</Link>.</p> */}
//             </footer>
//         </div>
//     )

// }






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
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

import routes from "routes.js";

const Auth = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.body.classList.add("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <AuthNavbar />
        <div className="header bg-gradient-info py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-light">
                  unt in
                    your project for free.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        {/* Page content */}
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Switch>
              {getRoutes(routes)}
              <Redirect from="*" to="/auth/login" />
            </Switch>
          </Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
};

export default Auth;
