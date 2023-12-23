
import './App.css';
import Nav from './Navigation/Nav';
import Reccommendation from "./Reccommendation/Reccommendation"
import Product from "./Product/Product"
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App"> 
      <Nav/>
      <Sidebar/>
      <Reccommendation/>
      <Product/>
    </div>
  );
}

export default App;
