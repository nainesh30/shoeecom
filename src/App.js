
import './App.css';
import Nav from './Navigation/Nav';
import Reccommendation from "./Reccommendation/Reccommendation"
import Product from "./Product/Product"
import Sidebar from './Sidebar/Sidebar';
import { useState, useTransition } from 'react';
import data from "./db/data"
import Card from './Components/Card';

function App() {





  // category

  const [SelectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("")

let filteredItems = data.filter(product =>product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())
!== -1) 
 
  const handleinputchange = (e)=>{
    setQuery(e.target.value)
  
  }

  const handlebutton = (e)=>{
 setSelectedCategory(e.target.value)
  }

  const filterProduct =(data,selected,query)=>{
    let filteredProducts = data;

    if (query){
      filteredProducts = filteredItems
    }
    if (selected){
      filteredProducts = filteredProducts.filter(({category,company,color,title})=> category === selected.toLocaleLowerCase() || company === selected)
    }

    return filteredProducts.map(
        ({ img, title, star, reviews, prevPrice, newPrice }) => (
          <Card
            key={Math.random()}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
          />
        )
      )
        
     

  }
  const result = filterProduct(data,SelectedCategory,query)

  return (
    <div className="App"> 
      <Nav query={query} handleinputchange = {handleinputchange}/>
      <Sidebar handlebutton = {handlebutton}/>
      <Reccommendation handlebutton = {handlebutton}/>
      <Product result = {result}/>
    </div>
  );
}

export default App;
