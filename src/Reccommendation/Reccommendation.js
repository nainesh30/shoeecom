import React from 'react'
import "./Reccommendation.css"
const Reccommendation = ({handlebutton}) => {
  return (
    <div className='recomend'>
       <button className="btn" value = ""  onClick={handlebutton}>All Products</button>
       <button className="btn"  value = "Adidas" onClick={handlebutton}>Adidas</button>
       <button className="btn"  value = "Nike" onClick={handlebutton}>Nike</button>
       <button className="btn" value = "Puma"  onClick={handlebutton}>Puma</button>
       <button className="btn" value = "Vans"  onClick={handlebutton}>Vans</button>
    </div>
  )
}

export default Reccommendation