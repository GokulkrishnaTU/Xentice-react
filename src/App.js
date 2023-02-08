import { useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import OffcanvasExample from "./Navbar"
import Header from './Header';
import Checkbox from './Checkbox';
import Sublistheader from './Sublistheader';
import Middleimg from './Middleimg';
import Footer from './Footer';
import Commercialshop from './Commercialshop';


function App() {

  async function fourthApi() {
    const Api = "https://api.xentice.com/api/postadSelect";
    let details = await Axios.get(Api);
    console.log("fourth Api", details.data[0].images);
  }
  useEffect(()=>{
    fourthApi()

  },[])
  return (
    <div className="App">
      <OffcanvasExample/>
      <Header/>
      <Checkbox/>
      <Sublistheader/>
      <Middleimg/>
      <Commercialshop/>
      <Commercialshop/>

      <Commercialshop/>

      <Commercialshop/>

      <Footer/>


    </div>
  );
}

export default App;
