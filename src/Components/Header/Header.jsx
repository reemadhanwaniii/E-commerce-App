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
  const token = Cookies.get('jwt-token');
 
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
                {token? <Link onClick={() => Cookies.remove('jwt-token')} to="/signin">Logout</Link> : <Link to="/signin"> Signin</Link>}
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavbarText>Username</NavbarText>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}


//Line 43 when we are removing token it doesn't show signin option immediately when we refresh it then it shows signin 
// it happens beacuse nav component doesn't re-render immediately or it is normal variable so it doesn't re-render

