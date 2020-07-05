import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../App.css'
import Home from './home/Home'
import UserSettings from './userSettings/UserSettings'
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
            <UserSettings />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </Router>

    </>
  );
}

export default NavbarComponent;
