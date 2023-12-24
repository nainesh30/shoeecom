import React from 'react'
import "./sidebar.css"
import Category from './Category/Category'
const Sidebar = ({handlebutton}) => {
  return (
    <div className='sidebar'>
      <div className="category sidebar-labels">
        <h2>Category</h2>
      <Category  handlebutton={handlebutton} value = ""  category={"All Category"}/>
      <Category handlebutton={handlebutton}  value = "Sneakers" category={"Sneakers"}/>
      <Category handlebutton={handlebutton} value = "sandals"  category={"Flats"}/>
      <Category handlebutton={handlebutton}  value = "flats" category={"Sandals"}/>
      <Category handlebutton= {handlebutton} value = "Heels" category={"Heels"}/>
      </div>
      {/* <div className="Price sidebar-labels">
        <h2>Price</h2>
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
      <div className="Color sidebar-labels">
        <h2>Colour</h2>
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
      </div> */}


    </div>
  )
}

export default Sidebar