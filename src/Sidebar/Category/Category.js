import React from 'react'

const Category = ({category,handlebutton, value}) => {
  return (
    <label htmlFor="All Category">
    <input  name ="test" type="radio" onChange={handlebutton} value = {value} /> {category}
  </label>
  )
}

export default Category