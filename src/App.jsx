
import { useEffect, useState } from 'react';
import './App.css'
import Footer from './Components/Footer/Footer';
import { Header } from './Components/Header/Header'
import MainRoutes from './Routes/MainRoutes';
import UserContext from './Context/UserContext';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import CartContext from './Context/CartContext';
import { fetchUserCart } from './Helper/fetchUserCartHelper';

function App() {
  
  const [user,setUser] = useState(null);
  const [cart,setCart] = useState(null);
  const [token,setToken] = useCookies(['jwt-token']);

  async function accessToken() {
    const res = await axios.get(`${import.meta.env.VITE_FAKE_STORE_URL}/accesstoken`, {withCredentials: true})
    setToken('jwt-token', res.data.token, {httpOnly: true});
    const tokenDetails = jwtDecode(res.data.token);
    setUser({username: tokenDetails.user, id: tokenDetails.id});
  }
  async function load() {
    if(!user) {
      await accessToken();
    }
    if(user) {
      await fetchUserCart(user.id, setCart);
    }
  }


  useEffect(()=>{
    load();
  },[user]);

  return (
    <UserContext.Provider value={{user,setUser}}>
      <CartContext.Provider value={{cart,setCart}}>
        <div className='app-wrapper'>
          <Header 
              color="light" 
              light={true} 
              expand="md" 
              container="md" 
          /> 
            <MainRoutes/>
          <Footer/>
          </div>
      </CartContext.Provider>
    </UserContext.Provider>
    
  );
}

export default App;
