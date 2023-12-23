import React from 'react'
import "./Product.css"
import Card from '../Components/Card';
import data from "../db/data"
const Product = () => {
  return (
    <div className='card-container'>
  {    data.map(
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
   
    </div>
  )
}

export default Product