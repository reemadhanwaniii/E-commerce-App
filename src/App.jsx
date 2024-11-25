
import './App.css'
import Footer from './Components/Footer/Footer';
import { Header } from './Components/Header/Header'

function App() {
  
  return (
    <div className='app-wrapper'>
     <Header color="light" light={true} expand="md" container="md" /> 
     <div>
        Some Content
     </div>
     <Footer/>
    </div>
  );
}

export default App;
