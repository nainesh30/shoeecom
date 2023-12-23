import React from 'react'
import { FaStar } from "react-icons/fa";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <div className="card">
        <img src={img} alt="Shoe" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <div className="card-review">
           {star}{star}{star}{star}{star}
          </div>
          <div className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>

          <div className="addbag">
          <FaStar />  
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card