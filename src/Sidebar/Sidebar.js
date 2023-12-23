import React from 'react'
import "./sidebar.css"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="category">
        <h2>Category</h2>
        <label htmlFor="All Category">
          <input  name ="test" type="radio" /> All Category
        </label>
        <label htmlFor="All Category">
          <input  name ="test" type="radio" />
          Sneakers</label>
        <label htmlFor="All Category">
          <input name ="test"  type="radio" />
          Flats</label>
        <label name ="test"  htmlFor="All Category">
          <input  name ="test" type="radio" />
          Sandal</label>
        <label htmlFor="All Category">
          <input  name ="test" type="radio" />
          heels  </label>
      </div>


    </div>
  )
}

export default Sidebar