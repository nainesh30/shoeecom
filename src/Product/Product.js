import React from 'react'
import { FaStar } from "react-icons/fa";

const Product = () => {
  return (
    <div className='card-container'>
      <div className="card">
        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Shoe" />
        <section className="card-details">
          <h3 className="card-title">Nike Air Monarch IV</h3>
          <section className="card-review">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />  
          </section>
          <section className="card-price">
            <del>$1200</del> 200
          </section>
        </section>
      </div>
      
    </div>
  )
}

export default Product