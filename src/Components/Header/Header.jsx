import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Cookies from 'js-cookie';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

export function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [token,settoken] = useState(Cookies.get('jwt-token'));
 
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...props}>
        <NavbarBrand  id="title">
          <Link to="/">
            Shop Cart
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <UncontrolledDropdown nav inNavbar style={{marginRight:'2rem'}}>
              <DropdownToggle nav caret>
                Account
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Cart</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem divider />
                {token? <Link onClick={() => {
                  Cookies.remove('jwt-token')
                  settoken(undefined);
                }
                } to="/signin">Logout</Link> : <Link to="/signin"> Signin</Link>}
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavbarText>Username</NavbarText>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

/**
 * when we sign in changes will not render immediately we need to refresh it because token state is local to header we need to
 * propagate it to parent somehow
 */

