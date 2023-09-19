import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar
      bg="light"
      style={{
        display: "flex",
        aligntems: "center",
        justifyContent: "center",
        alignContent: "space-evenly",
      }}
    >
      {/* <Navbar.Brand href="/">My Website</Navbar.Brand> */}
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Nav.Link href="/" style={{ padding: 20, fontSize: 22 }}>
        Home
      </Nav.Link>
      <Nav.Link href="/about" style={{ padding: 20, fontSize: 22 }}>
        About
      </Nav.Link>
      <Nav.Link href="/contact" style={{ padding: 20, fontSize: 22 }}>
        Contact
      </Nav.Link>
      <Nav.Link href="/register" style={{ padding: 20, fontSize: 22 }}>
        Register
      </Nav.Link>

      {/* <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        {/* </Nav> */}
      {/* </Navbar.Collapse> */}
    </Navbar>
  );
};
export default Navigation;
