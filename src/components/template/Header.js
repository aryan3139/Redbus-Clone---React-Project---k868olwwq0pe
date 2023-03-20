import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { DataAppContext } from '../DataApp';

const Header = () => {
  const localContext = useContext(DataAppContext);
  const {appState , setAppState} = localContext;
  const {username, loginStatus} = appState;
  const navigate = useNavigate();

  const logoutFn = () => {
    //update context variable
    setAppState({
      ...appState,
      loginStatus: false,
      username: ''
    })
    navigate('/home');
  }

  return (
   
    <Row>
        <Col sm={3}>
      <div className="Headerimg"><img src="https://st.redbus.in/Images/INDOFFER/FESTIVE200/Hero01.png"/></div>
        </Col>
        <Col xs={3}>
          {/* Search bar */}
        </Col>
        <Col xs={6}>
          
        <Navbar variant="light">
          <Container>
            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
            
            <Nav className="me-auto">
              {
                loginStatus ? 
                <>
                  <Nav.Link onClick={logoutFn}>Logout</Nav.Link>
                  {loginStatus && <Nav.Link>Hi {username} !</Nav.Link>}
                </>
                : 
                <>
                  <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                  <Nav.Link><Link to="/register">Register</Link></Nav.Link>
                </>
              }
              
              

              
            </Nav>

          </Container>
        </Navbar>

        </Col>
        
    </Row>
   
  )
}

export default Header