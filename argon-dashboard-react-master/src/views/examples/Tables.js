
// import {
//   Badge,
//   Card,
//   CardHeader,
//   CardFooter,
//   DropdownMenu,
//   DropdownItem,
//   UncontrolledDropdown,
//   DropdownToggle,
//   Media,
//   Pagination,
//   PaginationItem,
//   PaginationLink,
//   Progress,
//   Table,
//   Container,
//   Row,
//   UncontrolledTooltip,
// } from "reactstrap";
// // core components
// import Header from "components/Headers/Header.js";

// const Tables = () => {
//   return (
//     <>
//       <Header />
//       {/* Page content */}
//       <Container className="mt--7" fluid>
//         {/* Table */}
//         <Row>
//           <div className="col">
//             <Card className="shadow">
//               <CardHeader className="border-0">
//                 <h3 className="mb-0">Card tables</h3>
//               </CardHeader>
//               <Table className="align-items-center table-flush" responsive>
//                 <thead className="thead-light">
//                   <tr>
//                     <th scope="col">ID</th>
//                     <th scope="col">Username</th>
//                     <th scope="col">Email</th>
//                     <th scope="col">Job</th>
//                     <th scope="col">Number</th>
//                     <th scope="col">Action</th>
//                     <th scope="col" />
//                   </tr>
//                 </thead>
//                 <tbody>
               
            
//                   <tr>
              
                  
//                     <td>
//                       <div className="avatar-group">
//                         <a
//                           className="avatar avatar-sm"
//                           href="#pablo"
//                           id="tooltip664029969"
//                           onClick={(e) => e.preventDefault()}
//                         >
                      
//                         </a>
                       
//                         <a
//                           className="avatar avatar-sm"
//                           href="#pablo"
//                           id="tooltip806693074"
//                           onClick={(e) => e.preventDefault()}
//                         >
                       
//                         </a>
                   
                      
                        
                        
                      
//                         <a
//                           className="avatar avatar-sm"
//                           href="#pablo"
//                           id="tooltip757459971"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <img
//                             alt="..."
//                             className="rounded-circle"
//                             src={
//                               require("../../assets/img/theme/team-4-800x800.jpg")
//                                 .default
//                             }
//                           />
//                         </a>
//                         <UncontrolledTooltip
//                           delay={0}
//                           target="tooltip757459971"
//                         >
//                           Jessica Doe
//                         </UncontrolledTooltip>
//                       </div>
//                     </td>
//                     <td>
//                       <div className="d-flex align-items-center">
//                         <span className="mr-2">100%</span>
//                         <div>
//                           <Progress
//                             max="100"
//                             value="100"
//                             barClassName="bg-success"
//                           />
//                         </div>
//                       </div>
//                     </td>
//                     <td className="text-right">
//                       {/* <UncontrolledDropdown>
//                         <DropdownToggle
//                           className="btn-icon-only text-light"
//                           href="#pablo"
//                           role="button"
//                           size="sm"
//                           color=""
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <i className="fas fa-ellipsis-v" />
//                         </DropdownToggle>
//                         <DropdownMenu className="dropdown-menu-arrow" right>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             Action
//                           </DropdownItem>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             Another action
//                           </DropdownItem>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             Something else here
//                           </DropdownItem>
//                         </DropdownMenu>
//                       </UncontrolledDropdown> */}
//                     </td>
//                   </tr>
//                 </tbody>
//               </Table>
//               <CardFooter className="py-4">
//                 <nav aria-label="...">
//                   <Pagination
//                     className="pagination justify-content-end mb-0"
//                     listClassName="justify-content-end mb-0"
//                   >
               
                  
                  
                   
//                     <PaginationItem>
//                       <PaginationLink
//                         href="#pablo"
//                         onClick={(e) => e.preventDefault()}
//                       >
//                         <i className="fas fa-angle-right" />
//                         <span className="sr-only">Next</span>
//                       </PaginationLink>
//                     </PaginationItem>
//                   </Pagination>
//                 </nav>
//               </CardFooter>
//             </Card>
//           </div>
//         </Row>
//         {/* Dark table */}
//         <Row className="mt-5">
//           <div className="col">
//             <Card className="bg-default shadow">
//               <CardHeader className="bg-transparent border-0">
//                 <h3 className="text-white mb-0">Card tables</h3>
//               </CardHeader>
//               <Table
//                 className="align-items-center table-dark table-flush"
//                 responsive
//               >
               
//                 <tbody>
//                   <tr>
                  
                   
//                     <td>
//                       <div className="avatar-group">
                    
                     
                          
                       
                      
//                         <a
//                           className="avatar avatar-sm"
//                           href="#pablo"
//                           id="tooltip528540780"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <img
//                             alt="..."
//                             className="rounded-circle"
//                             src={
//                               require("../../assets/img/theme/team-3-800x800.jpg")
//                                 .default
//                             }
//                           />
//                         </a>
//                         <UncontrolledTooltip
//                           delay={0}
//                           target="tooltip528540780"
//                         >
//                           Alexander Smith
//                         </UncontrolledTooltip>
//                         <a
//                           className="avatar avatar-sm"
//                           href="#pablo"
//                           id="tooltip237898869"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <img
//                             alt="..."
//                             className="rounded-circle"
//                             src={
//                               require("../../assets/img/theme/team-4-800x800.jpg")
//                                 .default
//                             }
//                           />
//                         </a>
//                         <UncontrolledTooltip
//                           delay={0}
//                           target="tooltip237898869"
//                         >
//                           Jessica Doe
//                         </UncontrolledTooltip>
//                       </div>
//                     </td>
              
                  
//                   </tr>
//                   <tr>
                  
                 
//                     <td>
//                       <div className="avatar-group">
                     
                       
                     
                        
                      
                     
                    
                       
//                       </div>
//                     </td>
                    
                  
//                   </tr>
//                   <tr>
                   
                 
//                     <td>
//                       <div className="avatar-group">
                  
                 
                       
                    
//                       </div>
//                     </td>
//                     <td>
//                       <div className="d-flex align-items-center">
//                         <span className="mr-2">72%</span>
//                         <div>
//                           <Progress
//                             max="100"
//                             value="72"
//                             barClassName="bg-danger"
//                           />
//                         </div>
//                       </div>
//                     </td>
                  
//                   </tr>
//                   <tr>
                  
//                     <td>
//                       <Badge color="" className="badge-dot">
//                         <i className="bg-info" />
//                         on schedule
//                       </Badge>
//                     </td>
//                     <td>
//                       <div className="avatar-group">
//                         <a
//                           className="avatar avatar-sm"
//                           href="#pablo"
//                           id="tooltip226319315"
//                           onClick={(e) => e.preventDefault()}
//                         >
                         
//                         </a>
                       
                  
                      
                        
//                         <a
//                           className="avatar avatar-sm"
//                           href="#pablo"
//                           id="tooltip638048561"
//                           onClick={(e) => e.preventDefault()}
//                         >
                         
//                         </a>
//                         <UncontrolledTooltip
//                           delay={0}
//                           target="tooltip638048561"
//                         >
//                           Jessica Doe
//                         </UncontrolledTooltip>
//                       </div>
//                     </td>
//                     <td>
//                       <div className="d-flex align-items-center">
//                         <span className="mr-2">90%</span>
//                         <div>
//                           <Progress
//                             max="100"
//                             value="90"
//                             barClassName="bg-info"
//                           />
//                         </div>
//                       </div>
//                     </td>
//                     <td className="text-right">
//                       <UncontrolledDropdown>
//                         <DropdownToggle
//                           className="btn-icon-only text-light"
//                           href="#pablo"
//                           role="button"
//                           size="sm"
//                           color=""
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <i className="fas fa-ellipsis-v" />
//                         </DropdownToggle>
//                         <DropdownMenu className="dropdown-menu-arrow" right>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             Action
//                           </DropdownItem>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             Another action
//                           </DropdownItem>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             Something else here
//                           </DropdownItem>
//                         </DropdownMenu>
//                       </UncontrolledDropdown>
//                     </td>
//                   </tr>
//                   <tr>
                  
//                     <td>
//                       <div className="avatar-group">
                       
//                         <a
//                           className="avatar avatar-sm"
//                           href="#pablo"
//                           id="tooltip497647175"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <img
//                             alt="..."
//                             className="rounded-circle"
//                             src={
//                               require("../../assets/img/theme/team-3-800x800.jpg")
//                                 .default
//                             }
//                           />
//                         </a>
//                         <UncontrolledTooltip
//                           delay={0}
//                           target="tooltip497647175"
//                         >
//                           Alexander Smith
//                         </UncontrolledTooltip>
                     
//                       </div>
//                     </td>
                   
//                     <td className="text-right">
                   
//                     </td>
//                   </tr>
//                 </tbody>
//               </Table>
//             </Card>
//           </div>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Tables;


import React, { useState, useEffect, useContext } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { adddata, deldata } from '../../components/context/ContentProvider'
import { updatedata } from '../../components/context/ContentProvider'




const Tables = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { udata, setUdata } = useContext(adddata);

    const {updata, setUPdata} = useContext(updatedata);

    const {dltdata, setDLTdata} = useContext(deldata);

    const getdata = async () => {

        const res = await fetch("https://crudappreactjs.herokuapp.com/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {

        const res2 = await fetch(`https://crudappreactjs.herokuapp.com/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            setDLTdata(deletedata)
            getdata();
        }

    }


    return (

        <>
            {
                udata ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{udata.name}</strong>  added succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }
            {
                updata ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{updata.name}</strong>  updated succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }

            {
                dltdata ?
                    <>
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>{dltdata.name}</strong>  deleted succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }


            <div className="mt-5">
                
                <div className="container">
                    {/* <div className="add_btn mt-2 mb-2">
                        <NavLink to="/registeruser" className="btn btn-primary">Add data</NavLink>
                    </div> */}

                    <table class="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">id</th>
                                <th scope="col">Username</th>
                                <th scope="col">email</th>
                                <th scope="col">Job</th>
                                <th scope="col">Number</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                getuserdata.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                
                                                <th scope="row">{id + 1}</th>
                                                <td>{element.name}</td>
                                                <td>{element.email}</td>
                                                <td>{element.work}</td>
                                                <td>{element.mobile}</td>
                                                <td className="d-flex justify-content-between">
                                                    {/* <NavLink to={`view/${element._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink> */}
                                                    <NavLink to={`view/${element._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
                                                    <NavLink to={`edit/${element._id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink>
                                                    <button className="btn btn-danger" onClick={() => deleteuser(element._id)}><DeleteOutlineIcon /></button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>


                </div>
                <div className="add_btn mt-2 mb-2">
                        <NavLink to="/registeruser" className="btn btn-primary">Add data</NavLink>
                    </div>
            </div>
        </>
    )
}

export default Tables
