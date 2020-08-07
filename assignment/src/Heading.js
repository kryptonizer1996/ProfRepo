import  React from "react";
import {Navbar} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";

const heading = (props) =>{
  return(
    <div>
      <Navbar bg="dark" variant="dark">
        <div style = {{marginLeft : "42%" }}>
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://img.icons8.com/plasticine/100/000000/react.png"    width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      React Assignment
    </Navbar.Brand>
    </div>
  </Navbar>
      </div>
  )
}

export default heading