import React, { Component } from "react";

import { Button,Nav,Navbar } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";

class BtnGroup extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#48494F", width: "295px" }}>
        {/* <div className="inner-link">
          <h4>Important Links</h4>
          <ul>
            <li>
              <a
                className="alink"
                style={{ color: "white" }}
                href={"http://www.transport.gov.lk"}
              >
                Ministry of Transport
              </a>
            </li>
            <li>
              <a
                className="alink"
                style={{ color: "white" }}
                href={"http://www.gic.gov.lk"}
              >
                GIC
              </a>
            </li>
            <li>
              <a
                className="alink"
                style={{ color: "white" }}
                href={"http://www.srilanka.travel"}
              >
                Tourist Board
              </a>
            </li>
            <li>
              <a
                className="alink"
                style={{ color: "white" }}
                href={"http://www.srilankan.lk"}
              >
                SL Airlines
              </a>
            </li>
            <li>
              <a
                className="alink"
                style={{ color: "white" }}
                href={"http://www.srilanka.lk"}
              >
                Lanka Gate
              </a>
            </li>
          </ul>
        </div> */}
        {/* <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
        </Nav> */}
        <>
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand >
            Important Links
            </Navbar.Brand>
          </Navbar>
          <Navbar bg="light">
            <Navbar.Brand href="http://www.moe.gov.lk/">Ministry of Education</Navbar.Brand>
          </Navbar>
        
          <Navbar bg="info">
            <Navbar.Brand href="http://www.transport.gov.lk">Ministry of Transport</Navbar.Brand>
          </Navbar>
        
          <Navbar bg="danger">
            <Navbar.Brand href="http://www.srilanka.travel">
            Tourist Board
            </Navbar.Brand>
          </Navbar>
          
          <Navbar bg="secondary" variant="dark">
            <Navbar.Brand href="http://www.srilankan.lk">
            SL Airlines
            </Navbar.Brand>
          </Navbar>
        </>
        <br/>
        <ButtonGroup
          vertical
          style={{
            marginLeft: "10px",
            height: "450px"
          }}
        >
          <Button className="btn btn-primary btn-block mt-4">ABOUT</Button>
          <Button className="btn btn-primary btn-block mt-4">CONTACT</Button>
          <Button className="btn btn-primary btn-block mt-4">FAQ</Button>
          <Button className="btn btn-primary btn-block mt-4">POLICIES</Button>
          <Button className="btn btn-primary btn-block mt-4">NOTICES</Button>
          <Button className="btn btn-primary btn-block mt-4">SERVICES</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default BtnGroup;
