import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function Header() {
  const [{ user }] = useStateValue();
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();

  const toggle = () => setIsOpen(!isOpen);

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
      history.push("/");
    }
  };

  return (
    <>
      <Navbar style={{ width: "100%" }} color="light" light expand="md">
        <NavbarBrand href="/">Budget App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            {user ? (
              <>
                <NavItem>
                  <NavLink href="/app">App</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {user.email}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="/app">Add Expense</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={handleAuthenticaton}>
                      Signout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </>
            ) : (
              <Link to="/login">
                <NavbarText>Signin</NavbarText>
              </Link>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;
