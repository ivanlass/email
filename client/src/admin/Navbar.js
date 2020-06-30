import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import AddUser from './AddUser'
import Home from './Home'
import Projects from './Projects'
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
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Kurcina</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link><Link to="/">Home</Link></Nav.Link>
      <Nav.Link><Link to="/addUser">Add user</Link></Nav.Link>
      <Nav.Link><Link to="/projects">Projects</Link></Nav.Link>
    </Nav>
  </Navbar>



        <Switch>
          <Route path="/addUser">
            <AddUser/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
        </Switch>
    </Router>
  
</>
  );
}

export default NavbarComponent;
