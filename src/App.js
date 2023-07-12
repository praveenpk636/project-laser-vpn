import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Features from './components/Features';
import Plan from './components/Plan';
import Network from './components/Network';
import Map from './components/Map';
import Customer from './components/Customer';


function App() {
  return (
   <>
   
   <Navbar/>
   <Banner/>
   <Features/>
   <Plan/>
   {/* <Network/> */}
   <Map/>
   <Customer/>
   
   </>
   
  );
}

export default App;
