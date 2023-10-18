import React from 'react'
import '../Styles/Table.css'

function Table() {
  return (
    <div>
      <div className="head1">
        <h5>Product Sell</h5>
        <input type="text" placeholder="Search.." className="inp" />
        <select name="cars" id="cars">
          <option value="volvo">Last 30 days</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="head2">
        <h6 className="product">Product Name</h6>
        <h6 className="stock">Stock</h6>
        <h6 className="price">Price</h6>
        <h6 className="sales">Total Sales</h6>
      </div>
      <div className="head2">
        <h6 className="product">Abstract 3D</h6>
        <h6 className="stock">32 in stock</h6>
        <h6 className="price">$45.99</h6>
        <h6 className="sales">20</h6>
      </div>
    </div>
  )
}

export default Table
