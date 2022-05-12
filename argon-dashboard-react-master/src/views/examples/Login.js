
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
import {   Alert } from "react-bootstrap";  //these line for jest

const Login = () => {





  //  const Navigate  = useNavigate()

  //  const [username,setUsername]=useState('')
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')

// these two line for jest 
   const [error, setError] = useState("");
  const [showUser, setShowUser] = useState(false);
   

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

  // these are jest
  setShowUser(false);
    e.preventDefault();
    if (validateEmail(email)) {
      setShowUser(true);
      setError("");
      return;
    }
    
  // yaha tk jest


  console.log({email,password});
    e.preventDefault()
    // localStorage.setItem('user-info', JSON.stringify({
    //   'msg':"success"
    // }))
    console.log("submitted form")
    axios.post('localhost:8080/paste here /login' , {
        // username:username,
        email:email,
        password:password
    })
    .then((response)=>{
      // localStorage.setItem('user-info',"login successfull") uncomment this after get api
        console.log(response.data );
        alert("success")
         
    })
    .catch((err )=> {
      
        console.log(err)
        console.log(err.response)
        // alert("service error ") uncomment this after

    })
    history.push("/admin/index")

}
  return (
    <>




      {/* ye part jest */}
{showUser && (
        <Alert data-testid="user" variant="success">
          {email}
        </Alert>
      )}
        {error && (
        <Alert data-testid="error" variant="danger">
          {error}
        </Alert>
      )}


      {/* upr ki line jest */}


      
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



            


              <FormGroup className="mb-3">
              <lable>Email</lable>

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
                    autoComplete="off"
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
                    autoComplete="off"
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

                  <Button className="my-4" onClick={handleSubmit} color="primary"  type="button">
                    Sign In

                  </Button>
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


export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (regex.test(email)) {
    return true;
  }
  return false;
};

export default Login;
