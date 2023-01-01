import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { auth } from "../firebase";

const Navigation = () => {
  const [login, setLogin] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentState) => {
      if (currentState !== null) {
        setLogin(false);
      }
    });
  }, []);

  return (
    <div className="from:bg-header-left to:bg-header-right min-h-[7vh]">
      <Navbar
        className="bg-gradient-to-r from-header-left to-header-right min-h-[7vh] px-4 !shadow-lg"
        expand="md"
        fixed="top"
      >
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="mr-2 border-0 text-white"
        >
          <FaBars size="30" />
        </Navbar.Toggle>
        <Navbar.Collapse className="flex justify-center items-center">
          <Nav className="font-pixel flex lg:w-6/12 w-full justify-center items-center">
            <Nav.Link
              href="/dashboard"
              className="!text-base text-center text-white p-1 mx-2 hover:underline hover:drop-shadow-pink decoration-4 underline-offset-6"
            >
              Dashboard
            </Nav.Link>
            <Nav.Link
              href="/rsvp"
              className="!text-base text-center text-white p-1 mx-2 hover:underline hover:drop-shadow-pink decoration-4 underline-offset-6"
            >
              RSVP
            </Nav.Link>
            <Nav.Link
              href="https://rosehack.com/"
              className="!text-base text-center text-white p-1 mx-2 hover:underline hover:drop-shadow-pink decoration-4 underline-offset-6"
            >
              Rosehack
            </Nav.Link>
            {login && (
              <Nav.Link
                href="/user"
                className="!text-base text-center text-white p-1 mx-2 hover:underline hover:drop-shadow-pink decoration-4 underline-offset-6"
              >
                LOGIN
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
