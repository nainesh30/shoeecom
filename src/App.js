
import './App.css';
import Nav from './Navigation/Nav';
import Reccommendation from "./Reccommendation/Reccommendation"
import Product from "./Product/Product"

function App() {
  return (
    <div className="App"> 
      <Nav/>

      <Reccommendation/>
      <Product/>
    </div>
  );
}

export default App;
