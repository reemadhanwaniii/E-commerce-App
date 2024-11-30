import  { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
import UserContext from '../../Context/UserContext';

export function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [token,setToken,removeToken] = useCookies(['jwt-token']);
  const {user,setUser} = useContext(UserContext);
 
  const toggle = () => setIsOpen(!isOpen);

  function logout() {
    removeToken('jwt-token',{httpOnly: true});
    axios.get(`${import.meta.env.VITE_FAKE_STORE_URL}/logout`,{withCredentials: true});
    setUser(null);
  }

  useEffect(()=>{
    console.log(setToken);
    console.log("user ",user);
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
                  // console.log(token);
                  // removeToken('jwt-token');
                  logout();
                }
                } to="/signin">Logout</Link> : <Link to="/signin"> Signin</Link>}
              </DropdownMenu>
            </UncontrolledDropdown>
            {user && <NavbarText>{user.username}</NavbarText>}
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}


//document.cookie : shows ur jwt-token

//