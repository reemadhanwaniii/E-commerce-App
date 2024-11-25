
import './App.css'
import Footer from './Components/Footer/Footer';
import { Header } from './Components/Header/Header'
import Home from './Pages/Home/Home';
import MainRoutes from './Routes/MainRoutes';

function App() {
  
  return (
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
  );
}

export default App;
