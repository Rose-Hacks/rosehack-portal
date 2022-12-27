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
              href="https://rosehack.com/"
              className="!text-base text-center text-white p-1 mx-2 hover:underline hover:drop-shadow-pink decoration-4 underline-offset-6"
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="https://rosehack.com/#about"
              className="!text-base text-center text-white p-1 mx-2 hover:underline hover:drop-shadow-blue decoration-4 underline-offset-6"
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              href="https://rosehack.com/#sponsors"
              className="!text-base text-center text-white p-1 mx-2 hover:underline hover:drop-shadow-pink decoration-4 underline-offset-6"
            >
              SPONSORS
            </Nav.Link>
            <Nav.Link
              href="https://rosehack.com/#board"
              className="!text-base text-center text-white p-1 mx-2 hover:underline hover:drop-shadow-blue decoration-4 underline-offset-6"
            >
              TEAM
            </Nav.Link>
            <Nav.Link
              href="https://rosehack.com/#faq"
              className="!text-base text-center text-white p-1 mx-2 hover:underline hover:drop-shadow-pink decoration-4 underline-offset-6"
            >
              FAQ
            </Nav.Link>
            <Nav.Link
              href="https://rosehack.com/register"
              className="!text-base text-center text-white p-1 mx-2 hover:underline hover:drop-shadow-blue decoration-4 underline-offset-6"
            >
              REGISTER
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
