import './App.css';
import {Navbar,Nav, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn"

function App() {
  return (
      <Router>
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/home">ГКонтакте</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link href="/home">Home</Nav.Link>
              </Nav>
          </Navbar.Collapse>
              <Button href="/signIn" variant="outline-primary">Sign in</Button>{' '}
              <Button href="/signUp" variant="outline-primary">Sign up</Button>{' '}
          </Navbar>
          <Switch>
              <Route path='/signIn'> <SignIn /> </Route>
              <Route path='/signUp'> <SignUp /> </Route>
              <Route path='/home'> <Home /> </Route>
          </Switch>
      </Router>
  );
}

export default App;
