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

// reactstrap components
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory,useNavigate } from 'react-router-dom';
import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const Login = () => {





   // const Navigate  = useNavigate();
  //  const [username,setUsername]=useState('')
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
   

  // console.log({username, email,password});   
  console.log({email,password});   
  const history = useHistory();




//   const handleusername =(e)=>{

//     setUsername(e.target.value)
// }


  const handleEmail= (e)=>{
    console.log(e.target.value)
    setEmail(e.target.value)
}




const handlePassword =(e)=>{

    setPassword(e.target.value)
}

const handleSubmit = (e)=>{
  // console.log({username,email,password});
  console.log({email,password});
    e.preventDefault()
    console.log("submitted form")
    axios.post('localhost:8080/api/login' , {
        // username:username,
        email:email,
        password:password
    })
    .then((response)=>{
        console.log(response.data );
        alert("success")
         
    })
    .catch((err )=> {
        console.log(err)
        console.log(err.response)
        alert("service error ")

    })
    // Navigate.push("Home/")
}
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/github.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div>
            <Form role="form" onSubmit={handleSubmit}>




{/* username  */}
            {/* <FormGroup className="mb-3" >
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <i className="ni ni-hat-3" />
                     
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                   value={username}
                    onChange={handleusername}
                    placeholder="Username"
                    type="text"
                    autoComplete="new-username"
                  />
                </InputGroup>
              </FormGroup> */}

{/* email */}
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                  value={email} 
                  onChange={handleEmail}
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>



             {/* password */}
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                  value={password} 
                  onChange={handlePassword}
                    placeholder="Password"
                    type="password"
                  // autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
              


                <button className="my-4" color="primary"
                onClick={handleSubmit}
                 type="button" >
                  Sign in
                </button>


              </div>
              <Link to="/auth/register" >Create new account</Link>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>
              <Link to="/reset" >Forgot Password</Link>
              </small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              {/* <small>Create new account</small> */}

              {/* <Link to="/name" >Create new account</Link> */}


              
              
            </a>
            <div><Link to="/resetdemo" >pass reset</Link></div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
