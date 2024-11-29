import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
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
import { useCookies } from 'react-cookie';

export function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [token,setToken,removeToken] = useCookies(['jwt-token']);
 
  const toggle = () => setIsOpen(!isOpen);

  useEffect(()=>{

  },[token]);

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
                {token['jwt-token']? <Link onClick={() => {
                  console.log(token);
                  removeToken('jwt-token');
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


