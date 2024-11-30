
import { useEffect, useState } from 'react';
import './App.css'
import Footer from './Components/Footer/Footer';
import { Header } from './Components/Header/Header'
import MainRoutes from './Routes/MainRoutes';
import UserContext from './Context/UserContext';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

function App() {
  
  const [user,setUser] = useState(null);
  const [token,setToken] = useCookies(['jwt-token']);

  function accessToken(){
      axios.get(`${import.meta.env.VITE_FAKE_STORE_URL}/accesstoken`,{withCredentials: true})
      .then((res)=>{
        setToken('jwt-token', res.data.token ,{httpOnly: true});
        const tokenDetails = jwtDecode(res.data.token);
        setUser({username: tokenDetails.user,id: tokenDetails.id});
      });
  }

  useEffect(()=>{
    accessToken();
  },[]);

  return (
    <UserContext.Provider value={{user,setUser}}>
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
    </UserContext.Provider>
    
  );
}

export default App;
