import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import AddUser from './AddUser'
import '../App.css'
import Home from './Home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function NavbarComponent() {
  return (
<>
<Router>
  <Navbar className="navigacija" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Kurcina</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link><Link to="/">Home</Link></Nav.Link>
      <Nav.Link><Link to="/addUser">Add user</Link></Nav.Link>
    </Nav>
  </Navbar>



        <Switch>
          <Route path="/addUser">
            <AddUser/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>

        </Switch>
    </Router>
  
</>
  );
}

export default NavbarComponent;
